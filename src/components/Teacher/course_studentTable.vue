<template>
  <div id="course_studentTable">
      
   <el-row style="margin-top:20px">
       
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="学号"
      width="180px">
      <template slot-scope="scope" >
        <router-link to=''><span style="margin-left: 10px" @click="show_info(scope.$index)">{{ scope.row.id }}</span></router-link>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
      width="150px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>info: 可以显示额外信息</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

      <el-table-column label="学院" width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.department }}</span>
      </template>
      </el-table-column>

            <el-table-column label="专业" width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.major }}</span>
      </template>
            </el-table-column>

            <el-table-column label="班级" width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.class }}</span>
      </template>
            </el-table-column>

    <el-table-column label="操作" width="150px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>

   <!-- 弹出信息框 -->

<el-dialog
  title="学生信息"
  :visible.sync="info_Visible"
  width="70%">
  <el-row>姓名：{{name}}</el-row>
  <el-row>学号：{{id}}</el-row>
  <el-row>密码：{{password}}</el-row>
  <el-row>个人简介：{{introduce}}</el-row>
  <el-row>学院：{{school}}</el-row>
  <el-row>专业：{{major}}</el-row>
  <el-row>班级：{{grade}}</el-row>
  <el-row>联系方式：{{email}}</el-row>
    <el-table :data="gridData">
    <el-table-column property="subject" label="课程名称" ></el-table-column>
    <el-table-column property="school" label="开设学院" ></el-table-column>
    <el-table-column property="teacher" label="任课老师" ></el-table-column>
    <el-table-column property="score" label="平时成绩" ></el-table-column>
  </el-table>
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="info_Visible = false">取 消</el-button>
    <el-button type="primary" @click="info_Visible = false">确 定</el-button>
  </span>
</el-dialog>

     <!-- <el-row type="flex" justify="center"> -->
       <!-- <el-table :data="tableData" border>
         <el-table-column prop="studentNumber" label="学号" width="150">
         </el-table-column>

         <el-table-column prop="name" label="姓名" width="100">
         </el-table-column>

         <el-table-column prop="academy" label="学院" width="200">
         </el-table-column>

         <el-table-column prop="department" label="专业" width="200">
         </el-table-column>

          <el-table-column prop="class" label="班级" width="80">
          </el-table-column>

           <el-table-column prop="grade" label="成绩" width="80">
           </el-table-column>



          

  
        </el-table>

        <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible=true">导出</el-button>
       
       <!-- 导出学生对话框 -->
          <!-- <el-dialog title="导出学生" :visible.sync="dialogFormVisible">
            <span>是否导出学生?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible=false">取消</el-button>
              <el-button type="primary" @click="dialogFormVisible=false">确定</el-button>
            </span>
          </el-dialog> --> 

    
  


        
    
       


      
       <!-- <el-button style="margin-top:20px">删除</el-button> -->
    <!-- </el-row>    -->
  </div>
</template>


<script>
import store from '../../vuex/teacher/store'
import student_table from '../Student_table'
export default { 
    name: 'course_studentTable',
    components: {
      'student-table':student_table
    },
   // store,
   data(){
       return{
           dialogFormVisible: false,
           formLabelWidth: '120px',
           info_Visible: false,
           form: {
               studentNumber:'',
          name: '',
          academy:'',
          department: '',
          class: '',
          grade:'',
         
        },
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        },
student_info:{
  name:'',
  id:'',
  introduce:'',
  school:'',
},
           
           tableData:[]

           }
         },
         methods: {
        show_info(index){
        this.info_Visible = true;
        console.log(index);
        },

         },
      mounted(){
        this.$http.post('/api/load_one_course_allstudent', {
                    course_id: this.$route.params.course_id,
                    teacher_id:store.state.teacher_account.id,
                  },{}).then((response) => {
                    console.log(response.body[0]);
                    var stu_list = response.body[0];
                    for(var i in stu_list){
                      var t = new Array()
                      t['id']=stu_list[i].student_ID;
                      t['name']=stu_list[i].student_name;
                      t['department']=stu_list[i].faculty_name;                      
                      t['major']=stu_list[i].major_name;
                      t['class']=stu_list[i].class_name;
                     this.tableData.push(t)
                    }
                  })
      },


      
   }
    
    

</script>