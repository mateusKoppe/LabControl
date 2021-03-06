import angular from 'angular';

import { UserService } from './user.service';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { RouteCheckLoginConstant } from './route-check-login.constant';

export const UserModule = angular
  .module('user', [
    LoginModule,
    AccountModule,
  ])
  .service('UserService', UserService)
  .constant('routeCheckLogin', RouteCheckLoginConstant)
  .name;
