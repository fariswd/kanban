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
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
