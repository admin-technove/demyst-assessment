/**
 * To ensure the code is extendable for multiple services.
 * Each API Client should implment this class
 */

import axios, { AxiosInstance } from "axios";
import { Config } from "./Config";
import { BalanceSheet } from "@demyst-assessment/common";

export abstract class ApiClient {
    protected axiosInstance: AxiosInstance;

    constructor(config: Config) {
      this.axiosInstance = axios.create({
        baseURL: config.apiUrl,
      });
    }
    abstract fetchBalanceSheet(): Promise<BalanceSheet>;

}