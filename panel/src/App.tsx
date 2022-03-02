import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router";
import { DataProvider } from "@pankod/refine-strapi-v4";
import strapiAuthProvider from "./authProvider";

import {
  notificationProvider,
  LoginPage,
  Layout,
  ErrorComponent,
} from "@pankod/refine-antd";

import "@pankod/refine-antd/dist/styles.min.css";

import { AnalizList, AnalizShow, AnalizEdit,AnalizCreate } from "./pages/analiz";
function App() {
  // const API_URL = "your-strapi-api-url";
  const API_URL = "http://localhost:1337";

  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
  const dataProvider = DataProvider(API_URL + "/api", axiosInstance);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      authProvider={authProvider}
      resources={[
        {
          name: "analizs",
          list: AnalizList,
          show: AnalizShow,
          edit: AnalizEdit,
          create: AnalizCreate,
        },
      ]}
      notificationProvider={notificationProvider}
      LoginPage={LoginPage}
      Layout={Layout}
      catchAll={<ErrorComponent />}
    />
  );
}

export default App;