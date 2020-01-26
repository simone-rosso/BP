import axios from "axios";
import Qs from "qs";
import EnvConfig from "./env_config";

const source = axios.CancelToken.source();

const instance = axios.create({
  baseURL: EnvConfig.api,
  cancelToken: source.token
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (config.method == "get") {
      config.params = { ...config.params, page: { size: 5, number: 20 } };
      config.paramsSerializer = function (params: any) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response: any) {
    // Do something with response data
    let location = response.config != null ? response.config.url.split("/") : [];
    let formated = {
      ...response.data,
      location: location[location.length - 1]
    };
    return formated;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
