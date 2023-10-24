 
 
var data = [
    {
        "time": "0.15:28",
        "name": "01_前言闲聊和课程说明"
    },
    {
        "time": "0.20:31",
        "name": "02_零基础微服务架构理论入门"
    },
    {
        "time": "0.17:08",
        "name": "03_第二季Boot和Cloud版本选型"
    },
    {
        "time": "0.18:33",
        "name": "04_Cloud组件停更说明"
    },
    {
        "time": "0.12:34",
        "name": "05_父工程Project空间新建"
    },
    {
        "time": "0.06:06",
        "name": "06_父工程pom文件"
    },
    {
        "time": "0.07:45",
        "name": "07_复习DependencyManagement和Dependencies"
    },
    {
        "time": "0.15:05",
        "name": "08_支付模块构建(上)"
    },
    {
        "time": "0.35:01",
        "name": "09_支付模块构建(中)"
    },
    {
        "time": "0.09:45",
        "name": "10_支付模块构建(下)"
    },
    {
        "time": "0.06:35",
        "name": "11_热部署Devtools"
    },
    {
        "time": "0.20:20",
        "name": "12_消费者订单模块(上)"
    },
    {
        "time": "0.10:21",
        "name": "13_消费者订单模块(下)"
    },
    {
        "time": "0.09:40",
        "name": "14_工程重构"
    },
    {
        "time": "0.11:26",
        "name": "15_Eureka基础知识"
    },
    {
        "time": "0.09:10",
        "name": "16_EurekaServer服务端安装"
    },
    {
        "time": "0.09:17",
        "name": "17_支付微服务8001入驻进eurekaServer"
    },
    {
        "time": "0.06:26",
        "name": "18_订单微服务80入驻进eurekaServer"
    },
    {
        "time": "0.06:51",
        "name": "19_Eureka集群原理说明"
    },
    {
        "time": "0.09:14",
        "name": "20_Eureka集群环境构建"
    },
    {
        "time": "0.05:34",
        "name": "21_订单支付两微服务注册进Eureka集群"
    },
    {
        "time": "0.21:06",
        "name": "22_支付微服务集群配置"
    },
    {
        "time": "0.07:48",
        "name": "23_actuator微服务信息完善"
    },
    {
        "time": "0.11:56",
        "name": "24_服务发现Discovery"
    },
    {
        "time": "0.08:56",
        "name": "25_Eureka自我保护理论知识"
    },
    {
        "time": "0.10:06",
        "name": "26_怎么禁止自我保护"
    },
    {
        "time": "0.03:02",
        "name": "27_Eureka停更说明"
    },
    {
        "time": "0.18:43",
        "name": "28_支付服务注册进zookeeper"
    },
    {
        "time": "0.05:41",
        "name": "29_临时还是持久节点"
    },
    {
        "time": "0.10:35",
        "name": "30_订单服务注册进zookeeper"
    },
    {
        "time": "0.05:48",
        "name": "31_Consul简介"
    },
    {
        "time": "0.03:47",
        "name": "32_安装并运行Consul"
    },
    {
        "time": "0.07:01",
        "name": "33_服务提供者注册进Consul"
    },
    {
        "time": "0.06:11",
        "name": "34_服务消费者注册进Consul"
    },
    {
        "time": "0.10:43",
        "name": "35_三个注册中心异同点"
    },
    {
        "time": "0.09:15",
        "name": "36_Ribbon入门介绍"
    },
    {
        "time": "0.13:14",
        "name": "37_Ribbon的负载均衡和Rest调用"
    },
    {
        "time": "0.04:02",
        "name": "38_Ribbon默认自带的负载规则"
    },
    {
        "time": "0.06:20",
        "name": "39_Ribbon负载规则替换"
    },
    {
        "time": "0.08:48",
        "name": "40_Ribbon默认负载轮训算法原理"
    },
    {
        "time": "0.12:39",
        "name": "41_RoundRobinRule源码分析"
    },
    {
        "time": "0.27:33",
        "name": "42_Ribbon之手写轮询算法"
    },
    {
        "time": "0.08:42",
        "name": "43_OpenFeign是什么"
    },
    {
        "time": "0.16:24",
        "name": "44_OpenFeign服务调用"
    },
    {
        "time": "0.10:53",
        "name": "45_OpenFeign超时控制"
    },
    {
        "time": "0.04:46",
        "name": "46_OpenFeign日志增强"
    },
    {
        "time": "0.05:56",
        "name": "47_Hystrix是什么"
    },
    {
        "time": "0.05:03",
        "name": "48_Hystrix停更进维"
    },
    {
        "time": "0.07:00",
        "name": "49_Hystrix的服务降级熔断限流概念初讲"
    },
    {
        "time": "0.14:58",
        "name": "50_Hystrix支付微服务构建"
    },
    {
        "time": "0.08:10",
        "name": "51_JMeter高并发压测后卡顿"
    },
    {
        "time": "0.12:48",
        "name": "52_订单微服务调用支付服务出现卡顿"
    },
    {
        "time": "0.04:28",
        "name": "53_降级容错解决的维度要求"
    },
    {
        "time": "0.12:13",
        "name": "54_Hystrix之服务降级支付侧fallback"
    },
    {
        "time": "0.12:06",
        "name": "55_Hystrix之服务降级订单侧fallback"
    },
    {
        "time": "0.07:35",
        "name": "56_Hystrix之全局服务降级DefaultProperties"
    },
    {
        "time": "0.10:48",
        "name": "57_Hystrix之通配服务降级FeignFallback"
    },
    {
        "time": "0.08:36",
        "name": "58_Hystrix之服务熔断理论"
    },
    {
        "time": "0.11:59",
        "name": "59_Hystrix之服务熔断案例(上)"
    },
    {
        "time": "0.05:57",
        "name": "60_Hystrix之服务熔断案例(下)"
    },
    {
        "time": "0.06:25",
        "name": "61_Hystrix之服务熔断总结"
    },
    {
        "time": "0.09:09",
        "name": "62_Hystrix工作流程最后总结"
    },
    {
        "time": "0.05:39",
        "name": "63_Hystrix图形化Dashboard搭建"
    },
    {
        "time": "0.09:52",
        "name": "64_Hystrix图形化Dashboard监控实战"
    },
    {
        "time": "0.04:45",
        "name": "65_GateWay和Zuul课程说明"
    },
    {
        "time": "0.09:56",
        "name": "66_GateWay是什么"
    },
    {
        "time": "0.08:01",
        "name": "67_GateWay非阻塞异步模型"
    },
    {
        "time": "0.06:06",
        "name": "68_Gateway工作流程"
    },
    {
        "time": "0.11:59",
        "name": "69_Gateway9527搭建"
    },
    {
        "time": "0.11:59",
        "name": "70_Gateway配置路由的两种方式"
    },
    {
        "time": "0.07:21",
        "name": "71_GateWay配置动态路由"
    },
    {
        "time": "0.20:08",
        "name": "72_GateWay常用的Predicate"
    },
    {
        "time": "0.12:10",
        "name": "73_GateWay的Filter"
    },
    {
        "time": "0.10:50",
        "name": "74_Config分布式配置中心介绍"
    },
    {
        "time": "0.15:20",
        "name": "75_Config配置总控中心搭建"
    },
    {
        "time": "0.16:47",
        "name": "76_Config客户端配置与测试"
    },
    {
        "time": "0.12:50",
        "name": "77_Config动态刷新之手动版"
    },
    {
        "time": "0.07:55",
        "name": "78_Bus消息总线是什么"
    },
    {
        "time": "0.03:56",
        "name": "79_Bus之RabbitMQ环境配置"
    },
    {
        "time": "0.07:48",
        "name": "80_Bus动态刷新全局广播的设计思想和选型"
    },
    {
        "time": "0.14:13",
        "name": "81_Bus动态刷新全局广播配置实现"
    },
    {
        "time": "0.05:41",
        "name": "82_Bus动态刷新定点通知"
    },
    {
        "time": "0.07:51",
        "name": "83_Stream为什么被引入"
    },
    {
        "time": "0.06:20",
        "name": "84_Stream是什么及Binder介绍"
    },
    {
        "time": "0.07:19",
        "name": "85_Stream的设计思想"
    },
    {
        "time": "0.05:03",
        "name": "86_Stream编码常用注解简介"
    },
    {
        "time": "0.17:04",
        "name": "87_Stream消息驱动之生产者"
    },
    {
        "time": "0.11:01",
        "name": "88_Stream消息驱动之消费者"
    },
    {
        "time": "0.08:27",
        "name": "89_Stream之消息重复消费"
    },
    {
        "time": "0.07:56",
        "name": "90_Stream之group解决消息重复消费"
    },
    {
        "time": "0.03:56",
        "name": "91_Stream之消息持久化"
    },
    {
        "time": "0.04:25",
        "name": "92_Sleuth是什么"
    },
    {
        "time": "0.06:13",
        "name": "93_Sleuth之zipkin搭建安装"
    },
    {
        "time": "0.08:28",
        "name": "94_Sleuth链路监控展现"
    },
    {
        "time": "0.16:26",
        "name": "95_Cloud Alibaba简介"
    },
    {
        "time": "0.07:16",
        "name": "96_Nacos简介和下载"
    },
    {
        "time": "0.03:03",
        "name": "97_Nacos安装"
    },
    {
        "time": "0.17:27",
        "name": "98_Nacos之服务提供者注册"
    },
    {
        "time": "0.10:11",
        "name": "99_Nacos之服务消费者注册和负载"
    },
    {
        "time": "0.06:52",
        "name": "100_Nacos服务注册中心对比提升"
    },
    {
        "time": "0.20:02",
        "name": "101_Nacos之服务配置中心"
    },
    {
        "time": "0.06:06",
        "name": "102_Nacos之命名空间分组和DataID三者关系"
    },
    {
        "time": "0.06:30",
        "name": "103_Nacos之DataID配置"
    },
    {
        "time": "0.04:49",
        "name": "104_Nacos之Group分组方案"
    },
    {
        "time": "0.09:24",
        "name": "105_Nacos之Namespace空间方案"
    },
    {
        "time": "0.11:28",
        "name": "106_Nacos集群_架构说明"
    },
    {
        "time": "0.08:45",
        "name": "107_Nacos持久化切换配置"
    },
    {
        "time": "0.05:16",
        "name": "108_Nacos之Linux版本安装"
    },
    {
        "time": "0.19:34",
        "name": "109_Nacos集群配置(上)"
    },
    {
        "time": "0.12:25",
        "name": "110_Nacos集群配置(下)"
    },
    {
        "time": "0.07:03",
        "name": "111_Sentinel是什么"
    },
    {
        "time": "0.06:13",
        "name": "112_Sentinel下载安装运行"
    },
    {
        "time": "0.07:54",
        "name": "113_Sentinel初始化监控"
    },
    {
        "time": "0.03:04",
        "name": "114_Sentinel流控规则简介"
    },
    {
        "time": "0.06:27",
        "name": "115_Sentinel流控-QPS直接失败"
    },
    {
        "time": "0.06:07",
        "name": "116_Sentinel流控-线程数直接失败"
    },
    {
        "time": "0.07:14",
        "name": "117_Sentinel流控-关联"
    },
    {
        "time": "0.08:14",
        "name": "118_Sentinel流控-预热"
    },
    {
        "time": "0.05:32",
        "name": "119_Sentinel流控-排队等待"
    },
    {
        "time": "0.04:48",
        "name": "120_Sentinel降级简介"
    },
    {
        "time": "0.07:29",
        "name": "121_Sentinel降级-RT"
    },
    {
        "time": "0.07:19",
        "name": "122_Sentinel降级-异常比例"
    },
    {
        "time": "0.04:16",
        "name": "123_Sentinel降级-异常数"
    },
    {
        "time": "0.17:13",
        "name": "124_Sentinel热点key(上)"
    },
    {
        "time": "0.10:59",
        "name": "125_Sentinel热点key(下)"
    },
    {
        "time": "0.07:38",
        "name": "126_Sentinel系统规则"
    },
    {
        "time": "0.10:47",
        "name": "127_SentinelResource配置(上)"
    },
    {
        "time": "0.07:47",
        "name": "128_SentinelResource配置(中)"
    },
    {
        "time": "0.04:16",
        "name": "129_SentinelResource配置(下)"
    },
    {
        "time": "0.08:58",
        "name": "130_Sentinel服务熔断Ribbon环境预说"
    },
    {
        "time": "0.04:22",
        "name": "131_Sentinel服务熔断无配置"
    },
    {
        "time": "0.04:12",
        "name": "132_Sentinel服务熔断只配置fallback"
    },
    {
        "time": "0.04:10",
        "name": "133_Sentinel服务熔断只配置blockHandler"
    },
    {
        "time": "0.04:47",
        "name": "134_Sentinel服务熔断fallback和blockHandler都配置"
    },
    {
        "time": "0.02:34",
        "name": "135_Sentinel服务熔断exceptionsToIgnore"
    },
    {
        "time": "0.09:50",
        "name": "136_Sentinel服务熔断OpenFeign"
    },
    {
        "time": "0.10:31",
        "name": "137_Sentinel持久化规则"
    },
    {
        "time": "0.08:28",
        "name": "138_分布式事务问题由来"
    },
    {
        "time": "0.13:28",
        "name": "139_Seata术语"
    },
    {
        "time": "0.13:32",
        "name": "140_Seata-Server安装"
    },
    {
        "time": "0.09:27",
        "name": "141_Seata业务数据库准备"
    },
    {
        "time": "0.10:59",
        "name": "142_Seata之Order-Module配置搭建"
    },
    {
        "time": "0.18:36",
        "name": "143_Seata之Order-Module撸码(上)"
    },
    {
        "time": "0.10:05",
        "name": "144_Seata之Order-Module撸码(下)"
    },
    {
        "time": "0.09:20",
        "name": "145_Seata之Storage-Module说明"
    },
    {
        "time": "0.03:14",
        "name": "146_Seata之Account-Module说明"
    },
    {
        "time": "0.13:30",
        "name": "147_Seata之@GlobalTransactional验证"
    },
    {
        "time": "0.33:46",
        "name": "148_Seata之原理简介"
    },
    {
        "time": "0.37:26",
        "name": "149_大厂面试第三季预告片之雪花算法(上)"
    },
    {
        "time": "0.41:36",
        "name": "150_大厂面试第三季预告片之雪花算法(下)"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data