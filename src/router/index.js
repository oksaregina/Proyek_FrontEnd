import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import home from '../pages/home'
import dashboard from '../pages/dashboard'
import Testimoni from '../pages/Testimoni'


const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
            {
        name: "home",
        component: home, 
        path: "/home",
      },
                 {
        name: "dashboard",
        component: dashboard, 
        path: "/dashboard",
      },
      {
        name: "Testimoni",
        component: Testimoni, 
        path: "/Testimoni",
      },
    ]
  }
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}