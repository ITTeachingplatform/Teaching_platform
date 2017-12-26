<template>
    <div id="course_introduction">
        <div id="get">

            <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                <el-form-item label="课程名称">
                    <el-input v-model="formLabelAlign.name" :disabled.sync="modify" style="width:300px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="课程所属院系">
                    <el-input v-model="formLabelAlign.department" :disabled.sync="modify" style="width:300px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="课程介绍">
                    <el-input type="textarea" :rows="4" v-model="textarea" :disabled.sync="modify" style="width:400px;float:left"></el-input>
                </el-form-item>

                <el-form-item label="教学大纲">
                    <el-input v-model="formLabelAlign.type" :disabled.sync="modify" style="width:300px;float:left" ></el-input>
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
            formLabelAlign: {
                name:'',
                department:'',
                type:'',
            }
        };
    }
}
</script>

<style>

</style>
