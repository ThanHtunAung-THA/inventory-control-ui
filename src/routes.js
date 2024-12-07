import React from 'react';

const AdminDashboard = React.lazy(() => import('./views/_admin/dashboard/Dashboard'));

const AdminSaleList = React.lazy(() => import('./views/_admin/sale/List'));
const AdminSaleAdd = React.lazy(() => import('./views/_admin/sale/Create'));
const AdminSaleEdit = React.lazy(() => import('./views/_admin/sale/Update'));

const AdminPurchaseList = React.lazy(() => import('./views/_admin/purchase/List'));
const AdminPurchaseAdd = React.lazy(() => import('./views/_admin/purchase/Create'));
const AdminPurchaseEdit = React.lazy(() => import('./views/_admin/purchase/Update'));

const AdminAdjustList = React.lazy(() => import('./views/_admin/adjust/List'));
const AdminConvertList = React.lazy(() => import('./views/_admin/convert/List'));
const AdminStockList = React.lazy(() => import('./views/_admin/stock/List'));
const AdminPriceList = React.lazy(() => import('./views/_admin/price/List'));
const AdminDiscountList = React.lazy(() => import('./views/_admin/discount/List'));
const AdminOutstandingList = React.lazy(() => import('./views/_admin/outstanding/List'));
const AdminCashList = React.lazy(() => import('./views/_admin/cash/List'));
const AdminBankList = React.lazy(() => import('./views/_admin/bank/List'));
const AdminGledgerList = React.lazy(() => import('./views/_admin/gledger/List'));

const AdminList  = React.lazy(() => import('./views/_admin/settings/admins/List'));
const AdminListAdd = React.lazy(() => import('./views/_admin/settings/admins/Create'));
const AdminListEdit = React.lazy(() => import('./views/_admin/settings/admins/Update'));

const UserList  = React.lazy(() => import('./views/_admin/settings/users/List'));
const UserListAdd = React.lazy(() => import('./views/_admin/settings/users/Create'));
const UserListEdit = React.lazy(() => import('./views/_admin/settings/users/Update'));

const AdminProfile  = React.lazy(() => import('./views/_admin/profile/Profile'));

// ================= ### =================

const UserDashboard = React.lazy(() => import('./views/_user/dashboard/Dashboard'));

const UserSaleList = React.lazy(() => import('./views/_user/sale/List'));
const UserSaleAdd = React.lazy(() => import('./views/_user/sale/Create'));
const UserSaleEdit = React.lazy(() => import('./views/_user/sale/Update'));

const UserPurchaseList = React.lazy(() => import('./views/_user/purchase/List'));
const UserPurchaseAdd = React.lazy(() => import('./views/_user/purchase/Create'));
const UserPurchaseEdit = React.lazy(() => import('./views/_user/purchase/Update'));

const UserAdjustList = React.lazy(() => import('./views/_user/adjust/List'));
const UserConvertList = React.lazy(() => import('./views/_user/convert/List'));
const UserStockList = React.lazy(() => import('./views/_user/stock/List'));
const UserPriceList = React.lazy(() => import('./views/_user/price/List'));
const UserDiscountList = React.lazy(() => import('./views/_user/discount/List'));
const UserOutstandingList = React.lazy(() => import('./views/_user/outstanding/List'));
const UserCashList = React.lazy(() => import('./views/_user/cash/List'));
const UserBankList = React.lazy(() => import('./views/_user/bank/List'));
const UserGledgerList = React.lazy(() => import('./views/_user/gledger/List'));

const UserProfile  = React.lazy(() => import('./views/_user/profile/Profile'));

// ================= ### =================
// const EmployeeRegistration = React.lazy(() => import('./views/employee-management/employee-registration/EmployeeRegistrationIndex'));
// const EmployeeList = React.lazy(() => import('./views/employee-management/employee-list/EmployeeListIndex'));

// const UnderConstruction = React.lazy(() => import('./views/UnderConstruction'));

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

  { path: '/admin/adjust', name: 'Adjust Lists', component: AdminAdjustList },
  { path: '/admin/convert', name: 'Convert Lists', component: AdminConvertList },
  { path: '/admin/stock', name: 'Stock Status Lists', component: AdminStockList },
  { path: '/admin/price', name: 'Price Lists', component: AdminPriceList },
  { path: '/admin/discount', name: 'Discount Lists', component: AdminDiscountList },
  { path: '/admin/outstanding', name: 'Outstanding Lists', component: AdminOutstandingList },
  { path: '/admin/cash', name: 'Cash Lists', component: AdminCashList },
  { path: '/admin/bank', name: 'Bank Lists', component: AdminBankList },
  { path: '/admin/gledger', name: 'Gledger Lists', component: AdminGledgerList },

  { path: '/admin/admin-list', name: 'Admins Management', component: AdminList },
  { path: '/admin/admin-new', name: 'Add New Admin Account', component: AdminListAdd },
  { path: '/admin/admin-edit/:id', name: 'Edit Admin Account', component: AdminListEdit },
  
  { path: '/admin/user-list', name: 'Users Management', component: UserList },
  { path: '/admin/user-new', name: 'Add New User Account', component: UserListAdd },
  { path: '/admin/user-edit/:id', name: 'Edit User Account', component: UserListEdit },
  
  { path: '/admin/profile', name: 'Admin Profile', component: AdminProfile },
  
  // ================= User Routes =================
  { path: '/user/dashboard', name: 'Dashboard', component: UserDashboard },

  { path: '/user/sale', name: 'Sale Lists', component: UserSaleList },
  { path: '/user/sale-new', name: 'Add New Sale list', component: UserSaleAdd },
  { path: '/user/sale-edit/:id', name: 'Edit Sale list', component: UserSaleEdit },

  { path: '/user/purchase', name: 'Purchase Lists', component: UserPurchaseList },
  { path: '/user/purchase-new', name: 'Add New Purchase list', component: UserPurchaseAdd },
  { path: '/user/purchase-edit/:id', name: 'Edit Purchase list', component: UserPurchaseEdit },
  
  { path: '/user/adjust', name: 'Adjust Lists', component: UserAdjustList },
  { path: '/user/convert', name: 'Convert Lists', component: UserConvertList },
  { path: '/user/stock', name: 'Stock Status Lists', component: UserStockList },
  { path: '/user/price', name: 'Price Lists', component: UserPriceList },
  { path: '/user/discount', name: 'Discount Lists', component: UserDiscountList },
  { path: '/user/outstanding', name: 'Outstanding Lists', component: UserOutstandingList },
  { path: '/user/cash', name: 'Cash Lists', component: UserCashList },
  { path: '/user/bank', name: 'Bank Lists', component: UserBankList },
  { path: '/user/gledger', name: 'Gledger Lists', component: UserGledgerList },

  { path: '/user/profile', name: 'User Profile', component: UserProfile },

  // ================= Common Routes =================

  // { path: '/employee-management', name: 'Employee Management',exact: true },
  // { path: '/admin/employee-register', name: 'Employee Registration', component: EmployeeRegistration },
  // { path: '/admin/employee-list', name: 'Employee List', component: EmployeeList },

];

export default routes;
