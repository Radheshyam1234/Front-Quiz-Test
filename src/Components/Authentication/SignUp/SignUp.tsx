import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  FormControl,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Button,
  Input,
  Divider,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  inputWrapperStyle,
  formWrapperStyle,
  inputStyle,
  inputRightElementIconStyle,
} from "../AuthStyle";

import { formType, errorType } from "./utils/FormType";
import { submitSignUpForm } from "./utils";
import { useAuthProvider } from "../../../Context/AuthenticationContext/AuthProvider";

type LocationState = {
  from: {
    pathname: string;
  };
};

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationState;
  let from = locationState?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const { signupNewUser, token } = useAuthProvider();

  const [formData, setFormData] = useState<formType>({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<errorType>({
    fnameError: "",
    lnameError: "",
    emailError: "",
    passwordError: "",
  });

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <Box p="20">
      <Box {...formWrapperStyle}>
        <Box>
          <FormControl
            id="fname"
            isRequired
            {...inputWrapperStyle}
            isInvalid={!!error.fnameError}
          >
            <Box>
              <Input
                {...inputStyle}
                type="text"
                placeholder="Enter first name"
                value={formData.fname}
                onChange={(e) => {
                  setFormData({ ...formData, fname: e.target.value });
                }}
              />
            </Box>
            {error.fnameError && (
              <FormErrorMessage>{error.fnameError}</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Box>
          <FormControl
            id="lname"
            isRequired
            {...inputWrapperStyle}
            isInvalid={!!error.lnameError}
          >
            <Box>
              <Input
                {...inputStyle}
                type="text"
                placeholder="Enterlast name"
                value={formData.lname}
                onChange={(e) => {
                  setFormData({ ...formData, lname: e.target.value });
                }}
              />
            </Box>
            {error.lnameError && (
              <FormErrorMessage>{error.lnameError}</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Box>
          <FormControl
            id="email"
            isRequired
            {...inputWrapperStyle}
            isInvalid={!!error.emailError}
          >
            <Box>
              <Input
                {...inputStyle}
                type="email"
                placeholder="abc@abc.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </Box>
            {error.emailError && (
              <FormErrorMessage>{error.emailError}</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Box>
          <FormControl
            id="password"
            isRequired
            {...inputWrapperStyle}
            isInvalid={!!error.passwordError}
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
            {error.passwordError && (
              <FormErrorMessage>{error.passwordError}</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Button
          variant="blockPrimary"
          mt="4"
          onClick={() => {
            submitSignUpForm({ formData, setError, signupNewUser });
          }}
        >
          Sign Up
        </Button>
        <DividerWithTextOverlay />
        <Box mt="8" textAlign="center">
          Already have an account?{" "}
          <Link to="/login">
            <Text as="span" color="primary.600" fontWeight="bold">
              Login
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export const DividerWithTextOverlay = () => {
  return (
    <Box position="relative">
      <Divider mt="2rem" borderColor="secondary.500" />
      <Text
        fontSize="0.8rem"
        color="gray.500"
        position="absolute"
        top="-1.25rem"
        left="calc(50% - 1.6875rem)"
        bg="white"
        p="0.5rem 1rem"
      >
        OR
      </Text>
    </Box>
  );
};
