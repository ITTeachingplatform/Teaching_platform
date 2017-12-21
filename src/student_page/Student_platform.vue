<template>
  <div id="student_platform">
      <Student activeIndex='6'></Student>
      <Platform></Platform>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
import Platform from '../components/Platform.vue';
export default {
    name: 'student_platform',
      components: {
        'Platform': Platform,
        'Student':Student
      }
}
</script>


