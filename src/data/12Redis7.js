 
 
var data = [
    {
        "time": "0.07:43",
        "name": "01_redis7实战教程简介"
    },
    {
        "time": "0.07:04",
        "name": "02_redis是什么"
    },
    {
        "time": "0.09:30",
        "name": "03_redis能干嘛-上集"
    },
    {
        "time": "0.11:40",
        "name": "04_redis能干嘛-中集"
    },
    {
        "time": "0.03:25",
        "name": "05_redis能干嘛-下集"
    },
    {
        "time": "0.05:46",
        "name": "06_redis去哪下"
    },
    {
        "time": "0.01:45",
        "name": "07_redis怎么玩"
    },
    {
        "time": "0.15:15",
        "name": "08_redis7新特性浅谈"
    },
    {
        "time": "0.06:28",
        "name": "09_redis安装环境要求和准备"
    },
    {
        "time": "0.27:12",
        "name": "10_redis安装和坑排除"
    },
    {
        "time": "0.17:05",
        "name": "11_redis10大类型之总体概述"
    },
    {
        "time": "0.02:57",
        "name": "12_redis10大类型之命令查阅"
    },
    {
        "time": "0.11:21",
        "name": "13_redis10大类型之key操作命令"
    },
    {
        "time": "0.02:22",
        "name": "14_redis10大类型之大小写和帮助命令"
    },
    {
        "time": "0.14:05",
        "name": "15_redis10大类型之string-上集"
    },
    {
        "time": "0.13:18",
        "name": "16_redis10大类型之string-下集"
    },
    {
        "time": "0.14:12",
        "name": "17_redis10大类型之list"
    },
    {
        "time": "0.09:21",
        "name": "18_redis10大类型之hash"
    },
    {
        "time": "0.18:47",
        "name": "19_redis10大类型之set"
    },
    {
        "time": "0.16:18",
        "name": "20_redis10大类型之zset"
    },
    {
        "time": "0.22:26",
        "name": "21_redis10大类型之bitmap"
    },
    {
        "time": "0.11:46",
        "name": "22_redis10大类型之HyperLogLog"
    },
    {
        "time": "0.17:53",
        "name": "23_redis10大类型之GEO"
    },
    {
        "time": "0.16:06",
        "name": "24_redis10大类型之Stream-上集"
    },
    {
        "time": "0.17:04",
        "name": "25_redis10大类型之Stream-中集"
    },
    {
        "time": "0.16:12",
        "name": "26_redis10大类型之Stream-下集"
    },
    {
        "time": "0.24:47",
        "name": "27_redis10大类型之bitfield"
    },
    {
        "time": "0.04:48",
        "name": "28_redis持久化之理论介绍"
    },
    {
        "time": "0.08:58",
        "name": "29_redis持久化之RDB简介"
    },
    {
        "time": "0.06:50",
        "name": "30_redis持久化之RDB配置说明"
    },
    {
        "time": "0.09:13",
        "name": "31_redis持久化之RDB自动触发"
    },
    {
        "time": "0.10:49",
        "name": "32_redis持久化之RDB手动触发"
    },
    {
        "time": "0.10:01",
        "name": "33_redis持久化之RDB优缺点及数据丢失案例"
    },
    {
        "time": "0.02:44",
        "name": "34_redis持久化之RDB修复命令简介"
    },
    {
        "time": "0.03:26",
        "name": "35_redis持久化之RDB触发小结和快照禁用"
    },
    {
        "time": "0.05:36",
        "name": "36_redis持久化之RDB优化参数"
    },
    {
        "time": "0.05:22",
        "name": "37_redis持久化之AOF简介"
    },
    {
        "time": "0.07:43",
        "name": "38_redis持久化之AOF工作流程和写回策略"
    },
    {
        "time": "0.12:51",
        "name": "39_redis持久化之AOF功能配置开启"
    },
    {
        "time": "0.08:58",
        "name": "40_redis持久化之AOF正常恢复演示"
    },
    {
        "time": "0.09:44",
        "name": "41_redis持久化之AOF异常恢复演示"
    },
    {
        "time": "0.07:06",
        "name": "42_redis持久化之AOF优缺点案例总结"
    },
    {
        "time": "0.15:59",
        "name": "43_redis持久化之AOF重写机制案例"
    },
    {
        "time": "0.02:08",
        "name": "44_redis持久化之AOF小总结"
    },
    {
        "time": "0.07:46",
        "name": "45_redis持久化之RDB+AOF混合持久化"
    },
    {
        "time": "0.02:07",
        "name": "46_redis持久化之纯缓存模式Only"
    },
    {
        "time": "0.11:11",
        "name": "47_redis事务之理论简介"
    },
    {
        "time": "0.19:45",
        "name": "48_redis事务之案例实操"
    },
    {
        "time": "0.06:57",
        "name": "49_redis管道之理论简介"
    },
    {
        "time": "0.05:47",
        "name": "50_redis管道之案例实操"
    },
    {
        "time": "0.04:56",
        "name": "51_redis管道之小总结"
    },
    {
        "time": "0.04:04",
        "name": "52_redis发布订阅之理论简介"
    },
    {
        "time": "0.03:41",
        "name": "53_redis发布订阅之命令简介"
    },
    {
        "time": "0.08:55",
        "name": "54_redis发布订阅之案例实操"
    },
    {
        "time": "0.12:59",
        "name": "55_redis主从复制之理论简介"
    },
    {
        "time": "0.07:57",
        "name": "56_redis主从复制之演示架构"
    },
    {
        "time": "0.09:01",
        "name": "57_redis主从复制之配置细则"
    },
    {
        "time": "0.19:18",
        "name": "58_redis主从复制之一主二仆"
    },
    {
        "time": "0.06:26",
        "name": "59_redis主从复制之薪火相传"
    },
    {
        "time": "0.01:55",
        "name": "60_redis主从复制之反客为主"
    },
    {
        "time": "0.05:33",
        "name": "61_redis主从复制之工作流程总结"
    },
    {
        "time": "0.03:17",
        "name": "62_redis主从复制之痛点和改进需求"
    },
    {
        "time": "0.09:24",
        "name": "63_redis哨兵监控之理论简介"
    },
    {
        "time": "0.08:01",
        "name": "64_redis哨兵监控之案例实操01"
    },
    {
        "time": "0.04:40",
        "name": "65_redis哨兵监控之案例实操02"
    },
    {
        "time": "0.07:59",
        "name": "66_redis哨兵监控之案例实操03"
    },
    {
        "time": "0.04:18",
        "name": "67_redis哨兵监控之案例实操04"
    },
    {
        "time": "0.16:21",
        "name": "68_redis哨兵监控之案例实操05"
    },
    {
        "time": "0.10:08",
        "name": "69_redis哨兵监控之案例实操06"
    },
    {
        "time": "0.03:15",
        "name": "70_redis哨兵监控之案例实操07"
    },
    {
        "time": "0.13:10",
        "name": "71_redis哨兵监控之哨兵运行流程"
    },
    {
        "time": "0.09:03",
        "name": "72_redis哨兵监控之新master选举算法"
    },
    {
        "time": "0.03:48",
        "name": "73_redis哨兵监控之哨兵使用建议"
    },
    {
        "time": "0.06:54",
        "name": "74_redis集群分片之集群是什么"
    },
    {
        "time": "0.04:57",
        "name": "75_redis集群分片之集群能干嘛"
    },
    {
        "time": "0.06:27",
        "name": "76_redis集群分片之槽位slot"
    },
    {
        "time": "0.02:05",
        "name": "77_redis集群分片之分片"
    },
    {
        "time": "0.03:29",
        "name": "78_redis集群分片之分片优势"
    },
    {
        "time": "0.04:06",
        "name": "79_redis集群分片之哈希取余分区算法"
    },
    {
        "time": "0.05:36",
        "name": "80_redis集群分片之一致性哈希算法-上集"
    },
    {
        "time": "0.03:13",
        "name": "81_redis集群分片之一致性哈希算法-下集"
    },
    {
        "time": "0.03:37",
        "name": "82_redis集群分片之一致性哈希算法优缺点"
    },
    {
        "time": "0.04:23",
        "name": "83_redis集群分片之哈希槽分区算法"
    },
    {
        "time": "0.05:59",
        "name": "84_redis集群分片之为什么最大槽数是16384个"
    },
    {
        "time": "0.02:43",
        "name": "85_redis集群分片之不保证强一致性"
    },
    {
        "time": "0.07:21",
        "name": "86_redis集群分片之3主3从集群搭建-上集"
    },
    {
        "time": "0.09:34",
        "name": "87_redis集群分片之3主3从集群搭建-下集"
    },
    {
        "time": "0.06:57",
        "name": "88_redis集群分片之3主3从集群读写"
    },
    {
        "time": "0.11:27",
        "name": "89_redis集群分片之主从容错切换"
    },
    {
        "time": "0.15:46",
        "name": "90_redis集群分片之集群扩容"
    },
    {
        "time": "0.08:40",
        "name": "91_redis集群分片之集群缩容"
    },
    {
        "time": "0.12:00",
        "name": "92_redis集群分片之小总结"
    },
    {
        "time": "0.08:10",
        "name": "93_springboot整合redis之总体概述"
    },
    {
        "time": "0.13:03",
        "name": "94_springboot整合redis之jedis简介"
    },
    {
        "time": "0.14:50",
        "name": "95_springboot整合redis之lettuce简介"
    },
    {
        "time": "0.18:51",
        "name": "96_springboot整合redis之RedisTemplate-上集"
    },
    {
        "time": "0.13:56",
        "name": "97_springboot整合redis之RedisTemplate-下集"
    },
    {
        "time": "0.09:30",
        "name": "98_springboot整合redis之连接集群-上集"
    },
    {
        "time": "0.11:23",
        "name": "99_springboot整合redis之连接集群-下集"
    },
    {
        "time": "0.07:37",
        "name": "100_redis高级篇之开篇闲聊扯淡"
    },
    {
        "time": "0.21:36",
        "name": "101_redis高级篇之为什么用单线程"
    },
    {
        "time": "0.42:31",
        "name": "102_redis高级篇之开始支持多线程和IO多路复用首次浅谈"
    },
    {
        "time": "0.06:32",
        "name": "103_redis高级篇之开启多线程IO特性支持"
    },
    {
        "time": "0.04:45",
        "name": "104_redis高级篇之BigKey大厂面试题概览"
    },
    {
        "time": "0.25:44",
        "name": "105_redis高级篇之BigKey100W记录案例和生产故障"
    },
    {
        "time": "0.26:49",
        "name": "106_redis高级篇之BigKey发现删除优化策略_1"
    },
    {
        "time": "0.06:27",
        "name": "107_redis高级篇之缓存双写一致性面试题概览"
    },
    {
        "time": "0.19:20",
        "name": "108_redis高级篇之缓存双写一致性细则要求"
    },
    {
        "time": "0.42:04",
        "name": "109_redis高级篇之缓存双写一致性四大策略探讨"
    },
    {
        "time": "0.17:12",
        "name": "110_redis高级篇之缓存双写一致性工程落地需求和Canal简介"
    },
    {
        "time": "0.49:23",
        "name": "111_redis高级篇之缓存双写一致性工程Canle落地案例编码"
    },
    {
        "time": "0.18:06",
        "name": "112_redis高级篇之大数据统计分析面试题概览"
    },
    {
        "time": "0.12:01",
        "name": "113_redis高级篇之大数据统计UVPVDAU术语行话"
    },
    {
        "time": "0.12:27",
        "name": "114_redis高级篇之大数据统计去重复思路分析和误差率"
    },
    {
        "time": "0.14:35",
        "name": "115_redis高级篇之大数据统计HyperLogLog案例"
    },
    {
        "time": "0.11:48",
        "name": "116_redis高级篇之大数据统计GEO附近的XXX类型面试题"
    },
    {
        "time": "0.21:42",
        "name": "117_redis高级篇之大数据统计GEO美团app附近的酒店推送案例"
    },
    {
        "time": "0.09:53",
        "name": "118_redis高级篇之大数据统计Bitmap京东签到送京豆案例"
    },
    {
        "time": "0.04:17",
        "name": "119_redis高级篇之布隆过滤器面试题简介"
    },
    {
        "time": "0.34:36",
        "name": "120_redis高级篇之布隆过滤器是什么"
    },
    {
        "time": "0.51:14",
        "name": "121_redis高级篇之布隆过滤器自研案例和基础代码"
    },
    {
        "time": "0.31:11",
        "name": "122_redis高级篇之布隆过滤器结合bitmap手写布隆过滤器和小总结"
    },
    {
        "time": "0.02:50",
        "name": "123_redis高级篇之缓存预热雪崩穿透击穿面试题简介"
    },
    {
        "time": "0.25:42",
        "name": "124_redis高级篇之缓存预热-雪崩-穿透"
    },
    {
        "time": "0.38:05",
        "name": "125_redis高级篇之Guava版布隆过滤器案例分析和编码"
    },
    {
        "time": "0.08:50",
        "name": "126_redis高级篇之缓存击穿是什么及危害"
    },
    {
        "time": "0.52:29",
        "name": "127_redis高级篇之天猫聚划算需求分析-设计-编码案例"
    },
    {
        "time": "0.03:04",
        "name": "128_redis高级篇之缓存预热雪崩穿透击穿小总结"
    },
    {
        "time": "0.12:11",
        "name": "129_redis高级篇之redis分布式锁大厂面试题简介"
    },
    {
        "time": "0.48:19",
        "name": "130_redis高级篇之redis分布式锁是什么及超卖故障"
    },
    {
        "time": "0.53:37",
        "name": "131_redis高级篇之redis分布式锁迭代编码01"
    },
    {
        "time": "0.34:06",
        "name": "132_redis高级篇之redis分布式锁迭代编码02"
    },
    {
        "time": "0.40:54",
        "name": "133_redis高级篇之redis分布式锁迭代编码03"
    },
    {
        "time": "0.32:07",
        "name": "134_redis高级篇之redis分布式锁迭代编码04"
    },
    {
        "time": "0.26:42",
        "name": "135_redis高级篇之redis分布式锁迭代编码05"
    },
    {
        "time": "0.28:24",
        "name": "136_redis高级篇之redis分布式锁迭代编码06"
    },
    {
        "time": "0.29:22",
        "name": "137_redis高级篇之redis分布式锁迭代编码07"
    },
    {
        "time": "0.06:05",
        "name": "138_redis高级篇之redis分布式锁小总结"
    },
    {
        "time": "0.36:34",
        "name": "139_redis高级篇之RedLock底层Redisson源码深度分析-上"
    },
    {
        "time": "0.37:13",
        "name": "140_redis高级篇之RedLock底层Redisson源码深度分析-中"
    },
    {
        "time": "0.37:51",
        "name": "141_redis高级篇之RedLock底层Redisson源码深度分析-下"
    },
    {
        "time": "0.06:36",
        "name": "142_redis高级篇之缓存淘汰策略大厂面试题简介"
    },
    {
        "time": "0.20:52",
        "name": "143_redis高级篇之缓存淘汰策略内存查看和打满OOM"
    },
    {
        "time": "0.12:09",
        "name": "144_redis高级篇之缓存淘汰策略八种策略及使用建议_1"
    },
    {
        "time": "0.10:46",
        "name": "145_redis高级篇之redis源码分析大厂面试题简介"
    },
    {
        "time": "0.29:28",
        "name": "146_redis高级篇之redis源码分析src源码包简介"
    },
    {
        "time": "0.11:45",
        "name": "147_redis高级篇之redis源码分析从dictEntry到RedisObject"
    },
    {
        "time": "0.39:19",
        "name": "148_redis高级篇之redis源码分析RedisObject内各字段含义"
    },
    {
        "time": "0.10:13",
        "name": "149_redis高级篇之redis源码分析String类型3大编码介绍_1"
    },
    {
        "time": "0.16:20",
        "name": "150_redis高级篇之redis源码分析String类型SDS"
    },
    {
        "time": "0.21:52",
        "name": "151_redis高级篇之redis源码分析String之int-embstr-raw源码分析"
    },
    {
        "time": "0.07:14",
        "name": "152_redis高级篇之redis源码分析String重要总结"
    },
    {
        "time": "0.02:36",
        "name": "153_redis高级篇之redis源码分析Hash类型底层结构概述"
    },
    {
        "time": "0.22:14",
        "name": "154_redis高级篇之redis源码分析Hash类型ziplist和hashtable案例"
    },
    {
        "time": "0.33:15",
        "name": "155_redis高级篇之redis源码分析Hash类型ziplist结构和zlentry实体解析"
    },
    {
        "time": "0.23:18",
        "name": "156_redis高级篇之redis源码分析Hash类型listpack取代ziplist"
    },
    {
        "time": "0.02:59",
        "name": "157_redis高级篇之redis源码分析Hash类型listpack VS ziplist小总结"
    },
    {
        "time": "0.05:53",
        "name": "158_redis高级篇之redis源码分析List类型总纲介绍"
    },
    {
        "time": "0.08:18",
        "name": "159_redis高级篇之redis源码分析List类型quicklist底层演变"
    },
    {
        "time": "0.08:46",
        "name": "160_redis高级篇之redis源码分析List类型quicklist源码分析"
    },
    {
        "time": "0.04:32",
        "name": "161_redis高级篇之redis源码分析Set类型源码分析"
    },
    {
        "time": "0.04:40",
        "name": "162_redis高级篇之redis源码分析ZSet类型源码分析"
    },
    {
        "time": "0.04:14",
        "name": "163_redis高级篇之redis源码分析小总结"
    },
    {
        "time": "0.22:55",
        "name": "164_redis高级篇之skiplist跳表"
    },
    {
        "time": "0.17:42",
        "name": "165_redis高级篇之IO多路复用要解决那些问题及学术概念"
    },
    {
        "time": "0.09:43",
        "name": "166_redis高级篇之IO多路复用redis为什么这么快"
    },
    {
        "time": "0.08:38",
        "name": "167_redis高级篇之IO多路复用吃米线聊网络场景"
    },
    {
        "time": "0.06:02",
        "name": "168_redis高级篇之IO多路复用同步异步和阻塞非阻塞"
    },
    {
        "time": "0.40:22",
        "name": "169_redis高级篇之IO多路复用BIO"
    },
    {
        "time": "0.24:28",
        "name": "170_redis高级篇之IO多路复用NIO"
    },
    {
        "time": "0.08:51",
        "name": "171_redis高级篇之IO多路复用IOMultiplexing理论简介"
    },
    {
        "time": "0.07:49",
        "name": "172_redis高级篇之IO多路复用IOMultiplexing从学术到人话版"
    },
    {
        "time": "0.08:49",
        "name": "173_redis高级篇之IO多路复用IOMultiplexing能干嘛"
    },
    {
        "time": "0.12:15",
        "name": "174_redis高级篇之IO多路复用select方法简介"
    },
    {
        "time": "0.05:08",
        "name": "175_redis高级篇之IO多路复用poll方法简介"
    },
    {
        "time": "0.11:26",
        "name": "176_redis高级篇之IO多路复用epoll方法简介"
    },
    {
        "time": "0.03:21",
        "name": "177_redis高级篇之IO多路复用兜底函数方案和系统选择"
    },
    {
        "time": "1:05:12",
        "name": "178_终章の总结彩蛋"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data