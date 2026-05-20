export interface Guide {
  id: number
  title: string
  cover: string
  category: string
  style: string
  summary: string
  content: string
  tags: string[]
  views: number
  author: string
  date: string
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

export interface Style {
  id: string
  name: string
  description: string
  image: string
  features: string[]
}

export const categories: Category[] = [
  { id: 'living', name: '客厅', icon: 'sofa', description: '打造温馨舒适的会客空间', color: 'bg-amber-100 text-amber-700' },
  { id: 'bedroom', name: '卧室', icon: 'bed-double', description: '营造宁静舒适的睡眠环境', color: 'bg-pink-100 text-pink-700' },
  { id: 'kitchen', name: '厨房', icon: 'utensils', description: '设计高效实用的烹饪空间', color: 'bg-orange-100 text-orange-700' },
  { id: 'bathroom', name: '卫生间', icon: 'droplets', description: '打造洁净舒适的卫浴体验', color: 'bg-blue-100 text-blue-700' },
  { id: 'study', name: '书房', icon: 'book-open', description: '创造宁静专注的阅读氛围', color: 'bg-green-100 text-green-700' },
  { id: 'kids', name: '儿童房', icon: 'baby', description: '为孩子打造安全有趣的空间', color: 'bg-purple-100 text-purple-700' },
]

export const styles: Style[] = [
  {
    id: 'modern',
    name: '现代简约',
    description: '简洁明快的线条，强调功能性与实用性',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20minimalist%20living%20room%20interior%20with%20clean%20lines%20white%20walls%20grey%20sofa%20wooden%20floor%20floor%20lamp&image_size=landscape_16_9',
    features: ['简洁线条', '功能性强', '色彩明快', '空间感强']
  },
  {
    id: 'nordic',
    name: '北欧风格',
    description: '自然材质与明亮色调的完美结合',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nordic%20style%20living%20room%20interior%20with%20light%20wood%20furniture%20white%20walls%20cozy%20knit%20blanket%20plants&image_size=landscape_16_9',
    features: ['自然材质', '明亮通透', '温馨舒适', '功能性']
  },
  {
    id: 'chinese',
    name: '新中式',
    description: '传统中式元素与现代设计的融合',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20modern%20style%20living%20room%20interior%20with%20wooden%20furniture%20traditional%20decor%20calligraphy%20scrolls&image_size=landscape_16_9',
    features: ['传统元素', '对称布局', '木质材料', '意境深远']
  },
  {
    id: 'japanese',
    name: '日式风格',
    description: '简约禅意，追求自然与宁静',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20style%20room%20interior%20with%20tatami%20shoji%20screens%20bamboo%20minimalist%20zen%20garden&image_size=landscape_16_9',
    features: ['禅意空间', '自然材料', '简约质朴', '和谐共生']
  },
  {
    id: 'luxury',
    name: '轻奢风格',
    description: '低调奢华，精致品质生活',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20modern%20living%20room%20interior%20with%20gold%20accents%20velvet%20sofa%20marble%20floor%20chandelier&image_size=landscape_16_9',
    features: ['精致细节', '金属元素', '高级材质', '优雅气质']
  },
]

export const guides: Guide[] = [
  {
    id: 1,
    title: '2024客厅装修全攻略：从设计到落地',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20living%20room%20design%20with%20comfortable%20sofa%20coffee%20table%20tv%20wall%20decor&image_size=landscape_16_9',
    category: 'living',
    style: 'modern',
    summary: '详细介绍客厅装修的各个环节，包括空间规划、色彩搭配、家具选择等，让您轻松打造理想客厅。',
    content: `## 客厅装修攻略

客厅作为家庭的核心区域，装修设计至关重要。以下是从设计到落地的完整指南：

### 一、空间规划

1. **功能分区**
   - 会客区：沙发、茶几、电视墙
   - 休闲区：阅读角、绿植区
   - 收纳区：储物柜、展示架

2. **动线设计**
   - 确保主要通道宽度不小于90cm
   - 沙发与电视距离应保持屏幕对角线的1.5-2倍

### 二、色彩搭配

- **现代简约**：黑白灰为主，搭配亮色点缀
- **北欧风格**：白色+木色，清新自然
- **轻奢风格**：米色+金色，优雅大气

### 三、家具选择

1. **沙发选择要点**
   - 三人位沙发适合25㎡以上空间
   - 面料推荐科技布或真皮，易清洁
   - 坐垫密度建议30D以上

2. **茶几选择**
   - 尺寸建议：长120-140cm，宽60-80cm
   - 材质：实木、岩板、玻璃均可

### 四、灯光设计

- **主灯**：选择柔和的吸顶灯或吊灯
- **辅助光源**：落地灯、台灯营造氛围
- **灯带**：电视墙、吊顶边缘增加层次感

### 五、装修预算参考

|项目|费用范围|
|---|---|
|硬装|500-1000元/㎡|
|家具|8000-20000元|
|软装|5000-10000元|

希望这份攻略能帮助您打造理想的客厅空间！`,
    tags: ['客厅', '装修攻略', '空间规划', '色彩搭配'],
    views: 12580,
    author: '装修达人',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: '卧室装修：打造舒适睡眠空间的5个秘诀',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20bedroom%20interior%20with%20comfortable%20bed%20soft%20lighting%20warm%20colors&image_size=landscape_16_9',
    category: 'bedroom',
    style: 'nordic',
    summary: '卧室是休息的港湾，掌握这5个秘诀，让您的睡眠质量提升一个档次。',
    content: `## 卧室装修秘诀

一个好的卧室设计能极大提升睡眠质量，以下是五个关键要点：

### 一、色彩选择

卧室色彩应以柔和为主：
- **墙面**：米白色、浅灰色、淡蓝色
- **床品**：纯棉材质，淡雅色系
- **避免**：过于鲜艳或对比强烈的颜色

### 二、床的选择

1. **尺寸**
   - 1.5m宽：适合单人或小空间
   - 1.8m宽：标准双人床
   - 2.0m宽：舒适大床

2. **床垫**
   - 软硬适中，支撑性好
   - 建议选择知名品牌

### 三、储物设计

- **衣柜**：顶天立地柜最大化储物空间
- **床头柜**：选择带抽屉的款式
- **床底**：考虑抽屉床增加收纳

### 四、灯光设计

- **主灯**：选用可调光吸顶灯
- **床头灯**：壁灯或台灯，营造阅读氛围
- **灯带**：床底或衣柜内增加氛围灯

### 五、隔音处理

- 选择隔音效果好的门窗
- 墙面可做软包处理
- 地面铺设地毯减少脚步声`,
    tags: ['卧室', '睡眠', '床品', '储物'],
    views: 8920,
    author: '家居设计师',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: '厨房装修避坑指南：这些错误千万别犯',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20interior%20with%20white%20cabinets%20stainless%20steel%20appliances%20wooden%20countertop&image_size=landscape_16_9',
    category: 'kitchen',
    style: 'modern',
    summary: '厨房装修复杂且重要，总结了常见的装修误区，帮助您避免踩坑。',
    content: `## 厨房装修避坑指南

厨房装修涉及水电、柜体、台面等多个方面，以下是常见的装修误区：

### 一、动线设计错误

**错误**：冰箱、水槽、灶台三点距离不合理
**正确**：形成三角形工作区，总长度不超过7m

### 二、插座预留不足

**建议**：
- 台面至少预留4-6个插座
- 安装带开关的插座，方便使用
- 考虑安装带USB接口的插座

### 三、台面高度不合适

**计算公式**：身高÷2+5cm
- 常规高度：80-85cm
- 炒菜区可降低5cm
- 备菜区可升高5cm

### 四、忽视通风排烟

- 油烟机选择风量≥18m³/min
- 安装止回阀防止油烟倒灌
- 窗户面积建议≥厨房面积的1/7

### 五、收纳空间不足

- 利用转角柜增加储物
- 安装吊柜到顶
- 抽屉式拉篮更方便拿取`,
    tags: ['厨房', '避坑', '收纳', '动线'],
    views: 15340,
    author: '装修监理',
    date: '2024-01-08'
  },
  {
    id: 4,
    title: '卫生间干湿分离设计全解析',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20bathroom%20interior%20with%20glass%20shower%20white%20tiles%20wooden%20vanity&image_size=landscape_16_9',
    category: 'bathroom',
    style: 'modern',
    summary: '干湿分离是卫生间设计的关键，本文详细介绍各种实现方式。',
    content: `## 卫生间干湿分离设计

卫生间干湿分离能有效提高使用效率，保持干燥卫生。

### 一、三种分离方式

|方式|优点|缺点|适合空间|
|---|---|---|---|
|玻璃隔断|通透美观|价格较高|≥4㎡|
|浴帘隔断|经济实惠|密封性差|小空间|
|独立淋浴房|完全分离|占用空间|≥6㎡|

### 二、防水施工要点

1. **墙面防水**：至少1.8m高
2. **地面防水**：涂刷2-3遍
3. **闭水试验**：至少24小时

### 三、洁具选择

- **马桶**：考虑智能马桶盖预留插座
- **浴室柜**：选择防潮材质
- **淋浴花洒**：恒温花洒提升体验

### 四、灯光设计

- 镜前灯：安装在镜子两侧，避免阴影
- 防雾灯：卫生间必备
- 感应夜灯：起夜更方便`,
    tags: ['卫生间', '干湿分离', '防水', '洁具'],
    views: 11260,
    author: '室内设计师',
    date: '2024-01-05'
  },
  {
    id: 5,
    title: '书房设计：打造高效办公学习空间',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20home%20office%20study%20room%20with%20desk%20bookshelf%20plants%20natural%20light&image_size=landscape_16_9',
    category: 'study',
    style: 'japanese',
    summary: '无论是办公还是学习，一个好的书房设计能提升效率，让您事半功倍。',
    content: `## 书房设计指南

一个舒适的书房能极大提升工作和学习效率。

### 一、空间选择

- **朝向**：首选朝南，采光好
- **面积**：建议≥8㎡
- **安静**：远离客厅等嘈杂区域

### 二、书桌设计

1. **尺寸**
   - 单人书桌：长120-140cm，宽60-80cm
   - 双人书桌：长180-200cm

2. **高度**：75-78cm，可考虑升降桌

### 三、书架设计

- **开放式书架**：展示性强
- **封闭式书架**：防尘效果好
- **组合式**：兼具展示与收纳

### 四、照明设计

- **主灯**：均匀照明
- **台灯**：工作区域重点照明
- **色温**：选择4000K左右的中性光

### 五、舒适配置

- **人体工学椅**：保护腰椎
- **绿植**：净化空气，缓解视觉疲劳
- **隔音**：必要时做隔音处理`,
    tags: ['书房', '办公', '学习', '书架'],
    views: 6780,
    author: '空间规划师',
    date: '2024-01-03'
  },
  {
    id: 6,
    title: '儿童房设计：安全与趣味并重',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20kids%20bedroom%20interior%20with%20bunk%20bed%20play%20area%20cute%20decor%20shelf&image_size=landscape_16_9',
    category: 'kids',
    style: 'modern',
    summary: '儿童房设计需要兼顾安全性和趣味性，为孩子打造一个快乐成长的空间。',
    content: `## 儿童房设计指南

儿童房设计需要考虑孩子的成长需求，兼顾安全与趣味。

### 一、安全第一

1. **家具选择**
   - 避免棱角，选择圆角设计
   - 家具固定在墙上，防止倾倒
   - 选择环保材质

2. **地面处理**
   - 铺设防滑地板
   - 避免使用地毯（不易清洁）

### 二、色彩搭配

- **男孩房**：蓝色、绿色为主
- **女孩房**：粉色、紫色为主
- **中性色**：黄色、橙色适合通用

### 三、功能分区

- **睡眠区**：床、衣柜
- **学习区**：书桌、书架
- **游乐区**：玩具收纳、游戏空间

### 四、成长预留

- 家具选择可调节高度的
- 墙面设计可更换的装饰
- 预留足够的活动空间`,
    tags: ['儿童房', '安全', '趣味', '成长'],
    views: 9450,
    author: '亲子设计师',
    date: '2024-01-01'
  },
  {
    id: 7,
    title: '北欧风格装修：打造自然温馨的家',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nordic%20style%20interior%20with%20light%20wood%20furniture%20white%20walls%20cozy%20textiles%20plants&image_size=landscape_16_9',
    category: 'living',
    style: 'nordic',
    summary: '北欧风格以其简洁、自然、温馨的特点深受喜爱，本文教您如何打造北欧风家居。',
    content: `## 北欧风格装修指南

北欧风格源于斯堪的纳维亚，以简洁、自然、温馨著称。

### 一、色彩搭配

- **主色调**：白色、米色、灰色
- **点缀色**：原木色、绿植色、少量亮色

### 二、材质选择

1. **木材**：浅色实木，如白橡木、桦木
2. **织物**：羊毛、亚麻、棉麻
3. **金属**：黄铜、黑铁

### 三、家具特点

- 线条简洁流畅
- 注重功能性
- 舒适度优先

### 四、软装搭配

- **地毯**：长毛绒地毯增加温暖感
- **抱枕**：几何图案、纯色为主
- **窗帘**：透光性好的纱帘`,
    tags: ['北欧风格', '自然', '温馨', '软装'],
    views: 14230,
    author: '风格设计师',
    date: '2023-12-28'
  },
  {
    id: 8,
    title: '新中式风格：传统与现代的完美融合',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20modern%20style%20living%20room%20with%20wooden%20furniture%20traditional%20elements%20modern%20lighting&image_size=landscape_16_9',
    category: 'living',
    style: 'chinese',
    summary: '新中式风格将传统中式元素与现代设计完美融合，既有文化底蕴又不失时尚感。',
    content: `## 新中式风格装修指南

新中式风格是传统与现代的完美结合，既有文化底蕴又不失时尚感。

### 一、色彩搭配

- **主色调**：木色、米色、灰色
- **点缀色**：中国红、水墨黑、金色

### 二、传统元素

1. **家具**：中式花格、太师椅、罗汉床
2. **装饰**：水墨画、书法、瓷器
3. **纹样**：回纹、云纹、如意纹

### 三、现代融合

- 简化传统元素，保留神韵
- 结合现代材料，如玻璃、金属
- 注重空间的通透感

### 四、空间布局

- 对称布局，体现中式美学
- 留白设计，营造意境
- 层次分明，虚实结合`,
    tags: ['新中式', '传统', '现代', '文化'],
    views: 10890,
    author: '中式设计师',
    date: '2023-12-25'
  },
]
