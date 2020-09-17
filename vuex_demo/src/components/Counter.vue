<template>
    <div>
        <h1>counter:{{num}}</h1>
        <input type="button" value="+" @click="update" />
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters,mapActions} from "vuex"
    export default {
        computed:{
            //把计算属性中的属性map到store中的getters对应的事件上
            ...mapGetters({
                num:"GETNUM"
            })
        },
        methods:{
//            update(){
//                //发起请求,store修改num +1
//                // actions, ADD
//                this.$store.dispatch("ADD",1)
//            }
            ...mapActions({
                update:"ADD"
            })
        }
    }
</script>

<style scoped>

</style>