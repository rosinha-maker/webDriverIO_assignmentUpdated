import { Given, When, Then } from '@cucumber/cucumber';
import createAccount from '../pageObjects/acountCreationPage'
import myAccount from '../pageObjects/myAccountPage'
import tShirtSelection from '../pageObjects/tshirtSelectionPage'
import checkOut from '../pageObjects/checkoutPages'
import payments from '../pageObjects/paymentPage'
import fs = require('fs');
import faker from "faker"

var productName, firstName, surname

Given(/^I'm on the landing page$/, async function () {
    console.log("Started");
    await browser.url('/');
    await browser.maximizeWindow();
});

When(/^I click on signIn button$/, async function () {
    await createAccount.clickSignIn();
});

When(/^I provide personal details to create a new account from (.+)$/, async function (testdatapath: string) {
    let data = fs.readFileSync(testdatapath, "utf-8");
    let testdata = JSON.parse(data)
    firstName = testdata.firstName
    surname = testdata.lastName
    await createAccount.setEmail(faker.internet.email())
    await createAccount.clickCreateAccountBtn()
    await createAccount.setGender(testdata.gender)
    await createAccount.setFirstName(testdata.firstName)
    await createAccount.setLastName(testdata.lastName)
    await createAccount.setPassword(testdata.password)
    await createAccount.setDayOfBirth(testdata.dayOfBirth)
    await createAccount.setMonthOfBirth(testdata.monthOfBirth)
    await createAccount.setYearOfBirth(testdata.yearOfBirth)
    await createAccount.setAddress1(testdata.address1)
    await createAccount.setCity(testdata.city)
    await createAccount.setZip(testdata.zip)
    await createAccount.setState(testdata.state)
    await createAccount.setPhone(testdata.phone)
    await createAccount.clickRegisterBtn()
});

Then(/^Correct name and surname are displayed on My Account page$/, async function () {

    var userName = await myAccount.userNameElement.getText()
    expect(userName).toEqual(firstName + " " + surname)
});

When(/^I select a product for adding to the cart$/, async function () {
    await tShirtSelection.clickTShirtsLink()
    await tShirtSelection.prodNameElement.waitForDisplayed()
    productName = await tShirtSelection.prodNameElement.getText()
    console.log("Text:" + productName)
    await tShirtSelection.prodNameElement.scrollIntoView()
    await tShirtSelection.prodNameElement.moveTo()
    //await browser.moveToElement(await $("//ul[@class='product_list grid row']/li"))

    //await $("//ul[@class='product_list grid row']/li").scrollIntoView()
    //await tShirtSelection.addToCartLink.waitForClickable({timeout:10000})
    await tShirtSelection.clickAddToCartLink()
});

When(/^I proceeded to the checkout page and continue till Payments page$/, async function () {
    await checkOut.clickProceedToCheckoutLink1()
    await checkOut.clickProceedToCheckoutLink2()
    await checkOut.clickProceedToCheckoutLink3()
    await checkOut.checkTnCCheckbox()
    await checkOut.clickProceedToCheckoutLink4()
});

Then(/^Correct product details are shown$/, async function () {
    var finalProdName = await payments.finalProdNameElement.getText()
    expect(finalProdName).toEqual(productName)
});