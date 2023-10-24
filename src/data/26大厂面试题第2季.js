 
 
var data = [
    {
        "time": "0.20:26",
        "name": "01_本课程前提要求和说明"
    },
    {
        "time": "0.05:57",
        "name": "02_volatile是什么"
    },
    {
        "time": "0.20:36",
        "name": "03_JMM内存模型之可见性"
    },
    {
        "time": "0.16:46",
        "name": "04_可见性的代码验证说明"
    },
    {
        "time": "0.17:27",
        "name": "05_volatile不保证原子性"
    },
    {
        "time": "0.16:00",
        "name": "06_volatile不保证原子性理论解释"
    },
    {
        "time": "0.10:17",
        "name": "07_volatile不保证原子性问题解决"
    },
    {
        "time": "0.15:34",
        "name": "08_volatile指令重排案例1"
    },
    {
        "time": "0.13:23",
        "name": "09_volatile指令重排案例2"
    },
    {
        "time": "0.09:05",
        "name": "10_单例模式在多线程环境下可能存在安全问题"
    },
    {
        "time": "0.18:05",
        "name": "11_单例模式volatile分析"
    },
    {
        "time": "0.19:14",
        "name": "12_CAS是什么"
    },
    {
        "time": "0.26:48",
        "name": "13_CAS底层原理-上"
    },
    {
        "time": "0.12:53",
        "name": "14_CAS底层原理-下"
    },
    {
        "time": "0.05:29",
        "name": "15_CAS缺点"
    },
    {
        "time": "0.11:39",
        "name": "16_ABA问题"
    },
    {
        "time": "0.09:29",
        "name": "17_AtomicReference原子引用"
    },
    {
        "time": "0.04:58",
        "name": "18_AtomicStampedReference版本号原子引用"
    },
    {
        "time": "0.21:52",
        "name": "19_ABA问题的解决"
    },
    {
        "time": "0.24:59",
        "name": "20_集合类不安全之并发修改异常"
    },
    {
        "time": "0.20:02",
        "name": "21_集合类不安全之写时复制"
    },
    {
        "time": "0.09:07",
        "name": "22_集合类不安全之Set"
    },
    {
        "time": "0.03:37",
        "name": "23_集合类不安全之Map"
    },
    {
        "time": "0.14:06",
        "name": "24_TransferValue醒脑小练习"
    },
    {
        "time": "0.13:01",
        "name": "25_java锁之公平和非公平锁"
    },
    {
        "time": "0.08:58",
        "name": "26_java锁之可重入锁和递归锁理论知识"
    },
    {
        "time": "0.23:25",
        "name": "27_java锁之可重入锁和递归锁代码验证"
    },
    {
        "time": "0.10:38",
        "name": "28_java锁之自旋锁理论知识"
    },
    {
        "time": "0.16:54",
        "name": "29_java锁之自旋锁代码验证"
    },
    {
        "time": "0.08:52",
        "name": "30_java锁之读写锁理论知识"
    },
    {
        "time": "0.27:10",
        "name": "31_java锁之读写锁代码验证"
    },
    {
        "time": "0.26:42",
        "name": "32_CountDownLatch"
    },
    {
        "time": "0.09:06",
        "name": "33_CyclicBarrierDemo"
    },
    {
        "time": "0.12:42",
        "name": "34_SemaphoreDemo"
    },
    {
        "time": "0.05:13",
        "name": "35_阻塞队列理论"
    },
    {
        "time": "0.19:53",
        "name": "36_阻塞队列接口结构和实现类"
    },
    {
        "time": "0.06:24",
        "name": "37_阻塞队列api之抛出异常组"
    },
    {
        "time": "0.03:07",
        "name": "38_阻塞队列api之返回布尔值组"
    },
    {
        "time": "0.06:24",
        "name": "39_阻塞队列api之阻塞和超时控制"
    },
    {
        "time": "0.06:41",
        "name": "40_阻塞队列之同步SynchronousQueue队列"
    },
    {
        "time": "0.20:42",
        "name": "41_线程通信之生产者消费者传统版"
    },
    {
        "time": "0.13:42",
        "name": "42_Synchronized和Lock有什么区别"
    },
    {
        "time": "0.12:29",
        "name": "43_锁绑定多个条件Condition"
    },
    {
        "time": "0.26:35",
        "name": "44_线程通信之生产者消费者阻塞队列版"
    },
    {
        "time": "0.40:22",
        "name": "45_Callable接口"
    },
    {
        "time": "0.10:38",
        "name": "46_线程池使用及优势"
    },
    {
        "time": "0.21:55",
        "name": "47_线程池3个常用方式"
    },
    {
        "time": "0.06:33",
        "name": "48_线程池7大参数入门简介"
    },
    {
        "time": "0.25:19",
        "name": "49_线程池7大参数深入介绍"
    },
    {
        "time": "0.13:12",
        "name": "50_线程池底层工作原理"
    },
    {
        "time": "0.04:30",
        "name": "51_线程池的4种拒绝策略理论简介"
    },
    {
        "time": "0.06:46",
        "name": "52_线程池实际中使用哪一个"
    },
    {
        "time": "0.14:04",
        "name": "53_线程池的手写改造和拒绝策略"
    },
    {
        "time": "0.08:08",
        "name": "54_线程池配置合理线程数"
    },
    {
        "time": "0.20:17",
        "name": "55_死锁编码及定位分析"
    },
    {
        "time": "0.03:34",
        "name": "56_JVMGC下半场技术加强说明和前提知识要求"
    },
    {
        "time": "0.09:15",
        "name": "57_JVMGC快速回顾复习串讲"
    },
    {
        "time": "0.17:46",
        "name": "58_谈谈你对GCRoots的理解"
    },
    {
        "time": "0.06:03",
        "name": "59_JVM的标配参数和X参数"
    },
    {
        "time": "0.11:06",
        "name": "60_JVM的XX参数之布尔类型"
    },
    {
        "time": "0.08:30",
        "name": "61_JVM的XX参数之设值类型"
    },
    {
        "time": "0.05:33",
        "name": "62_JVM的XX参数之XmsXmx坑题"
    },
    {
        "time": "0.08:39",
        "name": "63_JVM盘点家底查看初始默认值"
    },
    {
        "time": "0.13:55",
        "name": "64_JVM盘点家底查看修改变更值"
    },
    {
        "time": "0.04:32",
        "name": "65_堆内存初始大小快速复习"
    },
    {
        "time": "0.09:57",
        "name": "66_常用基础参数栈内存Xss讲解"
    },
    {
        "time": "0.10:34",
        "name": "67_常用基础参数元空间MetaspaceSize讲解"
    },
    {
        "time": "0.10:59",
        "name": "68_常用基础参数PrintGCDetails回收前后对比讲解"
    },
    {
        "time": "0.06:51",
        "name": "69_常用基础参数SurvivorRatio讲解"
    },
    {
        "time": "0.07:06",
        "name": "70_常用基础参数NewRatio讲解"
    },
    {
        "time": "0.06:14",
        "name": "71_常用基础参数MaxTenuringThreshold讲解"
    },
    {
        "time": "0.06:19",
        "name": "72_强引用Reference"
    },
    {
        "time": "0.08:36",
        "name": "73_软引用SoftReference"
    },
    {
        "time": "0.05:27",
        "name": "74_弱引用WeakReference"
    },
    {
        "time": "0.04:58",
        "name": "75_软引用和弱引用的适用场景"
    },
    {
        "time": "0.11:39",
        "name": "76_WeakHashMap案例演示和解析"
    },
    {
        "time": "0.05:33",
        "name": "77_虚引用简介"
    },
    {
        "time": "0.04:41",
        "name": "78_ReferenceQueue引用队列介"
    },
    {
        "time": "0.06:08",
        "name": "79_虚引用PhantomReference"
    },
    {
        "time": "0.03:14",
        "name": "80_GCRoots和四大引用小总结"
    },
    {
        "time": "0.08:36",
        "name": "81_SOFE之StackOverflowError"
    },
    {
        "time": "0.04:15",
        "name": "82_OOM之Java heap space"
    },
    {
        "time": "0.10:10",
        "name": "83_OOM之GC overhead limit exceeded"
    },
    {
        "time": "0.14:25",
        "name": "84_OOM之Direct buffer memory"
    },
    {
        "time": "0.13:35",
        "name": "85_OOM之unable to create new native thread故障演示"
    },
    {
        "time": "0.03:54",
        "name": "86_OOM之unable to create new native thread上限调整"
    },
    {
        "time": "0.10:27",
        "name": "87_OOM之Metaspace"
    },
    {
        "time": "0.05:07",
        "name": "88_垃圾收集器回收种类"
    },
    {
        "time": "0.11:28",
        "name": "89_串行并行并发G1四大垃圾回收方式"
    },
    {
        "time": "0.08:38",
        "name": "90_如何查看默认的垃圾收集器"
    },
    {
        "time": "0.06:53",
        "name": "91_JVM默认的垃圾收集器有哪些"
    },
    {
        "time": "0.07:31",
        "name": "92_GC之7大垃圾收集器概述"
    },
    {
        "time": "0.04:59",
        "name": "93_GC之约定参数说明"
    },
    {
        "time": "0.08:12",
        "name": "94_GC之Serial收集器"
    },
    {
        "time": "0.07:30",
        "name": "95_GC之ParNew收集器"
    },
    {
        "time": "0.08:40",
        "name": "96_GC之Parallel收集器"
    },
    {
        "time": "0.05:07",
        "name": "97_GC之ParallelOld收集器"
    },
    {
        "time": "0.15:11",
        "name": "98_GC之CMS收集器"
    },
    {
        "time": "0.06:21",
        "name": "99_GC之SerialOld收集器"
    },
    {
        "time": "0.04:26",
        "name": "100_GC之如何选择垃圾收集器"
    },
    {
        "time": "0.16:08",
        "name": "101_GC之G1收集器"
    },
    {
        "time": "0.10:22",
        "name": "102_GC之G1底层原理"
    },
    {
        "time": "0.06:55",
        "name": "103_GC之G1参数配置及和CMS的比较"
    },
    {
        "time": "0.12:09",
        "name": "104_JVMGC结合SpringBoot微服务优化简介"
    },
    {
        "time": "0.05:52",
        "name": "105_Linux命令之top"
    },
    {
        "time": "0.04:05",
        "name": "106_Linux之cpu查看vmstat"
    },
    {
        "time": "0.02:55",
        "name": "107_Linux之cpu查看pidstat"
    },
    {
        "time": "0.03:00",
        "name": "108_Linux之内存查看free和pidstat"
    },
    {
        "time": "0.00:59",
        "name": "109_Linux之硬盘查看df"
    },
    {
        "time": "0.03:38",
        "name": "110_Linux之磁盘IO查看iostat和pidstat"
    },
    {
        "time": "0.02:21",
        "name": "111_Linux之网络IO查看ifstat"
    },
    {
        "time": "0.09:40",
        "name": "112_CPU占用过高的定位分析思路"
    },
    {
        "time": "0.14:13",
        "name": "113_GitHub骚操作之开启"
    },
    {
        "time": "0.04:36",
        "name": "114_GitHub骚操作之常用词"
    },
    {
        "time": "0.07:00",
        "name": "115_GitHub骚操作之in限制搜索"
    },
    {
        "time": "0.10:51",
        "name": "116_GitHub骚操作之star和fork范围搜索"
    },
    {
        "time": "0.04:23",
        "name": "117_GitHub骚操作之awesome搜索"
    },
    {
        "time": "0.04:34",
        "name": "118_GitHub骚操作之#L数字"
    },
    {
        "time": "0.04:48",
        "name": "119_GitHub骚操作之T搜索"
    },
    {
        "time": "0.03:03",
        "name": "120_GitHub骚操作之搜索区域活跃用户"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data