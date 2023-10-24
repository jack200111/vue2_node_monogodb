export default {
  data() {
    return {
      groups: [], // 分组名称
      currentGroupIndex: -1,
      // 总时长
      totalTime: 0,
      // 学习时长
      learned: 2,
      // 用于读取内存时长 修改页面时长
      myObject: {
          learnedValue: 2
      },
      // 文件索引
      index: ''
    }
  },
  mounted() {
    var i = 1
    // 17条数据一组 分组名称
    this.courses.forEach((item, index) => {
      if (index % 17 === 1) {
        this.groups.push(`第${i}组`)
        i++
      }
    })
    // 求时间
    this.totalTime = this.getTime(this.courses)
    // 读取文件名索引
    this.setIndex()
    // 读取内存 设置页面时长
    this.setHours(this.index, this.myObject)
    // 存路径
    this.savePath(this.index, this.$route.path)
    // console.log(this.$route.path)
  },
  computed: {
    // 分组
    displayedCourses() {
      const startIndex = this.currentGroupIndex * 16
      const endIndex = startIndex + 16
      return this.courses.slice(startIndex, endIndex)
    }
  },
  methods: {
    // 切换分组
    showGroup(index) {
      this.currentGroupIndex = index
    },
    // 设置文件名索引
    setIndex() {
        // 本地地址
        var url = window.location.href
        // 后缀名
        var filename = url.substring(url.lastIndexOf('/') + 1)
        // 前两个字符
        var name = filename.substring(0, 2)
        this.index = name
    },
    // 求总时长
    getTime(arr) {
        // console.log(hourFormat)
            let totalSeconds = 0
            for (let i = 0; i < arr.length; i++) {
                const timeComponents = arr[i].time.split(':')
                const hours = parseInt(timeComponents[0])
                const minutes = parseInt(timeComponents[1])
                const seconds = parseInt(timeComponents[2] || 0)
                totalSeconds += hours * 3600 + minutes * 60 + seconds
            }

            const totalHours = Math.floor(totalSeconds / 3600)
            const totalMinutes = Math.floor((totalSeconds % 3600) / 60)
            const totalSecondsRemaining = totalSeconds % 60
            this.time = totalHours
            return `${totalHours}小时${totalMinutes}分钟${totalSecondsRemaining}秒`
      },
    // 保存到内存
    save() {
        // 存到内存
        this.saveArr(this.index, Number(this.myObject.learnedValue))
    },
    // 读取内存时间 设置页面时长
    setHours(i, data) {
      // 读取内存arr
      // data：01引用地址
      const arr = JSON.parse(localStorage.getItem('arr'))

    arr.forEach((item, index) => {
      // Object.keys(item)[0] 总时长键名
      if (Object.keys(item)[0] === i) {
          data.learnedValue = arr[index].learned
      }
    })
    },
    // 保存到内存
    saveArr(i, learnedValue) {
        const arr = JSON.parse(localStorage.getItem('arr'))
        // 存到内存
        arr.forEach((item, index) => {
        // Object.keys(item)[0] 总时长键名
        if (Object.keys(item)[0] === i) {
            // arr[index]：当前项
            arr[index].learned = learnedValue
            localStorage.setItem('arr', JSON.stringify(arr))
        }
      })
    },
    // 保存页面路径
    savePath(i, path) {
        const arr = JSON.parse(localStorage.getItem('arr'))
        // 存到内存
        arr.forEach((item, index) => {
        // Object.keys(item)[0] 总时长键名
        if (Object.keys(item)[0] === i) {
            // arr[index]：当前项
            if (arr[index].path) return
            console.log(1)
            arr[index].path = path
            localStorage.setItem('arr', JSON.stringify(arr))
        }
      })
    },
    // 减去时长
    decreaseHours() {
      this.myObject.learnedValue--
    },
    // 增加时长
    increaseHours() {
      this.myObject.learnedValue++
    }
    }
}

