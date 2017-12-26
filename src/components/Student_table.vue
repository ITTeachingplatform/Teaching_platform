<template>
<div id="student_table">
    
  <el-row>
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit(-1)">添加学生</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="学号"
    prop="id"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="id" v-model.number="numberValidateForm.id" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

<el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="姓名"
    prop="name"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="start">
      <el-col>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="学院"
    prop="department"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="department" v-model.number="numberValidateForm.department" auto-complete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item> -->
</el-form>
      </el-col>

            <el-col>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="专业"
    prop="major"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="major" v-model.number="numberValidateForm.major" auto-complete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item> -->
</el-form>
      </el-col>

 <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="班级"
    prop="class"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="class" v-model.number="numberValidateForm.class" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary" @click="search_student">搜索</el-button>
    <el-button style='width:150px;margin-left:40px' @click="reset_form">重置</el-button>

  </el-row>

</el-card>

      </el-row>

   <el-row style="margin-top:20px">
       
          <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="学号"
      width="180px">
      <template slot-scope="scope" >
           <el-button style="padding: 3px 0" type="text" @click="show_info(scope.$index)">{{ scope.row.id }}</el-button>
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
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>

    
   <!-- 弹出信息框 -->

<el-dialog
  title="学生信息"
  :visible.sync="info_Visible"
  width="19%">
  <el-row>姓名：{{name}}</el-row>
  <el-row>学号：{{id}}</el-row>
  <el-row>密码：{{password}}</el-row>
  <el-row>个人简介：{{introduce}}</el-row>
  <el-row>学院：{{school}}</el-row>
  <el-row>专业：{{major}}</el-row>
  <el-row>班级：{{grade}}</el-row>
  <el-row>联系方式：{{email}}</el-row>
    <!-- <el-table :data="gridData">
    <el-table-column property="subject" label="课程名称" width="50px"></el-table-column>
    <el-table-column property="school" label="开设学院" width="50px"></el-table-column>
    <el-table-column property="teacher" label="任课老师" width="50px"></el-table-column>
    <el-table-column property="score" label="平时成绩" width="50px"></el-table-column>
  </el-table> -->
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="info_Visible = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="学生信息"
  :visible.sync="edit_Visible"
  width="19%"
  :before-close="handleClose">
  <el-row>姓名：<el-input v-model="name" :disabled="true"></el-input></el-row>
  <el-row>学号：<el-input v-model="id" :disabled="true"></el-input></el-row>
  <el-row>密码：<el-input v-model="password"></el-input></el-row>
  <el-row>个人简介：<el-input v-model="introduce"></el-input></el-row>
  <el-row>学院：<el-input v-model="school" :disabled="true"></el-input></el-row>
  <el-row>专业：<el-input v-model="major" :disabled="true"></el-input></el-row>
  <el-row>班级：<el-input v-model="grade" :disabled="true"></el-input></el-row>
  <el-row>联系方式：<el-input v-model="email"></el-input></el-row>
    <!-- <el-table :data="gridData">
    <el-table-column property="subject" label="课程名称" width="50px"></el-table-column>
    <el-table-column property="school" label="开设学院" width="50px"></el-table-column>
    <el-table-column property="teacher" label="任课老师" width="50px"></el-table-column>
    <el-table-column property="score" label="平时成绩" width="50px"><el-input v-model="gridData.score"></el-input></el-table-column>
  </el-table> -->
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="edit_Visible = false">取 消</el-button>
    <el-button type="primary" @click="modify_student(id)">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="填写学生信息"
  :visible.sync="add_Visible"
  width="18%"
  :before-close="handleClose">
  <el-row>姓名：<el-input v-model="name"></el-input></el-row>
  <el-row>密码：<el-input v-model="password"></el-input></el-row>
  <el-row>个人简介：<el-input v-model="introduce"></el-input></el-row>
  <el-row>学院：<el-input v-model="school"></el-input></el-row>
  <el-row>专业：<el-input v-model="major"></el-input></el-row>
  <el-row>班级：<el-input v-model="grade"></el-input></el-row>
  <el-row>联系方式：<el-input v-model="email"></el-input></el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="add_Visible = false">取 消</el-button>
    <el-button type="primary" @click="add_student">确 定</el-button>
  </span>
</el-dialog>

<!-- <el-dialog
  title="填写学生课程信息"
  :visible.sync="class_Visible"
  width="70%"
  :before-close="handleClose">
  <el-row>所属学院： 
    <el-select v-model="school_value" placeholder="请选择学院">
    <el-option
      v-for="item in school_options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-row>
  <el-row>课程名称：<el-select v-model="lesson_value" placeholder="请选择课程">
    <el-option
      v-for="item in lesson_options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-row>
  <el-row>老师：<el-select v-model="teacher_value" placeholder="请选择教师">
    <el-option
      v-for="item in teacher_options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="class_Visible = false">取 消</el-button>
    <el-button type="primary" @click="class_Visible = false">确 定</el-button>
  </span>
</el-dialog> -->

</div>
</template>


