<template>
<div id="manage_lesson">
      <Admin activeIndex='5'> </Admin>
<el-row style="font-size:50px;margin-top:20px">
        课程列表
</el-row>
  <router-link to="/admin/add_class">
 <el-button round style="margin-left:600px;margin-bottom:20px" @click="dialogFormVisible = true">添加课程</el-button> 
  </router-link>
<el-row type="flex" justify="center" style="margin-left:50px;margin-right:50px">
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="show_all">查看所有</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="课程名称"
    prop="lesson_name"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="lesson_name" v-model.number="numberValidateForm.lesson_name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>

      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="任课老师"
    prop="name"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>



      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px" class="demo-ruleForm">
  <el-form-item
    label="开设学院"
    prop="pub_department"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search"type="pub_department" v-model.number="numberValidateForm.pub_department" auto-complete="off"></el-input>
  </el-form-item>
</el-form>



  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary" @click="search_course">搜索</el-button>
    <el-button style='width:150px;margin-left:40px' @click="reset_form">重置</el-button>

  </el-row>

</el-card>

      </el-row>
<el-row type="flex" justify="center" style="margin-left:21%">
         
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程名称"
      width="150px">
      <template slot-scope="scope">
           <el-button style="padding: 3px 0" type="text" @click="edit_lesson(scope.$index)">{{ scope.row.lesson_name }}</el-button>
      </template>
    </el-table-column>

    <el-table-column
      label="开设学院"
      width="150px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>学院: {{ scope.row.pub_department }}</p>
          <p>info: 可以显示额外信息</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.pub_department }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

            <el-table-column label="任课老师" width="150px">
               <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
            </el-table-column>

    <el-table-column label="操作" width="150px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>
</div>
</template>


<script>
import Admin from '../components/Admin'
import store from '../vuex/admin/store'
  export default {
      name: 'manage_lesson',
      components: {
        'Admin': Admin
      },
      store,
      data() {
      return {
        tableData:[],
        numberValidateForm: {
          lesson_name: '',
          name: '',
          pub_department: '',
          other_condition: '',
          publish_year: ''
        },
        dialogFormVisible: false,
        form: {
          course_name: '',
          teacher_name: '',
          faculty_name: '',
          course_introduction: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      }
    },
     computed: {
        //  tableData:{
        //   get:function(){
        //       return store.state.lesson_info
        //   }
        //  }
      },
    mounted () {
               this.show_all()
    },     
    methods: {
      handleEdit(index, row) {
        edit_lesson(index);
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
         this.$confirm('确认删除这门课程？')
          .then(_ => {
            // done();
            this.tableData.splice(index,1);
        alert('成功删除该课程！')
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       search_course(){
         if(this.numberValidateForm.lesson_name===''&&this.numberValidateForm.pub_department===''&&this.numberValidateForm.name==='')
          return;
         this.tableData=[];
         this.$http.post('/api/search_course', {
          // find_course_by(course_name,faculty_name,teacher_name,result)
                    course_name: this.numberValidateForm.lesson_name,
                    faculty_name: this.numberValidateForm.pub_department,
                    teacher_name:this.numberValidateForm.name,
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var course_list = response.body[0];
                    console.log(response.body[0])
                    for(var i in course_list){

                      var t = new Array()
                      t['course_ID']=course_list[i].course_ID;
                      t['teacher_id']=course_list[i].teacher_id;
                      t['lesson_name']=course_list[i].course_name;

                      t['pub_department']=course_list[i].faculty_name;
                t['t_class_ID']=course_list[i].t_class_ID;
                      t['name']=course_list[i].teacher_name;

                          this.tableData.push(t)
                    }
                  })
      },
      //重置表格
      reset_form(){
     this.numberValidateForm={
          lesson_name: '',
          name: '',
          pub_department: '',
        }
      },
      show_all(){
        this.tableData=[]
        this.$http.post('/api/get', {
                    type: 'course_list'
                  },{}).then((response) => {
                    // console.log(response.body);
                    var cou_list = response.body;
                    console.log(cou_list[0]);
                    for(var i in cou_list[0]){
                      var t = new Array()
                      t['course_ID']=cou_list[0][i].course_ID;
                      t['teacher_id']=cou_list[0][i].teacher_id;
                      t['lesson_name']=cou_list[0][i].course_name;
                      t['pub_department']=cou_list[0][i].faculty_name;
                      t['name']=cou_list[0][i].teacher_name;
                      t['t_class_ID']=cou_list[0][i].t_class_ID;
                     this.tableData.push(t)
                    }
                  })
      },
      edit_lesson(index){
          store.state.change_lesson=true
          store.state.manage_lesson=[]
          store.state.manage_lesson.push(this.tableData[index]['name'])
          store.state.manage_lesson.push(this.tableData[index]['lesson_name'])
          store.state.manage_lesson.push(this.tableData[index]['pub_department'])
          store.state.manage_lesson.push(this.tableData[index]['course_ID'])
          store.state.manage_lesson.push(this.tableData[index]['teacher_id'])
          store.state.manage_lesson.push(this.tableData[index]['t_class_ID'])
          console.log(store.state.manage_lesson)
           this.$router.push({path:'/admin/add_class'});           
      }
    }
  }
</script>