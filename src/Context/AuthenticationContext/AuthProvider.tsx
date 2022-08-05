import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AuthContextType,
  loginUserParam,
  signupUserParam,
  UserDetails,
} from "./AuthContextType";
import { API_URL } from "../../utilities/constants";

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const loginUser = async ({ email, password }: loginUserParam) => {
    try {
      const {
        data: { response },
        status,
      } = await axios({
        method: "POST",
        url: `${API_URL}/users/authenticate`,
        data: {
          email,
          password,
        },
      });

      if (status == 200 || 201) {
        localStorage.setItem("token", response.token);
        setUserDetails(response.user);
        setToken(response.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signupNewUser = async ({
    email,
    password,
    firstName,
    lastName,
  }: signupUserParam) => {
    try {
      const {
        data: { response },
        status,
      } = await axios({
        method: "post",
        url: `${API_URL}/users`,
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      });
      if (status == 200 || 201) {
        // localStorage.setItem("token", token);
        setToken(response.token);
        setUserDetails(response.NewUser);
        console.log(response.NewUser, response.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const {
        data: { response },
        status,
      } = await axios.get(`${API_URL}/users/myprofile`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });

      if (status === 200) {
        setUserDetails(response.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    setToken("");
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userDetails,
        setUserDetails,
        loginUser,
        signupNewUser,
        getUserProfile,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
