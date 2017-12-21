<template>
  <div id="student_discussion"  align="center">
    <Student activeIndex='3'></Student>
    <div class="container">
      <el-row style="font-size:50px;margin-top:20px">课程资源</el-row>
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <el-row type="flex" justify="center" >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>搜索框</span>
          </div>
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!--row 1-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="16">
                <el-form-item label="文件关键词" prop="keyword" :rules="[]">
                  <el-input type="keyword" v-model="ruleForm.keyword" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="资源类型" prop="resource_type" required="true">
                  <el-select v-model="ruleForm.resource_type" placeholder="请选择资源类型">
                    <el-option label="题库" value="bank"></el-option>
                    <el-option label="教学资源" value="resource"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <!--row 2-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="14">
                <el-form-item label="课程名称" prop="tag" :rules="[]">
                  <el-input type="tag" v-model="ruleForm.tag" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="课程名称" prop="date" :rule="[]">
                  <el-date-picker type="date" v-model="ruleForm.date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>

          <el-row type="flex" justify="center">
            <el-button style='width:150px' type="primary" @click="submitForm('ruleForm')">搜索</el-button>
            <el-button style='width:150px;margin-left:40px' @click="resetForm('ruleForm')">重置</el-button>
          </el-row>
        </el-card>
      </el-row>
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <!--Category bar-->
      <el-row type="flex" justify="center" >
        <el-table :data="tableData" style="width:100%">

          <el-table-column label="标题" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="发布时间" width="150px">
            <template slot-scope="scope">
              <span style="margin-left:10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column label="课程名称" width="180px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.tag }}</span>
            </template>
          </el-table-column>

          <el-table-column label="类别" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.resource_type }}</span>
            </template>
          </el-table-column>

          <el-table-column label="下载数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.download_num }}</span>
            </template>
          </el-table-column>

        </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
export default {
    name: 'Student_discussion',
      components: {
        'Student': Student,
      },
    data() {
      return {
        radio: '1',
        ruleForm: {
          keyword: '',
          resource_type: '',
          date: '',
          tag: '',
        },
        tableData: [{
          name: 'xxxx',
          date: '2017/09/10',
          tag: 'IT项目管理',
          resource_type: '题库',
          download_num: '10'
        }]
      }
    },
    methods: {
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

<style scoped>
  .container {
    width:900px;
  }
  .box-card{
    width:100%;
  }
</style>