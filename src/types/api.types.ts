export interface ILogin {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: string;
  picture?: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  auths: Auth[];
  createdAt: string;
  updatedAt: string;
}

export interface Auth {
  provider: string;
  providerId: string;
}

export interface IBlog {
  _id?: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
}

export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IBanner {
  _id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  photo: string;
  buttonText: string;
}
