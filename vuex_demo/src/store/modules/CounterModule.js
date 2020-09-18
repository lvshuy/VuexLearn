export default {
    //共享的组件状态数据
    state:{
        num:10,
        list:[]
    },
    //mutaions是用来修改state的状态
    //是store中唯一用来修改状态的值
    mutations:{
        INC:(state,payload)=>{
            state.num++
        }
    },
    //用来监听外部组件的动作请求，
    //可以执行异步(async)操作
    actions:{
        ADD:(store,args)=>{
            //逻辑 , api
            setTimeout(()=>{
                // 设置2秒后执行ADD操作
                store.commit("INC",args)
            },2000)     
        }
    },
    // actions:{
    //     ADD:(store,args)=>{
    //         //逻辑 , api
    //         store.commit("INC",args)
    //     }
    // },
    //通过getters来访问状态
    getters:{
        GETNUM:(state)=>{
            return state.num
        }
    }
}