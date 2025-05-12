import { Page, expect } from "@playwright/test";
import { basePage } from "../../helpers/UI/basePage";
import Tesseract from 'tesseract.js'
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment


export class loginToLine extends basePage {
  constructor(page: Page) {
    super(page); // ดึง page จาก BasePage
  }

  //** Step */
  async displayLogoLine() {
    await this.page.getByRole('heading', { name: 'LINE' }).waitFor({ state: 'visible', timeout: 3000 });
  }

  async readCaptcha() { // อ่านข้อความจาก captcha
    const captchaImage = this.page.getByRole('img') // บันทึกภาพ captcha
    await captchaImage.screenshot({ path: 'captcha.png' })
    console.log('บันทึกภาพ captcha แล้ว')

 // อ่านข้อความจาก captcha ด้วย OCR
  const result = await Tesseract.recognize('captcha.png', 'eng') // อ่านข้อความจาก captcha
  const captchaText = result.data.text.trim()
  console.log('ข้อความที่อ่านได้จาก captcha:', captchaText)
  return captchaText;
  }

   async inputEmail (lineLoginEmail: string) {
     await this.page.getByRole('textbox', { name: 'Email address' }).fill(lineLoginEmail);
   }

   async inputPassword (lineLoginPassword: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(lineLoginPassword);
  }

   async inputCaptchaText (captchaText: string) {
    await this.page.getByRole('textbox', { name: 'Enter the text in the image' }).fill(captchaText);
  }

  async clickLoginButton () {
    await this.page.getByRole('button', { name: 'Log in' }).click({force:true});
  }

}




