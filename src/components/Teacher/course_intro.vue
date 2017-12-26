<template>
  <div id="course_intro">
   
  <el-row style="margin-top:20px">

  <!-- <el-button>ok</el-button> -->


<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="课程名称">
    <el-input v-model="formLabelAlign.name" :disabled.sync="modify" style="width:300px;float:left"></el-input>
  </el-form-item>
  <el-form-item label="所属院系">
    <el-input v-model="formLabelAlign.department" :disabled.sync="modify" style="width:300px;float:left"></el-input>
  </el-form-item>
  <el-form-item label="课程介绍">
    <el-input type="textarea" :rows="4" v-model="textarea" :disabled.sync="modify" style="width:400px;float:left"></el-input>
  </el-form-item>

  <el-form-item label="教学大纲">
    <el-input v-model="formLabelAlign.type" :disabled.sync="modify" style="width:300px;float:left" ></el-input>
    
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit;modify=true" >保存</el-button>
    <el-button @click="modify=false">修改</el-button>
    
  </el-form-item>

</el-form>






  </el-row>

  

    <!-- <el-row type="flex" justify="start">
      <el-col>
        <el-form :model="numberValidateForm" ref="numberValidateForm">
          <el-form-item label="课程名称" prop="lesson_name" >
            <el-input type="id" v-model.number="numberValidateForm.lesson_name" auto-complete="off"></el-input>
          </el-form-item> 
        </el-form>
      </el-col>   
    </el-row>

    <el-row type="flex" justify="start">
      <el-col>
        <el-form :model="numberValidateForm" ref="numberValidateForm">
          <el-form-item label="课程所属院系" prop="department">
            <el-input type="department" v-model.number="numberValidateForm.department" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>  -->
    

    

         


  </div>
</template>

<script>
//import store from '../vuex/teacher/store'
  export default {
      name:'course_intro',
      //store,
      data() {
      return {
        modify:true,
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          department: '',
          type: ''
        }
      };
    }
  }
</script>
