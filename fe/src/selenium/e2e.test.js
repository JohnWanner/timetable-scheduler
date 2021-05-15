import subjectsReducer from "../reducers/subjectsReducer";
import * as types from "../actions/types";

const webdriver = require('selenium-webdriver');
const script = require('jest');
const url = 'https://www.selenium.dev/'

describe('e2e', () => {
    it('should run', async function(){
        jest.setTimeout(3000000);
        let driver = await new webdriver.Builder().forBrowser('firefox').build();

        let failed = true
        try {
            await driver.get('http://localhost:3000');
            await driver.findElement(webdriver.By.linkText('Sign Up')).click();
            await driver.findElement(webdriver.By.id('name')).sendKeys('new user');
            await driver.findElement(webdriver.By.id('email')).sendKeys('jj@gmail.com');
            await driver.findElement(webdriver.By.id('password')).sendKeys('jjjjjjjj');
            await driver.findElement(webdriver.By.id('password2')).sendKeys('jjjjjjjj');
            //await driver.findElement(webdriver.By.className('btn')).click();
            await driver.sleep(10000);
            await driver.findElement(webdriver.By.id('reg-button')).click();


            await driver.sleep(1000);
            await driver.findElement(webdriver.By.linkText('Login')).click();
            await driver.findElement(webdriver.By.id('email')).sendKeys('jj@gmail.com');
            await driver.findElement(webdriver.By.id('password')).sendKeys('jjjjjjjj');
            await driver.findElement(webdriver.By.className('btn')).click();

            await driver.sleep(1000);

            await driver.findElement(webdriver.By.id('s_name')).sendKeys('new subject');
            await driver.findElement(webdriver.By.id('add_button')).click();

            await driver.sleep(1000);

            await driver.findElement(webdriver.By.id('item_1')).click();
            await driver.findElement(webdriver.By.id('item_2')).click();
            await driver.findElement(webdriver.By.id('item_3')).click();
            await driver.findElement(webdriver.By.id('item_4')).click();

            //await driver.findElements(webdriver.By.xpath("//button[@class='list-group-item-action']")).then(function(elements){

            //})

            await driver.sleep(1000);

            await driver.findElement(webdriver.By.id('next')).click();

            await driver.findElement(webdriver.By.id('next')).click();

            await driver.sleep(3000);

            await driver.findElement(webdriver.By.id('arrow_down')).click();

            await driver.sleep(3000);

            await driver.findElement(webdriver.By.id('next')).click();

            await driver.sleep(6000);

            try {
                while (true) {
                    await driver.findElement(webdriver.By.id('next_table')).click();
                }
            }catch(e){
                await console.log("button not clickable")
            }


            await driver.findElement(webdriver.By.id('next')).click();
            await driver.findElement(webdriver.By.id('download')).click();


            await driver.sleep(6000);

            failed=false



        } finally {
            await driver.quit();
            expect(failed).toEqual(false);
        }

    })
})