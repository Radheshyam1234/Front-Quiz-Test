import { checkSignUpFormValidity } from "./checkSignUpFormValidity";
import { formType, errorType } from "../utils/FormType";
import { signupUserParam } from "../../../../Context/AuthenticationContext/AuthContextType";
type SubmitSignUpForm = {
  formData: formType;
  setError: React.Dispatch<React.SetStateAction<errorType>>;
  signupNewUser: (parameters: signupUserParam) => Promise<void>;
};

export const submitSignUpForm = ({
  formData,
  setError,
  signupNewUser,
}: SubmitSignUpForm) => {
  setError({
    fnameError: "",
    lnameError: "",
    emailError: "",
    passwordError: "",
  });

  if (checkSignUpFormValidity({ formData, setError })) {
    const signUpDetails = {
      firstName: formData.fname,
      lastName: formData.lname,

      email: formData.email,
      password: formData.password,
    };
    signupNewUser(signUpDetails);
  }
};
