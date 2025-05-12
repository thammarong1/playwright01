import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment
import { test, expect } from "@playwright/test";
import { helperBase } from "../../../helpers/UI/helperBase";
import { loginToLine } from "../../../pagesObject/lineLoginPage/lineLogin";
import {homePage} from "../../../pagesObject/homePage/homePage";;


test.describe('Landing to homePage', () => {
    test('Landing to homePage', async ({ page }) => {
        const HelperBase = new helperBase(page);
        const HomePage = new homePage(page);

        await HomePage.gotoLandingHomePage();
        await HomePage.homePageDisplayLottery();
        await HelperBase.waitForSeconds(1);
    });
});

test.describe('Landing to Top-Up Page', () => {
    test('Landing to Top-Up Page', async ({ page }) => {
        const HelperBase = new helperBase(page);
        const LoginToLine = new loginToLine(page);
        const HomePage = new homePage(page);

        await HomePage.gotoLandingHomePage();
        await HelperBase.waitForSeconds(1);
        await HomePage.homePageDisplayLottery();
        await HelperBase.waitForSeconds(1);
        await HomePage.clickMenu_TopUp();
        await HelperBase.waitForSeconds(1);
        await HomePage.clickMenu_TopUpConfirm();
        await HelperBase.waitForSeconds(1);

        // สเต็ป line login
        await LoginToLine.displayLogoLine();
        const captchaText = await LoginToLine.readCaptcha();
        await LoginToLine.readCaptcha();
        await HelperBase.waitForSeconds(1);
        await LoginToLine.inputEmail(process.env.LINE_EMAIL || '');
        await LoginToLine.inputPassword (process.env.LINE_PASSWORD || '');
        await LoginToLine.inputCaptchaText (captchaText);
        await HelperBase.waitForSeconds(1);
        await LoginToLine.clickLoginButton();
        //await HelperBase.waitForSeconds(30);

    });
});




