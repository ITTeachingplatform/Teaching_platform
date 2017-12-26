<template>
<div id="teacher_table">
        
  <el-row>
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit(-1)">添加教师</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="工号"
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
    label="课程"
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
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="其它"
    prop="take_job_date"
    :rules="[
    ]"
  >
    <el-input prefix-icon="el-icon-search" type="class" v-model.number="numberValidateForm.take_job_date" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary" @click="search_teacher">搜索</el-button>
    <el-button style='width:150px;margin-left:40px' @click="reset_form">重置</el-button>

  </el-row>

</el-card>

      </el-row>
   <el-row style="margin-top:20px">
          <el-table
    :data="tableData"
    style="width: 100%">
           
    <el-table-column
      label="工号"
      width="180px">
      <template slot-scope="scope">
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

      <el-table-column label="学院"  width="150px">
         <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.department }}</span>
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
  title="教师信息"
  :visible.sync="info_Visible"
  width="18%">
  <el-row>姓名：{{name}}</el-row>
  <el-row>工号：{{id}}</el-row>
  <el-row>密码：{{password}}</el-row>
  <el-row>个人简介：{{introduce}}</el-row>
  <el-row>联系方式：{{email}}</el-row>
    <el-table :data="gridData">  
    <el-table-column property="subject" label="课程名称" width="60px"></el-table-column>
    <el-table-column property="school" label="开设学院" width="60px"></el-table-column>
    <el-table-column property="number" label="学生人数" width="60px"></el-table-column>
  </el-table>
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="info_Visible = false">确 定</el-button>
  </span>
</el-dialog>


<el-dialog
  title="教师信息"
  :visible.sync="edit_Visible"
  width="18%"
  :before-close="handleClose">
  <el-row>姓名：<el-input v-model="name" :disabled="true"></el-input></el-row>
  <el-row>工号：<el-input v-model="id" :disabled="true"></el-input></el-row>
  <el-row>密码：<el-input v-model="password"></el-input></el-row>
  <el-row>个人简介：<el-input v-model="introduce"></el-input></el-row>
  <el-row>联系方式：<el-input v-model="email"></el-input></el-row>
    <el-table :data="gridData">
    <el-table-column property="subject" label="课程名称" width="60px"></el-table-column>
    <el-table-column property="school" label="开设学院" width="60px"></el-table-column>
    <el-table-column property="number" label="学生人数" width="60px"></el-table-column>
  </el-table>
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="edit_Visible = false">取 消</el-button>
    <el-button type="primary" @click="modify_teacher(id)">确 定</el-button>
  </span>
</el-dialog>
  
<el-dialog
  title="添加教师信息"
  :visible.sync="add_Visible"
  width="18%"
  :before-close="handleClose">
    <el-row>所属学院： <el-input v-model="school_value"></el-input></el-row>
  <el-row>姓名：<el-input v-model="name"></el-input></el-row>
  <el-row>密码：<el-input v-model="password"></el-input></el-row>
  <el-row>个人简介：<el-input v-model="introduce"></el-input></el-row>
  <el-row>联系方式：<el-input v-model="email"></el-input></el-row>
    <span slot="footer" class="dialog-footer">
    <el-button @click="add_Visible = false">取 消</el-button>
    <el-button type="primary" @click="add_teacher">确 定</el-button>
  </span>
</el-dialog>

