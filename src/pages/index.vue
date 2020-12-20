<template>
  <div>
    <Button color="primary">テストボタン</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/atoms/Button.vue'
export default Vue.extend({
  components: { Button },
})
</script>
