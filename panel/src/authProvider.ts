import { AuthProvider } from "@pankod/refine-core";
// import { AuthHelper } from "@pankod/refine-strapi-v4";
import axios from "axios";


declare module ILoginResponse {

  interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  interface RootObject {
    jwt: string;
    user: User;
  }

}



declare module IMeResonse {
  export interface Role {
    id: number;
    name: string;
    description: string;
    code: string;
  }
  export interface RootObject {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

}

export const AuthHelper = (apiUrl: string) => ({
  login: async (identifier: string, password: string) => {
    // const url = `${apiUrl}/admin/login`;
    const url = `${apiUrl}/api/auth/local`;

    return await axios.post<ILoginResponse.RootObject>(url, {
      identifier,
      password,
    });
  },
  me: async (token: string) => {
    return await axios.get<IMeResonse.RootObject>(`${apiUrl}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
});

const strapiAuthProvider = (apiUrl: string) => {
  const axiosInstance = axios.create();

  const TOKEN_KEY = "refine-auth";
  const strapiAuthHelper = AuthHelper(apiUrl);

  const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
      const { data, status } = await strapiAuthHelper.login(username, password);
      if (status === 200) {
        localStorage.setItem(TOKEN_KEY, data.jwt);

        // set header axios instance
        axiosInstance.defaults.headers = {
          Authorization: `Bearer ${data.jwt}`,
        };

        return Promise.resolve;
      }
      return Promise.reject;
    },
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        axiosInstance.defaults.headers = {
          Authorization: `Bearer ${token}`,
        };
        return Promise.resolve();
      }

      return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        return Promise.reject();
      }

      const { data, status } = await strapiAuthHelper.me(token);
      if (status === 200) {
        const { id, username, email } = data;
        return Promise.resolve({
          id,
          username,
          email,
        });
      }

      return Promise.reject();
    },
  };

  return {
    authProvider,
    axiosInstance,
  };
};

export default strapiAuthProvider;
