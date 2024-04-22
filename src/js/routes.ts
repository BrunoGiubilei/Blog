
import HomePage from '../pages/home.js';
import LoginPage from "../pages/login.js";

var routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home/',
    component: HomePage
  }
];

export default routes;
