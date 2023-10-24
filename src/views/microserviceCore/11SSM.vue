<template>
  <page-template
    href="https://www.bilibili.com/video/BV1AP411s7D7/?spm_id_from=333.999.0.0&vd_source=a702a01e1846917f653c366933ef2676"
    title="SSM"
    subtitle="新版SSM框架全套视频教程，Spring6+SpringBoot3最新SSM企业"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/11SSM.js'
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
