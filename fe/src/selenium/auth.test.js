
const webdriver = require('selenium-webdriver');
const script = require('jest');

describe('e2e', () => {
    it('should sign up successfully', async function(){
        jest.setTimeout(3000000);
        let driver = await new webdriver.Builder().forBrowser('firefox').build();
        let success = true;
        let err;
        let elements;
        try {
            await driver.get('http://localhost:3000');
            await driver.findElement(webdriver.By.linkText('Sign Up')).click();
            await driver.sleep(5000);
            await driver.findElement(webdriver.By.id('name')).sendKeys(Math.random().toString(36).substr(2, 5));
            await driver.findElement(webdriver.By.id('email')).sendKeys(Math.random().toString(36).substr(2, 5)+"@gmail.com");
            await driver.findElement(webdriver.By.id('password')).sendKeys('abcd1234');
            await driver.findElement(webdriver.By.id('password2')).sendKeys('abcd1234');
            await driver.findElement(webdriver.By.className('btn')).click();
            elements = await driver.findElements(webdriver.By.id('auth_test'));
        }
        catch(e) {
            err = true
        }
        finally{
            await driver.quit();
            success = elements!==[];
            expect(success).toEqual(true);
        }

    })
})