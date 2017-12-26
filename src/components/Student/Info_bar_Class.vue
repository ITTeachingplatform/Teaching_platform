<!--学习中心的教学资讯卡片-->
<template>
  <div id="Info_bar_Class">
    <el-row type="flex" justify="center" style="font-size:40px;margin-top:10px;margin-bottom:10px;">课程选择</el-row>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-row type="flex" justify="center">
        <el-table ref="singleTable" :data="allClass" highlight-current-row @current-change="handleCurrentChange" style="float: center;width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="本学期课程" width="500">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.course_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="任课教师" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.teacher_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所属学院" width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.faculty_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="primary" size="mini" round>查看</el-button>
            </template>
         </el-table-column>
        </el-table>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import store from '../../vuex/student/store';
  export default{
    name: 'Info_bar_Class',
    components: {
    },
    data() {
      return {
        allClass: [],
      }
    },
    mounted (){
      this.$http.post('/api/get/one_student_allClass', {
        student_id: store.state.student_account['id']
      },{}).then((response) => {
        console.log(response.body);
        var class_list = response.body[0];
        for(var i in class_list){
          var t = new Array()
          t['course_name']=class_list[i].course_name;
          t['teacher_name']=class_list[i].teacher_name;
          t['faculty_name']=class_list[i].faculty_name;
          t['t_class_ID']=class_list[i].t_class_ID;
          t['course_ID']=class_list[i].course_ID;
          this.allClass.push(t);
        }
      })
    },
    methods: {
      handleCurrentChange(index) {
        this.currentRow = index;
        // this.$router.params.id;
      },
      handleClick(row) {
        console.log(row);
        const one_t_class_id = row.t_class_ID;
        const one_course_id = row.course_ID;
        this.$router.push({name:'Student_courses_view', params: {course_id: one_course_id, t_class_id: one_t_class_id}});
      },
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