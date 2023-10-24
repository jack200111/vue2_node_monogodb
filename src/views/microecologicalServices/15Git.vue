<template>
  <page-template
    href="https://www.bilibili.com/video/BV1wm4y1z7Dg/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Git"
    subtitle="新版Git快速入门"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/15Git.js'
import pageTemplate from '@/components/pageTemplate/index'

export default {
  components: {
    pageTemplate
  },
  data() {
    return {
      courses: myData
    }
  }
}
</script>
