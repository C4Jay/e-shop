<template>
<span>
  <main-title></main-title>
  <slide-show></slide-show>
  <kinds></kinds>
</span>
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle.vue'
import SlideShow from '@/components/SlideShow.vue'
import Kinds from '@/components/Kinds.vue'
export default {
  name: 'Home',
  components: {
    MainTitle,
    SlideShow,
    Kinds
  }
}
</script>
