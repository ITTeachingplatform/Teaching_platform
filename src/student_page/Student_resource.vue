<template>
  <div id="student_discussion"  align="center">
    <Student activeIndex='3'></Student>
    <div class="container">
      <el-row style="font-size:50px;margin-top:20px">课程资源</el-row>
      <el-row type="flex" justify="center" >
        <div class="block" style="width:900px;margin-top:10px">
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
                <el-form-item label="资源类型" prop="resource_type" :rules="[{required:true}]">
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
                <el-form-item label="发布时间" prop="date" :rule="[]">
                  <el-date-picker type="date" v-model="ruleForm.date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>

          <el-row type="flex" justify="center">
            <el-button style='width:150px' type="primary" @click="search_resource">搜索</el-button>
            <el-button style='width:150px;margin-left:40px' @click="resetForm('ruleForm')">重置</el-button>
          </el-row>
        </div>
      </el-row>
      <el-progress :percentage="100" :show-text="false"></el-progress>
      <!--Category bar-->
      <el-row type="flex" justify="center" >
        <div class="b" style="width:900px;margin-top:10px">
          <el-table ref="singleTable" :data="tableData"  tooltip-effect="dark" style="width:100%" highlight-current-row @current-change="handleCurrentChange">
            
            <el-table-column label="标题" width="200px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name  }}</span>
              </template>
            </el-table-column>
            <el-table-column label="上传时间" width="150px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column label="课程名称" prop="tag" width="180px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.tag }}</span>
              </template>
            </el-table-column>

            <el-table-column label="类别" prop="resource_type" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.resource_type }}</span>
              </template>
            </el-table-column>

            <el-table-column label="文件大小" prop="size" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.size }}</span>
              </template>
            </el-table-column>

            <el-table-column label="下载数" prop="download_num" width="100px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.download_num }}</span>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-row>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">下载选中项</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>
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
        rules: {

        },
        search_date: '',
        ruleForm: {
          keyword: '',
          resource_type: '',
          date: '',
          tag: '',
        },
        tableData: [],
        currentRow: null
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
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
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