
export default  {
    state:{
        productList:[]
    },
    mutations:{
       CARTS:(state,payload)=>{
           state.productList = payload
       }
    },
    actions:{
      GETCARTS:(store,args)=>{
          fetch("src/data/carts.json")
              .then(res=>{
                  res.json().then(data=>{
                      console.log(data)
                      store.commit("CARTS",data)
                  })
              })
      }
    },
    getters:{
       GETPROLIST:(state)=>{
           return state.productList
       }
    }
}