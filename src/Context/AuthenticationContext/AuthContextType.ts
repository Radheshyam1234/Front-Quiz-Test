export type UserDetails = {
  firstName: string;
  lastName: string;
  email: string;
};
// export type AuthInitialState = {
//   token: string;
//   userDetails: null | UserDetails;
// };

export type AuthContextType = {
  token: string;
  userDetails: UserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  loginUser: ({ email, password }: loginUserParam) => Promise<void>;
  signupNewUser: (parameters: signupUserParam) => Promise<void>;
  getUserProfile: () => Promise<void>;
  logoutUser: () => void;
};

export type loginUserParam = {
  email: string;
  password: string;
};

export type signupUserParam = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
