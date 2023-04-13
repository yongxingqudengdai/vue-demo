<template>
  <div>
    <div class="pagination">
      <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo - 1)">上一页</button>
      <button v-if="startNumAndEndNum.start >1" @click="$emit('getPageNo', 1)">1</button>
      <button v-if="startNumAndEndNum.start >= 3">···</button>
      <button v-for="(index) in continues" :key="index">
        {{ startNumAndEndNum.start +index -1 }}
      </button>
      <!-- <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="page >= startNumAndEndNum.start">
      {{ page }}
      </button> -->
      <h3>(Test)start:{{ startNumAndEndNum.start  }},end:{{ startNumAndEndNum.end  }},current:{{ pageNo }}</h3>

      <button v-if="startNumAndEndNum.end <= totalPage -2 ">···</button>
      <button v-if="startNumAndEndNum.end < totalPage">{{totalPage}}</button>
      <button>下一页</button>

      <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage(){
      // ***Math.ceil向上取整
      return Math.ceil(this.total / this.pageSize );
    },
    startNumAndEndNum(){
      let start = 0, end = 0 ;
      // 情况1：总页数小于连续页码
      if(this.continues > this.totalPage){
        start = 1;
        end = totalPage;
      }else{
        // parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数（向下取整），radix 是 2-36 之间的整数，表示被解析字符串的进制数。
        start = this.pageNo - parseInt(this.continues /2 );
        end = this.pageNo + parseInt(this.continues /2 );
        if(start < 1){
          start = 1;
          end = this.continues;
        }
        if(end > this.totalPage){
          end = this.totalPage;
          start = this.totalPage - this.continues + 1; 
        }
      }
      return { start,end };
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  // ***居中样式
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
