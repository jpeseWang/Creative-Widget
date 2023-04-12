export class UserProfileModel {

  id?: string;
  email!: string;
  role!: string;

  userAvatarUrl?: string;
  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
