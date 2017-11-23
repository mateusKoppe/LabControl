export class ToolsService {
  constructor($http, UserService, $filter){
    'ngInject';
    this._http = $http;
    this._userService = UserService;
    this._filter = $filter;
  }

  saveTool(laboratory, tool){
    tool.laboratory = laboratory.id;
    return this._http.post(`${this._filter('apiUrl')(`tools/list/${laboratory.id}`, this._userService.user.api_token)}`, tool);
  }

  getToolFromId(id){
    return this._http.get(`${this._filter('apiUrl')(`tools/item/${id}`, this._userService.user.api_token)}`);
  }

  getToolsByLaboratory(laboratory){
    return this.getToolsByLaboratoryId(laboratory.id);
  }

  getToolsByLaboratoryId(id){
    return this._http.get(`${this._filter('apiUrl')(`tools/list/${id}`, this._userService.user.api_token)}`);
  }
}
