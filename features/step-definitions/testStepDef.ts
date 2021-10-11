import {Given,When,Then} from '@cucumber/cucumber';

var productName

Given(/^I'm on the landing page$/, async function(){
    console.log("Started");
    await browser.url('/');
    await browser.maximizeWindow();
});

When(/^I click on signIn button$/, async function(){
    const signInBtn = $("//a[@class='login']");
    await signInBtn.click();
});

Then(/^I shall be landing to the Login page$/, async function(){
    var pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual('Login - My Store')
});

When(/^I provide personal details to create a new account$/, async function(){
    const emailField = $("//input[@id='email_create']");
    await emailField.addValue('test13@automation2.com');
    const createAccountButton = $("//button[@id='SubmitCreate']");
    await createAccountButton.click();
    const genderRadioBtn = $("//label[contains(.,'Mr.')]//input"); 
    await genderRadioBtn.click();
    const firstNameField = $("//input[@id='customer_firstname']");
    await firstNameField.addValue('TestFirst');
    const lastNameField = $("//input[@id='customer_lastname']");
    await lastNameField.addValue('TestLast');
    const passwordField = $("//input[@id='passwd']");
    await passwordField.addValue('Test@123');
    const selectDayOfBirth = $('#days');
    await selectDayOfBirth.selectByAttribute('value', '11');
    const selectMonthOfBirth = $('#months');
    await selectMonthOfBirth.selectByAttribute('value', '3');
    const selectYearOfBirth = $('#years');
    await selectYearOfBirth.selectByAttribute('value', '1982');
    const address1Field = $('#address1');
    await address1Field.addValue('AddLine1');
    const cityField = $('#city');
    await cityField.addValue('CityTest');
    const zipField = $('#postcode');
    await zipField.addValue('98765');
    const stateSelect = $("//select[@id='id_state']//option[text()='California']");
    await stateSelect.click();
    const phoneField = $('#phone_mobile');
    await phoneField.addValue('987654321');
    const registerButton = $('#submitAccount'); 
    await registerButton.click()
    await browser.pause(5000);
});

Then(/^Correct name and surname are displayed on My Account page$/, async function(){
    const userNameElement = $("//a[@title='View my customer account']//span")
    var userName = await userNameElement.getText()
    expect(userName).toEqual('TestFirst TestLast')
    await browser.pause(5000);
});

When(/^I select a product for adding to the cart$/, async function(){
    const tshirtsLink = $("(//a[@title='T-shirts'])[2]");
    await tshirtsLink.click();
    const prodNameElement = $("//a[@title='Faded Short Sleeve T-shirts']");
    productName = await prodNameElement.getText()
    await browser.pause(10000);
    $("//a[@title='Faded Short Sleeve T-shirts']").moveTo();
    await browser.pause(5000);
    const addToCartLink = $("//a[@title='Add to cart']");
    await addToCartLink.click(); 
    await browser.pause(3000);  
});

Then(/^I shall be getting a Confirmation message$/, async function(){
    const msg = $("(//div[@class='clearfix']//h2)[1]");
    var msg1 = await msg.getText() 
    expect(msg1).toEqual('Product successfully added to your shopping cart')
});

When(/^I proceeded to the checkout page and continue till Payments page$/, async function(){
    const proceedToCheckoutLink = $("//a[@title='Proceed to checkout']");
    await proceedToCheckoutLink.click();
    await browser.pause(3000);
    await proceedToCheckoutLink.click();
    await browser.pause(3000);
    const proceedToCheckoutLink2 = $("//button[@name='processAddress']");
    await proceedToCheckoutLink2.click();
    await browser.pause(3000);
    const proceedToCheckoutLink3 = $('#cgv');
    await proceedToCheckoutLink3.click();
    await browser.pause(3000);
    const proceedToCheckoutLink4 = $("//button[@name='processCarrier']");
    await proceedToCheckoutLink4.click();
    await browser.pause(3000);
});

Then(/^Correct product details are shown$/, async function(){
    var finalProdName = await $("//p[@class='product-name']//a").getText()
    expect(finalProdName).toEqual(productName)
    await browser.pause(15000);
});