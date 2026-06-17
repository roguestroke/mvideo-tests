import { request } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(".env") });

export const envs = {
  BASE_URL: process.env.BASE_URL!,
  ALLURE_RESULTS_FOLDER: process.env.ALLURE_RESULTS_FOLDER ?? "allure-results",
};

export const getDefaultAPIContext = async () => {
  return await request.newContext({
    baseURL: envs.BASE_URL,
  });
};
