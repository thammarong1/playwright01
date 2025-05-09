import { Page, expect } from "@playwright/test";
import { basePage } from "../../helpers/UI/basePage";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // โหลด environment


export class loginToHomePage extends basePage {
       constructor(page: Page) {
        super(page); // ดึง page จาก BasePage
      }

      //** Step */
      async gotoLandingPage (){
        await this.page.goto(`${process.env.URL_HomePage}`)
      }

      
        // getByRole('textbox', { name: 'รหัสผู้ใช้งาน' })
       async inputUsername (loginUsername: string) {
        //console.log('username : ' ,loginUsername);
         await this.page.getByRole('textbox', { name: 'รหัสผู้ใช้งาน' }).fill(loginUsername);
       }

       async inputPassword (loginPassword: string) {
        await this.page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill(loginPassword);
      }

      async clickLoginButton () {
        await this.page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click({force:true});
      }

      async ClickForgetPassword () {
        await this.page.getByRole('link', { name: 'ลืมรหัสผ่าน ?' }).click({force:true});
      }

    }



