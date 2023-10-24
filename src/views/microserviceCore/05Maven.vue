<template>
  <page-template
    href="https://www.bilibili.com/video/BV12q4y147e4/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Maven"
    subtitle="Maven教程（maven入门+高深，全网无出其右！）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/05Maven.js'
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
