const getNavigation = (userCode, userName) => [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/user/dashboard',
    className: "dashboard"
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sale',
    route: '/user/sale',
    className: "sale-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sale',
        to: '/user/sale',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '+ New Sale',
        to: '/user/sale-new',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Purchase',
    route: '/user/purchase',
    className: "purchase-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'purchase',
        to: '/user/purchase',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '+ New Purchase',
        to: '/user/purchase-new',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Adjust / Convert',
    route: '/user/adjust-convert',
    className: "adjust-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Adjust',
        to: '/user/adjust',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Convert',
        to: '/user/convert',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Stock Status',
    route: '/user/stock',
    className: "stock-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Stock Status',
        to: '/user/stock',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '+ New Stock',
        // to: 'user/stock-new',
        to: '',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Price / Discount',
    route: '/user/stock',
    className: "stock-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Price',
        to: '/user/price',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Discount',
        to: '/user/discount',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Outstanding',
    route: '/user/outstanding',
    className: "outstanding-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Outstanding',
        to: '/user/outstanding',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '+ New Sale',
        to: '/user/outstanding-new',
        to: '',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cash / Bank',
    route: '/user/cash-bank',
    className: "cash-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Cash',
        to: '/user/cash',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bank',
        to: '/user/bank',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'G-Ledger',
    route: '/user/gledger',
    className: "ledger-svg",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'G-Ledger',
        to: '/user/gledger',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '+ New G-Ledger',
        // to: '/user/gledger-new',
        to: '',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDivider',
    name: '',
    to: '#',
    className: "custom-divider"
  },
  // =======================
  {
    _tag: 'CSidebarNavItem',
    name: userCode ? `User : ${userName}` : 'Profile',
    to: '/user/profile',   // TODO:  make route,index (including: profile edit, profile view, profile delete)
    className: "profile"
  },
  {
    _tag: 'CSidebarNavItem',  
    name: 'Logout',
    to: '/user/logout',
    className: "logout"
  },
  {
    _tag: 'CSidebarNavDivider',
    name: '',
    to: '#',
    className: "transparent-divider"
  },
];

export default getNavigation;
