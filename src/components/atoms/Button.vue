<template>
  <button class="bg-teal-600 text-white py-2 px-4 rounded">{{ label }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: String,
  },
})
</script>
