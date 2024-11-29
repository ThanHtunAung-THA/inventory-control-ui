import React from 'react';

const AdminDashboard = React.lazy(() => import('./views/_admin/Dashboard'));

const AdminSaleList = React.lazy(() => import('./views/_admin/sale/List'));
const AdminSaleAdd = React.lazy(() => import('./views/_admin/sale/Create'));
const AdminSaleEdit = React.lazy(() => import('./views/_admin/sale/Update'));

const AdminPurchaseList = React.lazy(() => import('./views/_admin/purchase/List'));
const AdminPurchaseAdd = React.lazy(() => import('./views/_admin/purchase/Create'));
const AdminPurchaseEdit = React.lazy(() => import('./views/_admin/purchase/Update'));

const AdminSetting  = React.lazy(() => import('./views/_admin/AdminSettings'));
const UserManagement  = React.lazy(() => import('./views/_admin/UserSettings'));
// ================= ### =================
const UserDashboard = React.lazy(() => import('./views/_user/Dashboard'));

const UserSaleList = React.lazy(() => import('./views/_user/sale/List'));
const UserSaleAdd = React.lazy(() => import('./views/_user/sale/Create'));
const UserSaleEdit = React.lazy(() => import('./views/_user/sale/Update'));

const UserPurchaseList = React.lazy(() => import('./views/_user/purchase/List'));
const UserPurchaseAdd = React.lazy(() => import('./views/_user/purchase/Create'));
const UserPurchaseEdit = React.lazy(() => import('./views/_user/purchase/Update'));

// ================= ### =================
const EmployeeRegistration = React.lazy(() => import('./views/employee-management/employee-registration/EmployeeRegistrationIndex'));
const EmployeeList = React.lazy(() => import('./views/employee-management/employee-list/EmployeeListIndex'));


const routes = [
  // { path: '/', exact: true, name: 'Home' },

  // ================= Admin Routes =================
  { path: '/admin/dashboard', name: 'Dashboard', component: AdminDashboard },

  { path: '/admin/sale', name: 'Sale Lists', component: AdminSaleList },
  { path: '/admin/sale-new', name: 'Add New Sale list', component: AdminSaleAdd },
  { path: '/admin/sale-edit/:id', name: 'Edit Sale list', component: AdminSaleEdit },

  { path: '/admin/purchase', name: 'Purchase Lists', component: AdminPurchaseList },
  { path: '/admin/purchase-new', name: 'Add New Purchase list', component: AdminPurchaseAdd },
  { path: '/admin/purchase-edit/:id', name: 'Edit Purchase list', component: AdminPurchaseEdit },

  { path: '/admin/admin-settings', name: 'setting for admin', component: AdminSetting },
  { path: '/admin/user-settings', name: 'setting for user', component: UserManagement },

  
  // ================= User Routes =================
  { path: '/user/dashboard', name: 'Dashboard', component: UserDashboard },

  { path: '/user/sale', name: 'Sale Lists', component: UserSaleList },
  { path: '/user/sale-new', name: 'Add New Sale list', component: UserSaleAdd },
  { path: '/user/sale-edit/:id', name: 'Edit Sale list', component: UserSaleEdit },

  { path: '/user/purchase', name: 'Purchase Lists', component: UserPurchaseList },
  { path: '/user/purchase-new', name: 'Add New Purchase list', component: UserPurchaseAdd },
  { path: '/user/purchase-edit/:id', name: 'Edit Purchase list', component: UserPurchaseEdit },
  


  // ================= Common Routes =================

  { path: '/employee-management', name: 'Employee Management',exact: true },
  { path: '/employee-management/employee-register', name: 'Employee Registration', component: EmployeeRegistration },
  { path: '/employee-management/employee-list', name: 'Employee List', component: EmployeeList },

];

export default routes;
