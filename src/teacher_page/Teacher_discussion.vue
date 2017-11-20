<template>
  <div id="teacher_discussion">
      <Teacher activeIndex='3'></Teacher>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
export default {
    name: 'teacher_discussion',
      components: {
        'Teacher': Teacher,
      }   
}
</script>

<style>

</style>