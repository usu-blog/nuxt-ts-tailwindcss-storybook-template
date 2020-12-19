<template>
  <div>
    <Button label="テストボタン" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/atoms/Button.vue'
export default Vue.extend({
  components: { Button },
})
</script>
