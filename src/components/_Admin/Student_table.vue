<template>
<div id="student_table">
  
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
         <el-checkbox @click="test(scope.$index, scope.row)"></el-checkbox>
      </template>
    </el-table-column>
  </el-table>
   </el-row>
  </el-col>
</el-row>
  </el-tab-pane>
    
</div>
</template>


<script>
import store from '../../vuex/admin/store'
  export default {
      name: 'student_table',
      store,
      data() {
      return {
        numberValidateForm: {
          id: '',
          name: '',
          department: '',
          major: '',
          class: ''
        }
      }
    },
     computed: {
         tableData:{
          get:function(){
              return store.state.student_info
          }
         }
      },
        mounted() {
        // store.dispatch('get_teacher_info');
        store.dispatch('get_student_info')
        console.log(this.tableData)
        // console.log(store.state.teacher_info);
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
      },
      test(a,b){
        console.log(a+b);
      }
    }
  }
</script>