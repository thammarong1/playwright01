import { Page, expect } from "@playwright/test";
import { basePage } from "../../helpers/UI/basePage";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment

export class beforeSale extends basePage {
  constructor(page: Page) {
    super(page); // ดึง page จาก BasePage
  }

  //** Step */
  async displayBeforeSalePage() {
    await this.page.waitForSelector('iframe', { state: 'visible' });
     // เลื่อน iframe ให้มาที่มุมมองของหน้าจอ
  }

}
