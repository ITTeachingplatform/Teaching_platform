<template>
  <div id="student_courses_view">
      <Student activeIndex='2'></Student>
      <div align="center">
        
      </div>
  </div>
</template>

<script>
import Student from '../../components/Student/Student.vue';
import store from '../../vuex/student/store'
export default {
    name: 'student_courses_view',
    components: {
        'Student': Student,
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
