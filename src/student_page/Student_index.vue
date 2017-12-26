<template>
  <div id='student_index'>
    <Student activeIndex='1'></Student>
    <Info></Info>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
import Info_bar_Student from '../components/Student/Info_bar_Student.vue';

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
  },
  methods: {
  }
}
</script>

<style scope>

</style>
