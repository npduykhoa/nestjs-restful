import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Name không được để trống' }) //customize message
  name: string;

  @IsNotEmpty({ message: 'Address không được để trống' }) //customize message
  address: string;

  description: string;
}
