import { BaseRoute, Routes } from 'routeshub';

export const bolid = {
  path: 'bolids',
  lazyPath: 'app/views/bolid/bolid.module#BolidModule'
};

export type BolidRoute = BaseRoute;

export const bolidRoute: Routes<BolidRoute> = {
  root: {
    path: ''
  }
};
