 
 
var data = [
    {
        "time": "0.09:34",
        "name": "01_前言说明"
    },
    {
        "time": "0.07:20",
        "name": "02_两种讲授闲聊"
    },
    {
        "time": "0.11:53",
        "name": "03_MQ的产品学习说明"
    },
    {
        "time": "0.15:09",
        "name": "04_为什么要引入MQ_上"
    },
    {
        "time": "0.12:05",
        "name": "05_为什么要引入MQ_下"
    },
    {
        "time": "0.10:06",
        "name": "06_MQ的作用定义"
    },
    {
        "time": "0.11:15",
        "name": "07_ActiveMQ官网介绍和下载"
    },
    {
        "time": "0.14:58",
        "name": "08_ActiveMQ在Linux下安装"
    },
    {
        "time": "0.09:50",
        "name": "09_ActiveMQ安装后的控制台访问"
    },
    {
        "time": "0.16:27",
        "name": "10_Java编码MQ标准API讲解"
    },
    {
        "time": "0.20:06",
        "name": "11_消息生产者编码"
    },
    {
        "time": "0.10:01",
        "name": "12_消息消费者编码"
    },
    {
        "time": "0.04:40",
        "name": "13_消息消费者receive方法说明"
    },
    {
        "time": "0.09:36",
        "name": "14_消息消费者MessageListener方法说明"
    },
    {
        "time": "0.12:26",
        "name": "15_消费者3大消费情况"
    },
    {
        "time": "0.05:39",
        "name": "16_队列案例小总结"
    },
    {
        "time": "0.15:01",
        "name": "17_Java编码Topic讲解"
    },
    {
        "time": "0.07:38",
        "name": "18_topic和queue的对比总结"
    },
    {
        "time": "0.05:14",
        "name": "19_JMS是什么"
    },
    {
        "time": "0.13:35",
        "name": "20_MQ中间件的落地产品"
    },
    {
        "time": "0.03:40",
        "name": "21_JMS组成的四大元素"
    },
    {
        "time": "0.12:17",
        "name": "22_Message之消息头"
    },
    {
        "time": "0.06:42",
        "name": "23_Message之消息体"
    },
    {
        "time": "0.05:36",
        "name": "24_Message之消息属性"
    },
    {
        "time": "0.06:55",
        "name": "25_消息可靠性之非持久化"
    },
    {
        "time": "0.05:54",
        "name": "26_消息可靠性之持久化和默认策略"
    },
    {
        "time": "0.17:47",
        "name": "27_持久化topic"
    },
    {
        "time": "0.08:02",
        "name": "28_消息的生产者事务介绍"
    },
    {
        "time": "0.04:26",
        "name": "29_消息的消费者事务介绍"
    },
    {
        "time": "0.09:58",
        "name": "30_消息非事务模式下消费者签收介绍"
    },
    {
        "time": "0.08:46",
        "name": "31_消息有事务模式下消费者签收介绍"
    },
    {
        "time": "0.05:49",
        "name": "32_点对点和发布订阅小总结"
    },
    {
        "time": "0.07:16",
        "name": "33_按照不同的conf配置文件来启动activemq"
    },
    {
        "time": "0.06:27",
        "name": "34_ActiveMQ的Broker"
    },
    {
        "time": "0.19:01",
        "name": "35_Spring整合ActiveMQ之队列生产者"
    },
    {
        "time": "0.03:23",
        "name": "36_Spring整合ActiveMQ之队列消费者"
    },
    {
        "time": "0.04:40",
        "name": "37_Spring整合ActiveMQ之主题生产消费"
    },
    {
        "time": "0.09:09",
        "name": "38_Spring整合ActiveMQ之监听器配置"
    },
    {
        "time": "0.19:39",
        "name": "39_SpringBoot整合ActiveMQ之队列生产者"
    },
    {
        "time": "0.08:50",
        "name": "40_SpringBoot整合ActiveMQ之队列生产者间隔定投"
    },
    {
        "time": "0.05:38",
        "name": "41_SpringBoot整合ActiveMQ之队列消费者"
    },
    {
        "time": "0.06:53",
        "name": "42_SpringBoot整合ActiveMQ之主题生产者"
    },
    {
        "time": "0.04:56",
        "name": "43_SpringBoot整合ActiveMQ之主题消费者"
    },
    {
        "time": "0.08:24",
        "name": "44_ActiveMQ的传输协议简介"
    },
    {
        "time": "0.09:27",
        "name": "45_ActiveMQ的传输协议种类"
    },
    {
        "time": "0.07:06",
        "name": "46_ActiveMQ的传输协议之NIO"
    },
    {
        "time": "0.17:48",
        "name": "47_ActiveMQ的传输协议之NIO加强"
    },
    {
        "time": "0.14:52",
        "name": "48_ActiveMQ消息持久化理论简介"
    },
    {
        "time": "0.09:28",
        "name": "49_ActiveMQ消息持久化机制之AMQ和KahaDB"
    },
    {
        "time": "0.10:09",
        "name": "50_ActiveMQ消息持久化机制之KahaDB的存储原理"
    },
    {
        "time": "0.08:02",
        "name": "51_ActiveMQ消息持久化机制之LevelDB简介"
    },
    {
        "time": "0.15:30",
        "name": "52_ActiveMQ消息持久化机制之JDBC配置mysql-上"
    },
    {
        "time": "0.09:10",
        "name": "53_ActiveMQ消息持久化机制之JDBC配置mysql-中"
    },
    {
        "time": "0.14:06",
        "name": "54_ActiveMQ消息持久化机制之JDBC配置mysql-下"
    },
    {
        "time": "0.05:16",
        "name": "55_ActiveMQ消息持久化机制之JDBC配置mysql小总结"
    },
    {
        "time": "0.10:05",
        "name": "56_ActiveMQ消息持久化机制之JDBC With Journal"
    },
    {
        "time": "0.07:51",
        "name": "57_ActiveMQ持久化机制小总结"
    },
    {
        "time": "0.12:17",
        "name": "58_Zookeeper和Replicated LevelDB集群原理"
    },
    {
        "time": "0.06:06",
        "name": "59_Zookeeper和Replicated LevelDB集群部署规划说明"
    },
    {
        "time": "0.13:02",
        "name": "60_Zookeeper和Replicated LevelDB集群部署配置-上"
    },
    {
        "time": "0.14:11",
        "name": "61_Zookeeper和Replicated LevelDB集群部署配置-下"
    },
    {
        "time": "0.08:51",
        "name": "62_Replicated LevelDB集群故障迁移和验证"
    },
    {
        "time": "0.12:45",
        "name": "63_高级特性之异步投递"
    },
    {
        "time": "0.11:56",
        "name": "64_高级特性之异步投递如何确认发送成功"
    },
    {
        "time": "0.14:08",
        "name": "65_高级特性之延迟投递和定时投递"
    },
    {
        "time": "0.16:01",
        "name": "66_高级特性之消费重试机制"
    },
    {
        "time": "0.09:46",
        "name": "67_高级特性之死信队列"
    },
    {
        "time": "0.04:37",
        "name": "68_高级特性之防止重复调用"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data