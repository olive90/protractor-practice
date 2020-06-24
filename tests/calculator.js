let homepage = require('../pages/homepage');

describe('Demo calculator tests', function(){
    it('addition test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResult('8');

        browser.sleep(3000);
    });

    it('addition test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGot();

        homepage.verifyResult('8');

        browser.sleep(3000);
    });
});