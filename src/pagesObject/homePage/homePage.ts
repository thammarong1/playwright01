import { Page, expect } from "@playwright/test";
import { basePage } from "../../helpers/UI/basePage";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment

/**
 * getByRole('button', { name: 'Toggle navigation' })
 * getByText('ระบบงาน')
 * getByText('agent')
 */

export class homePage extends basePage {
  constructor(page: Page) {
    super(page); // ดึง page จาก BasePage
  }

  //** Step */
  async homePageDisplayLottery() {
    await this.page.getByTestId('series-lottery-lists-title').waitFor({ state: 'visible', timeout:3000 });
  }

  async clickMenu_TopUp() {
    await this.page.getByTestId('nok-more-nok-cash-icon').click({ force: true });
  }

  async clickMenu_TopUpConfirm() {
    await this.page.getByTestId('option-modal-confirm-button').click({ force: true });
  }


  // async displayListMenu() {       //รอจนเจอคำว่า "ระบบงาน" แสดง)
  //   //await expect(this.page.getByText('ระบบงาน')).toBeVisible;
  //   await this.page.getByText('ระบบงาน', {exact : true}).waitFor({state: 'visible', timeout: 10000});
  // }

  // async clickMenuList(menuName: string) {
  //   await this.page.waitForLoadState('networkidle'); // รอให้หน้าเว็บโหลดเสร็จ
  //   await this.page.getByText('agent', { exact: true }).scrollIntoViewIfNeeded(); // เลื่อนเมนูมาในมุมมองที่มองเห็น
  //   await this.page.getByText('agent', { exact: true }).waitFor({ state: 'visible', timeout: 10000 }); // รอให้เจอคำว่า 'agent' 
  //   await this.page.getByText(menuName, { exact: true }).click(); // ใส่ { exact: true } บอกว่าสนใจหาคำว่า agent แบบเป๊ะๆ เช็คเป็นพิมพ์เล็ก พิมพ์ใหญ่
  // }

  // async clickUserAgent(text: string) {
  //   await this.page.locator('#ulSystem55').getByText(text).click({ force: true })
  // }
}


//getByTestId('series-lottery-lists-title')
//getByTestId('nok-more-nok-cash-icon')
