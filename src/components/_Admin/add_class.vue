<template>
<div id="add_class">
  <Admin activeIndex='5'> </Admin>
  <el-row style="font-size:50px;margin-top:20px">
        {{manage_lesson_des}}
</el-row>

  <el-card class="box-card" style="margin-left:20%;margin-right:20%;margin-top:15px">
  <div slot="header" class="clearfix">
    <span>课程基本信息</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row type="flex" justify="start">  
      <el-form-item label="课程名称" prop="subject">
    <el-input v-model="ruleForm.subject"></el-input>
  </el-form-item>
    <el-form-item label="任课老师" prop="teacher">
  <el-input v-model="ruleForm.teacher"></el-input>
  </el-form-item>

    <el-form-item label="开设学院" prop="school">
  <el-input v-model="ruleForm.school"></el-input>
  </el-form-item>
  </el-row>
  <el-form-item label="课程介绍" prop="introduce">
    <!-- <el-row type="flex" justify="end"><el-button round size="small" style="margin-bottom:5px">上传word文档</el-button></el-row> -->
    <el-row><el-input type="textarea" :rows="5" v-model="ruleForm.introduce"></el-input></el-row>
  </el-form-item>
  <el-form-item label="教学大纲" prop="plan">
   <!-- <el-row type="flex" justify="end"><el-button round size="small" style="margin-bottom:5px">上传word文档</el-button></el-row> -->
    <el-row><el-input type="textarea" :rows="5" v-model="ruleForm.plan"></el-input></el-row>
  </el-form-item>
</el-form>
  </el-card>


  <el-card class="box-card" style="margin-left:20%;margin-right:20%;margin-top:15px">
  <div slot="header" class="clearfix">
    <span>课程学生列表</span>
    <el-button style="float: right;padding: 3px 0" type="text" @click="show_all">查看所有未添加学生</el-button>
  </div>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-row type="flex" justify="start">
    <el-form-item label="所属学院" prop="belong_school">
  <el-input v-model="ruleForm.belong_school"></el-input>
  </el-form-item>

    <el-form-item label="所属专业" prop="belong_major">
  <el-input v-model="ruleForm.belong_grade"></el-input>
  </el-form-item>
  </el-row>

  <el-row type="flex" justify="start">
      <el-form-item label="所属班级" prop="belong_class">
  <el-input v-model="ruleForm.belong_class"></el-input>
  </el-form-item>
  <el-button round style="margin-bottom:4%;margin-left:2%" @click="load_this_course_student">预览已添加学生</el-button>
    <el-button round  style="margin-bottom:4%" @click="search_student">搜索未添加学生</el-button>
  <el-button round  style="margin-bottom:4%" @click="reset_form">重置搜索条件</el-button>
  </el-row>
</el-form>

<el-row style="margin-top:20px">
       
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="学号"
      width="180px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
      width="100px">
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

      <el-table-column label="学院" width="100px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.department }}</span>
      </template>
      </el-table-column>

            <el-table-column label="专业" width="100px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.major }}</span>
      </template>
            </el-table-column>

            <el-table-column label="班级" width="100px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.class }}</span>
      </template>
            </el-table-column>

    <el-table-column label="是否选择" width="100px">
      <template slot-scope="scope">
         <el-checkbox @change="record(scope.$index)"></el-checkbox>
      </template>
    </el-table-column>
  </el-table>
   </el-row>

    

  <!-- <el-button round  style="margin-bottom:4%">添加单个学生</el-button> -->
  <el-button round style="margin-bottom:4%" @click="del_student">批量删除学生</el-button>
    <el-button round  style="margin-bottom:4%" @click="add_students_to_course">批量添加学生</el-button>
  </el-card>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定 创 建 教 学 班</el-button>
