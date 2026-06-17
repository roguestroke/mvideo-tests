import { APIRequestContext, APIResponse } from "@playwright/test";
import { test } from "allure-playwright";
import { APIClient } from "./client";
import { APIRoutes } from "../utils/constants/routes";
import { getDefaultAPIContext } from "../utils/default-context";

class AuthAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}
  
 async getAuthTokenApi(): Promise<APIResponse> {

  const defaultAuthUser = {
    username: "admin",
    password: "password123",
  };

  return await test.step(`Getting token`, async () => {
    return await this.context.post(APIRoutes.Auth, {
      data: {
        username: defaultAuthUser.username,
        password: defaultAuthUser.password,
      },
    });
  });
}
}

export const getAuthAPIClient = async (): Promise<AuthAPIClient> => {
  const defaultContext = await getDefaultAPIContext();
  return new AuthAPIClient(defaultContext);
};

