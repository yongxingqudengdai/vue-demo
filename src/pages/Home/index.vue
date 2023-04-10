<template>
  <!-- TypeNav被全局引入，不需要import -->
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <!-- Floor组件 -->
    <Floor v-for="(item,index) in floorList" :key="item.id" :list="item"> </Floor>
    <Brand></Brand>
    <!-- <button @click="ADD">+1</button>
    <span>{{ count }}</span>
    <button @click="MINUS">-1</button> -->
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommand from "./Recommand";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted(){
    // 派发action获取floor.json数据
    this.$store.dispatch("home/floorList");
  },
  computed: {
    ...mapState("home", ["count"]),
    // 正常return写法
    //   count() {
    //     return this.$store.state.count;
    //   },
    ...mapState("home",["floorList"])
  },
  methods: {
    ...mapMutations("home", { ADD: "ADD", MINUS: "MINUS" }),
  },
};
</script>

<style>
</style>