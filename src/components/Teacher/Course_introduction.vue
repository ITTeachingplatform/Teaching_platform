<template>
    <div id="course_introduction">
        <div id="get">
            <el-form :label-position="labelPosition" label-width="120px" :model="CourseInfo">
                <el-form-item label="课程名称">
                    <el-input v-model="CourseInfo.course_name" :disabled.sync="modify" style="width:300px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="课程所属院系">
                    <el-input v-model="CourseInfo.faculty_name" :disabled.sync="modify" style="width:300px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="课程介绍">
                    <el-input type="textarea" :rows="4" v-model="CourseInfo.course_introduction" :disabled.sync="modify" style="width:400px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="教学大纲">
                    <el-input v-model="CourseInfo.sysllabus" :disabled.sync="modify" style="width:300px;float:left" ></el-input>
                </el-form-item>
                      
                <el-form-item>
                    <el-button type="primary" @click="onSubmit;modify=true" >保存</el-button>
                    <el-button @click="modify=false">修改</el-button>   
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name:'Course_introduction',

    data(){
        return {
        modify:true,
        labelPosition:'left',
        t_class_id:'',
        CourseInfo:{
          course_name:'',
          teacher_name:'',
          faculty_name:'',
          course_introduction:'',
          sysllabus:''
        },
        };
    },
    mounted(){
      this.t_class_id=this.$route.params.t_class_id;
      console.log(this.t_class_id);
      this.$http.post('/api/get/one_Course_allInfo', {
        t_class_ID: this.$route.params.t_class_id
      },{}).then((response) => {
        console.log(response.body[0]);
        this.CourseInfo.course_name = response.body[0][0].course_name;
        console.log(this.CourseInfo.course_name);
        // this.CourseInfo.teacher_name = response.body[0][0].teacher_name;
        this.CourseInfo.faculty_name = response.body[0][0].faculty_name;
        this.CourseInfo.course_introduction = response.body[0][0].course_introduction;
        this.CourseInfo.sysllabus = response.body[0][0].sysllabus;
        console.log(this.CourseInfo);
      })
    }

}
</script>

<style>

</style>
