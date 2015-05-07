-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2015 at 11:17 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE IF NOT EXISTS `answer` (
`id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `question_id`, `user_id`, `description`) VALUES
(1, 1, 8, 'Yes'),
(2, 2, 8, 'Vannila, Mint'),
(3, 3, 8, 'a lot!'),
(4, 4, 8, 'Absolutely No');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE IF NOT EXISTS `question` (
`id` int(11) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `subtext` varchar(4000) DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `subtype` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `survey_id`, `name`, `subtext`, `type`, `subtype`) VALUES
(1, 1, 'Do you like ice cream?', '', 'Multiple Choice', '[{"name":"Yes"},{"name":"No"},{"name":"Maybe"}]'),
(2, 1, 'Which flavor do you like?', 'can choose more than 1.', 'Checkboxes', '[{"name":"Vannila"},{"name":"Chocolate"},{"name":"Mint"},{"name":"Yam"},{"name":"Curry"}]'),
(3, 1, 'Tell us how much you like ice cream!', '', 'Text', ''),
(4, 2, 'Do you thing Ferrari is a good car and you want it?', '', 'Multiple Choice', '[{"name":"No"},{"name":"Absolutely No"}]');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE IF NOT EXISTS `survey` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `response_number` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`id`, `user_id`, `title`, `description`, `response_number`) VALUES
(1, 5, 'Ice Cream', 'An ice cream survey', 1),
(2, 5, 'Ferrari', 'A simple Ferrari survey', 1);

-- --------------------------------------------------------

--
-- Table structure for table `survey_student`
--

CREATE TABLE IF NOT EXISTS `survey_student` (
`id` int(11) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `survey_student`
--

INSERT INTO `survey_student` (`id`, `survey_id`, `student_id`, `status`) VALUES
(1, 1, 8, '1'),
(2, 2, 8, '1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL,
  `name` varchar(4000) NOT NULL,
  `email` varchar(4000) NOT NULL,
  `password` varchar(4000) NOT NULL,
  `type` varchar(4000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `type`) VALUES
(4, 'Admin', 'admin@survey.com', 'admin123', 'Admin'),
(5, 'Dr. Lim Wei Ching', 'teacher@survey.com', 'survey', 'Teacher'),
(6, 'wong', 'ziquan1016@hotmail.com', 'disney0904', 'Student'),
(7, 'wong', 'ziquan1016@hotmai.com', 'disney0904', 'Teacher'),
(8, 'student', 'student@survey.com', 'survey', 'Studnet');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_student`
--
ALTER TABLE `survey_student`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `survey_student`
--
ALTER TABLE `survey_student`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
