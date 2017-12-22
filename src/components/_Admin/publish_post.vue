<template>
    <div id="Publish_post">
        <Admin></Admin>
        <add-post></add-post>
    </div>
</template>

<script>
import Admin from '../Admin'
import Add_post from '../Add_post'
export default {
    name:'publish-post',
    components:{
        'Admin':Admin,
        'add-post':Add_post
    }

}
</script>

<style>

</style>
