-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2019 at 03:53 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `bid`, `name`, `author`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Design andd Analysis of algorithms', 'T Veerarajan', '2019-08-10 13:38:11', '2019-08-11 12:54:37'),
(2, 1, 'Data Structures and Algorithms', 'T Veerarajan', '2019-08-10 14:01:45', '2019-08-10 14:01:45'),
(3, 2, 'Computer Networks', 'Andrew', '2019-08-10 16:24:16', '2019-08-10 16:24:16'),
(5, 5, 'Sherlock Holmes', 'Enid Blyton', '2019-08-11 09:53:44', '2019-08-11 09:53:44'),
(6, 9, 'secret seven', 'Enid Blyton', '2019-08-11 10:32:36', '2019-08-11 10:32:36'),
(7, 2, 'Engineering mathematics', 'T Veerarajan', '2019-08-11 10:36:23', '2019-08-11 10:36:23'),
(8, 4, 'Famous Five', 'Enid Blyton', '2019-08-11 10:37:55', '2019-08-11 10:37:55'),
(9, 3, 'Mystery case files', 'Enid Blyton', '2019-08-11 10:39:22', '2019-08-11 10:39:22'),
(10, 2, 'Archie', 'Enid Blyton', '2019-08-11 10:40:33', '2019-08-11 10:40:33'),
(11, 3, 'Physics and Instruments', 'T Veerarajan', '2019-08-11 12:44:42', '2019-08-11 12:44:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
