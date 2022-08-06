import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Box,
  Img,
  FormControl,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Button,
  Input,
  Divider,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  inputWrapperStyle,
  formWrapperStyle,
  inputStyle,
  inputRightElementIconStyle,
} from "../AuthStyle";
import { checkLoginFormValidity } from "./utils/checkLoginFormValidity";
import { useAuthProvider } from "../../../Context/AuthenticationContext/AuthProvider";

type LocationState = {
  from: {
    pathname: string;
  };
};

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, loginUser, signupNewUser } = useAuthProvider();
  const [showPassword, setShowPassword] = useState(false);
  const locationState = location.state as LocationState;
  let from = locationState?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    status: "",
    backendError: "",
  });

  const guestLogin = () => {
    setFormData({
      ...formData,
      email: "testuser@gmail.com",
      password: "user",
    });
  };

  const loginHandler = () => {
    if (checkLoginFormValidity({ formData, setFormData })) {
      const email = formData.email;
      const password = formData.password;
      loginUser({ email, password });
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  return (
    <Box {...formWrapperStyle} p="8">
      <FormControl
        id="email"
        isRequired
        {...inputWrapperStyle}
        isInvalid={!!formData.emailError}
      >
        <Box>
          <Input
            {...inputStyle}
            type="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </Box>
        <FormErrorMessage>{formData.emailError}</FormErrorMessage>
      </FormControl>

      <Box>
        <FormControl
          id="password"
          isRequired
          {...inputWrapperStyle}
          isInvalid={!!formData.passwordError}
        >
          <Box>
            <InputGroup>
              <Input
                {...inputStyle}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
              <InputRightElement
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                children={
                  showPassword ? (
                    <ViewIcon {...inputRightElementIconStyle} />
                  ) : (
                    <ViewOffIcon {...inputRightElementIconStyle} />
                  )
                }
              />
            </InputGroup>
          </Box>
          <FormErrorMessage>{formData.passwordError}</FormErrorMessage>
        </FormControl>
      </Box>

      <Button variant="blockOutline" mt="8" onClick={guestLogin}>
        Guest User
      </Button>
      <Button variant="blockPrimary" mt="4" onClick={loginHandler}>
        Login
      </Button>
      <Divider />
      <Box mt="8" textAlign="center">
        Don't have an account?{" "}
        <Link to="/signup">
          <Text as="span" color="primary.600" fontWeight="bold">
            Sign Up
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
