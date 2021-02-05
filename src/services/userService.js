import http from "./http";
import { apiEndpoint } from "../config.json";
const apiUrl = "/users";
const url = apiEndpoint + apiUrl;
export function register(user) {
  console.log("apiUrl", apiEndpoint, url);
  return http.post(url, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
