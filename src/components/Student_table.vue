<template>
<div id="student_table">
      <el-progress :percentage="100" :show-text="false"></el-progress>
  <el-row>
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>搜索框</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

  <el-row type="flex" justify="start">
      <el-col>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="50px" class="demo-ruleForm">
  <el-form-item
    label="学号"
    prop="id"
    :rules="[
      { type: 'number', message: '学号必须为数字值'}
    ]"
  >
    <el-input type="id" v-model.number="numberValidateForm.id" auto-complete="off"></el-input>
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
    <el-input type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
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
    <el-input type="department" v-model.number="numberValidateForm.department" auto-complete="off"></el-input>
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
    <el-input type="major" v-model.number="numberValidateForm.major" auto-complete="off"></el-input>
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
    <el-input type="class" v-model.number="numberValidateForm.class" auto-complete="off"></el-input>
  </el-form-item>
</el-form>
      </el-col>

  </el-row>

  <el-row type="flex" justify="center">

    <el-button style='width:150px' type="primary">提交</el-button>
    <el-button style='width:150px;margin-left:40px'>重置</el-button>

  </el-row>

</el-card>

      </el-row>

   <el-row style="margin-top:20px">
         <el-progress :percentage="100" :show-text="false"></el-progress>
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
  </el-col>
</el-row>
  </el-tab-pane>
      <el-progress :percentage="100" :show-text="false"></el-progress>
</div>
</template>


<script>
  export default {
      name: 'student_table',
      data() {
      return {
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        },
        tableData: [{
          id: '2016306126xx',
          name: '饶浩聪',
          department: '软件学院',
          major: '软件工程',
          class: '4班'
        }, {
          id: '2016306126xx',
          name: '小聪',
        }, {
          id: '2016306126xx',
          name: '大葱',
        }, {
          id: '2016306126xx',
          name: '大聪',
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
      }
    }
  }
</script>