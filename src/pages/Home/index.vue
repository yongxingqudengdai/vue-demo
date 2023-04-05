<template>
  <!-- TypeNav被全局引入，不需要import -->
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <!-- 未完成 -->
    <!-- <Floor></Floor>
    <Floor></Floor> -->
    <Brand></Brand>
    <button>+1</button>
      <span>store.data={{ data }}</span>
    <button>-1</button>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommand from "./Recommand";
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

import { mapState } from "vuex";
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
  computed:{
    ...mapState['data']
  }
};
</script>

<style>
</style>