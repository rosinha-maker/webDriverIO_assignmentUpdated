import { clickElement, selectDropdownByAttribute, setText } from "../testUtils/testUtility";

class ChaiRegister {
    get signInBtn() { return $("//a[@class='login']"); }
    get emailField() { return $("//input[@id='email_create']"); }
    get createAccountButton() { return $("//button[@id='SubmitCreate']"); }
    get genderRadioBtn() { return $("//label[contains(.,'Mr.')]//input"); }
    get firstNameField() { return $("//input[@id='customer_firstname']"); }
    get lastNameField() { return $("//input[@id='customer_lastname']"); }
    get passwordField() { return $("//input[@id='passwd']"); }
    get selectDayOfBirth() { return $('#days'); }
    get selectMonthOfBirth() { return $('#months'); }
    get selectYearOfBirth() { return $('#years'); }
    get address1Field() { return $('#address1'); }
    get cityField() { return $('#city'); }
    get zipField() { return $('#postcode'); }
    get stateSelect() { return $("//select[@id='id_state']//option[text()='California']"); }
    get phoneField() { return $('#phone_mobile'); }
    get registerButton() { return $('#submitAccount'); }

    async clickSignIn() {
        //await this.signInBtn.click()
        await clickElement(this.signInBtn)
    }

    async setEmail(email:string){
        await setText(this.emailField,email)
    }

    async clickCreateAccountBtn() {
        await clickElement(this.createAccountButton)
    }

    async setGender() {
        await clickElement(this.genderRadioBtn)
    }

    async setFirstName(fName:string){
        await setText(this.firstNameField,fName)
    }

    async setLastName(lName:string){
        await setText(this.lastNameField,lName)
    }

    async setPassword(pwd:string){
        await setText(this.passwordField,pwd)
    }

    async setDayOfBirth(day:string){
        await selectDropdownByAttribute(this.selectDayOfBirth,'value',day)
    }
    async setMonthOfBirth(month:string){
        await selectDropdownByAttribute(this.selectMonthOfBirth,'value', month)
    }
    async setYearOfBirth(year:string){
        await selectDropdownByAttribute(this.selectYearOfBirth, 'value', year)
    }
     async setAddress1(lName:string){
        await setText(this.address1Field,lName)
    } 
    async setCity(lName:string){
        await setText(this.cityField,lName)
    }
    async setZip(lName:string){
        await setText(this.zipField,lName)
    }

    async setState(lName:string){
        await setText(this.stateSelect,lName)
    }

    async setPhone(lName:string){
        await setText(this.phoneField,lName)
    }

    async clickRegisterBtn(lName:string){
        await setText(this.registerButton,lName)
    }






}
export default new ChaiRegister()