import BasePage from 'src/pages/BasePage';

class RegisterPage extends BasePage {

    get email() {
        return $('route-view').shadow$('prospect-register-page').shadow$('main-layout').$('#email');
    }

    get submit() {
        return $('route-view').shadow$('prospect-register-page').shadow$('main-layout').$('#submit-button');
    }

    get pageTag(){
        return $('route-view').shadow$('subscription-page').shadow$('main-layout').$('.page-tag');
    }

    get pageTagText(){
        return this.pageTag.getText();
    }

    registerEmail(userEmail){
        console.log("Signing up with " + userEmail);
        this.email.setValue(userEmail);
        this.clickSubmit();
    }

    clickSubmit(){
        console.log("Clicking on " + this.submit.getText());
        this.submit.waitForClickable();
        this.submit.click();
    }
}

export default new RegisterPage();
