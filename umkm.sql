-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2022 at 03:47 AM
-- Server version: 8.0.27
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `umkm_fontein`
--

-- --------------------------------------------------------

--
-- Table structure for table `umkm`
--

CREATE TABLE `umkm` (
  `ID_Usaha` int NOT NULL,
  `nama_usaha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `jenis_pengelolaan_usaha` enum('Pengelolaan','Badan Usaha','','') COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_tempat_usaha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `omset` enum('≤ 300jt','300jt < Omset < 2,5M','≥ 2,5M','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `kekayaan_bersih_usaha` enum('≤ 50jt','50jt < Omset < 500jt','≥ 500jt','') COLLATE utf8mb4_general_ci NOT NULL,
  `tenaga_kerja` enum('1-5 Tenaga Kerja','6-19 Tenaga Kerja','≥20 Tenaga Kerja','') COLLATE utf8mb4_general_ci NOT NULL,
  `modal_usaha` enum('Modal Sendiri','Bantuan Pemerintah','Modal Sendiri & Bantuan Pemerintah','') COLLATE utf8mb4_general_ci NOT NULL,
  `bina_usaha` enum('Ya','Tidak','','') COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_usaha` enum('Tetap','Keliling','','') COLLATE utf8mb4_general_ci NOT NULL,
  `rincian_kgiatan_usaha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `kbli` enum('1','2','3','4','5','6','7','8','9','') COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_tmpt_tggl` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `umur` varchar(3) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_kk` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_pemilik` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pendidikan_pemilik` enum('-','Belum/Tidak Pernah Sekolah','Belum/Tidak Pernah Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MTA/SMK/MAK/paket C','DI/DII/DII','DIV/S1','S2','S3') COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `umkm`
--

INSERT INTO `umkm` (`ID_Usaha`, `nama_usaha`, `jenis_pengelolaan_usaha`, `alamat_tempat_usaha`, `omset`, `kekayaan_bersih_usaha`, `tenaga_kerja`, `modal_usaha`, `bina_usaha`, `alamat_usaha`, `rincian_kgiatan_usaha`, `kbli`, `alamat_tmpt_tggl`, `umur`, `nama_kk`, `nama_pemilik`, `pendidikan_pemilik`) VALUES
(1, 'PT Mencari Cinta Sejati', 'Badan Usaha', 'Jl. Kenangan 69', '300jt < Omset < 2,5M', '≥ 500jt', '6-19 Tenaga Kerja', 'Modal Sendiri', 'Tidak', 'Tetap', 'Badan usaha yang menawarkan jasa mencari cinta bagi client/customer', '', 'Jl. Lontar Jalur 40', '20', 'Ngabers Seles', 'Ngab SK', 'DIV/S1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `umkm`
--
ALTER TABLE `umkm`
  ADD PRIMARY KEY (`ID_Usaha`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `umkm`
--
ALTER TABLE `umkm`
  MODIFY `ID_Usaha` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
