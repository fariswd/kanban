<template lang="html">
  <div class="container">
    <div class="row">
      <content-back-log />
      <content-to-do />
      <content-doing />
      <content-done />
    </div>
  </div>
</template>

<script>
import ContentBackLog from '@/components/ContentBackLog'
import ContentToDo from '@/components/ContentToDo'
import ContentDoing from '@/components/ContentDoing'
import ContentDone from '@/components/ContentDone'
export default {
  components: {
    ContentBackLog,
    ContentToDo,
    ContentDoing,
    ContentDone
  }
}
</script>

<style lang="css">
</style>
