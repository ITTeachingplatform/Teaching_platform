<template>
  <div id="student_platform">
      <Student activeIndex='6'></Student>
      <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">平台信息</el-row>
<el-row type='flex' justify="center">
  <div class="block" style="width:900px;margin-top:10px">
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="平台信息" name="first" >
          (IT项目管理)课程管理平台是由本项目小组在《软件项目管理和质量工程》课程中的大作业作品。
        </el-tab-pane>
        <el-tab-pane label="版本特性" name="second">
          <template>
              <el-table
                :data="tableData"
                style="width: 100%; text-align:left">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="版本号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="功能">
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>
        <el-tab-pane label="用户手册" name="third"></el-tab-pane>    
      </el-tabs>
  </div>
</el-row>

  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
export default {
    name: 'Student_platform',
      components: {
        'Student': Student,
      },
            data() {
        return {
          activeName2: 'first',
          tableData: [{
            date: '2017-11-21',
            name: '1.0',
            address: '只有前端'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }   
}
</script>

<style scoped>
.el-tab-pane{
  padding:20px 15px;
}
</style>