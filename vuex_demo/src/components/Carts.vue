<template>
    <div>
        <header class="bar bar-header bar-assertive">
            <span class="title">购物车</span>
        </header>

        <header class="bar bar-subheader bar-dark">
            <span class="title">商品数量：0 总金额: 0</span>
        </header>
        <section class="content scroll-content overflow-scroll has-header has-footer has-subheader">
            <ul class="list">
                <li v-for="n in list"  class="item item-thumbnail-left"  >
                    <img  :src="n.pic"/>
                    <h3>{{n.title}}</h3>
                    <p>单价: {{n.pric}}</p>
                    <p class="box">数量:
                        <span >-</span>
                        <span><input type="number" v-model="n.qal" ></span>
                        <span >+</span>
                    </p>
                </li>

            </ul>
        </section>
        <footer class="tabs tabs-dark tabs-icon-top">
            <div class="tab-item">
                <i class="icon ion-ios-home"></i>
                首页
            </div>
            <div class="tab-item">
                <i class="icon ion-ios-home"></i>
                首页
            </div>
            <div class="tab-item">
                <i class="icon ion-ios-home"></i>
                首页
            </div>
            <div class="tab-item has-badge">
                <i class="badge badge-assertive">0</i>
                <i class="icon ion-ios-home"></i>
                购物车
            </div>
            <div class="tab-item">
                <i class="icon ion-ios-home"></i>
                首页
            </div>
        </footer>

    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from "vuex"
    export default {
        computed:{
            ...mapGetters({
                list:"GETPROLIST"
            })
        },
        created(){
            this.$store.dispatch("GETCARTS")
        }
    }
</script>

<style scoped>

</style>