import { ComponentA, ComponentB,  } from '../library/index';
import { ContainerComponent, RouteInfo } from 'sharedmodule';



export const MAIN_ROUTES: RouteInfo[] = [
    { path: '', redirectTo: 'moduleA', pathMatch: 'full' },
    {
        // tslint:disable-next-line:max-line-length
        path: 'moduleA', component: ContainerComponent, display: true, id: 'test', title: 'ModuleA', icon: '', class: 'dropdown', ordinal: 1,
        children: [
            { path: '', redirectTo: 'componentA', pathMatch: 'full', display: false },
            // tslint:disable-next-line:max-line-length
            { path: 'componentA', component: ComponentA, display: true, id: 'ComponentA', title: 'Component A', icon: '', class: 'dropdown', ordinal: 1 },
            // tslint:disable-next-line:max-line-length
            { path: 'componentB', component: ComponentB, display: true, id: 'ComponentB', title: 'Component B', icon: '', class: 'dropdown', ordinal: 2 }
        ]
    }
];
