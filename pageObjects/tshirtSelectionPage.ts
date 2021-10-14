import { clickElement } from "../testUtils/testUtility";

class TShirtPage {
    get tshirtsLink() { return $("(//a[@title='T-shirts'])[2]"); }
    get prodNameElement() { return $("//h5[@itemprop='name']//a[@class='product-name']"); }
    get addToCartLink() { return $("//a[@title='Add to cart']"); }
    
    

    async clickTShirtsLink() {
        await clickElement(this.tshirtsLink)
    }

    async clickAddToCartLink() {
        await clickElement(this.addToCartLink)
    }


}




export default new TShirtPage()