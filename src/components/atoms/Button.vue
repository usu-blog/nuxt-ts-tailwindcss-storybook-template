<template>
  <button :class="`bg-${color}-600 text-white py-2 px-4 rounded`">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
type ColorType = 'primary' | 'blue'
export default Vue.extend({
  props: {
    label: String,
    color: {
      type: String as PropType<ColorType | undefined>,
    },
  },
})
</script>
