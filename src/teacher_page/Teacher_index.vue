<template>
<div id='teacher_index'>
<Teacher activeIndex='1'></Teacher>
<div v-if="isAnnounce">
  <!-- 公告列表 -->
  <announce @hideAnnounce="hide"></announce>
</div>
<div v-else>
  <!-- 走马灯和通知栏 -->
<!-- <carou/sel></carousel> -->
<Info ></Info>
</div>
</div>
</template>
<script>
import Teacher from '../components/Teacher/Teacher.vue';
import Info_bar_teacher from '../components/Teacher/Info_bar_teacher.vue';
// import Carousel from '../components/Carousel.vue'
import Announce from '../components/Announce.vue';

export default {
      name: 'teacher_index',
      data(){
        return{
          isAnnounce:false
        }
      },
      components: {
        'Teacher': Teacher,
        'Info': Info_bar_teacher,
        // 'carousel':Carousel,
        'announce':Announce
      },
      methods: {
      }
}
</script>

<style scope>

</style>
