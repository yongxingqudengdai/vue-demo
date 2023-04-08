<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort">
        <!-- goSearch()利用 -->
        <div class="all-sort-list2" @click="goSearch">
          <!-- 一级分类 -->
          <div
            class="item"
            v-for="(item, index) in categoryList"
            :key="item.categoryId"
            :class="{ cur: currentIndex === index }"
          >
            <h3
              @mouseenter="changeIndex(index)"
              @mouseleave="leaveIndex(index)"
            >
              <router-link to="/search">{{ item.categoryName }}-{{ index }}</router-link>
            </h3>
            <div
              class="item-list clearfix"
              :style="{ display: currentIndex === index ? 'block' : 'none' }"
            >
              <!-- 二级分类 -->
              <div
                class="subitem"
                v-for="(subitem, index) in item.categoryChild"
                :key="subitem.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <router-link to="/search">{{ subitem.categoryName }}</router-link>
                  </dt>
                  <dd>
                    <!-- 三级分类 -->
                    <em
                      v-for="(subsubitem, index) in subitem.categoryChild"
                      :key="subsubitem.categoryId"
                    >
                      <router-link to="/search">{{ subsubitem.categoryName }}</router-link>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入lodash进行业务的防抖与节流
import throttle from "lodash/throttle"; //???为什么不加{}？
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1, //鼠标所在的一级菜单编号
    };
  },

  // 挂载完毕后再向服务器发请求
  mounted() {
    // 调用actions方法
    this.$store.dispatch("home/categoryList");
  },
  computed: {
    ...mapState({
      // 下文的简写形式：
      categoryList:state => state.home.categoryList,
      // categoryList: (state) => {
      //   return state.home.categoryList;
      // },
    }),
  },

  methods: {
    // 鼠标进入一级菜单h3时(普通方法)
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
    //启用节流的方法
    changeIndex:throttle(function(index){
      this.currentIndex = index;
    },50),
    
    // 鼠标离开一级菜单时
    leaveIndex(index) {
      this.currentIndex = -1;
    },
    goSearch(){
      // let node = 
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }

        .cur {
          background: skyblue;
        }
      }
    }
  }
}
</style>