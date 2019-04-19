import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 全局变量
  // state: {
  //   user: undefined
  // },

  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    user:'',
    tempGoods:{},
    tempCar:{}
  },
  // 修改全局变量必须通过mutations中的方法
  // mutations只能采用同步方法
  mutations: {
    login (state, payload) {
      state.user = payload
    },
    logout (state) {
      state.user = undefined
    },
    saveGoods(state,payload){
      state.tempGoods = payload
    },
    saveCar(state,payload){
      state.tempCar = payload
    }
  },
  // 异步方法用actions
  // actions不能直接修改全局变量，需要调用commit方法来触发mutation中的方法
  actions: {
    login (context, payload) {
      context.commit('login', payload)
    },
    logout (context) {
      context.commit('logout')
    },
    saveGoods(context,payload){
      context.commit('saveGoods', payload)
    },
    saveCar(context,payload){
      context.commit('saveCar', payload)
    }
  }
})

export default store
