<template>
  <div id="teacher_personal">
      <Teacher activeIndex='5'></Teacher>
      <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">个人中心</el-row>
      <el-row type='flex' justify="center">
        <div class="block" style="width:900px;margin-top:10px">
          <el-progress :percentage="100" :show-text="false"></el-progress>
          <el-row type="flex" class="row-bg"  style="margin-top:15px;">
            <el-col :span="8">
              <div class="grid-content">
                <!-- 头像 -->
                <el-upload id="avatar"
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-button type="default" style="margin-top:15px;">上传头像</el-button>
                </div>
                </el-col>
            <el-col :span="10">
              <div class="grid-content">
                <!-- 表单 -->
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="姓名"><div align="left">xxx</div></el-form-item>
                  <el-form-item label="工号"><div align="left">xxxxxxx</div></el-form-item>
                  <el-form-item label="院系"><div align="left">xxxxxxx</div></el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="form.name" placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="个人简介">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入个人简介"
                      v-model="textarea">
                    </el-input>
                  </el-form-item>
                </el-form>
                </div>
                </el-col>
                <el-col :span="4">
                <el-button type="primary" style="margin-top:15px;">确认修改</el-button>
                </el-col>
          </el-row>
      <!-- 编辑器 -->
      <!-- <script id="editor" type="text/plain"></script> -->
      <editor></editor>
      <!-- <el-button v-on:click="onSubmit">提交</el-button> -->
      <!-- END 编辑器 -->
        </div>
      </el-row>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import Editor from '../components/Editor.vue'
export default {
    name: 'teacher_personal',
    data() {
      return {
        imageUrl: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        textarea: '',
        editor:null
      }
    },
    mounted(){//实例化编辑器
    //   this.editor = UE.getEditor('editor', {
    //     toolbars: [//工具栏
    //         [ 'undo', //撤销
    //           'redo', //重做
    //           'bold', //加粗
    //           'indent', //首行缩进
    //           'italic', //斜体
    //           'underline', //下划线
    //           'strikethrough', //删除线
    //           'subscript', //下标
    //           'superscript', //上标
    //           'formatmatch', //格式刷
    //           'removeformat', //清除格式
    //           'fontfamily', //字体
    //           'fontsize', //字号
    //           'simpleupload', //单图上传
    //           'link', //超链接
    //           'justifyleft', //居左对齐
    //           'justifyright', //居右对齐
    //           'justifycenter', //居中对齐
    //           'justifyjustify', //两端对齐
    //           'forecolor', //字体颜色
    //           'backcolor', //背景色
    //           'attachment', //附件
    //           'inserttable', //插入表格
    //           ]
    //     ],
    //     autoHeightEnabled: true,
    //     autoFloatEnabled: true,
    //     initialFrameHeight:300
    // });
    },
    components: {
        'Teacher': Teacher,
        'Editor':Editor,
    },
    methods: {
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style scpoed>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
