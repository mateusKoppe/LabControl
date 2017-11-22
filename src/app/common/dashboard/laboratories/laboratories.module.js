import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { LaboratoriesListComponent } from './laboratories-list/laboratories-list.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoriesService } from './laboratories.service';

export const LaboratoriesModule = angular
  .module('laboratories', [
    uiRouter,
  ])
  .service('LaboratoriesService', LaboratoriesService)
  .component('laboratoriesList', LaboratoriesListComponent)
  .component('laboratory', LaboratoryComponent)
  .config(($stateProvider, routeCheckLogin) => {
    'ngInject';
    $stateProvider
      .state('laboratory', {
        url: '/laboratory/{id}',
        component: 'laboratory',
        resolve: {
          checkLogin: routeCheckLogin
        }
      })
  })
  .name;
