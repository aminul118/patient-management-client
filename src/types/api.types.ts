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

export interface IGdm {
  _id: string;
  // Step 1
  patientId: string;
  name: string;
  age: string;
  maritalStatus: 'married' | 'unmarried';
  height: string;
  weight: string;
  occupation: string;
  familyIncome: string;
  address: string;
  phone: string;
  emergencyContact: string;

  // Step 2
  diabetesKnownSince?: 'before_pregnancy' | 'during_pregnancy' | 'custom';
  diabetesDuration?: string;
  insulin?: 'yes' | 'no';
  comorbidity?: string;

  deliveryTimeInWeek?: string;
  deliveryType?: 'normal' | 'c-section';
  babyWeight?: string;
  BabyNICUNeed?: 'yes' | 'no';
  sugarLevel2to3DayAfterDelivery?: string;

  // OGTT at 6 weeks
  ogttDoneAt6Weeks?: 'yes' | 'no';
  ogttFastingValue?: string;
  ogtt2HourValue?: string;

  createdAt: Date;
  updatedAt: Date;
}
