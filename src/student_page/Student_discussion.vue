<template>
  <div id="student_discussion"  align="center">
    <Student activeIndex='4'></Student>
    <div class="container">
      <el-row style="font-size:50px;margin-top:20px">讨论区列表</el-row>
      <router-link to="/student/publish_post">
        <el-button round style="margin-left:600px;margin-bottom:20px"  >发布讨论</el-button>
      </router-link>

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
                <el-form-item label="主题关键词" prop="keyword"  :rules="[]">
                  <el-input type="keyword" v-model="ruleForm.keyword" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="发布者" prop="post_starter" :rules="[]">
                  <el-input type="post_starter" v-model="ruleForm.post_starter" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--row 2-->
            <el-row type="flex" justify="start" :gutter="20">
              <el-col :span="14">
                <el-form-item label="类别标签" prop="post_label" :rules="[]">
                  <el-input type="post_label" v-model="ruleForm.post_label" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="发布时间" prop="post_date" :rule="[]">
                  <el-date-picker type="date" v-model="ruleForm.post_date" placeholder="选择日期"></el-date-picker>
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

          <el-table-column label="讨论主题" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.post_title }}</span>
            </template>
          </el-table-column>

          <el-table-column label="发布者" width="70px">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>发布者: {{ scope.row.post_starter }}</p>
                <p>info: 可以显示额外信息</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.post_starter }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="发布时间" width="150px">
            <template slot-scope="scope">
              <span style="margin-left:10px">{{ scope.row.post_date }}</span>
            </template>
          </el-table-column>

          <el-table-column label="标签" width="180px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.post_label }}</span>
            </template>
          </el-table-column>

          <el-table-column label="最后修改者" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.post_last_reviser }}</span>
            </template>
          </el-table-column>

          <el-table-column label="浏览数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.post_browse_num}}</span>
            </template>
          </el-table-column>

          <el-table-column label="回复数" width="100px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.post_reply_num }}</span>
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
          post_starter: '',
          post_date: '',
          post_label: '',
        },
        tableData: [{
          post_title: '关于上课的一点疑问',
          post_starter: 'XXX',
          post_date: '2017/09/10',
          post_label: 'IT项目管理、学习',
          post_last_reviser: '小葱',
          post_browse_num: '155',
          post_reply_num: '10'
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