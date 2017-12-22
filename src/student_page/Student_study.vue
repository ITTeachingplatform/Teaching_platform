<template>
  <div id='student_study'>
    <Student activeIndex='2'></Student>
    <Info></Info>
    <Class></Class>
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue';
import Info_bar_Study from '../components/Student/Info_bar_Study.vue';
import Info_bar_Class from '../components/Student/Info_bar_Class.vue';

export default {
      name: 'student_study',
      components: {
        'Student': Student,
        'Info': Info_bar_Study,
        'Class': Info_bar_Class
      }
}
</script>
