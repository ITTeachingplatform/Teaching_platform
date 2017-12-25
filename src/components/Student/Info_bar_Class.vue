<!--学习中心的教学资讯卡片-->
<template>
  <div id="Info_bar_Class">
    <el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">课程选择</el-row>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-row type="flex" justify="center">
        <el-table ref="singleTable" :data="allClass" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="course_name" label="本学期课程" width="500"></el-table-column>
          <el-table-column property="teacher_name" label="任课教师" width="120"></el-table-column>
          <el-table-column property="faculty_name" label="所属学院" width="200"></el-table-column>
        </el-table>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default{
    name: 'Info_bar_Class',
    data() {
      return {
        allClass: [
          {course_name: 'aaaaa', teacher_name: 'XXX', faculty_name: 'xxxxxx'},
          {course_name: 'bbbbbb', teacher_name: 'XXX', faculty_name: 'xxxxxx'},
          {course_name: 'ccccc', teacher_name: 'XXX', faculty_name: 'xxxxxx'},
          {course_name: 'dddd', teacher_name: 'XXX', faculty_name: 'xxxxxx'},
          {course_name: 'dddd', teacher_name: 'XXX', faculty_name: 'xxxxxx'}
        ],
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$router.push({path:'/student/courses_view'});
      }
    }
  }
</script>
<style>
  .text {
    font-size: 20px;
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
    width: 440px;
  }
</style>