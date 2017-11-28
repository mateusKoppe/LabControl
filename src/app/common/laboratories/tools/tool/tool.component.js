import templateUrl from './tool.component.html';
import './tool.component.scss';

export const ToolComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class ToolController {
    constructor($state, ToolsService, UserService){
      'ngInject';
      this.$state = $state;
      this.ToolsService = ToolsService;
      this.UserService = UserService;
    }

    $onInit(){
      this.tool = {};
      this.hasPermission = false;
      this.ToolsService.getToolFromId(this.$state.params.id)
        .then(response => this.tool = response.data);
    }

    _loadUser(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
          this.hasPermission = this.laboratory.accountable == this.user.id || this.user.permission <= 2;
        });
    }

    editTool(){
      this.formTool = angular.copy(this.tool);
      this.formToolAlertOpen = true;
    }

    editFormSubmit(tool){
      this.ToolsService.updateTool(this.tool.laboratory, tool)
        .then(response => {
          this.tool = response.data;
          this.closeForm();
        })
    }

    closeForm(){
      this.formToolAlertOpen = false;
    }
  }
};
