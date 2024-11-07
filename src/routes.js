import React from 'react';

const AdminDashboard = React.lazy(() => import('./views/dashboard/AdminDashboard'));
const UserDashboard = React.lazy(() => import('./views/dashboard/UserDashboard'));

const EmployeeRegistration = React.lazy(() => import('./views/employee-management/employee-registration/EmployeeRegistrationIndex'));
const EmployeeList = React.lazy(() => import('./views/employee-management/employee-list/EmployeeListIndex'));

const AdminRegAndList  = React.lazy(() => import('./views/admin-management/admin-reg-list/adminRegandList'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/admin/dashboard', name: 'Admin Dashboard', component: AdminDashboard },
  { path: '/user/dashboard', name: 'User Dashboard', component: UserDashboard },

  { path: '/employee-management', name: 'Employee Management',exact: true },
  { path: '/employee-management/employee-register', name: 'Employee Registration', component: EmployeeRegistration },
  { path: '/employee-management/employee-list', name: 'Employee List', component: EmployeeList },

  { path: '/admin-management/admin-reg-list', name: 'Admin Reg List', component: AdminRegAndList },
];

export default routes;
