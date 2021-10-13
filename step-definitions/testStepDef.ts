import { Given, When, Then } from '@cucumber/cucumber';
import chaiPage from '../pageObjects/acountCreationPage'
//import {fs} from 'fs'
import fs = require('fs');
//import reg from "../testData/registrationTestData.json"
//import { parseJsonFile } from "../testData/registrationTestData.json";

var productName

Given(/^I'm on the landing page$/, async function () {
    console.log("Started");
    await browser.url('/');
    await browser.maximizeWindow();
});

When(/^I click on signIn button$/, async function () {
    // const signInBtn = $("//a[@class='login']");
    // await signInBtn.click();
    //await (await chaiPage.signInBtn).click()
    await chaiPage.clickSignIn();
});

// Then(/^I shall be landing to the Login page$/, async function () {
//     var pageTitle = await browser.getTitle();
//     expect(pageTitle).toEqual('Login - My Store')
// });

When(/^I provide personal details to create a new account from (.+)$/, async function (testdatapath:string) {
    let data = fs.readFileSync(testdatapath, "utf-8");
    let testdata = JSON.parse(data)
    console.log(testdata)

    // const emailField = $("//input[@id='email_create']");
    // await emailField.addValue('test13@automation2.com');
    // await (await chaiPage.emailField).setValue('test14@automation2.com')
    // await (await chaiPage.emailField).setValue('test14@automation2.com')

    await chaiPage.setEmail(testdata.email)
    //await chaiPage.setEmail(reg.email)


    // const createAccountButton = $("//button[@id='SubmitCreate']");
    // await createAccountButton.click();
    await (await chaiPage.createAccountButton).click()

    // const genderRadioBtn = $("//label[contains(.,'Mr.')]//input");
    // await genderRadioBtn.click();
    await (await chaiPage.genderRadioBtn).click()

    // const firstNameField = $("//input[@id='customer_firstname']");
    // await firstNameField.addValue('TestFirst');
    await (await chaiPage.firstNameField).setValue('TestFirst')

    // const lastNameField = $("//input[@id='customer_lastname']");
    // await lastNameField.addValue('TestLast');
    await (await chaiPage.lastNameField).setValue('TestLast')

    // const passwordField = $("//input[@id='passwd']");
    // await passwordField.addValue('Test@123');
    await (await chaiPage.passwordField).setValue('Test@123')

    // const selectDayOfBirth = $('#days');
    // await selectDayOfBirth.selectByAttribute('value', '11');
    await (await chaiPage.selectDayOfBirth).selectByAttribute('value', '11')

    // const selectMonthOfBirth = $('#months');
    // await selectMonthOfBirth.selectByAttribute('value', '3');
    await (await chaiPage.selectMonthOfBirth).selectByAttribute('value', '3')

    // const selectYearOfBirth = $('#years');
    // await selectYearOfBirth.selectByAttribute('value', '1982');
    await (await chaiPage.selectYearOfBirth).selectByAttribute('value', '1982')

    // const address1Field = $('#address1');
    // await address1Field.addValue('AddLine1');
    await (await chaiPage.address1Field).setValue('AddLine1')

    // const cityField = $('#city');
    // await cityField.addValue('CityTest');
    await (await chaiPage.cityField).setValue('CityTest')

    // const zipField = $('#postcode');
    // await zipField.addValue('98765');
    await (await chaiPage.zipField).setValue('98765')

    // const stateSelect = $("//select[@id='id_state']//option[text()='California']");
    // await stateSelect.click();
    await (await chaiPage.stateSelect).click()

    // const phoneField = $('#phone_mobile');
    // await phoneField.addValue('987654321');
    await (await chaiPage.phoneField).setValue('987654321')

    // const registerButton = $('#submitAccount');
    // await registerButton.click()
    await (await chaiPage.registerButton).click()
});

Then(/^Correct name and surname are displayed on My Account page$/, async function () {
    const userNameElement = $("//a[@title='View my customer account']//span")
    var userName = await userNameElement.getText()
    expect(userName).toEqual('TestFirst TestLast')
});

When(/^I select a product for adding to the cart$/, async function () {
    const tshirtsLink = $("(//a[@title='T-shirts'])[2]");
    await tshirtsLink.click();
    const prodNameElement = $("//a[@title='Faded Short Sleeve T-shirts']");
    productName = await prodNameElement.getText()
    $("//a[@title='Faded Short Sleeve T-shirts']").moveTo();
    const addToCartLink = $("//a[@title='Add to cart']");
    await addToCartLink.click();
});

Then(/^I shall be getting a Confirmation message$/, async function () {
    const msg = $("(//div[@class='clearfix']//h2)[1]");
    var msg1 = await msg.getText()
    expect(msg1).toEqual('Product successfully added to your shopping cart')
});

When(/^I proceeded to the checkout page and continue till Payments page$/, async function () {
    const proceedToCheckoutLink = $("//a[@title='Proceed to checkout']");
    await proceedToCheckoutLink.click();  
    await proceedToCheckoutLink.click();  
    const proceedToCheckoutLink2 = $("//button[@name='processAddress']");
    await proceedToCheckoutLink2.click();
    const proceedToCheckoutLink3 = $('#cgv');
    await proceedToCheckoutLink3.click(); 
    const proceedToCheckoutLink4 = $("//button[@name='processCarrier']");
    await proceedToCheckoutLink4.click();   
});

Then(/^Correct product details are shown$/, async function () {
    var finalProdName = await $("//p[@class='product-name']//a").getText()
    expect(finalProdName).toEqual(productName) 
});