import { request } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(".env") });

export const envs = {
  BASE_URL: process.env.BASE_URL || "https://restful-booker.herokuapp.com",
  ALLURE_RESULTS_FOLDER: process.env.ALLURE_RESULTS_FOLDER ?? "allure-results",
};

export const getDefaultAPIContext = async () => {
  if (process.env.CI) {
    console.log(`[CI] Creating API context with baseURL: ${envs.BASE_URL}`);
  }

  return await request.newContext({
    baseURL: envs.BASE_URL,
  });
};
