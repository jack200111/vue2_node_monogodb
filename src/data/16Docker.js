 
 
var data = [
    {
        "time": "0.08:15",
        "name": "01_教程简介"
    },
    {
        "time": "0.18:43",
        "name": "02_docker为什么出现"
    },
    {
        "time": "0.08:18",
        "name": "03_docker理念简介"
    },
    {
        "time": "0.03:33",
        "name": "04_docker是什么"
    },
    {
        "time": "0.12:59",
        "name": "05_传统虚拟机和容器的对比"
    },
    {
        "time": "0.11:08",
        "name": "06_docker能干嘛解决什么问题"
    },
    {
        "time": "0.06:48",
        "name": "07_docker官网介绍"
    },
    {
        "time": "0.11:43",
        "name": "08_docker三要素"
    },
    {
        "time": "0.06:09",
        "name": "09_docker平台入门图解"
    },
    {
        "time": "0.08:58",
        "name": "10_docker平台架构图解"
    },
    {
        "time": "0.17:08",
        "name": "11_centos7上安装docker"
    },
    {
        "time": "0.08:08",
        "name": "12_镜像加速器配置"
    },
    {
        "time": "0.03:48",
        "name": "13_helloworld分析介绍3要素配合"
    },
    {
        "time": "0.05:12",
        "name": "14_为什么Docker会比VM虚拟机快"
    },
    {
        "time": "0.07:32",
        "name": "15_帮助启动类命令"
    },
    {
        "time": "0.22:56",
        "name": "16_镜像命令"
    },
    {
        "time": "0.03:11",
        "name": "17_ubuntu容器说明"
    },
    {
        "time": "0.16:30",
        "name": "18_容器命令A"
    },
    {
        "time": "0.04:24",
        "name": "19_容器命令B"
    },
    {
        "time": "0.10:36",
        "name": "20_容器命令C"
    },
    {
        "time": "0.25:01",
        "name": "21_容器命令D"
    },
    {
        "time": "0.09:15",
        "name": "22_容器命令E"
    },
    {
        "time": "0.15:03",
        "name": "23_镜像的分层概念"
    },
    {
        "time": "0.06:33",
        "name": "24_commit命令上集"
    },
    {
        "time": "0.05:32",
        "name": "25_commit命令下集"
    },
    {
        "time": "0.13:04",
        "name": "26_本地镜像发布到阿里云"
    },
    {
        "time": "0.05:19",
        "name": "27_docker私有库简介"
    },
    {
        "time": "0.19:11",
        "name": "28_新镜像推送私服库案例"
    },
    {
        "time": "0.10:05",
        "name": "29_容器数据卷是什么"
    },
    {
        "time": "0.03:37",
        "name": "30_容器数据卷能干嘛"
    },
    {
        "time": "0.09:59",
        "name": "31_容器卷和主机互通互联"
    },
    {
        "time": "0.05:48",
        "name": "32_容器卷ro和rw读写规则"
    },
    {
        "time": "0.06:43",
        "name": "33_容器卷之间的继承"
    },
    {
        "time": "0.04:37",
        "name": "34_docker上安装常用软件说明"
    },
    {
        "time": "0.04:42",
        "name": "35_tomcat安装上集"
    },
    {
        "time": "0.06:58",
        "name": "36_tomcat安装下集"
    },
    {
        "time": "0.13:48",
        "name": "37_mysql安装上集"
    },
    {
        "time": "0.11:34",
        "name": "38_mysql安装下集"
    },
    {
        "time": "0.14:45",
        "name": "39_redis常规安装"
    },
    {
        "time": "0.03:15",
        "name": "40_高级篇简介"
    },
    {
        "time": "0.20:48",
        "name": "41_mysql主从复制docker版"
    },
    {
        "time": "0.09:39",
        "name": "42_分布式存储之哈希取余算法"
    },
    {
        "time": "0.13:55",
        "name": "43_分布式存储之一致性哈希算法"
    },
    {
        "time": "0.10:19",
        "name": "44_分布式存储之哈希槽算法"
    },
    {
        "time": "0.08:40",
        "name": "45_3主3从redis集群配置上集"
    },
    {
        "time": "0.07:05",
        "name": "46_3主3从redis集群配置中集"
    },
    {
        "time": "0.02:56",
        "name": "47_3主3从redis集群配置下集"
    },
    {
        "time": "0.05:03",
        "name": "48_redis集群读写error说明"
    },
    {
        "time": "0.03:13",
        "name": "49_redis集群读写路由增强正确案例"
    },
    {
        "time": "0.02:26",
        "name": "50_查看集群信息cluster check"
    },
    {
        "time": "0.09:38",
        "name": "51_主从容错切换迁移"
    },
    {
        "time": "0.03:36",
        "name": "52_主从扩容需求分析"
    },
    {
        "time": "0.16:55",
        "name": "53_主从扩容案例演示"
    },
    {
        "time": "0.02:56",
        "name": "54_主从缩容需求分析"
    },
    {
        "time": "0.08:50",
        "name": "55_主从缩容案例演示"
    },
    {
        "time": "0.05:34",
        "name": "56_分布式存储案例小总结"
    },
    {
        "time": "0.07:48",
        "name": "57_Dockerfile简介"
    },
    {
        "time": "0.06:10",
        "name": "58_DockerFile构建过程解析"
    },
    {
        "time": "0.24:40",
        "name": "59_Dockerfile保留字简介"
    },
    {
        "time": "0.05:26",
        "name": "60_centos之dockerfile需求说明"
    },
    {
        "time": "0.11:03",
        "name": "61_centos之dockerfile案例演示"
    },
    {
        "time": "0.07:47",
        "name": "62_虚悬镜像"
    },
    {
        "time": "0.06:59",
        "name": "63_新建微服务工程并形成jar包"
    },
    {
        "time": "0.08:16",
        "name": "64_dockerfile发布微服务部署到docker容器"
    },
    {
        "time": "0.01:49",
        "name": "65_测试容器上的微服务"
    },
    {
        "time": "0.08:46",
        "name": "66_docker network简介"
    },
    {
        "time": "0.04:17",
        "name": "67_docker network常用命令"
    },
    {
        "time": "0.03:09",
        "name": "68_docker network能干嘛"
    },
    {
        "time": "0.03:48",
        "name": "69_docker network网络模式有几种"
    },
    {
        "time": "0.06:16",
        "name": "70_docker network底层ip和容器映射变化"
    },
    {
        "time": "0.13:13",
        "name": "71_docker network之bridge"
    },
    {
        "time": "0.08:19",
        "name": "72_docker network之host"
    },
    {
        "time": "0.02:29",
        "name": "73_docker network之none"
    },
    {
        "time": "0.07:15",
        "name": "74_docker network之container"
    },
    {
        "time": "0.03:12",
        "name": "75_docker network之自定义网络上集"
    },
    {
        "time": "0.03:54",
        "name": "76_docker network之自定义网络中集"
    },
    {
        "time": "0.04:17",
        "name": "77_docker network之自定义网络下集"
    },
    {
        "time": "0.11:29",
        "name": "78_compose是什么能干嘛"
    },
    {
        "time": "0.07:01",
        "name": "79_compose下载安装步骤"
    },
    {
        "time": "0.08:02",
        "name": "80_compose核心概念"
    },
    {
        "time": "0.23:31",
        "name": "81_微服务改造升级并生成新镜像"
    },
    {
        "time": "0.02:49",
        "name": "82_不用compose编排服务上集"
    },
    {
        "time": "0.06:42",
        "name": "83_不用compose编排服务下集"
    },
    {
        "time": "0.04:19",
        "name": "84_使用compose编排服务上集"
    },
    {
        "time": "0.11:43",
        "name": "85_使用compose编排服务中集"
    },
    {
        "time": "0.08:21",
        "name": "86_使用compose编排服务下集"
    },
    {
        "time": "0.09:25",
        "name": "87_Portainer简介和安装"
    },
    {
        "time": "0.06:03",
        "name": "88_Portainer常规操作"
    },
    {
        "time": "0.02:06",
        "name": "89_Portainer补充说明"
    },
    {
        "time": "0.06:56",
        "name": "90_CIG容器重量级监控系统介绍"
    },
    {
        "time": "0.06:42",
        "name": "91_CIG结合compose一键搭建监控平台"
    },
    {
        "time": "0.04:04",
        "name": "92_CIG三平台登陆验证通过"
    },
    {
        "time": "0.04:17",
        "name": "93_CIG添加panel"
    },
    {
        "time": "0.03:18",
        "name": "94_CIG配置监控业务规则"
    },
    {
        "time": "0.06:10",
        "name": "95_终章の总结"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data