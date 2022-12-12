import axios from "axios";
import queryString from "query-string";
import { BASE_URL } from "../Constants/constant";

export default function request({
  path,
  baseUrl,
  params,
  data,
  headers,
  method,
}) {
  const url = params ? path + "?" + queryString.stringify(params) : path;
  const token = localStorage.getItem("access-token");
  console.log({ token });
  return new Promise((resolve, reject) => {
    axios
      .request({
        url,
        baseURL: baseUrl || BASE_URL.prod,
        method,
        data,
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          ...(token && { "access-token": token }),
          ...headers,
        },
      })
      .then((res) => {
        console.log("res", res);
        // resolve(res.data);
      })
      .catch((res) => {
        console.log("err", res);
        // reject(res);
      });
  });
}
