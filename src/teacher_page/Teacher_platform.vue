<template>
  <div id="teacher_platform">
      <Teacher activeIndex='6'></Teacher>
      <Platform></Platform>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue';
import Platform from '../components/Platform.vue';
export default {
    name: 'teacher_platform',
      components: {
        'Platform': Platform,
        'Teacher':Teacher
      }
}
</script>


