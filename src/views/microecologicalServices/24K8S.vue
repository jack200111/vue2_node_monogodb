<template>
  <page-template
    href="https://www.bilibili.com/video/BV1GT4y1A756/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="K8S"
    subtitle="Kubernetes（k8s）入门到实战教程丨全新升级完整版"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/24K8S.js'
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
