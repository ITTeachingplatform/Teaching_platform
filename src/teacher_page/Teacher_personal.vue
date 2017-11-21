<template>
  <div id="teacher_personal">
      <Teacher activeIndex='5'></Teacher>

      <el-row type="flex" justify="center" style="font-size:40px;margin-top:20px;margin-bottom:10px;">个人中心</el-row>
      <el-row type='flex' justify="center">
        <div class="block" style="width:900px;margin-top:10px">
          <el-progress :percentage="100" :show-text="false"></el-progress>
        <!-- 确认修改按钮 -->
        <el-row style="margin-top:20px">
          <el-col span="6" offset="16">
            <div><el-button type="primary">确认修改</el-button></div>
          </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="center" style="margin-top:20px">
          <el-col :span="6"><div></div></el-col>
          <!-- 上传头像 -->
          <el-col :span="6">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </div>
            </el-col>
        <el-col :span="14">
          <div>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            </el-form>
<<<<<<< HEAD
            </div>
            </el-col>
=======
          </el-col>
          <el-col :span="6"><div></div></el-col>
        </el-row>
        
      </div>
>>>>>>> refs/remotes/origin/qym
      </el-row>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
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
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
      components: {
        'Teacher': Teacher,
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
