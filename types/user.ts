import { UserSkill, UserEducation } from ".";
import { AuthToken, Picture } from "./auth";

export type UserProfile = {
  name: string;
  surname: string;
  email: string;
  profilePicture: Picture;
  bio: string;
  country: string;
  region: string;
  city: string;
  address: string;
  birthdate?: Date;
  skills: UserSkill[];
  education: UserEducation[];
  title: string;
  level: UserLevel;
  reviews: Review[];
  isAvailable: boolean;
  notAvailableUntil?: Date;
};
export type Review = {
  value: 1 | 2 | 3 | 4 | 5;
  reviewer: User;
  description?: string;
};
export type User = {
  _id: string;
  phoneNumber: number;
  profile: UserProfile;
  authToken: AuthToken;
  isVerified: boolean;
  isPremiumMember: boolean;
  role: UserRole | UserRole[];
};
export enum UserLevel {
  "NEWBIE",
  "BEGINNER",
  "INTERMEDIATE",
  "EXPERT",
  "ELITE",
}
export enum UserRole {
  "CUSTOMER",
  "FREELANCER",
  "TEAM_MANAGER",
  "PROJECT_MANAGER",
  "RECRUITER",
}