<script>
import store from '../vuex/admin/store'
  export default {
      name: 'student_table',
      store,
      data() {
      return {
        tableData:[],
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        },
        name: '大葱',
        id: '201530612644',
        password: '221135',
        introduce:'刻苦学习的攻城狮',
        school: '计算机科学与工程学院',
        email: '56830220@qq.com',
        grade:'1班',
        major:'计算机科学与技术系',
          info_Visible: false,
          edit_Visible: false,
          add_Visible: false,
          class_Visible: false,
          lesson_name: '',
          lesson_teacher: '',
          lesson_school: '',
        gridData: [{
          subject: 'IT项目管理',
          school: '软件学院',
          teacher: '李红',
          score: '90'       
        },
        {
          subject: '软件架构实践',
          school: '软件学院',
          teacher: '林连南',
          score: '90'       
        },
        {
          subject: '机器学习',
          school: '软件学院',
          teacher: '吴庆耀',
          score: '90'       
        }],
           school_options: [{
          value: '软件学院',
          label: '软件学院'
        }, {
          value: '计算机科学学院',
          label: '计算机科学学院'
        }],
          lesson_options: [],
          lesson_value: '',
          teacher_options:[],
          teacher_value: '',
          school_value:'',
        value: '',
      }
    },
     computed: {
      },
      mounted(){
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
      handleEdit(index, row) {
        if(index === -1){
        this.name='',
        this.password='',
        this.introduce='',
        this.school= '计算机科学与工程学院',
        this.email='',
        this.grade='1班',
        this.major='计算机科学与技术系',
          this.add_Visible = true;
        }
        else{
        this.$http.post('/api/student_all_info', {
                   id: this.tableData[index].id
                  },{}).then((response) => {
                    var stu_info = response.body;
                      // id,name,department,major,class,
                       this.name=this.tableData[index].name,
                      this.id=this.tableData[index].id,
                      this.school= this.tableData[index].department,
                      this.grade=this.tableData[index].class,
                      this.major=this.tableData[index].major,
                      this.introduce=stu_info[0].student_introduction;
                     this.password=stu_info[0].passwd;
                      this.email=stu_info[0].student_email;
                      this.edit_Visible = true;
                  })
        }
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
         this.$confirm('确认删除这个学生？')
          .then(_ => {
            // done();
           this.tableData.splice(index,1);
        alert('成功删除该学生！')
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
      show_info(index){
        this.name='',
        this.password='',
        this.introduce='',
        this.school= '',
        this.email='',
        this.grade='',
        this.major='',
         this.$http.post('/api/student_all_info', {
                   id: this.tableData[index].id
                  },{}).then((response) => {
                    var stu_info = response.body;
                      // id,name,department,major,class,
                       this.name=this.tableData[index].name,
                      this.id=this.tableData[index].id,
                      this.school= this.tableData[index].department,
                      this.grade=this.tableData[index].class,
                      this.major=this.tableData[index].major,
                      this.introduce=stu_info[0].student_introduction;
                     this.password=stu_info[0].passwd;
                      this.email=stu_info[0].student_email;
                      this.info_Visible = true;
                  })
        console.log(index);
      },
       handleClose(done) {
        this.$confirm('确认修改信息？')
          .then(_ => {
            done();
          })
          .catch(_ => {
            done();
          });
      },
      // 搜索学生+重置表格
      search_student(){
        if(this.numberValidateForm.id===''&&this.numberValidateForm.name===''&&this.numberValidateForm.department===''&&this.numberValidateForm.major===''&&this.numberValidateForm.class==='')
          return;
        this.tableData=[];
        console.log(this.numberValidateForm);
         this.$http.post('/api/search_student', {
                    student_ID: this.numberValidateForm.id,
                    student_name: this.numberValidateForm.name,
                    faculty_name:this.numberValidateForm.department,
                    major_name:this.numberValidateForm.major,
                    class_name:this.numberValidateForm.class,
                  },{}).then((response) => {
                    console.log(response.body[0]);
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
      reset_form(){
         this.numberValidateForm={
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        }
      },
      // add_one_student(student_name,passwd,faculty_name,major_name,class_name,student_introduction,student_email,result)
      add_student(){
          this.$http.post('/api/add_student', {
                   student_name: this.name,
                   passwd: this.password,
                   faculty_name: 'FA000001',
                   major_name:'MA000001',
                   class_name: 'CL000001',
                   student_introduction: this.introduce,
                   student_email:this.email
                  },{}).then((response) => {
                    var result = response.body;
                    console.log(result);
                    if(result[1]==0)
                      alert('新增学生成功，学号为：' + result[0]);
                    else
                      alert('新增学生失败，请确认信息填写无漏！')
                     this.add_Visible = false; 
                  })
      },
      // modify_one_student(student_id,passwd,student_email,student_introduction,result)
      modify_student(id){
        console.log(this.email)
        this.$http.post('/api/modify_student', {
                   student_id: id,
                   passwd: this.password,
                   student_introduction: this.introduce,
                   student_email:this.email
                  },{}).then((response) => {
                    var result = response.body;
                    console.log(result);
                    if(result[1]!==0)
                      alert('修改学生信息成功！');
                    else
                      alert('修改学生失败，请稍后再试！')
                     this.edit_Visible = false; 
                  })
      }

    }
  }
</script>

<style>

</style>
