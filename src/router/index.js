import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Commodity from '@/components/Commodity'
import Details from '@/components/Details'
import OrderDetails from '@/components/OrderDetails'
import MemberCenter from '@/components/MemberCenter'
import Order from '@/components/member/orderCenter/Order'
import OrderAudit from '@/components/member/orderCenter/OrderAudit'
import OrderAuditFailed from '@/components/member/orderCenter/OrderAuditFailed'
import OrderFinish from '@/components/member/orderCenter/OrderFinish'
import AccountInfo from '@/components/member/accountCenter/AccountInfo'
import AccountSafe from '@/components/member/accountCenter/AccountSafe'
import SearchGoods from '@/components/SearchGoods'

import YouBei from '@/components/milk/freshMilk/YouBei'
import ZhiYou from '@/components/milk/freshMilk/ZhiYou'
import ChunXian from '@/components/milk/freshMilk/ChunXian'
import Children from '@/components/milk/freshMilk/Children'
import BoBox from '@/components/milk/freshMilk/BoBox'
import NongXiang from '@/components/milk/freshMilk/NongXiang'
import DiZhi from '@/components/milk/freshMilk/DiZhi'
import NiuRu from '@/components/milk/freshMilk/NiuRu'

import BaiXue from '@/components/milk/freshYogurt/BaiXue'
import ChangYou from '@/components/milk/freshYogurt/ChangYou'
import RuShi from '@/components/milk/freshYogurt/RuShi'
import ShangWei from '@/components/milk/freshYogurt/ShangWei'
import JianNeng from '@/components/milk/freshYogurt/JianNeng'
import ErTongJianNeng from '@/components/milk/freshYogurt/ErTongJianNeng'
import FengWeiYogurt from '@/components/milk/freshYogurt/FengWeiYogurt'

import ChildrenMilk from '@/components/milk/childrenmilk/ChildrenMilk'
import ChildrenJianNeng from '@/components/milk/childrenmilk/ChildrenJianNeng'

import MoLiSiAn from '@/components/milk/box/MoLiSiAn'
import YuChunMilk from '@/components/milk/box/YuChunMilk'

import HanNaiLao from '@/components/milk/cheese/HanNaiLao'

import ImportMilk from '@/components/milk/naifen/ImportMilk'

import Goods from '@/components/Goods'
import Car from '@/components/Car'

import Introduce from '@/components/Introduce'
import Contact from '@/components/introduce/Contact'
import Brief from '@/components/introduce/Brief'
import Recruit from '@/components/introduce/Recruit'
import FriendlyLinks from '@/components/introduce/FriendlyLinks'
import Problem from '@/components/introduce/Problem'
import Law from '@/components/introduce/Law'
import CopyrightNotice from '@/components/introduce/CopyrightNotice'
import Cancel from '@/components/introduce/Cancel'
import Pay from '@/components/introduce/Pay'
import Map from '@/components/introduce/Map'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details
  },
  {
    path: '/OrderDetails',
    name: 'OrderDetails',
    component: OrderDetails
  },
  {
    path: '/OrderDetails',
    name: 'OrderDetails',
    component: OrderDetails
  },
  {
    path: '/Introduce',
    name: 'Introduce',
    component: Introduce,
    children: [
      {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: '/Brief',
        name: 'Brief',
        component: Brief,
      },
      {
        path: '/Recruit',
        name: 'Recruit',
        component: Recruit,
      },
      {
        path: '/FriendlyLinks',
        name: 'FriendlyLinks',
        component: FriendlyLinks,
      },
      {
        path: '/Problem',
        name: 'Problem',
        component: Problem,
      },
      {
        path: '/Law',
        name: 'Law',
        component: Law,
      },
      {
        path: '/CopyrightNotice',
        name: 'CopyrightNotice',
        component: CopyrightNotice,
      },
      {
        path: '/Cancel',
        name: 'Cancel',
        component: Cancel,
      },
      {
        path: '/Pay',
        name: 'Pay',
        component: Pay,
      },
      {
        path: '/Map',
        name: 'Map',
        component: Map,
      }
    ]
  },
  {
    path: '/MemberCenter',
    name: 'MemberCenter',
    component: MemberCenter,
    children: [
      {
        path: '/Order',
        name: 'Order',
        component: Order,
      },
      {
        path: '/OrderAudit',
        name: 'OrderAudit',
        component: OrderAudit,
      },
      {
        path: '/OrderAuditFailed',
        name: 'OrderAuditFailed',
        component: OrderAuditFailed,
      },
      {
        path: '/OrderFinish',
        name: 'OrderFinish',
        component: OrderFinish,
      },
      {
        path: '/AccountInfo',
        name: 'AccountInfo',
        component: AccountInfo,
      },
      {
        path: '/AccountSafe',
        name: 'AccountSafe',
        component: AccountSafe,
      }
    ]
  },
  {
    path: '/commodity',
    name: 'Commodity',
    component: Commodity,
    children: [
      {
        path: '/SearchGoods',
        name: 'SearchGoods',
        component: SearchGoods
      },
      {
        path: '/ZhiYou',
        name: 'ZhiYou',
        component: ZhiYou
      },
      {
        path: '/YouBei',
        component: YouBei
      },
      {
        path: '/ChunXian',
        component: ChunXian
      },
      {
        path: '/Children',
        component: Children
      },
      {
        path: '/BoBox',
        component: BoBox
      },
      {
        path: '/NongXiang',
        component: NongXiang
      },
      {
        path: '/DiZhi',
        component: DiZhi
      },
      {
        path: '/NiuRu',
        component: NiuRu
      },
      {
        path: '/BaiXue',
        component: BaiXue
      },
      {
        path: '/ChangYou',
        component: ChangYou
      },
      {
        path: '/RuShi',
        component: RuShi
      },
      {
        path: '/ShangWei',
        component: ShangWei
      },
      {
        path: '/JianNeng',
        component: JianNeng
      },
      {
        path: '/ErTongJianNeng',
        component: ErTongJianNeng
      },
      {
        path: '/FengWeiYogurt',
        component: FengWeiYogurt
      },
      {
        path: '/ChildrenMilk',
        component: ChildrenMilk
      },
      {
        path: '/ChildrenJianNeng',
        component: ChildrenJianNeng
      },
      {
        path: '/MoLiSiAn',
        component: MoLiSiAn
      },
      {
        path: '/YuChunMilk',
        component: YuChunMilk
      },
      {
        path: '/HanNaiLao',
        component: HanNaiLao
      },
      {
        path: '/ImportMilk',
        component: ImportMilk
      },
    ]
  },
  {
    path: '/Goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/Car',
    name: 'Car',
    component: Car
  },

]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

// export default router
