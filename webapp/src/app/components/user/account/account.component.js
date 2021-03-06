import templateUrl from './account.component.html';
import './account.component.scss';

export const AccountComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class AccountController {
    constructor($state, UserService, AccountablesService){
      'ngInject';
      this.$state = $state;
      this.UserService = UserService;
      this.AccountablesService = AccountablesService;
    }

    $onInit(){
      this.permissionsLabel = {
        1: 'Master admin',
        2: 'Admin',
        3: 'Accountable',
      };
      this.UserService.getLoggedUser()
        .then(user => this.user = user);
    }

    edit(){
      this.formOpen = true;
    }

    editPassword(){
      this.formPasswordOpen = true;
    }

    close(){
      this.formOpen = false;
      this.formPasswordOpen = false;
    }

    logout(){
      this.UserService.logout();
      this.$state.go('login');
    }

    editFormSubmit(account){
      this.AccountablesService.editAccountable(account)
        .then(response => {
          this.user = response.data;
          this.UserService.user = response.data;
          this.close();
        });
    }

  }
};
