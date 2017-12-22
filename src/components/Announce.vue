<template>
  <div>
    <el-row type='flex' justify="center">
      <div class="block" style="width:900px;">
        <el-row style="font-size:40px;margin-top:20px;margin-bottom:10px;">公告列表</el-row>
        <el-row style="margin-bottom:10px"><el-button round v-on:click="backInfo" type="default" style="float:right">返回</el-button>
      </el-row>
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
                    label="公告发布者(编号/管理员/教师)"
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
              <el-button style='width:150px;margin-left:40px'>重置</el-button>
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
          <template slot-scope="scope">
            <span @click="centerDialogVisible = true" style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
    </el-table-column>

    <el-table-column
      label="发布者"
      width="100px">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>公告者: {{ scope.row.writer }}</p>
          <p>info: 可以显示额外信息</p>
          <div @click="centerDialogVisible = true" slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.writer }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="发布时间(年月日)" width="200px">
      <template slot-scope="scope">
        <span @click="centerDialogVisible = true" style="margin-left: 10px">{{ scope.row.publish_date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="内容摘要" width="300px">
      <template slot-scope="scope">
        <span @click="centerDialogVisible = true" style="margin-left: 10px">{{ scope.row.brief_content }}</span>
      </template>
    </el-table-column>
  </el-table>

  <!--ww-->
  <el-progress :percentage="100" :show-text="false"></el-progress>
      </div>
</el-row>
  </el-col>
</el-row>
</el-tab-pane>
<div>
<!-- 公告内容对话框 -->
<el-dialog
  title="系统公告"
  :visible.sync="centerDialogVisible"
  width="70%"
  center>
  <el-row><h1>标题：</h1></el-row>
  <el-row>发布者：</el-row>
  <el-row>发布时间：</el-row>
  <el-row>公告类型：</el-row>
  <el-row>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</el-row>
  <span slot="footer" class="dialog-footer">
    <el-button type="warning" @click="centerDialogVisible = false">修 改</el-button>
    <el-button type="danger" @click="centerDialogVisible = false">删 除</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">返 回</el-button>
  </span>
</el-dialog>
</div>
</div>
</template>


<script>
export default {
    name: 'announce',
      components: {
      },
      data() {
      return {
        show:false,
        centerDialogVisible: false,        
        radio: '1',
        numberValidateForm: {
          title: '',
          writer: '',
          publish_date: '',
          brief_content: '',
        },
        tableData: [{
          title: '关于大学课后学习情况调查',
          writer: '饶浩聪',
          publish_date: '2017/09/10',
          brief_content: '临近期末.....大家的复习进度......',
        }, {
          title: '关于IT项目管理的注意事项',
          writer: '饶浩聪',
          publish_date: '2017/10/10',
          brief_content: '临近大作业提交，我们需要.....',
        }]
      }
    },
    methods: {
      //返回
      backInfo(){
        this.$emit('hideAnnounce',this.show);
      },
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