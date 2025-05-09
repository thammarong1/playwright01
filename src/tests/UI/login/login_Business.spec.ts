import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment
import { test, expect } from "@playwright/test";
import { HelperBase } from "../../../helpers/UI/helperBase";
import { loginToHomePage } from "../../../pagesObject/login/login";
import {homePage} from "../../../pagesObject/homePage/homePage";

test.describe('Landing to Home Page', () => {
    test('-------', async ({ page }) => {
       /////
    });
});







