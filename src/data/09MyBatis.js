 
var data = [
    {
        "time": "0.03:24",
        "name": "01_MyBatis课程介绍"
    },
    {
        "time": "0.04:13",
        "name": "02_MyBatis的历史"
    },
    {
        "time": "0.08:52",
        "name": "03_MyBatis的特性"
    },
    {
        "time": "0.02:11",
        "name": "04_MyBatis的下载"
    },
    {
        "time": "0.05:37",
        "name": "05_MyBatis和其他持久化层技术的对比"
    },
    {
        "time": "0.05:01",
        "name": "06_搭建MyBatis框架之开发环境"
    },
    {
        "time": "0.02:38",
        "name": "07_搭建MyBatis框架之创建maven工程"
    },
    {
        "time": "0.09:22",
        "name": "08_搭建MyBatis框架之创建MyBatis的核心配置文件"
    },
    {
        "time": "0.05:57",
        "name": "09_搭建MyBatis框架之创建mapper接口"
    },
    {
        "time": "0.14:24",
        "name": "10_搭建MyBatis框架之创建MyBatis的映射文件"
    },
    {
        "time": "0.13:00",
        "name": "11_搭建MyBatis框架之测试添加功能"
    },
    {
        "time": "0.07:24",
        "name": "12_搭建MyBatis框架之优化功能"
    },
    {
        "time": "0.07:09",
        "name": "13_搭建MyBatis框架之测试修改和删除功能"
    },
    {
        "time": "0.13:31",
        "name": "14_搭建MyBatis框架之测试查询功能"
    },
    {
        "time": "0.11:08",
        "name": "15_MyBatis核心配置文件之environment"
    },
    {
        "time": "0.07:12",
        "name": "16_MyBatis核心配置文件之properties"
    },
    {
        "time": "0.11:37",
        "name": "17_MyBatis核心配置文件之typeAliases"
    },
    {
        "time": "0.07:43",
        "name": "18_MyBatis核心配置文件之mappers"
    },
    {
        "time": "0.05:52",
        "name": "19_思考：映射文件中的SQL该如何拼接"
    },
    {
        "time": "0.13:08",
        "name": "20_在idea中设置核心配置文件的模板"
    },
    {
        "time": "0.03:42",
        "name": "21_在idea中设置映射文件的模板"
    },
    {
        "time": "0.08:09",
        "name": "22_封装SqlSessionUtils工具类并测试功能"
    },
    {
        "time": "0.08:18",
        "name": "23_MyBatis获取参数值的两种方式#{}和${}"
    },
    {
        "time": "0.09:32",
        "name": "24_MyBatis获取参数值的各种情况（1）"
    },
    {
        "time": "0.11:16",
        "name": "25_MyBatis获取参数值的各种情况（2）"
    },
    {
        "time": "0.06:49",
        "name": "26_MyBatis获取参数值的各种情况（3）"
    },
    {
        "time": "0.08:25",
        "name": "27_MyBatis获取参数值的各种情况（4）"
    },
    {
        "time": "0.11:51",
        "name": "28_MyBatis获取参数值的各种情况（5）"
    },
    {
        "time": "0.22:41",
        "name": "29_@Param源码解析"
    },
    {
        "time": "0.13:11",
        "name": "30_MyBatis各种查询功能（1）"
    },
    {
        "time": "0.07:48",
        "name": "31_MyBatis各种查询功能（2）"
    },
    {
        "time": "0.06:20",
        "name": "32_MyBatis各种查询功能（3）"
    },
    {
        "time": "0.08:32",
        "name": "33_MyBatis各种查询功能（4）"
    },
    {
        "time": "0.09:37",
        "name": "34_MyBatis处理模糊查询"
    },
    {
        "time": "0.06:28",
        "name": "35_MyBatis处理批量删除"
    },
    {
        "time": "0.05:09",
        "name": "36_MyBatis处理动态设置表名"
    },
    {
        "time": "0.13:17",
        "name": "37_MyBatis获取添加功能自增的主键"
    },
    {
        "time": "0.11:40",
        "name": "38_搭建MyBatis框架"
    },
    {
        "time": "0.06:28",
        "name": "39_通过字段别名解决字段名和属性名的映射关系"
    },
    {
        "time": "0.07:00",
        "name": "40_通过全局配置mapUnderscoreToCamelCase解决字段名和属性名的映射关系"
    },
    {
        "time": "0.10:59",
        "name": "41_通过resultMap解决字段名和属性名的映射关系"
    },
    {
        "time": "0.11:48",
        "name": "42_通过级联属性赋值解决多对一的映射关系"
    },
    {
        "time": "0.05:19",
        "name": "43_通过association解决多对一的映射关系"
    },
    {
        "time": "0.16:24",
        "name": "44_通过分步查询解决多对一的映射关系"
    },
    {
        "time": "0.11:16",
        "name": "45_延迟加载"
    },
    {
        "time": "0.11:19",
        "name": "46_通过collection解决一对多的映射关系"
    },
    {
        "time": "0.12:07",
        "name": "47_通过分步查询解决一对多的映射关系"
    },
    {
        "time": "0.07:08",
        "name": "48_动态SQL简介"
    },
    {
        "time": "0.13:57",
        "name": "49_动态SQL之if标签"
    },
    {
        "time": "0.08:22",
        "name": "50_动态SQL之where标签"
    },
    {
        "time": "0.06:20",
        "name": "51_动态SQL之trim标签"
    },
    {
        "time": "0.10:40",
        "name": "52_动态SQL之choose、when、otherwise"
    },
    {
        "time": "0.14:34",
        "name": "53_动态SQL之foreach标签（1）"
    },
    {
        "time": "0.11:02",
        "name": "54_动态SQL之foreach标签（2）"
    },
    {
        "time": "0.04:20",
        "name": "55_动态SQL之sql标签"
    },
    {
        "time": "0.08:43",
        "name": "56_MyBatis的一级缓存"
    },
    {
        "time": "0.07:07",
        "name": "57_使一级缓存失效的四种情况"
    },
    {
        "time": "0.12:07",
        "name": "58_MyBatis的二级缓存"
    },
    {
        "time": "0.06:58",
        "name": "59_MyBatis二级缓存相关配置"
    },
    {
        "time": "0.02:50",
        "name": "60_MyBatis缓存查询的顺序"
    },
    {
        "time": "0.09:44",
        "name": "61_MyBatis整合第三方缓存EHCache"
    },
    {
        "time": "0.13:16",
        "name": "62_MyBatis逆向工程之清晰简洁版"
    },
    {
        "time": "0.18:43",
        "name": "63_MyBatis逆向工程之奢华尊享版（1）"
    },
    {
        "time": "0.04:28",
        "name": "64_MyBatis逆向工程之奢华尊享版（2）"
    },
    {
        "time": "0.09:25",
        "name": "65_MyBatis的分页插件简介"
    },
    {
        "time": "0.16:01",
        "name": "66_MyBatis分页插件的使用"
    }
]// 导出数据变量
// 将数组赋值给全局变量
export default data