import { clickElement, selectDropdownByAttribute, setText } from "../testUtils/testUtility";

class AccountCreate {
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
        await clickElement(this.signInBtn)
    }

    async setEmail(email:string){
        await setText(this.emailField,email)
    }

    async clickCreateAccountBtn() {
        await clickElement(this.createAccountButton)
    }

    async setGender(gender:string) {
        //await clickElement(this.genderRadioBtn)
        await $("//label[contains(.,'"+gender+"')]//input").click()
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
     async setAddress1(add1:string){
        await setText(this.address1Field,add1)
    } 
    async setCity(city:string){
        await setText(this.cityField,city)
    }
    async setZip(zip:string){
        await setText(this.zipField,zip)
    }

    async setState(state:string){
        //await setText(this.stateSelect,lName)
        await $("//select[@id='id_state']//option[text()='"+state+"']").click()
    }

    async setPhone(phone:string){
        await setText(this.phoneField,phone)
    }

    async clickRegisterBtn(){
        await clickElement(this.registerButton)
    }






}
export default new AccountCreate()