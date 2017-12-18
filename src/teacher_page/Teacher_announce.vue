<template>
  <div id="teacher_announce">
    <Teacher activeIndex='2'></Teacher>
    <el-row style="font-size:50px">公告列表
      <!-- <el-button v-on="back; flag:false" style="float: right; padding: 3px 0;font-size:20px;" type="text">返回</el-button> -->
    </el-row>
    <el-row type='flex' justify="center">
      <div class="block" style="width:900px;margin-top:10px">
        <el-progress :percentage="100" :show-text="false" ></el-progress>
        <el-row type="flex" justify="center" >
          <el-card class="box-card" style='width:900px'>
            <div slot="header" class='clearfix'>
              <span>搜索框</span>
            </div>

            <el-row type="flex" justify="start">
              <el-col>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
                  <el-form-item
                    label="公告关键词:"
                    prop="id_word"
                    :rules="[]"
                    >
                    <el-input type="id_word" v-model.number="numberValidateForm.id_word" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>

              <el-col>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="250px" class="demo-ruleForm">
                  <el-form-item
                    label="公告发布者(编号/管理员)"
                    prop="name"
                    :rules="[]"
                    >
                    <el-input type="name" v-model.number="numberValidateForm.name" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>

            <el-row type="flex" justify="start">
              <el-col>
                <el-radio v-model="radio" label="1">管理员公告/系统公告</el-radio>
                <el-radio v-model="radio" label="2">教师公告/教学公告</el-radio>
              </el-col>

              <el-col>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="150px" class="demo-ruleForm">
                  <el-form-item
                    label="公告发布时间"
                    prop="publish_date"
                    :rules="[]"
                    >
                    <el-input type="date" v-model.number="numberValidateForm.publish_date" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-button style='width:150px' type="primary">搜索</el-button>
              <el-button style='width:150px;margin-left:40px' v-on:click="resetForm">重置</el-button>
            </el-row>
          </el-card>
        </el-row>
        <el-progress :percentage="100" :show-text="false"></el-progress>
      </div>
    </el-row>

<!--列表-->
<el-row type='flex' justify="center">
      <div class="b" style="width:900px;margin-top:10px">
  <el-table
    :data="tableData"
    style="width: 100%;margin-top:20px;text-align:left;">
    <el-table-column
      label="公告标题"
      width="300px">
      <template slot-scope="scope" >
        <span style="margin-left: 10px" @click="centerDialogVisible = true">{{ scope.row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="发布者"
      width="100px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>公告者: {{ scope.row.writer }}</p>
          <p>info: 可以显示额外信息</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.writer }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="发布时间(年月日)" width="200px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.publish_date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="内容摘要" width="300px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.brief_content }}</span>
      </template>
    </el-table-column>
  </el-table>
        <el-progress :percentage="100" :show-text="false"></el-progress>
  <!--ww-->
      </div>
</el-row>

  </el-col>
</el-row>

  
<!-- Dialog -->
<div >
  <el-dialog
    title="标题"
    :visible.sync="centerDialogVisible" :data="tableData"
    width="80%"
    center>aaaaa
    <div >bbbbb
    <span slot-scope="scope">发布者：{{ scope.row.writer }}</span>
    <template slot-scope="scope">
    <span>发布时间：{{ scope.publish_date }}</span>
    </template>
    <template slot-scope="scope">
    <span>{{ scope.brief_content }}</span>
    </template>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
<!-- END Dialog -->
</div>
</template>


<script>
import Teacher from '../components/Teacher/Teacher.vue';
import store from '../vuex/teacher/store';
export default {
    name: 'teacher_announce',
      components: {
        'Teacher': Teacher
      },
      store,
      data() {
      return {
        centerDialogVisible: false,
        radio: '1',
        numberValidateForm: {
          title: '',
          writer: '',
          publish_date: '',
          brief_content: '',         
        },
      }
    },
    computed: {
         tableData:{
          get:function(){
              return store.state.announce_info
          }
         },
      },
      mounted () {
        store.dispatch('get_announce_item', {'Help_text': '此处获取公告信息'});
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