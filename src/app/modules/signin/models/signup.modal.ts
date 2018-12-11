import { GenderType } from 'src/app/shared_kernel/enums/gender.type';

export class SignupModel {
  public FirstName: string;
  public LastName: string;
  public Email: string;
  public Password: string;
  public ConfirmPassword: string;
  public Gender: GenderType;
}
