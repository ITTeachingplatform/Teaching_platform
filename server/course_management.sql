-- MySQL dump 10.13  Distrib 5.5.30, for Win32 (x86)
--
-- Host: localhost    Database: course_management
-- ------------------------------------------------------
-- Server version	5.5.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_ID` varchar(20) NOT NULL,
  `passwd` varchar(20) DEFAULT NULL,
  `admin_email` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('AD000001','123456','etCheng@qq.com'),('AD000002','123456','yCai@gmail.com'),('AD000003','123456','hyYang@scut.edu.com');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank`
--

DROP TABLE IF EXISTS `bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bank` (
  `bank_ID` varchar(20) DEFAULT NULL,
  `bank_name` varchar(20) DEFAULT NULL,
  `bank_size` float DEFAULT NULL,
  `bank_up_date` date DEFAULT NULL,
  `bank_download_num` int(11) DEFAULT NULL,
  `bank_path` text,
  `bank_t_class_belong` varchar(20) DEFAULT NULL,
  KEY `bank_t_class_belong` (`bank_t_class_belong`),
  CONSTRAINT `bank_ibfk_1` FOREIGN KEY (`bank_t_class_belong`) REFERENCES `teacher_class` (`t_class_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank`
--

LOCK TABLES `bank` WRITE;
/*!40000 ALTER TABLE `bank` DISABLE KEYS */;
INSERT INTO `bank` VALUES ('BA000001','第一章参考题',10,'2017-09-01',1,'BankPath1','TC000001'),('BA000002','第二章参考题',10,'2017-10-15',1,'BankPath2','TC000001'),('BA000003','第三章参考题',10,'2017-11-10',1,'BankPath3','TC000001'),('BA000004','第一章参考题',20,'2017-09-03',1,'BankPath4','TC000002'),('BA000005','bonus题目',25,'2017-11-08',1,'BankPath5','TC000002'),('BA000006','期末模拟题',50,'2017-12-06',1,'BankPath6','TC000002'),('BA000007','题库1',15,'2017-10-20',1,'BankPath7','TC000003'),('BA000008','题库2',12,'2017-11-17',1,'BankPath8','TC000003'),('BA000009','题库3',13,'2017-12-09',1,'BankPath9','TC000003');
/*!40000 ALTER TABLE `bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `class_ID` varchar(20) NOT NULL,
  `major_belong` varchar(20) DEFAULT NULL,
  `class_name` varchar(20) DEFAULT NULL,
  `class_introduction` text,
  `session_num` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`class_ID`),
  KEY `major_belong` (`major_belong`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`major_belong`) REFERENCES `major` (`major_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES ('CL000001','MA000001','1班','一个团结向上的班级',1);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `course_ID` varchar(20) NOT NULL,
  `faculty_belong` varchar(20) DEFAULT NULL,
  `course_name` varchar(20) DEFAULT NULL,
  `course_introduction` text,
  PRIMARY KEY (`course_ID`),
  KEY `faculty_belong` (`faculty_belong`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`faculty_belong`) REFERENCES `faculty` (`faculty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('CO000001','FA000001','数据仓库与数据挖掘','《数据仓库与数据挖掘》是计算机类学科软、硬件专业核心课程之一，是这些专业选修的主干专业课程。主要内容包括：数据仓库的技术、数据仓库与联机事务处理；数据预处理；数据挖掘原语、语言和系统结构；概念描述：特征化与比较；深入研究挖掘大型数据库中的关联规则'),('CO000002','FA000001','软件体系结构','本课程是一门培养学生具有一定软件体系结构分析与设计能力的专业课，主要阐述软件体系结构研究的由来和发展，软件体系结构的基本概念、软件体系结构的研究内容，重点讨论软件体系结构的常用风格和设计模式、软件体系结构的形式化描述、软件体系结构的设计指导思想。课程将主要涉及软件体系结构的概念及其在软件项目开发中的地位、软件体系结构的描述及4+1视图理论、体系结构的基础结构模式和设计模式、常用软件体系结构的风格及其在实际系统中的应用分析。本课程至少要完成1～2个设计作业（约10～20学时），进行1～2周课程设计'),('CO000003','FA000001','机器学习','机器学习研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。机器学习理论主要是设计和分析一些让计算机可以自动“学习”的算法。学习算法从数据中自动分析获得规律，并利用规律对未知数据进行预测。机器学习已经有了十分广泛的应用，例如：数据挖掘、计算机视觉、自然语言处理、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA序列测序、语音和手写识别、战略游戏和机器人运用。 ');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_announcement`
--

DROP TABLE IF EXISTS `course_announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_announcement` (
  `announcement_label` varchar(20) DEFAULT NULL,
  `announcement_title` text,
  `announcement_content` text,
  `announcement_date` date DEFAULT NULL,
  `cou_announcement_ID` varchar(20) NOT NULL,
  `cou_ann_publisher` varchar(20) DEFAULT NULL,
  `cou_ann_course` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cou_announcement_ID`),
  KEY `cou_ann_publisher` (`cou_ann_publisher`),
  KEY `cou_ann_course` (`cou_ann_course`),
  CONSTRAINT `course_announcement_ibfk_1` FOREIGN KEY (`cou_ann_publisher`) REFERENCES `teacher` (`teacher_ID`),
  CONSTRAINT `course_announcement_ibfk_2` FOREIGN KEY (`cou_ann_course`) REFERENCES `course` (`course_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_announcement`
--

LOCK TABLES `course_announcement` WRITE;
/*!40000 ALTER TABLE `course_announcement` DISABLE KEYS */;
INSERT INTO `course_announcement` VALUES ('label1','关于课堂气氛','希望大家在课上多多参与老师的提问，共同创造良好的课堂气氛，对本学期平时表现突出的同学，会酌情加分。','2017-09-01','CA000001','TE000001','CO000001'),('label2','关于作业','希望大家按照作业格式要求提交作业，减少助教老师负担，对格式不对的同学，会减分。','2017-10-16','CA000002','TE000001','CO000001'),('label3','关于期末','期末要到了，大家加油复习，相信大家会在期末取得理想的成绩。','2017-12-10','CA000003','TE000001','CO000001'),('label4','迟到','开学以来迟到的同学越来越多，我会在下节课上课立刻点名，迟到的同学会被扣分。','2017-10-20','CA000004','TE000002','CO000002'),('label5','实验','实验内容可能比较难，希望各位同学独立完成，我会对提交的材料进行查重。','2017-11-05','CA000005','TE000002','CO000002'),('label6','答疑课','期末到了，我决定加一节答疑课解答同学们的问题，时间在12.20，地点助教会通知大家。','2017-12-10','CA000006','TE000002','CO000002'),('label7','bonus任务','我在作业中发布了bonus任务，希望有能力的同学完成任务，会对平时成绩有加分。','2017-09-20','CA000007','TE000003','CO000003'),('label8','提问','看到大家课后踊跃提问很欣慰，但提问人数比较多没有来得及一一回答，对我的工作有兴趣的同学可以把你的问题email给我。','2017-11-08','CA000008','TE000003','CO000003'),('label9','期末','考题会相对比较难，希望大家在复习时注意提高知识掌握的深度','2017-12-08','CA000009','TE000003','CO000003');
/*!40000 ALTER TABLE `course_announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty` (
  `faculty_ID` varchar(20) NOT NULL,
  `faculty_name` varchar(100) DEFAULT NULL,
  `faculty_introduction` text,
  PRIMARY KEY (`faculty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES ('FA000001','计算机科学与工程学院','华南理工大学是我国高等学校最早从事计算机科研与教学的单位之一，1958年开始计算机科学研究工作，成功研制出华南地区第一台模拟式电子计算机，其后又研制成功我国第一台俄汉翻译机。1960年设立计算机专业，1981年成立计算机科学与工程系，2001年成立计算机科学与工程学院。 '),('FA000002','物理与光电学院','华南理工大学物理与光电学院位于五山校区十八号楼，面对文化广场，背依白虎山，东临中山像，风景优美。学院的历史可追溯到1952年学校成立之初的大学物理教研室，1958年在大学物理教研室的基础上组建了工程物理系，1962年学校将工程物理系、数学系、力学系合并为数理力学系，1969年调整为基础部（含物理、数学、英语、工程制图等公共课程），1979年学校重建应用物理系，2004年改名为物理科学与技术学院，2008年学校将物理科学与技术学院、数学科学学院合并为理学院。2014年5月，学校为做强理学学科，将理学院分开，成立了物理与光电学院。'),('FA000003','建筑学院','华南理工大学建筑学院历史悠久，前身为创建于1932年的襄勤大学以及1938年并入的国立中山大学工学院。1952年组建华南工学院建筑系。1979年成立综合甲级建筑设计研究院。1997年成立建筑学院。建筑学院现由建筑系、城市规划系、风景园林系组成，拥有亚热带建筑科学国家重点实验室、建筑设计研究院和《南方建筑》编辑部。');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homework`
--

DROP TABLE IF EXISTS `homework`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homework` (
  `homework_ID` varchar(20) NOT NULL,
  `homework_name` varchar(20) DEFAULT NULL,
  `homework_up_date` date DEFAULT NULL,
  `homework_down_date` date DEFAULT NULL,
  `homework_total_num` int(11) DEFAULT NULL,
  `homework_submit_num` int(11) DEFAULT NULL,
  `homework_content` text,
  `homework_t_class_belong` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`homework_ID`),
  KEY `homework_t_class_belong` (`homework_t_class_belong`),
  CONSTRAINT `homework_ibfk_1` FOREIGN KEY (`homework_t_class_belong`) REFERENCES `teacher_class` (`t_class_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homework`
--

LOCK TABLES `homework` WRITE;
/*!40000 ALTER TABLE `homework` DISABLE KEYS */;
INSERT INTO `homework` VALUES ('HO000001','第一次课堂作业','2017-09-07','2017-09-15',45,45,'完成第一章书后练习题后提交','TC000001'),('HO000002','第二次课堂作业','2017-09-16','2017-09-30',45,43,'第二章书后练习题','TC000001'),('HO000003','第一次作业','2017-10-01','2017-10-30',55,50,'谈一谈你对软件架构的认识，800字左右','TC000002'),('HO000004','第二次作业','2017-11-15','2017-12-04',55,53,'整理所有质量属性的基本信息','TC000002'),('HO000005','作业一','2017-09-10','2017-10-30',85,80,'实现一个SVM','TC000003'),('HO000006','作业2','2017-11-01','2017-12-01',85,73,'实现一个adaboost，基分类器为decision tree','TC000003');
/*!40000 ALTER TABLE `homework` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homework_scores`
--

DROP TABLE IF EXISTS `homework_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homework_scores` (
  `s_homework_score` double DEFAULT NULL,
  `student_submit_homework` varchar(20) DEFAULT NULL,
  `homework_ID_score` varchar(20) DEFAULT NULL,
  `s_homework_content` text,
  KEY `student_submit_homework` (`student_submit_homework`),
  KEY `homework_ID_score` (`homework_ID_score`),
  CONSTRAINT `homework_scores_ibfk_1` FOREIGN KEY (`student_submit_homework`) REFERENCES `student` (`student_ID`),
  CONSTRAINT `homework_scores_ibfk_2` FOREIGN KEY (`homework_ID_score`) REFERENCES `homework` (`homework_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homework_scores`
--

LOCK TABLES `homework_scores` WRITE;
/*!40000 ALTER TABLE `homework_scores` DISABLE KEYS */;
INSERT INTO `homework_scores` VALUES (99,'ST000001','HO000001','老师好:这是我的回答......'),(90,'ST000001','HO000002','老师好:这是我的回答......'),(80,'ST000001','HO000003','老师好:这是我的回答......'),(75,'ST000001','HO000004','老师好:这是我的回答......'),(65,'ST000001','HO000005','老师好:这是我的回答......'),(90,'ST000001','HO000006','老师好:这是我的回答......'),(99,'ST000002','HO000001','老师好:这是我的回答......'),(90,'ST000002','HO000002','老师好:这是我的回答......'),(83,'ST000002','HO000003','老师好:这是我的回答......'),(60,'ST000002','HO000004','老师好:这是我的回答......'),(63,'ST000002','HO000005','老师好:这是我的回答......'),(55,'ST000002','HO000006','老师好:这是我的回答......'),(96,'ST000003','HO000001','老师好:这是我的回答......'),(93,'ST000003','HO000002','老师好:这是我的回答......'),(82,'ST000003','HO000003','老师好:这是我的回答......'),(77,'ST000003','HO000004','老师好:这是我的回答......'),(98,'ST000003','HO000005','老师好:这是我的回答......'),(65,'ST000003','HO000006','老师好:这是我的回答......');
/*!40000 ALTER TABLE `homework_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major`
--

DROP TABLE IF EXISTS `major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `major` (
  `major_ID` varchar(20) NOT NULL,
  `faculty_belong` varchar(20) DEFAULT NULL,
  `major_name` varchar(20) DEFAULT NULL,
  `major_introduction` text,
  PRIMARY KEY (`major_ID`),
  KEY `faculty_belong` (`faculty_belong`),
  CONSTRAINT `major_ibfk_1` FOREIGN KEY (`faculty_belong`) REFERENCES `faculty` (`faculty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major`
--

LOCK TABLES `major` WRITE;
/*!40000 ALTER TABLE `major` DISABLE KEYS */;
INSERT INTO `major` VALUES ('MA000001','FA000001','计算机科学与技术系','计算机专业涵盖软件工程专业，主要培养具有良好的科学素养，系统地、较好地掌握计算机科学与技术包括计算机硬件、软件与应用的基本理论、基本知识和基本技能与方法，能在科研部门、教育单位、企业、事业、技术和行政管理部门等单位从事计算机教学、科学研究和应用的计算机科学与技术学科的高级科学技术人才。'),('MA000002','FA000002','应用物理系','本专业主要培养掌握物理学基本理论与方法，具有良好的数学基础和基本实验技能，掌握电子技术、计算机技术、光纤通信技术、生物医学物理等方面的应用基础知识、基本实验方法和技术'),('MA000003','FA000003','建筑设计及其理论','建筑设计及其理论是国家的二级学科，学科代码081302，隶属于国家一级学科0813建筑学，是为营造建筑实体提供依据，也是一种艺术创作过程；既要考虑人们的物质生活需要，又要考虑人们的精神生活要求。');
/*!40000 ALTER TABLE `major` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `post_ID` varchar(20) NOT NULL,
  `post_content` text,
  `post_label` text,
  `post_date` datetime DEFAULT NULL,
  `post_title` varchar(300) DEFAULT NULL,
  `post_starter` varchar(20) DEFAULT NULL,
  `post_reply_num` int(11) DEFAULT NULL,
  `post_browse_num` int(11) DEFAULT NULL,
  `post_support_num` int(11) DEFAULT NULL,
  `post_last_reviser` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`post_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES ('PO000001','新学期，我们开放了全新的教学系统，大家最这个系统有何看法？','label1','2017-09-01 00:00:00','对新系统的建议','AD000001',1,10,3,'ST000001'),('PO000002','RT...整个人不知道怎么学....老师上课在讲什么鬼....','label2','2017-09-08 00:00:00','软件架构好抽象','ST000001',2,15,2,'ST000003'),('PO000003','不是很了解老师今天上课讲的内容...哪位同学可以拷贝PPT给我吗','20171022','2017-12-03 00:00:00','关于机器学习的问题','ST000002',2,10,3,'ST000001');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reply` (
  `reply_ID` varchar(20) NOT NULL,
  `reply_belong` varchar(20) DEFAULT NULL,
  `reply_content` text,
  `reply_sender` varchar(20) DEFAULT NULL,
  `reply_time` datetime DEFAULT NULL,
  PRIMARY KEY (`reply_ID`),
  KEY `reply_belong` (`reply_belong`),
  CONSTRAINT `reply_ibfk_1` FOREIGN KEY (`reply_belong`) REFERENCES `post` (`post_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES ('RE000001','PO000001','我个人认为这个系统做的还不错','ST000001','2017-09-03 00:00:00'),('RE000002','PO000002','我也听的不是太懂...不过书上貌似写的挺明白的','ST000002','2017-10-05 00:00:00'),('RE000003','PO000002','好方...求拯救','ST000003','2017-11-10 00:00:00'),('RE000004','PO000003','貌似老师说要在群里面发PPT，我帮你联系一下老师吧','ST000003','2017-12-01 00:00:00'),('RE000005','PO000003','班群里已经发出来了，你去看看吧','ST000001','2017-12-03 00:00:00');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resource` (
  `resource_ID` varchar(20) NOT NULL,
  `resource_name` varchar(20) DEFAULT NULL,
  `resource_size` int(4) DEFAULT NULL,
  `resource_downloads` int(4) DEFAULT NULL,
  `resource_date` date DEFAULT NULL,
  `resource_path` text,
  `resource_t_class_belong` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`resource_ID`),
  KEY `resource_t_class_belong` (`resource_t_class_belong`),
  CONSTRAINT `resource_ibfk_1` FOREIGN KEY (`resource_t_class_belong`) REFERENCES `teacher_class` (`t_class_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES ('RE000001','第一章',20,50,'2017-09-20','path1','TC000001'),('RE000002','第二章',13,49,'2017-10-15','path2','TC000001'),('RE000003','复习提纲',2,80,'2017-12-20','path3','TC000001'),('RE000004','实验指导',55,55,'2017-11-15','path4','TC000002'),('RE000005','课件',12,22,'2017-12-05','path5','TC000002'),('RE000006','考试范围',5,80,'2017-12-06','path6','TC000002'),('RE000007','第一章',22,35,'2017-09-20','path7','TC000003'),('RE000008','第二章',25,40,'2017-10-10','path8','TC000003'),('RE000009','第三章',30,38,'2017-11-25','path9','TC000003');
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `student_ID` varchar(20) NOT NULL,
  `passwd` varchar(20) DEFAULT NULL,
  `class_staying` varchar(20) DEFAULT NULL,
  `student_name` varchar(20) DEFAULT NULL,
  `student_introduction` text,
  `student_email` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`student_ID`),
  KEY `class_staying` (`class_staying`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_staying`) REFERENCES `class` (`class_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('ST000001','123456','CL000001','张三','我是一个品学兼优成绩优秀体育很棒身高不太足的阳光好少年','z3@qq.com'),('ST000002','stPasswd2','CL000001','李四','一个热爱星际争霸的游戏爱好者','l4@qq.com'),('ST000003','stPasswd3','CL000001','王五','爱读书，在宿舍里读起来书就不想出门','w5@qq.com');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_announcement`
--

DROP TABLE IF EXISTS `system_announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_announcement` (
  `announcement_label` varchar(20) DEFAULT NULL,
  `announcement_title` text,
  `announcement_content` text,
  `announcement_date` date DEFAULT NULL,
  `sys_announcement_ID` varchar(20) NOT NULL,
  `sys_ann_publisher` varchar(20) DEFAULT NULL,
  `sys_ann_path` text,
  PRIMARY KEY (`sys_announcement_ID`),
  KEY `sys_ann_publisher` (`sys_ann_publisher`),
  CONSTRAINT `system_announcement_ibfk_1` FOREIGN KEY (`sys_ann_publisher`) REFERENCES `admin` (`admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_announcement`
--

LOCK TABLES `system_announcement` WRITE;
/*!40000 ALTER TABLE `system_announcement` DISABLE KEYS */;
INSERT INTO `system_announcement` VALUES ('label','新学期数据导入通知','已经导入老师和学生的数据，请各位同学检查自己的信息是否有误。','2017-09-01','SA000001','AD000001','path'),('label','系统升级通知','将在11.20执行系统升级，届时系统将停止服务一天，请各位老师同学做好准备','2017-11-10','SA000002','AD000002','path'),('label','系统维护通知','由于后台出现故障，将于12.15 上午10：00-11：00进行系统维护','2017-12-14','SA000003','AD000002','path');
/*!40000 ALTER TABLE `system_announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher` (
  `passwd` varchar(20) DEFAULT NULL,
  `teacher_ID` varchar(20) NOT NULL,
  `faculty_working` varchar(20) DEFAULT NULL,
  `teacher_name` varchar(10) DEFAULT NULL,
  `teacher_email` varchar(32) DEFAULT NULL,
  `teacher_introduction` text,
  PRIMARY KEY (`teacher_ID`),
  KEY `faculty_working` (`faculty_working`),
  CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`faculty_working`) REFERENCES `faculty` (`faculty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES ('123456','TE000001','FA000001','闵华清','hqmin@scut.edu.cn','教授、工学博士、博士生导师，华南理工大学智能软件与机器人研究室负责人。主要从事智能机器人、数据库系统的科研与教学。'),('123456','TE000002','FA000001','王振宇  ',' wangzy@scut.edu.cn','男，1967.1生，博士，教授，博生生导师，中共党员。 ?'),('123456','TE000003','FA000001','杨晓伟 ','xwyang@scut.edu.cn','男，博士，教授，博士生导师，生于1969年1月16日，河南省平顶山市叶县人。分别于1991年、1996年和2000年在吉林大学获得理学学士、理学硕士和工学博士学位。1991年7月-1993年7月在国营新乡振动设备总厂工作；1996年7月-2001年5月在吉林大学数学系任教；2001年6月至2014年12月在华南理工大学数学学院信息与计算科学系任教。2015年1月调入华南理工大学软件学院。2003年1月-2003年5月受新加坡国立大学资助在机械工程学院做研究；2006年2月-2006年8月受澳大利亚悉尼科技大学资助在信息技术学院做研究；2009年7月-2010年7月受澳大利亚悉尼科技大学资助在软件学院做研究。');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_class`
--

DROP TABLE IF EXISTS `teacher_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher_class` (
  `t_class_ID` varchar(20) NOT NULL,
  `teacher_ID_t_class` varchar(20) DEFAULT NULL,
  `course_ID_t_class` varchar(20) DEFAULT NULL,
  `sysllabus` text,
  PRIMARY KEY (`t_class_ID`),
  KEY `teacher_ID_t_class` (`teacher_ID_t_class`),
  KEY `course_ID_t_class` (`course_ID_t_class`),
  CONSTRAINT `teacher_class_ibfk_1` FOREIGN KEY (`teacher_ID_t_class`) REFERENCES `teacher` (`teacher_ID`),
  CONSTRAINT `teacher_class_ibfk_2` FOREIGN KEY (`course_ID_t_class`) REFERENCES `course` (`course_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_class`
--

LOCK TABLES `teacher_class` WRITE;
/*!40000 ALTER TABLE `teacher_class` DISABLE KEYS */;
INSERT INTO `teacher_class` VALUES ('TC000001','TE000001','CO000001','《数据仓库与数据挖掘》是计算机类学科软、硬件专业核心课程之一，是这些专业选修的主干专业课程。主要内容包括：数据仓库的技术、数据仓库与联机事务处理；数据预处理；数据挖掘原语、语言和系统结构；概念描述：特征化与比较；深入研究挖掘大型数据库中的关联规则'),('TC000002','TE000002','CO000002','本课程是一门培养学生具有一定软件体系结构分析与设计能力的专业课，主要阐述软件体系结构研究的由来和发展，软件体系结构的基本概念、软件体系结构的研究内容，重点讨论软件体系结构的常用风格和设计模式、软件体系结构的形式化描述、软件体系结构的设计指导思想。课程将主要涉及软件体系结构的概念及其在软件项目开发中的地位、软件体系结构的描述及4+1视图理论、体系结构的基础结构模式和设计模式、常用软件体系结构的风格及其在实际系统中的应用分析。本课程至少要完成1～2个设计作业（约10～20学时），进行1～2周课程设计'),('TC000003','TE000003','CO000003','机器学习研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。机器学习理论主要是设计和分析一些让计算机可以自动“学习”的算法。学习算法从数据中自动分析获得规律，并利用规律对未知数据进行预测。机器学习已经有了十分广泛的应用，例如：数据挖掘、计算机视觉、自然语言处理、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA序列测序、语音和手写识别、战略游戏和机器人运用。');
/*!40000 ALTER TABLE `teacher_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_class_list`
--

DROP TABLE IF EXISTS `teacher_class_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher_class_list` (
  `t_class_ID_list` varchar(20) DEFAULT NULL,
  `student_ID_list` varchar(20) DEFAULT NULL,
  KEY `t_class_ID_list` (`t_class_ID_list`),
  KEY `student_ID_list` (`student_ID_list`),
  CONSTRAINT `teacher_class_list_ibfk_1` FOREIGN KEY (`t_class_ID_list`) REFERENCES `teacher_class` (`t_class_ID`),
  CONSTRAINT `teacher_class_list_ibfk_2` FOREIGN KEY (`student_ID_list`) REFERENCES `student` (`student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_class_list`
--

LOCK TABLES `teacher_class_list` WRITE;
/*!40000 ALTER TABLE `teacher_class_list` DISABLE KEYS */;
INSERT INTO `teacher_class_list` VALUES ('TC000001','ST000001'),('TC000001','ST000002'),('TC000001','ST000003'),('TC000002','ST000001'),('TC000002','ST000002'),('TC000002','ST000003'),('TC000003','ST000001'),('TC000003','ST000002'),('TC000003','ST000003');
/*!40000 ALTER TABLE `teacher_class_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-25 12:04:31
