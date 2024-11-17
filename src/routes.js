import React from 'react';

const AdminDashboard = React.lazy(() => import('./views/_admin/Dashboard'));

const AdminSaleList = React.lazy(() => import('./views/_admin/Sale-index'));
const AdminAddNewSale = React.lazy(() => import('./views/_admin/Sale-create'));
const AdminEditSale = React.lazy(() => import('./views/_admin/Sale-update'));
// const AdminDeleteSale = React.lazy(() => import('./views/_admin/Sale-delete'));

const AdminPurchase = React.lazy(() => import('./views/_admin/Purchase'));

const AdminSetting  = React.lazy(() => import('./views/_admin/AdminSettings'));
const UserManagement  = React.lazy(() => import('./views/_admin/UserSettings'));

const UserDashboard = React.lazy(() => import('./views/dashboard/UserDashboard'));

const UserSetting  = React.lazy(() => import('./views/_admin/Reg_List'));

const EmployeeRegistration = React.lazy(() => import('./views/employee-management/employee-registration/EmployeeRegistrationIndex'));
const EmployeeList = React.lazy(() => import('./views/employee-management/employee-list/EmployeeListIndex'));


const routes = [
  // { path: '/', exact: true, name: 'Home' },

  { path: '/admin/dashboard', name: 'Dashboard', component: AdminDashboard },

  { path: '/admin/sale', name: 'Sale Lists', component: AdminSaleList },
  { path: '/admin/sale-new', name: 'Add New Sale list', component: AdminAddNewSale },
  { path: '/admin/sale-edit/:id', name: 'Edit Sale list', component: AdminEditSale },
  // { path: '/admin/sale/delete', name: 'Delete Sale list', component: AdminDeleteSale },

  { path: '/admin/purchase', name: 'Purchase Lists', component: AdminPurchase },

  { path: '/admin/admin-settings', name: 'setting for admin', component: AdminSetting },
  { path: '/admin/user-settings', name: 'setting for user', component: UserManagement },

  { path: '/user/dashboard', name: 'User Dashboard', component: UserDashboard },
  { path: '/user/user-settings', name: 'User setting', component: UserSetting },

  { path: '/employee-management', name: 'Employee Management',exact: true },
  { path: '/employee-management/employee-register', name: 'Employee Registration', component: EmployeeRegistration },
  { path: '/employee-management/employee-list', name: 'Employee List', component: EmployeeList },

];

export default routes;
