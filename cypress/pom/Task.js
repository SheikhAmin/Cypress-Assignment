class Task{
     log = '#user_login'
     pass = '#user_pass'
     loginBtn = '#wp-submit'
     plugin = '#menu-plugins > .wp-has-submenu > .wp-menu-name'

     Login(user,password){
          cy.get(this.log).type(user);
          cy.get(this.pass).type(password);
          cy.get(this.loginBtn).click();
          cy.wait(6000);
     }

     checkDarkMode(){
          
     }

}
export default Task;