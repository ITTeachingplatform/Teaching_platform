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
          <template slot-scope="scope">
            <span>
              <!-- {name:'teacher_post',params:{post_id:scope.row.id}} -->
              <router-link to="#">{{scope.row.course }}</router-link>
            </span>
          </template>                    
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="标题"
                    width="180">
          <template slot-scope="scope">
            <span>
              <router-link to="#">{{scope.row.name }}</router-link>
            </span>
          </template>                    
                </el-table-column>
                <el-table-column
                    prop="t_class"
                    label="教学班">
          <template slot-scope="scope">
            <span>
              <router-link to="#">{{scope.row.t_class }}</router-link>
            </span>
          </template>
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="未批改数量">
          <template slot-scope="scope">
            <span>
              <router-link to="#">{{scope.row.number }}</router-link>
            </span>
          </template>                    
                </el-table-column>
                </el-table>     
      <!-- 课程选择 -->
        <div style="margin:20px">
          <span style="font-size:36px">课程选择</span>
        </div>
        <el-progress :percentage="100" :show-text="false"></el-progress>
        <el-table
        :data="courseData"
        style="width:100%">
        <el-table-column
          label="课程编号"
          width="250">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              <!-- @click="toPost(scope.$index)" -->
              {{scope.row.course_id }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" width="300">
          <template slot-scope="scope">
            <span style="margin-left:10px">{{ scope.row.course_name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="教学班" >
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.t_class_id }}</span>
          </template>
        </el-table-column>
         <el-table-column label="操作" >
          <template slot-scope="scope">
            <router-link :to="{name:'course_page',params:{t_class_id:scope.row.t_class_id,course_id:scope.row.course_id}}"><el-button type="primary" round size="small">查 看</el-button></router-link>
            <!-- <el-button type="primary" round size="small">查 看</el-button> -->
          </template>
        </el-table-column>
        </el-table>
        </div> 
      </div>

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
            courseData:[],
            tableData: []
          
        }
      },
      mounted () {
          this.$http.post('/api/get/load_allCourse_one_teacher', {
          teacher_id: store.state.teacher_account.id
          },{}).then((response) => {
          console.log(response.body);
          var course_list = response.body[0];
          try {
            for(var i in course_list){
              var t = new Array();
              t['course_name'] = course_list[i].course_name;
              t['course_id'] = course_list[i].course_ID;
              t['t_class_id'] = course_list[i].t_class_ID;
              this.courseData.push(t);
            }
            console.log('finish loading course list');
          } catch (error) {
            console.log('Error when loading course list!!' + error)
          }                       
          })
          this.$http.post('/api/get_UnCorrectHomework_one_teacher', {
          teacher_id: store.state.teacher_account.id
          },{}).then((response) => {
          console.log(response.body);
          var course_list = response.body[0];
          try {
            for(var i in course_list){
              var t = new Array();
              t['course'] = course_list[i].homework_name;
              t['name'] = course_list[i].homework_name;
              t['t_class'] = course_list[i].t_class_ID;
              t['number'] = course_list[i].num;
              this.tableData.push(t);
            }
            console.log('finish loading homework list');
          } catch (error) {
            console.log('Error when loading homework list!!' + error)
          }                       })

          
      },
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
