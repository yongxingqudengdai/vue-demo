// 引入mock模块
import Mock from 'mockjs'

// json文件不需要对外暴露
import banner from './banner.json'
import floor from './floor.json'

//mock数据 par1:request address par2:request data 
Mock.mock("/mock/banner", {code:200,data:banner});  //模拟轮播图数据
Mock.mock("/mock/floor", {code:200,data:floor});  //模拟floor数据
