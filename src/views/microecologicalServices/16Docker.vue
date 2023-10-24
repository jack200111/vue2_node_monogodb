<template>
  <page-template
    href="https://www.bilibili.com/video/BV1gr4y1U7CY/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Docker"
    subtitle="Docker实战教程（docker教程天花板）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/16Docker.js'
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
