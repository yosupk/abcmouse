import BasePage from 'src/pages/BasePage';

class HomePage extends BasePage {
    get signUp(){
        return $('route-view').shadow$('home-element').shadow$('main-layout').$('authstate-context:nth-child(3)').$('signup-button');
    }

    clickOnSignUp(){
        console.log(this.signUp.getText());
        //this.signUp.waitForClickable();
        this.waitUntilElementIsDisplayed(this.signUp);
        this.signUp.click();
    }
}

export default new HomePage();
