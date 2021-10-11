import {Given,When,Then} from '@cucumber/cucumber';

Given(/^I'm on the landing page$/, async function(){
    console.log("Started");
    await browser.url('/');
    await browser.maximizeWindow();

});

When(/^I click on signIn button$/, async function(){
    const signInBtn = $("//a[@class='login']");
    await signInBtn.click();
    await browser.pause(5000);
});

Then(/^I shall be landing to the Login page$/, async function(){
    var strUrl = await browser.getTitle();
    console.log("URL is : "+strUrl);
    expect(strUrl).toEqual('Login - My Store')
});
