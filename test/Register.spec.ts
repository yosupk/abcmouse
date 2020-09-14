import {expect} from 'chai';
import {config} from 'src/config';
import RegisterPage from 'src/pages/RegisterPage';
import HomePage from 'src/pages/HomePage';

describe('Register page', () => {
    it('user registration flow', () => {
        // open https://www.abcmouse.com/
        HomePage.open;
        
        // click on Sign Up button
        HomePage.clickOnSignUp();

        RegisterPage.waitUntilElementIsDisplayed(RegisterPage.email);
        expect(RegisterPage.currentUrl).to.equal('https://www.abcmouse.com/abc/prospect-register/');

        // sign up with random email
        let randomEmail = config.userPrefix + RegisterPage.uuidv4 + config.emailDomain;
        RegisterPage.registerEmail(randomEmail);

        RegisterPage.waitUntilElementIsDisplayed(RegisterPage.pageTag);
        expect(RegisterPage.currentUrl).to.equal('https://www.abcmouse.com/abc/subscription/');
        expect(RegisterPage.pageTagText).to.equal('Become a Member!');
    });
});
