import { Page, expect } from "@playwright/test";
import { basePage } from "../../helpers/UI/basePage";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment



export class homePage extends basePage {
  constructor(page: Page) {
    super(page); // ดึง page จาก BasePage
  }

  //** Step */
  async gotoLandingHomePage() {
    await this.page.goto(`${process.env.URL_HomePage}`)
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'profile-image' }).click({ force: true });
  }

  async homePageDisplayLottery() {
    // popup confirm (บางครั้งเจอเมื่อเข้าสู่หน้า home page)
    const confirmButton = this.page.getByTestId('dialog-modal-confirm-button') // button popup confirm
    if (await confirmButton.isVisible({ timeout: 3000 })) {
      await confirmButton.click()
      console.log('popUp homePage แสดง ทำการปิดเรียบร้อย')
    } else {
      console.log('ไม่มี popUp homePage แสดง')
    }

    await this.page.getByTestId('desktop-navbar').getByRole('link', { name: 'lotteryplus' }).waitFor({ state: 'visible', timeout: 3000 }); // banner ลอตเตอรี่พลัส

  }

  async clickMenu_TopUp() {
    await this.page.getByTestId('nok-more-nok-cash-icon').click({ force: true });
  }

  async clickMenu_TopUpConfirm() {
    await this.page.getByTestId('option-modal-confirm-button').click({ force: true });
  }

}
