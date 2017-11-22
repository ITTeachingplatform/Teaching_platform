<template>
  <div id="student_personal">
      <Student activeIndex='5'></Student>
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
                  <el-form-item label="学号"><div align="left">xxxxxxx</div></el-form-item>
                  <el-form-item label="院系"><div align="left">xxxxxxx</div></el-form-item>
                  <el-form-item label="班级"><div align="left">xxxxxxx</div></el-form-item>
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
        </div>
      </el-row>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
export default {
    name: 'Student_personal',
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
          textarea: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
      components: {
        'Student': Student,
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
