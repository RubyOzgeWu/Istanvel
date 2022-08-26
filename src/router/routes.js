
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/front/IndexPage.vue'),
        meta: {
          title: 'istanvel',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/front/LoginView.vue'),
        meta: {
          title: 'Istanvel | Login',
          login: true,
          admin: false
        }
      },
      {
        path: 'ToursAll',
        name: 'ToursAll',
        component: () => import('../pages/front/ToursAllView.vue'),
        meta: {
          title: 'Istanvel | Tours',
          login: false,
          admin: false
        }
      },
      {
        path: 'ActivitiesAll',
        name: 'ActivitiesAll',
        component: () => import('../pages/front/ActivitiesAllView.vue'),
        meta: {
          title: 'Istanvel | Activities',
          login: false,
          admin: false
        }
      },
      {
        path: 'tour/:id',
        name: 'tour',
        component: () => import('../pages/front/TourView.vue'),
        meta: {
          title: 'Istanvel | Tour',
          login: false,
          admin: false
        }
      },
      {
        path: 'activity/:id',
        name: 'activity',
        component: () => import('../pages/front/ActivityView.vue'),
        meta: {
          title: 'Istanvel | Activity',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../pages/front/CartView.vue'),
        meta: {
          title: 'Istanvel | My Cart',
          login: true,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../pages/front/OrderView.vue'),
        meta: {
          title: 'Istanvel | My Order',
          login: true,
          admin: false
        }
      },
      {
        path: 'BlogAll',
        name: 'BlogAll',
        component: () => import('../pages/front/BlogAllView.vue'),
        meta: {
          title: 'Istanvel | Blog',
          login: false,
          admin: false
        }
      },
      {
        path: 'post/:id',
        name: 'post',
        component: () => import('../pages/front/BlogView.vue'),
        meta: {
          title: 'Istanvel | Post',
          login: false,
          admin: false
        }
      },
      {
        path: 'archive',
        name: 'archive',
        component: () => import('../pages/front/ArchiveView.vue'),
        meta: {
          title: 'Istanvel | My Archive',
          login: true,
          admin: false
        }
      },
      {
        path: 'TransportAll',
        name: 'TransportAll',
        component: () => import('../pages/front/Transportation/TransAllView.vue'),
        meta: {
          title: 'Istanvel | Transportation',
          login: true,
          admin: false
        }
      },
      {
        path: 'metro',
        name: 'metro',
        component: () => import('../pages/front/Transportation/MetroView.vue'),
        meta: {
          title: 'Istanvel | Metro',
          login: false,
          admin: false
        }
      },
      {
        path: 'tramvay',
        name: 'tramvay',
        component: () => import('../pages/front/Transportation/TramView.vue'),
        meta: {
          title: 'Istanvel | Tram',
          login: false,
          admin: false
        }
      },
      {
        path: 'Marmaray',
        name: 'Marmaray',
        component: () => import('../pages/front/Transportation/MarmarayView.vue'),
        meta: {
          title: 'Istanvel | Marmaray',
          login: false,
          admin: false
        }
      },
      {
        path: 'Top10',
        name: 'Top10',
        component: () => import('../pages/front/TopView.vue'),
        meta: {
          title: 'Istanvel | TOP10',
          login: false,
          admin: false
        }
      }
    ]
  },
  // Chinese version--------------------------------------------------------------
  {
    path: '/CH_MainLayout',
    component: () => import('layouts/CH_MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/CH_front/CH_IndexPage.vue'),
        meta: {
          title: 'istanvel',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'CH_login',
        component: () => import('../pages/CH_front/CH_LoginView.vue'),
        meta: {
          title: 'Istanvel | Login',
          login: true,
          admin: false
        }
      },
      {
        path: 'ToursAll',
        name: 'CH_ToursAll',
        component: () => import('../pages/CH_front/CH_ToursAllView.vue'),
        meta: {
          title: 'Istanvel | 行程探索',
          login: false,
          admin: false
        }
      },
      {
        path: 'ActivitiesAll',
        name: 'CH_ActivitiesAll',
        component: () => import('../pages/CH_front/CH_ActivitiesAllView.vue'),
        meta: {
          title: 'Istanvel | 活動資訊',
          login: false,
          admin: false
        }
      },
      {
        path: 'tour/:id',
        name: 'CH_tour',
        component: () => import('../pages/CH_front/CH_TourView.vue'),
        meta: {
          title: 'Istanvel | 行程',
          login: false,
          admin: false
        }
      },
      {
        path: 'activity/:id',
        name: 'CH_activity',
        component: () => import('../pages/CH_front/CH_ActivityView.vue'),
        meta: {
          title: 'Istanvel | 活動',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'CH_cart',
        component: () => import('../pages/CH_front/CH_CartView.vue'),
        meta: {
          title: '購物網 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'CH_order',
        component: () => import('../pages/CH_front/CH_OrderView.vue'),
        meta: {
          title: 'Istanvel | 訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'BlogAll',
        name: 'CH_BlogAll',
        component: () => import('../pages/CH_front/CH_BlogAllView.vue'),
        meta: {
          title: 'Istanvel | 土耳其大小事',
          login: false,
          admin: false
        }
      },
      {
        path: 'post/:id',
        name: 'CH_post',
        component: () => import('../pages/CH_front/CH_BlogView.vue'),
        meta: {
          title: 'Istanvel | 文章',
          login: false,
          admin: false
        }
      },
      {
        path: 'archive',
        name: 'CH_archive',
        component: () => import('../pages/CH_front/CH_ArchiveView.vue'),
        meta: {
          title: 'Istanvel | 我的收藏',
          login: true,
          admin: false
        }
      }
    ]

  },
  // admin-----------------------------------------------------------------------
  {
    path: '/admin',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('../pages/admin/HomeView.vue'),
        meta: {
          title: 'Istanvel | 後台管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'members',
        name: 'members',
        component: () => import('../pages/admin/MembersView.vue'),
        meta: {
          title: 'Istanvel | 會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'adim-orders',
        component: () => import('../pages/admin/OrdersView.vue'),
        meta: {
          title: 'Istanvel | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'tours',
        name: 'adim-tours',
        component: () => import('../pages/admin/ToursView.vue'),
        meta: {
          title: 'Istanvel | 行程管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'activities',
        name: 'adim-activities',
        component: () => import('../pages/admin/ActivitiesView.vue'),
        meta: {
          title: 'Istanvel | 活動管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('../pages/admin/PostsView.vue'),
        meta: {
          title: 'Istanvel | 文章管理',
          login: true,
          admin: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
