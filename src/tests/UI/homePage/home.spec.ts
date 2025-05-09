import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment
import { test, expect } from "@playwright/test";
import { helperBase } from "../../../helpers/UI/helperBase";
import { loginToHomePage } from "../../../pagesObject/login/login";
import {homePage} from "../../../pagesObject/homePage/homePage";

test.describe('Landing to Top-Up Page', () => {
    test('Landing to Top-Up Page while login success', async ({ page }) => {
        const HelperBase = new helperBase(page);
        const LoginToHomePage = new loginToHomePage(page);
        const HomePage = new homePage(page);

        await LoginToHomePage.gotoLandingPage();
        await HomePage.homePageDisplayLottery();
        await HomePage.clickMenu_TopUp();
        await HomePage.clickMenu_TopUpConfirm();
        await HelperBase.waitForSeconds(30);
        // await LoginToHomePage.inputUsername(process.env.LOGIN_USERNAME || '');
        // await LoginToHomePage.inputPassword(process.env.LOGIN_PASSWORD || '');
        // await helperBase.waitForSeconds(1);
        // await LoginToHomePage.clickLoginButton();
        // await HomePage.homePageDisplayCalendar();
        // await helperBase.waitForSeconds(3);
    });
});