<!-- <el-dialog
  title="填写教师课程信息"
  :visible.sync="class_Visible"
  width="18%"
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
      name: 'teahcer_table',
      store,
      computed: {
        //  tableData:{
        //   get:function(){
        //       return store.state.teacher_info
        //   }
        //  }
      },
      data() {
      return {
        tableData: [],
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          take_job_date: ''
        },
        name: '李红',
        id: 'XXXXX',
        password: '12345678',
        introduce:'IT项目管理老师XXXX',
        school: '软件学院',
        email: '111222555@qq.com',
          info_Visible: false,
          edit_Visible: false,
          add_Visible: false,
          class_Visible: false,
           gridData: [{
          subject: 'IT项目管理',
          school: '软件学院',
          number: '90'       
        },
        {
          subject: '软件架构实践',
          school: '软件学院',
          number: '90'       
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
          school_value: '计算机科学与工程学院',
      }
    },
    methods: {
      handleEdit(index, row) {
        if(index == -1){
          this.name='',
          this.school= '',
          this.introduce='';
          this.password='';
          this.email='';
          this.add_Visible= true;
        }
        else{
        this.$http.post('/api/teacher_all_info', {
                   id: this.tableData[index].id
                  },{}).then((response) => {
                    var tea_info = response.body;
                      // id,name,department,major,class,
                       this.name=this.tableData[index].name,
                      this.id=this.tableData[index].id,
                      this.school= this.tableData[index].department,
                      this.introduce=tea_info[0].teacher_introduction;
                     this.password=tea_info[0].passwd;
                      this.email=tea_info[0].teacher_email;
                      this.edit_Visible = true;
                  })
        console.log(index, row);
        }
      },
      handleDelete(index, row) {
        console.log(index, row);
                 this.$confirm('确认删除这个教师？')
          .then(_ => {
            // done();
       this.tableData.splice(index,1);
        alert('成功删除教师！')
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
           this.$http.post('/api/teacher_all_info', {
                   id: this.tableData[index].id
                  },{}).then((response) => {
                    var tea_info = response.body;
                      // id,name,department,major,class,
                       this.name=this.tableData[index].name,
                      this.id=this.tableData[index].id,
                      this.school= this.tableData[index].department,
                      this.introduce=tea_info[0].teacher_introduction;
                     this.password=tea_info[0].passwd;
                      this.email=tea_info[0].teacher_email;
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
       // 搜索教师+重置表格
      search_teacher(){
        if(this.numberValidateForm.id===''&&this.numberValidateForm.name===''&&this.numberValidateForm.department==='')
          return;
        this.tableData=[];
         this.$http.post('/api/search_teacher', {
                   teacher_ID: this.numberValidateForm.id,
                    teacher_name: this.numberValidateForm.name,
                    faculty_name:this.numberValidateForm.department,
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var tea_list = response.body;
                    for(var i in tea_list[0]){
                      var t = new Array()
                      // id,name,department,major,class,
                      t['id']=tea_list[0][i].teacher_ID;
                      t['name']=tea_list[0][i].teacher_name;
                      t['department']=tea_list[0][i].faculty_name;
                      // console.log(t);
                     this.tableData.push(t)
                    }
                  })
      },
      reset_form(){
         this.numberValidateForm={
          id: '',
          name: '',
          department: '',
        }
      },
      // add_one_teacher(teacher_name,passwd,faculty_working,teacher_introduction,teacher_email,result)
      add_teacher(){
          this.$http.post('/api/add_teacher', {
                   teacher_name: this.name,
                   passwd: this.password,
                   faculty_working: 'FA000001',
                   teacher_introduction: this.introduce,
                   teahcer_email:this.email
                  },{}).then((response) => {
                    var result = response.body;
                    console.log(result);
                    if(result[1]==0)
                      alert('新增教师成功，工号为：' + result[0]);
                    else
                      alert('新增教师失败，请确认信息填写无漏！')
                     this.add_Visible = false; 
                  })
      },
      // modify_one_teacher(teacher_id,passwd,teacher_eamil,teacher_introduction,result)
      modify_teacher(id){
         this.$http.post('/api/modify_teacher', {
                  teacher_id: id,
                   passwd: this.password,
                   teacher_introduction: this.introduce,
                   teahcer_eamil:this.email
                  },{}).then((response) => {
                    var result = response.body;
                    console.log(result);
                    if(result[1]!==0)
                      alert('修改教师信息成功！');
                    else
                      alert('修改教师信息失败，请稍后再试')
                     this.edit_Visible = false; 
                  })
      }
    },
    mounted(){
       this.$http.post('/api/get', {
                    type: 'teacher_list'
                  },{}).then((response) => {
                    // console.log(response.body[0]);
                    var tea_list = response.body;
                    for(var i in tea_list[0]){
                      var t = new Array()
                      t['id']=tea_list[0][i].teacher_ID;
                      t['name']=tea_list[0][i].teacher_name;
                      t['department']=tea_list[0][i].faculty_name;
                      // console.log(t);
                     this.tableData.push(t)
                    }
                  })
    },
  }
    // 用于测试
</script>