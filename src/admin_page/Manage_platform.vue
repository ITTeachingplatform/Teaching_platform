<template>
  <div id="platform">
      <Admin></Admin>
      <Platform></Platform>
  </div>
</template>

<script>
import Admin from '../components/Admin';
import Platform from '../components/Platform.vue';
export default {
    name: 'platform',
      components: {
        'Platform': Platform,
        'Admin':Admin
      }
}
</script>


