<template>
  <div id="app2" class="container">
    <div class="nav">
      <ul>
        <li @mouseover="showGroup(-1)"> 总进度
        </li>
        <li v-for="(group, index) in groups" :key="index" @mouseover="showGroup(index)">
          {{ group }}
        </li>
      </ul>
    </div>
    <div class="course-list">
      <div v-if="currentGroupIndex == -1">
        <ul>
          <li class="course-item"><strong>总时长: </strong> {{ total }}小时 </li>
          <li class="course-item"><strong>已学: </strong>
            {{ learned }}小时
          </li>
          <li class="course-item"><strong>完成率: </strong> {{ (learned / total).toFixed(2) }}% </li>
          <li class="course-item"><strong>B站链接: </strong>
            <a href="https://www.bilibili.com/read/cv5216534/" target="_blank">2023最新Java学习路线</a>
            <button class="goBtn course-item-left">查看学习路线</button>
          </li>
        </ul>
      </div>
      <ul>
        <li v-for="(course, index) in displayedCourses" :key="index" class="course-item">
          <router-link :to="course.path">
            <strong>
              总时长:{{ formatCourseDuration(course[Object.keys(course)[0]]) }}
              已学:{{ formatCourseDuration(course.learned) }}
              完成率: {{ formatCourseDuration2((course.learned / course[Object.keys(course)[0]]).toFixed(2) * 100) }}%
            </strong>
            <!-- - {{ course.title }} -->
            <!-- <a :href="course.path">- {{ course.title }} </a> -->
            - {{ course.title }}
            <!-- type="primary" -->
            <!-- <el-button type="success" size="small" plain>前往学习</el-button> -->
            <button class="goBtn">查看课程</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      courses: JSON.parse(localStorage.getItem('arr')),
      groups: [], // 分组名称
      currentGroupIndex: -1,
      totalTime: 0,
      total: 0,
      learned: 0
    }
  },
  computed: {
    // 分组
    displayedCourses() {
      const startIndex = this.currentGroupIndex * 15
      const endIndex = startIndex + 15
      return this.courses.slice(startIndex, endIndex)
    }

  },
   mounted() {
    const arr = JSON.parse(localStorage.getItem('arr'))
    console.log(this.$router)
    arr.forEach((item, index) => {
      // 总时长
      this.total += item[Object.keys(item)[0]]
      // 学习时长
      this.learned += item[Object.keys(item)[1]]
    })
    // 分组
    var i = 1
    this.courses.forEach((item, index) => {
      if (index % 17 === 1) {
        this.groups.push(`第${i}组`)
        i++
      }
    })
  },
  methods: {
    // 切换分组
    showGroup(index) {
      this.currentGroupIndex = index
    },
    // 读取内存时间 设置页面时长
    setHours(i, hours) {
      const arr = JSON.parse(localStorage.getItem('arr'))
      arr.forEach((item, index) => {
        if (Object.keys(item)[0] === i) {
          arr[index][i] = hours
          localStorage.setItem('arr', JSON.stringify(arr))
        }
      })
    },
    // 总时长
    formatCourseDuration(value) {
      const totalDuration = value + ""
      const val = totalDuration.padStart(3, '0')
      return `${val}`
    },
    // 已学
    formatCourseDuration2(value) {
      const totalDuration = value + ""
      const val = totalDuration.padStart(2, '0')
      return `${val}`
    }
  }
  // name: 'Dashboard',
  // computed: {
  //   ...mapGetters([
  //     'name'
  //   ])
  // }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
