<template>
  <div id="teacher_platform">
      <Teacher activeIndex='6'></Teacher>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
export default {
    name: 'teacher_platform',
      components: {
        'Teacher': Teacher,
      }   
}
</script>

<style>

</style>