import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import mongoose from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
  ) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  async register(user: RegisterUserDto) {
    //Check email exists
    if (await this.userModel.findOne({ email: user.email })) {
      throw new BadRequestException(`Email ${user.email} already exists`);
    }
    const hassPassword = this.getHashPassword(user.password);
    const newRegister = await this.userModel.create({
      email: user.email,
      password: hassPassword,
      name: user.name,
      age: user.age,
      address: user.address,
      gender: user.gender,
      role: 'USER',
    });
    return newRegister;
  }

  async create(createUserDto: CreateUserDto, user: IUser) {
    if (await this.userModel.findOne({ email: createUserDto.email })) {
      throw new BadRequestException(
        `Email ${createUserDto.email} already exists`,
      );
    }
    const hassPassword = this.getHashPassword(createUserDto.password);
    const newUser = await this.userModel.create({
      email: createUserDto.email,
      password: hassPassword,
      name: createUserDto.name,
      age: createUserDto.age,
      address: createUserDto.address,
      gender: createUserDto.gender,
      role: createUserDto.role,
      company: createUserDto.company,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });

    return { _id: newUser._id, createdAt: newUser.createdAt };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.page;
    delete filter.limit;

    const skip = (currentPage - 1) * limit;
    const defaultLimit = limit || 10;
    const totalItems = await this.userModel.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .limit(defaultLimit)
      .skip(skip)
      .sort(sort as any)
      .select('-password')
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Not found user';
    }
    return this.userModel.findOne({ _id: id }).select('-password');
  }

  findOneByUsername(username: string) {
    return this.userModel.findOne({ email: username });
  }

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async update(updateUserDto: UpdateUserDto, user: IUser) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(id: string, user: IUser) {
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.userModel.softDelete({ _id: id });
  }
}
