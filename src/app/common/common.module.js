import angular from 'angular';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';

export const CommonModule = angular
  .module('common', [
    HomeModule,
    UserModule,
    LaboratoriesModule,
  ])
  .name;
