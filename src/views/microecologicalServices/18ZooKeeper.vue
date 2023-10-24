<template>
  <page-template
    href="https://www.bilibili.com/video/BV1to4y1C7gw/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="ZooKeeper"
    subtitle="大数据技术之Zookeeper 3.5.7版本教程"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/18ZooKeeper.js'
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
