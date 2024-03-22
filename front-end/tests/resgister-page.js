const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.registerPageLink = page.locator('xpath=//html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a');
        this.genderMale = page.locator('xpath=//*[@id="gender-male"]');
        this.firstName = page.locator('xpath=//*[@id="FirstName"]');
        this.lastName = page.locator('xpath=//*[@id="LastName"]');
        this.dateOfBirthDay = page.locator('xpath=//html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[1]');
        this.dateOfBirthMonth = page.locator('xpath=//html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[2]');
        this.dateOfBirthYear = page.locator('xpath=//html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[3]');
        this.email = page.locator('xpath=//*[@id="Email"]');
        this.companyName = page.locator('xpath=//*[@id="Company"]');
        this.newsletterOption = page.locator('xpath=//*[@id="Newsletter"]');
        this.password = page.locator('xpath=//*[@id="Password"]');
        this.confirmPassword = page.locator('xpath=//*[@id="ConfirmPassword"]');
        this.registerBtn = page.locator('xpath=//*[@id="register-button"]');
        this.successMsg = page.locator('xpath=//html/body/div[6]/div[3]/div/div/div/div[2]/div[1]');
    }

    async goto() {
        await this.page.goto('https://demo.nopcommerce.com/');

        //vai para a pagina de registro
        await this.registerPageLink.click();
    }

    async fillPersonalDetails(firstName, lastName, day, month, year, email) {
        await this.genderMale.check();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.dateOfBirthDay.selectOption({index: day});
        await this.dateOfBirthMonth.selectOption({index: month});
        await this.dateOfBirthYear.selectOption({index: year});
        await this.email.fill(email);
    }

    async fillCompanyDetails(companyName) {
        await this.companyName.fill(companyName);
    }

    async checkOptions(newsletterOption) {
        if(newsletterOption == true)
            await this.newsletterOption.check();
        else
            await this.newsletterOption.uncheck();
    }

    async fillPassword(password){
        await this.password.fill(password);
    }

    async fillConfirmPassword(password){
        await this.confirmPassword.fill(password);
    }

    async confirmRegistration(){
        await this.registerBtn.click();
    }

    async getSuccessMsg(){
        return await this.successMsg.textContent();
    }

    async getErrorMsg(locator) {
        return await this.page.locator(locator).textContent();
    }
};
