<template>
<div id="manage_id">
    <Admin activeIndex='2'> </Admin>
  <el-row class="tac" type="flex" justify="center">
 
 <el-tabs :tab-position="tabPosition" style="margin-bottom:100px">
    <el-tab-pane label="学生管理">
<Student_table></Student_table>
    </el-tab-pane>

    <el-tab-pane label="教师管理">
<Teacher_table></Teacher_table>
    </el-tab-pane>
  </el-tabs>


  </el-row>
</div>
</template>

<script>
import Admin from '../components/Admin'
import Teacher_table from '../components/Teacher_table'
import Student_table from '../components/Student_table'
  export default {
      components: {
        'Admin': Admin,
        'Teacher_table': Teacher_table,
        'Student_table': Student_table  
      },
       data() {
      return {
        tabPosition: 'left'
      };
    },
      name: 'manage_id',
    methods: {
    }
  }
</script>
<style>
  .box-card {
    width: 700px;
  }
</style>