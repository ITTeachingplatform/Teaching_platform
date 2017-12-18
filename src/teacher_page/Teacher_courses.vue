<!--教师 管理课程-->
<template>
  <div id="teacher_courses">
      <!-- 导航栏 -->
      <Teacher activeIndex='4'></Teacher>
      <div align="center">
        <div class="container">
        <!-- 未批改作业 -->    
                <div style="margin:20px">
                <span style=" font-size:36px">未批改作业</span>
                </div>
                <el-progress :percentage="100" :show-text="false"></el-progress>
                <el-table
                :data="tableData"
                style="width:100%">
                <el-table-column
                    prop="course"
                    label="课程"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="标题"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="t_class"
                    label="教学班">
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="未批改数量">
                </el-table-column>
                </el-table>     
      <!-- 课程选择 -->
                <div style="margin:20px">
          <span style="font-size:36px">课程选择</span>
                </div>
            <el-progress :percentage="100" :show-text="false"></el-progress>
            <el-row :gutter="20">
              <el-col :span="8"><div class="grid-content bg-purple">
                <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>项目管理</span>
                <router-link to="/course_page"><el-button style="float: right; padding: 3px 0" type="text">查看</el-button></router-link>
              </div>
              <div class="text item">
                <p>课程编号：xxx</p>
                <p>教学班：xxx</p>
              </div>
            </el-card></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>软件架构</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
              </div>
              <div class="text item">
                <p>课程编号：xxx</p>
                <p>教学班：xxx</p>
              </div>
            </el-card></div></el-col>
            </el-row>
            <router-view></router-view>
        </div> 
      </div>


</el-row>



  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import store from '../vuex/teacher/store'
export default {
    name: 'teacher_courses',
    components: {
        'Teacher': Teacher,
    },
    store,
    data() {
        return {
            course: '',
            name: '',
            t_class: '',
            number: '',
          tableData: [{
            course: '2016-05-02',
            name: '王小虎',
            t_class: '上海市普陀区金沙江路 1518 弄',
            number: '44'
          }, {
            course: '2016-05-02',
            name: '王小虎',
            t_class: '上海市普陀区金沙江路 1518 弄',
            number: '44'
          }, {
            course: '2016-05-02',
            name: '王小虎',
            t_class: '上海市普陀区金沙江路 1518 弄',
            number: '44'
          }, {
            course: '2016-05-02',
            name: '王小虎',
            t_class: '上海市普陀区金沙江路 1518 弄',
            number: '44'
          }]
        }
      }
}
</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .container {
    width:900px;
  }
</style>
