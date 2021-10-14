import { ChainablePromiseElement} from "webdriverio";

export const clickElement = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.waitForDisplayed()
    await element.waitForClickable()
    await element.click()
}

export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await element.setValue(text)
}

export const selectDropdownByIndex = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, index: number) => {
    await element.selectByIndex(index)
}

export const selectDropdownByAttribute = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,  attribute: string, text: string) => {
    await element.selectByAttribute(attribute, text)
}