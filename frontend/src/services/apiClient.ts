import axios from "axios";
import config from "./config";

const errorHandler = (error: any) => {
  console.log("API ERROR::::::", JSON.stringify(error));
  return Promise.reject(error);
};

const responseHandler = (response: any) => {
  console.log("API RESPONSE::::::", response);
  return response;
};

export function createApiClient(baseURL: string | undefined) {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (response: any) => {
      return responseHandler(response);
    },
    (error: any) => {
      return errorHandler(error);
    }
  );

  instance.interceptors.request.use((request: any) => {
    console.log("API REQUEST::::::", request);
    return request;
  });

  return instance;
}

const apiClient = createApiClient(config.ApiUrl);

export default apiClient;
