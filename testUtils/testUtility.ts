import { ChainablePromiseElement} from "webdriverio";

export const clickElement = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await (await element).click()
}

export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await (await element).setValue(text)
}

export const selectDropdownByIndex = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, index: number) => {
    await (await element).selectByIndex(index)
}

export const selectDropdownByAttribute = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,  attribute: string, text: string) => {
    await (await element).selectByAttribute(attribute, text)
}