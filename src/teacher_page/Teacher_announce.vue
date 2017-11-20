<template>
  <div id="teacher_announce">
      <Teacher activeIndex='2'></Teacher>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
export default {
    name: 'teacher_announce',
      components: {
        'Teacher': Teacher,
      }   
}
</script>

<style>

</style>