</div>  
</template>
<script>
import Admin from '../Admin'
import store from '../../vuex/admin/store'
export default {
   name: 'add_class',
    components: {
        'Admin': Admin,
    },
    data() {
      return {
        lesson_change:false,
        record_arr:[],
        manage_lesson_des:'',
        teacher_id:'',
        course_id:'',
        t_c_id:'',
        tableData: [],
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        },
        ruleForm: {
          belong_school:'',
          belong_major: '',
          belong_class: '',
          teacher:'',
          subject:'',
          school:'',
          introduce:'',
          plan:''
        },
        rules: {

        }
      };
    },
    mounted(){
        if(store.state.change_lesson){
          this.lesson_change=true
          store.state.change_lesson=false
           this.ruleForm.teacher=store.state.manage_lesson[0],
          this.ruleForm.subject=store.state.manage_lesson[1],
          this.ruleForm.school=store.state.manage_lesson[2],
          this.course_id=store.state.manage_lesson[3],
          this.teacher_id=store.state.manage_lesson[4],
          this.t_c_id=store.state.manage_lesson[5],
          this.ruleForm.introduce='',
          this.ruleForm.plan=''
          this.manage_lesson_des='修改课程(教学班)'
        }
        else{
          this.manage_lesson_des='添加课程(教学班)'
        }
        this.$http.post('/api/get', {
                    type: 'student_list'
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var stu_list = response.body;
                    for(var i in stu_list[0]){
                      var t = new Array()
                      // id,name,department,major,class,
                      t['id']=stu_list[0][i].student_ID;
                      t['name']=stu_list[0][i].student_name;
                      t['department']=stu_list[0][i].faculty_name;
                      t['major']=stu_list[0][i].major_name;
                      t['class']=stu_list[0][i].class_name;
                      // console.log(t);
                     this.tableData.push(t)
                    }
                  })
      },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.add_course();
          } else {
            alert('请填写完整的相关信息！');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      show_all(){
        this.tableData=[]
        this.$http.post('/api/get', {
                    type: 'student_list'
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var stu_list = response.body;
                    for(var i in stu_list[0]){
                      var t = new Array()
                      // id,name,department,major,class,
                      t['id']=stu_list[0][i].student_ID;
                      t['name']=stu_list[0][i].student_name;
                      t['department']=stu_list[0][i].faculty_name;
                      t['major']=stu_list[0][i].major_name;
                      t['class']=stu_list[0][i].class_name;
                      // console.log(t);
                     this.tableData.push(t)
                    }
                  })
      },
      reset_form(){
        this.ruleForm={
          belong_school:'',
          belong_grade: '',
          belong_class: ''
        }
      },
       search_student(){
        // if(this.numberValidateForm.id===''&&this.numberValidateForm.name===''&&this.numberValidateForm.department===''&&this.numberValidateForm.major===''&&this.numberValidateForm.class==='')
        //   return;
        this.tableData=[];
         this.$http.post('/api/search_student', {
                    student_ID: '',
                    student_name: '',
                    faculty_name:this.ruleForm.belong_school,
                    major_name:this.ruleForm.major,
                    class_name:this.ruleForm.belong_class,
                  },{}).then((response) => {
                    var stu_list = response.body;
                    for(var i in stu_list[0]){
                      var t = new Array()
                      // id,name,department,major,class,
                      t['id']=stu_list[0][i].student_ID;
                      t['name']=stu_list[0][i].student_name;
                      t['department']=stu_list[0][i].faculty_name;
                      t['major']=stu_list[0][i].major_name;
                      t['class']=stu_list[0][i].class_name;
                      console.log(t)
                     this.tableData.push(t)
                    }
                  })
    },
    add_course(){
      if(this.ruleForm.subject === '数据仓库与数据挖掘'){
        this.course_id='CO000001'
        this.ruleForm.subject = ''
      }
      else if(this.ruleForm.subject === '软件体系结构'){
          this.course_id='CO000002'
          this.ruleForm.subject = ''
      }
      else if(this.ruleForm.subject === '机器学习'){ 
            this.course_id='CO000003'
            this.ruleForm.subject =''
      }
      else{
        this.course_id=''
      }
      if(this.ruleForm.teacher === '闵华清'){
          this.teacher_id='TE000001'
      }
      else if(this.ruleForm.teacher === '王振宇'){
        this.teacher_id='TE000002'
      }
      else{
          this.teacher_id='TE000003'  
      }
      this.$confirm('确认新建教学班级？')
          .then(_ => {
           this.$http.post('/api/add_one_course', {
                    course_id: this.course_id,
                    course_name: this.ruleForm.subject,
                    teacher_id:this.teacher_id,
                    faculty_id:'FA000001',
                    course_introduction:this.ruleForm.introduce,
                    sysllabus:this.ruleForm.plan
                  },{}).then((response) => {
                      var result = response.body;
                      if(result[2]){
                        alert('添加教学班成功！课程班编号为：'+ result[2])
                      }
                      else{
                        alert('添加失败，请确认填写信息已经完整')
                      }
                  })
          })
          .catch(_ => {});
          }, 
    //  load_allStudent_one_course_teacher(course_id,teacher_ID,result)
    load_this_course_student(){
      if(!this.lesson_change)
        return
      this.tableData=[]
      this.$http.post('/api/load_course_student', {
                    course_id: this.course_id,
                    teacher_ID: this.teacher_id
                  },{}).then((response) => {
                    var stu_list = response.body;
                    for(var i in stu_list[0]){
                      var t = new Array()
                      // id,name,department,major,class,
                      t['id']=stu_list[0][i].student_ID;
                      t['name']=stu_list[0][i].student_name;
                      t['department']=stu_list[0][i].faculty_name;
                      t['major']=stu_list[0][i].major_name;
                      t['class']=stu_list[0][i].class_name;
                      console.log(t);
                     this.tableData.push(t)
                    }
                  })
    },
    record(index){
      let i =0;
      console.log(index)
      if(this.record_arr.indexOf(index)===-1)
        this.record_arr.push(index);
      else{
        for(i=0;i<this.record_arr.length;i++){
          if(this.record_arr[i]===index){
            this.record_arr.splice(i,1);
            break
          }
        }
      }
    },
    // add_one_student_one_t_class(t_class_id,student_id,result)
    add_students_to_course(){
      for(var i=0;i<this.record_arr.length;i++){
        try {
           this.$http.post('/api/add_one_student_to_course', {
                   t_class_id:this.t_c_id,
                   student_id:this.tableData[this.record_arr[i]].id
                  },{}).then((response) => {
                    // console.log(response.body);
                    var result = response.body;
                    if(result[1]===0){
                     this.$notify({
                        title: '成功',
                        message: '成功添加编号为'+i.toString()+'的学生!',
                        type: 'success'
                      });
                    }
                  })
        } catch (error) {
          alert('ID为'+this.tableData[this.record_arr[i]].id+'的学生已存在，添加失败！')
        }

      }
    },
    del_student(){
      for(var i=0;i<this.record_arr.length;i++){
            this.tableData.splice(this.record_arr[i],1)   
             this.$notify({
                        title: '成功',
                        message: '成功删除编号为'+i.toString()+'的学生!',
                        type: 'success'
                      });       
      }
    }
  }
}
</script>

