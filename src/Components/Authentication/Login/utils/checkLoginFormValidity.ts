import { InitialLoginFormState } from "./Formtype";

type CheckLoginFormValidity = {
  formData: InitialLoginFormState;
  setFormData: React.Dispatch<React.SetStateAction<InitialLoginFormState>>;
};

export const checkLoginFormValidity = ({
  formData,
  setFormData,
}: CheckLoginFormValidity) => {
  setFormData((formData) => ({
    ...formData,
    emailError: "",
    passwordError: "",
  }));

  let error = true;
  if (formData.email === "" || !/^.+@.+\.com$/.test(formData.email)) {
    setFormData((formData) => ({
      ...formData,
      emailError: "Please enter a valid Email",
    }));
    error = false;
  }
  if (formData.password === "") {
    setFormData((formData) => ({
      ...formData,
      passwordError: "Please enter password",
    }));
    error = false;
  }

  return error;
};
