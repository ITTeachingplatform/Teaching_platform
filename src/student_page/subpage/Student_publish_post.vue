<template>
    <div id="Student_publish_post">
        <Student></Student>
        <add-post></add-post>
    </div>
</template>

<script>
import Student from '../../components/Student/Student'
import Add_post from '../../components/Add_post'
export default {
    name:'Student_publish_post',
    components:{
        'Student':Student,
        'add-post':Add_post
    }

}
</script>

<style>

</style>
