<template>
<div id='student_index'>
  <Student activeIndex='1'></Student>
  <div v-if="isAnnounce">
    <!-- 公告列表 -->
    <announce @hideAnnounce="hide"></announce>
  </div>
  <div v-else>
    <!-- 通知栏 -->
    <Info @showAnnounce="show"></Info>
  </div>
</div>
</template>

<script>
import Student from '../components/Student/Student.vue';
import Info_bar_Student from '../components/Student/Info_bar_Student.vue';
import Announce from '../components/Announce.vue';

export default {
  name: 'student_index',
  data(){
    return{
      isAnnounce:false
    }
  },
  components: {
    'Student': Student,
    'Info': Info_bar_Student,
    'announce':Announce
  },
  methods: {
    show(flag){
      this.isAnnounce=flag;
    },
    hide(flag){
      this.isAnnounce=flag;
    }
  }
}
</script>

<style scope>

</style>
