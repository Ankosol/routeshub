import { BehaviorSubject } from 'rxjs';
import { Entity, State } from './interfaces';

export const state: BehaviorSubject<State<any>> = new BehaviorSubject(null);

export function updateState<T, C = {}>(
  routeName: string,
  routes: Entity<T>
): State<Entity<T, C>> {
  const children = Object.keys(routes).reduce((acc, routeChildrenName) => {
    if (!routes[routeChildrenName].children) {
      return acc;
    }

    return { ...acc, ...routes[routeChildrenName].children };
  }, {});
  const hasChildren = Object.keys(children).length > 0;

  // tslint:disable-next-line
  return Object.assign({}, state.value, {
    [routeName]: hasChildren ? children : routes
  }) as State<Entity<T, C>>;
}
