import Vue from "vue"
import Vuex from "vuex"
import CounterModule from "./modules/CounterModule"
import CartsModule from "./modules/CartsModule"
Vue.use(Vuex)


let store = new Vuex.Store({
    //用来管理不同类型的状态的方式,
    modules:{
        CounterModule,
        CartsModule
    }
})

export default store