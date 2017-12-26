<template>
    <div id="Teacher_homework">
        <Teacher></Teacher>
        <homework></homework>

        <el-row>
            <!-- <span style="font-size:40px">{{homeworkName}}</span> -->
            
        </el-row>

    </div>
</template>
        
<script>
import Teacher from '../../components/Teacher/Teacher'
import homework from '../../components/Teacher/homework'
export default {
    name:'teacher_homework',
    components: {
        'Teacher':Teacher,
        'homework':homework,
    },
    
}
</script>


      