<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- transition anime -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- goSearch()利用 -->
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一级分类 -->
              <div
                class="item"
                v-for="(item, index) in categoryList"
                :key="item.categoryId"
              >
                <h3
                  :class="{ skyblue: currentIndex === index }"
                  @mouseenter="changeIndex(index)"
                >
                  <a
                    :data-categoryName="item.categoryName"
                    :data-category1Id="item.categoryId"
                    >{{ item.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <!-- 二级分类 -->
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="(subitem, index) in item.categoryChild"
                      :key="subitem.categoryId"
                    >
                      <dt>
                        <!-- data-是自定义属性，通过dataset获取 -->
                        <a
                          :data-categoryName="subitem.categoryName"
                          :data-category2Id="subitem.categoryId"
                          >{{ subitem.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 三级分类 -->
                        <em
                          v-for="(subsubitem, index) in subitem.categoryChild"
                          :key="subsubitem.catsegoryId"
                        >
                          <a
                            :data-categoryName="subitem.categoryName"
                            :data-category3Id="subsubitem.categoryId"
                            >{{ subsubitem.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

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
      show: true,
    };
  },

  // 挂载完毕后再向服务器发请求
  mounted() {
    // 调用actions方法
    if(this.$route.path != "/home"){
      this.show = false;
    }
    // 在app.vue中派发，避免多次挂载中的频繁请求
    // this.$store.dispatch("home/categoryList");
  },
  computed: {
    ...mapState({
      // 下文的简写形式：
      categoryList: (state) => state.home.categoryList,
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
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),

    goSearch(event) {
      // 获取触发该事件的html节点
      let element = event.target;
      // dataset获取节点上的自定义数据属性
      // 花括号表示解构赋值语法
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      // 如果有categoryname属性那就是a标签
      if (categoryname) {
        let location = { name: "search" }; //rouer.push
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        if (this.$route.params) {
          // 搜索框用params，三级导航用query
          location.params = this.$route.params;
          location.query = query;
        }
        // 路由跳转
        this.$router.push(location);
      }
    },
    enterShow() {
      // 只有搜索组件才会进来显示
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    leaveShow() {
      this.currentIndex = -1;
      // 只有搜索组件才会隐藏
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
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
            &.skyblue {
              background: skyblue;
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
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>