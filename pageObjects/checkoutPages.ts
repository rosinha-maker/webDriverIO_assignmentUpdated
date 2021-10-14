import { clickElement } from "../testUtils/testUtility";

class CheckOutProduct {
    get proceedToCheckoutLink1() { return $("(//a[@title='Proceed to checkout'])[1]"); }
    get proceedToCheckoutLink2() { return $("(//a[@title='Proceed to checkout'])[2]"); }
    get proceedToCheckoutLink3() { return $("//button[@name='processAddress']"); }
    get TnCCheckbox() { return $('#cgv'); }
    get proceedToCheckoutLink4() { return $("//button[@name='processCarrier']"); }

    async clickProceedToCheckoutLink1() {
        await clickElement(this.proceedToCheckoutLink1)
    }
    async clickProceedToCheckoutLink2() {
        await clickElement(this.proceedToCheckoutLink2)
    }
    async clickProceedToCheckoutLink3() {
        await clickElement(this.proceedToCheckoutLink3)
    }
    async checkTnCCheckbox() {
        await clickElement(this.TnCCheckbox)
    }
    async clickProceedToCheckoutLink4() {
        await clickElement(this.proceedToCheckoutLink4)
    }

}





export default new CheckOutProduct()