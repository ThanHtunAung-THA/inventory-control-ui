export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    className: "dashboard"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sale',
    to: '/admin/sale',
    className: "sale-svg"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Purchase',
    to: '/admin/purchase',
    className: "purchase-svg"
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Adjust / Convert',
    route: '/admin/adjust-convert',
    className: "adjust-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Adjust',
        to: '/admin/adjust',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Convert',
        to: '/admin/convert',
      }
    ],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Stock Status',
    to: '/admin/stockstatus',
    className: "stock-svg"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Outstanding',
    to: '/admin/outstanding',
    className: "outstander-svg"
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cash / Bank',
    route: '/admin/cash-bank',
    className: "cash-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Cash',
        to: '/admin/cash',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bank',
        to: '/admin/bank',
      }
    ],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'G-Ledger',
    to: '/admin/gledger',
    className: "ledger-svg"
  },

  {
    _tag: 'CSidebarNavDivider',
    name: '',
    to: '#',
    className: "custom-divider"
  },

// ============================================
  {
    _tag: 'CSidebarNavItem',
    name: 'User Settings',
    to: '/admin/user-settings', 
    className: "user-svg"
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Settings',
    to: '/admin/admin-settings',
    className: "admin-svg"
  },

  {
    _tag: 'CSidebarNavDivider',
    name: '',
    to: '#',
    className: "custom-divider"
  },

  {
    _tag: 'CSidebarNavItem',  
    name: 'Logout',
    to: '/admin/logout',
    className: "logout"
  },
 
  {
    _tag: 'CSidebarNavDivider',
    name: '',
    to: '#',
    className: "transparent-divider"
  },

  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Setting',
  //   route: '/admin/setting',
  //   className: "setting-svg",
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Admin settings',
  //       to: '/admin/admin-setting',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'User settings',
  //       to: '/admin/user-setting',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',    
  //       name: 'Logout',
  //       to: '/admin/logout',
  //       icon: <img src={logoutsvg} alt="Adjust" style={{ width: 20, height: 20 }} /> // SVG beside child item
  //     }
  //   ],
  // },

]

