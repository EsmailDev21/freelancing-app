import { TextObject, UserEducation, UserSkill } from ".";
import useTranslator from "../hooks/useTranslator";
import { strings } from "../utils/strings";

export type SignInDTO = {
  phoneNumber: number;
  password: string;
};

export type SignUpDTO = {
  phoneNumber: number;
};

export type PhoneVerificationUserCode = {
  code: string;
};

export type PhoneVerificationCode = PhoneVerificationUserCode;

export type Picture = {
  uri: string;
  type?: "ANIMATED" | "STATIC";
};
export type StrictCompleteSignupDTO = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: Picture;
  bio: string;
  country: string;
  region: string;
  city: string;
  address: string;
  skills: UserSkill[];
  education: UserEducation[];
  title: string;
};

export type CompleteSignupDTO= Partial<StrictCompleteSignupDTO>;

export type AuthToken = {
    accessToken:string,
    refreshToken?:string
    validity?:Date
}
export type AppError = Omit<Error, "message" | "cause">;

export type AppErrorWithMessageAndCause = AppError & { message?: TextObject,cause?:TextObject };

export class AuthError {
  error: AppErrorWithMessageAndCause;
  constructor(cause?:TextObject) {
    this.error = {
      name: "Auth Error",
      message: {
        ar: "خطأ فشل عملية تسجيل الدخول",
        en: "Error, failed to authenticate",
        fr: "Erreur d'authentification",
      },
      cause
    };
  }
}

export class SignupError extends AuthError {
  constructor(cause?:TextObject) {
    super();
    this.error = {
      name: "Signup Error",
      message: {
        ar: "خطأ فشل عملية التسجيل",
        en: "Error, failed to sign up",
        fr: "Erreur de création du compte",
      },
      cause
    };
  }
}

export class SigninError extends AuthError {
  constructor(cause?:TextObject) {
    super();
    this.error = {
      name: "Signin Error",
      cause
    };
  }
}

