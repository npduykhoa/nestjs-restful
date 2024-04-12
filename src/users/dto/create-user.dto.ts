import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng' }) //customize message
  @IsNotEmpty() //default message
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' }) //customize message
  password: string;

  name: string;
  address: string;
}
