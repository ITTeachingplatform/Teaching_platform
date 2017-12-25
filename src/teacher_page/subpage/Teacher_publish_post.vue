<template>
    <div id="Teacher_publish_post">
        <Teacher></Teacher>
        <add-post></add-post>
    </div>
</template>

<script>
import Teacher from '../../components/Teacher/Teacher'
import Add_post from '../../components/Add_post'
export default {
    name:'teacher-publish-post',
    components:{
        'Teacher':Teacher,
        'add-post':Add_post
    }

}
</script>

<style>

</style>
