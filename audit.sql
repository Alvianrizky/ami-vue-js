-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2021 at 09:30 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `audit`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(12) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(190) NOT NULL,
  `foto` varchar(199) NOT NULL,
  `tgl_daftar` datetime NOT NULL,
  `level` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama`, `username`, `password`, `email`, `foto`, `tgl_daftar`, `level`) VALUES
(3, 'Hanif Hairulloh', 'hanifhairulloh', '0192023a7bbd73250516f069df18b500', 'hanifhairulloh19@gmail.com', 'stmik.png', '2017-12-21 16:42:51', 0),
(6, 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin123@gmail.com', 'dasdasd.PNG', '2018-05-23 01:40:05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `auditor`
--

CREATE TABLE `auditor` (
  `id_auditor` int(80) NOT NULL,
  `nama_auditor` varchar(80) NOT NULL,
  `alamat_auditor` varchar(80) NOT NULL,
  `email_auditor` varchar(200) NOT NULL,
  `no_telp_auditor` int(80) NOT NULL,
  `jabatan` varchar(80) NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auditor`
--

INSERT INTO `auditor` (`id_auditor`, `nama_auditor`, `alamat_auditor`, `email_auditor`, `no_telp_auditor`, `jabatan`, `foto`) VALUES
(9, 'ahmad auditor 1', 'bandung', 'ahmadauditor@gmail.com', 2147483647, 'auditor', '13.png'),
(10, 'bintang auditor 2', 'bandung, kota', 'bintangauditor@gmail.com', 2147483647, 'auditor2', '10_avatar-512.png'),
(11, 'tes auditor', 'bandung', 'tesauditor@gmail.com', 857668767, 'auditor', '2.png');

-- --------------------------------------------------------

--
-- Table structure for table `butir_sop`
--

CREATE TABLE `butir_sop` (
  `kode_sop` varchar(80) NOT NULL,
  `kode_butir` varchar(80) NOT NULL,
  `isi_butir` longtext NOT NULL,
  `indikator` varchar(200) NOT NULL,
  `tgl_butir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `deskriptor`
--

CREATE TABLE `deskriptor` (
  `kode_deskripsi` int(80) NOT NULL,
  `kode_sop` varchar(80) NOT NULL,
  `kode_butir` varchar(80) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `pengendali_dokumen` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dokumen`
--

CREATE TABLE `dokumen` (
  `id_dokumen` int(80) NOT NULL,
  `kode_sop` varchar(80) NOT NULL,
  `nama_dokumen` varchar(180) NOT NULL,
  `dokumen` varchar(300) NOT NULL,
  `tgl_dokumen` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dokumen`
--

INSERT INTO `dokumen` (`id_dokumen`, `kode_sop`, `nama_dokumen`, `dokumen`, `tgl_dokumen`) VALUES
(19, 'STD/SPMI/01', '1. Standar Kompetensi Lulusan', 'Standar.Kompetensi.Lulusan.pdf', '2017-08-25'),
(20, 'STD/SPMI/02', '2. Standar Isi Pembelajaran', '2..Standar.Isi.Pembelajaran.pdf', '2017-08-25'),
(21, 'STD/SPMI/03', '3. Standar Proses Pembelajaran', '3..Standar.Proses.Pembelajaran.pdf', '2017-08-25'),
(22, 'STD/SPMI/04', '4. Standar Penilaian Pembelajaran', '4..Standar.Penilaian.Pembelajaran.pdf', '2017-08-25'),
(23, 'STD/SPMI/05', '5. Standar Dosen dan Tenaga Pendidikan', '5..Standar.Dosen.dan.Tenaga.Pendidikan.pdf', '2017-08-25'),
(24, 'STD/SPMI/06', '6. Standar Sarana dan Prasarana Pembelajaran', '6..Standar.Sarana.dan.Prasarana.Pembelajaran.pdf', '2017-01-16'),
(25, 'STD/SPMI/G07', '7. Standar Pengelolaan Pembelajaran', 'Standar.Pengelolaan.Pembelajran.pdf', '2017-08-25'),
(26, 'STD/SPMI/08', '8. Standar Pembiayaan Pembelajaran', '8..Standar.Pembiayaan.Pembelajaran.pdf', '2017-01-16');

-- --------------------------------------------------------

--
-- Table structure for table `evaluasi`
--

CREATE TABLE `evaluasi` (
  `id_evaluasi` int(11) NOT NULL,
  `kode_jadwal` varchar(80) NOT NULL,
  `kode_sop` varchar(80) NOT NULL,
  `kode_butir` varchar(80) NOT NULL,
  `kode_deskripsi` varchar(80) NOT NULL,
  `id_auditor` varchar(80) NOT NULL,
  `kode_unit` varchar(80) NOT NULL,
  `hasil` varchar(80) NOT NULL,
  `persentase` varchar(80) NOT NULL,
  `temuan` longtext NOT NULL,
  `kategori_temuan` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id_jbt` varchar(30) NOT NULL,
  `nama_jbt` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id_jbt`, `nama_jbt`) VALUES
('JBT001', 'Dosen'),
('JBT002', 'Ketua Program Studi Teknik Informatika'),
('JBT003', 'Ketua Program Studi Sistem Informasi'),
('JBT004', 'Wakil Ketua 1 Bidang Akademik'),
('JBT005', 'Bagian Keuangan'),
('JBT006', 'Sekertaris'),
('JBT007', 'Wakil Ketua 2'),
('JBT008', 'mahasiswa');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `kode_jadwal` varchar(80) NOT NULL,
  `kode_sop` varchar(80) NOT NULL,
  `id_auditor` int(80) NOT NULL,
  `program_studi` varchar(300) NOT NULL,
  `tahun_pengukuran` varchar(300) NOT NULL,
  `tanggal_mulai` date NOT NULL,
  `tanggal_selesai` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `job_desk`
--

CREATE TABLE `job_desk` (
  `kode_jobdesk` varchar(80) NOT NULL,
  `id_jbt` varchar(80) NOT NULL,
  `nik` varchar(80) NOT NULL,
  `fungsi` longtext NOT NULL,
  `tgl_penetapan` date NOT NULL,
  `uuid_jabatan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_desk`
--

INSERT INTO `job_desk` (`kode_jobdesk`, `id_jbt`, `nik`, `fungsi`, `tgl_penetapan`, `uuid_jabatan`) VALUES
('JBD001', '', '197501152005011002', 'Menugaskan LPM untuk melaksanakan AMI\nMenerbitkan Surat Tugas Tim AMI\nMendukung dan menyediakan SDM & dana untuk pelaksanaan AMI menggunakan hasil AMI untuk kaji ulang dan penyempurnaan kebijakan manajemen', '2017-08-25', '7785bf64-f35d-11eb-9afa-acde48001122'),
('JBD002', '', '19800613 201504 2 001', '1. Merencanakan, melaksanakan, dan mengembangkan SPMI.\n2. Menyusun perangkat pelaksanaan SPMI.\n3. Memonitor dan mengevaluasi pelaksanaan SPMI.\n4. Melaksanakan dan mengembangkan audit internal.\n5. Melaporkan pelaksanaan SPMI kepada pimpinan PT.\n6. Menyiapkan SDM penjaminan mutu (auditor).', '2017-08-25', '9cc9c72a-f35d-11eb-9afa-acde48001122');

-- --------------------------------------------------------

--
-- Table structure for table `login_auditor`
--

CREATE TABLE `login_auditor` (
  `id_auditor` int(80) NOT NULL,
  `username` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_auditor`
--

INSERT INTO `login_auditor` (`id_auditor`, `username`, `password`) VALUES
(9, 'ahmad_auditor_1', '123'),
(10, 'bintang_auditor_2', '123');

-- --------------------------------------------------------

--
-- Table structure for table `login_pengguna`
--

CREATE TABLE `login_pengguna` (
  `id` int(11) NOT NULL,
  `id_pengguna` varchar(80) NOT NULL,
  `username` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL,
  `level` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_pengguna`
--

INSERT INTO `login_pengguna` (`id`, `id_pengguna`, `username`, `password`, `level`) VALUES
(1, 'alvin', 'alvin', '123', 'staf');

-- --------------------------------------------------------

--
-- Table structure for table `login_staf`
--

CREATE TABLE `login_staf` (
  `id_staf` varchar(80) NOT NULL,
  `username` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_staf`
--

INSERT INTO `login_staf` (`id_staf`, `username`, `password`) VALUES
('13', 'bu yuli', '123'),
('14', 'bumina', '123'),
('15', 'staf1', '123');

-- --------------------------------------------------------

--
-- Table structure for table `login_wakil_ketua`
--

CREATE TABLE `login_wakil_ketua` (
  `id_wakil_ketua` varchar(80) NOT NULL,
  `username` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_wakil_ketua`
--

INSERT INTO `login_wakil_ketua` (`id_wakil_ketua`, `username`, `password`) VALUES
('5', 'wakilketuates', '123'),
('6', 'wakilketua1', '123');

-- --------------------------------------------------------

--
-- Table structure for table `penanggung_jawab`
--

CREATE TABLE `penanggung_jawab` (
  `id_penanggung_jawab` int(80) NOT NULL,
  `nik` varchar(80) NOT NULL,
  `id_jbt` varchar(80) DEFAULT NULL,
  `nama` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `no_hp` varchar(80) NOT NULL,
  `foto_p` varchar(200) NOT NULL,
  `uuid_jabatan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penanggung_jawab`
--

INSERT INTO `penanggung_jawab` (`id_penanggung_jawab`, `nik`, `id_jbt`, `nama`, `email`, `no_hp`, `foto_p`, `uuid_jabatan`) VALUES
(12, '197501152005011002', '', 'Eko Riswanto, ST, M.Cs.', 'ekoriswanto@gmail.com', '08157982176', '39-512.png', '7785bf64-f35d-11eb-9afa-acde48001122'),
(14, '200110007', NULL, 'Momon Muzakkar, ST. M.Eng.', 'momonmuzakkar@gmail.com', '081328963813', '', '88b96a60-f35d-11eb-9afa-acde48001122'),
(15, '197005042005011001', NULL, 'Suparyanto, ST. M.Eng.', 'suparyanto@gmail.com', '082136340299', '', '921d6638-f35d-11eb-9afa-acde48001122'),
(16, '19800613 201504 2 001', NULL, 'Asih Winantu, S.Kom, M.Cs.', 'asihwinantu@gmail.com', '08156811419', '', '9cc9c72a-f35d-11eb-9afa-acde48001122'),
(17, '201230047', NULL, 'Andri Syafrianto, S.Kom, M.Cs.', 'andrisyafrianto@gmail.com', '08127828138', '', 'ab1af196-f35d-11eb-9afa-acde48001122'),
(18, '201130001', NULL, 'Sugiyatno,S.Kom., M.Kom.', 'sugiyatno@gmail.com', '08222713797', '', 'b546453a-f35d-11eb-9afa-acde48001122'),
(19, '201640066', NULL, 'Herdiesel Santoso, S.T., S.Kom., M.Cs.', 'herdieselsantoso@gmail.com', '085647541087', '', '3462ffd8-087e-11ec-a27f-d8c497d4cfee'),
(20, '200910029', NULL, 'Wahyu Widodo, S.Kom., M.Kom.', 'wahyuwidodo@gmail.com', '0895391816084', '', '3d859e44-087e-11ec-a27f-d8c497d4cfee'),
(34, '200110001', NULL, 'Aris Badaruddin Thoha, S.Ag, M.Ag.', 'aristhoha@gmail.com', '08122721147', '', '35f13004-0886-11ec-8dc1-d8c497d4cfee');

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` bigint(20) NOT NULL,
  `nip_npp` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `uuid_jabatan` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `uuid` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id`, `nip_npp`, `nama`, `alamat`, `no_hp`, `status`, `uuid_jabatan`, `created_at`, `updated_at`, `uuid`) VALUES
(4, '1234', 'Admin', 'Admin', '089999999', 'Admin', '846d7dea-0887-11ec-8dc1-d8c497d4cfee', '2021-08-29 07:13:35', '2021-08-29 07:13:39', 'b401db61-0898-11ec-b67c-d8c497d4cfee');

--
-- Triggers `pengguna`
--
DELIMITER $$
CREATE TRIGGER `bi_pengguna` BEFORE INSERT ON `pengguna` FOR EACH ROW BEGIN
	IF new.uuid IS NULL THEN
		SET new.uuid = UUID();
	END IF;
	IF new.id IS NULL THEN
		set new.id = UUID_SHORT();
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `id` bigint(20) NOT NULL,
  `nama_jabatan` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `uuid` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`id`, `nama_jabatan`, `created_at`, `updated_at`, `uuid`) VALUES
(13, 'Ketua', '2021-08-01 23:47:12', '2021-08-01 23:47:12', '7785bf64-f35d-11eb-9afa-acde48001122'),
(14, 'Waka Akademik', '2021-08-01 23:47:41', '2021-08-01 23:47:41', '88b96a60-f35d-11eb-9afa-acde48001122'),
(15, 'Waka Non Akademik', '2021-08-01 23:47:57', '2021-08-01 23:47:57', '921d6638-f35d-11eb-9afa-acde48001122'),
(16, 'Ketua Lembaga Penjaminan Mutu', '2021-08-01 23:48:15', '2021-08-01 23:48:15', '9cc9c72a-f35d-11eb-9afa-acde48001122'),
(17, 'Ketua LPPM', '2021-08-01 23:48:39', '2021-08-01 23:48:39', 'ab1af196-f35d-11eb-9afa-acde48001122'),
(18, 'Ketua Puskom', '2021-08-01 23:48:56', '2021-08-01 23:48:56', 'b546453a-f35d-11eb-9afa-acde48001122'),
(19, 'Bag PDDT', '2021-08-01 23:49:14', '2021-08-01 23:49:14', 'c00e0cfa-f35d-11eb-9afa-acde48001122'),
(24, 'Ketua Program Studi Sistem Informasi', '2021-08-28 21:04:27', '2021-08-28 21:04:27', '3462ffd8-087e-11ec-a27f-d8c497d4cfee'),
(25, 'Ketua Program Studi Informatika', '2021-08-28 21:04:43', '2021-08-28 21:04:43', '3d859e44-087e-11ec-a27f-d8c497d4cfee'),
(26, 'Auditor', '2021-08-28 21:51:45', '2021-08-28 21:51:45', 'cfb6d669-0884-11ec-8dc1-d8c497d4cfee'),
(27, 'Kepala Yayasan STMIK El Rahma Yogyakarta', '2021-08-28 22:01:46', '2021-08-28 22:01:46', '35f13004-0886-11ec-8dc1-d8c497d4cfee'),
(28, 'Bagian Akademik', '2021-08-28 22:08:24', '2021-08-28 22:08:24', '2369d3fd-0887-11ec-8dc1-d8c497d4cfee'),
(29, 'Bagian Keuangan', '2021-08-28 22:08:41', '2021-08-28 22:08:41', '2d2c33e6-0887-11ec-8dc1-d8c497d4cfee'),
(30, 'Perpustakaan', '2021-08-28 22:10:02', '2021-08-28 22:10:02', '5d5e1ebf-0887-11ec-8dc1-d8c497d4cfee'),
(31, 'Laboratorium', '2021-08-28 22:10:37', '2021-08-28 22:10:37', '72723ecb-0887-11ec-8dc1-d8c497d4cfee'),
(32, 'Sistem Informasi', '2021-08-28 22:11:07', '2021-08-28 22:11:07', '846d7dea-0887-11ec-8dc1-d8c497d4cfee');

--
-- Triggers `position`
--
DELIMITER $$
CREATE TRIGGER `bi_position` BEFORE INSERT ON `position` FOR EACH ROW BEGIN
	IF new.uuid IS NULL THEN
		SET new.uuid = UUID();
	END IF;
	IF new.id IS NULL THEN
		set new.id = UUID_SHORT();
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `staf`
--

CREATE TABLE `staf` (
  `id` int(11) NOT NULL,
  `nik_staf` varchar(80) NOT NULL,
  `id_jbt` varchar(80) NOT NULL,
  `nama_staf` varchar(80) NOT NULL,
  `tgl_lahir_staf` date NOT NULL,
  `email` varchar(80) NOT NULL,
  `no_hp` varchar(80) NOT NULL,
  `foto_staf` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staf`
--

INSERT INTO `staf` (`id`, `nik_staf`, `id_jbt`, `nama_staf`, `tgl_lahir_staf`, `email`, `no_hp`, `foto_staf`) VALUES
(13, '0001', 'JBT003', 'Siti Yulianty', '1987-12-19', 'email@gmail.com', '08687687678', '4.png'),
(14, '00002', 'JBT002', 'Mina Ismu Rahayu', '1989-10-27', 'minaismu@gmail.com', '0865765756', '3.png'),
(15, '0003', 'JBT001', 'staf1', '2018-12-19', 'staf1@gmail.com', '09876543', '13.png');

-- --------------------------------------------------------

--
-- Table structure for table `standar_nasional`
--

CREATE TABLE `standar_nasional` (
  `kode_sn` varchar(80) NOT NULL,
  `nama_sn` varchar(80) NOT NULL,
  `tanggal_sn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `standar_nasional`
--

INSERT INTO `standar_nasional` (`kode_sn`, `nama_sn`, `tanggal_sn`) VALUES
('SN.01', 'Standar Nasional Pendidikan', '2018-12-19'),
('SN.02', 'Standar Nasional Penelitian', '2018-12-19'),
('SN.03', 'Standar Nasional Pengabdian Kepada Masyarakat', '2018-12-19');

-- --------------------------------------------------------

--
-- Table structure for table `standar_operasional`
--

CREATE TABLE `standar_operasional` (
  `id` bigint(20) NOT NULL,
  `kode_unit` varchar(80) NOT NULL,
  `kode_sn` varchar(80) NOT NULL,
  `kode_sop` varchar(80) NOT NULL,
  `nama_sop` varchar(200) NOT NULL,
  `id_penanggung_jawab` int(80) NOT NULL,
  `tgl_sop` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `standar_operasional`
--

INSERT INTO `standar_operasional` (`id`, `kode_unit`, `kode_sn`, `kode_sop`, `nama_sop`, `id_penanggung_jawab`, `tgl_sop`) VALUES
(2, 'UNK004', 'SN.01', 'STD/SPMI/01', 'Standar Kompetensi  Lulusan', 12, '2017-08-25'),
(3, 'UNK005', 'SN.01', 'STD/SPMI/02', 'Standar Isi Pembelajaran', 14, '2017-08-25'),
(4, 'UNK005', 'SN.01', 'STD/SPMI/03', 'Standar Proses Pembelajaran', 14, '2017-08-25'),
(5, 'UNK005', 'SN.01', 'STD/SPMI/04', 'Standar Penilaian Pembelajaran', 14, '2017-08-25'),
(6, 'UNK002', 'SN.01', 'STD/SPMI/05', 'Standar Dosen dan Tenaga Pendidikan', 12, '2017-08-25'),
(7, 'UNK002', 'SN.01', 'STD/SPMI/06', 'Standar Sarana dan Prasarana Pembelajaran', 12, '2017-01-16'),
(8, 'UNK002', 'SN.01', 'STD/SPMI/G07', 'Standar Pegelolaan Pembelajaran', 12, '2017-08-25'),
(9, 'UNK008', 'SN.01', 'STD/SPMI/08', 'Standar Pembiayaan Pembelajaran', 15, '2017-01-16');

-- --------------------------------------------------------

--
-- Table structure for table `unit_kerja`
--

CREATE TABLE `unit_kerja` (
  `kode_unit` varchar(80) NOT NULL,
  `nama_unit` varchar(80) NOT NULL,
  `id_jbt` varchar(80) DEFAULT NULL,
  `nik` varchar(80) NOT NULL,
  `uuid_jabatan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unit_kerja`
--

INSERT INTO `unit_kerja` (`kode_unit`, `nama_unit`, `id_jbt`, `nik`, `uuid_jabatan`) VALUES
('UNK001', 'Ketua', NULL, '200110001', '7785bf64-f35d-11eb-9afa-acde48001122'),
('UNK002', 'Wakil Ketua Bidang Akademik', NULL, '197501152005011002', '88b96a60-f35d-11eb-9afa-acde48001122'),
('UNK003', 'Wakil Ketua Bidang Non Akademik', NULL, '197501152005011002', '921d6638-f35d-11eb-9afa-acde48001122'),
('UNK004', 'Program Studi Sistem Informasi', NULL, '197501152005011002', '3462ffd8-087e-11ec-a27f-d8c497d4cfee'),
('UNK005', 'Program Studi Informatika', NULL, '197501152005011002', '3d859e44-087e-11ec-a27f-d8c497d4cfee'),
('UNK006', 'Ketua Lembaga', NULL, '197501152005011002', '9cc9c72a-f35d-11eb-9afa-acde48001122'),
('UNK007', 'Bagian Akademik', NULL, '197501152005011002', '2369d3fd-0887-11ec-8dc1-d8c497d4cfee'),
('UNK008', 'Bagian Keuangan', NULL, '197005042005011001', '2d2c33e6-0887-11ec-8dc1-d8c497d4cfee'),
('UNK009', 'Perpustakaan', NULL, '197005042005011001', '5d5e1ebf-0887-11ec-8dc1-d8c497d4cfee'),
('UNK010', 'Laboratorium', NULL, '197005042005011001', '72723ecb-0887-11ec-8dc1-d8c497d4cfee');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `hak_akses` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `uuid_pengguna` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `hak_akses`, `password`, `remember_token`, `created_at`, `updated_at`, `uuid_pengguna`) VALUES
(7, 'admin', 'admin@admin.com', NULL, 'Admin', '$2y$10$3Hsc7PXKxeTjoOY.7PZQ5.ypTZFzNzfQlzAm/BIojUBrIzgiUbavC', NULL, '2021-08-02 08:00:05', '2021-08-02 08:00:05', 'b401db61-0898-11ec-b67c-d8c497d4cfee'),
(9, 'auditor', 'auditor@gmail.com', NULL, 'Auditor', '$2y$10$TMd/xQPb/hGwbGWrsaKEzunWSSHkEWlhK0WqTtf1Dye4GQIzDKomi', NULL, '2021-08-02 08:02:46', '2021-08-10 20:53:44', 'cd69ac66-fa55-11eb-9338-acde48001122'),
(14, 'ketua', 'user@gmail.com', NULL, 'Ketua', '$2y$10$aY12sm2wTM9D9a7MRvvpCumRxA8j.PDKrLmwF3F/77DG.cUJlQNXC', NULL, '2021-08-13 22:15:19', '2021-08-13 22:15:19', 'bef4774c-fa55-11eb-9338-acde48001122');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_butir_sop_standar_sop`
-- (See below for the actual view)
--
CREATE TABLE `vw_butir_sop_standar_sop` (
`kode_sop` varchar(80)
,`nama_sop` varchar(200)
,`kode_butir` varchar(80)
,`isi_butir` longtext
,`indikator` varchar(200)
,`tgl_butir` date
,`nama_dokumen` varchar(180)
,`dokumen` varchar(300)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_butir_standar`
-- (See below for the actual view)
--
CREATE TABLE `vw_butir_standar` (
`kode_sop` varchar(80)
,`nama_sop` varchar(200)
,`kode_butir` varchar(80)
,`isi_butir` longtext
,`indikator` varchar(200)
,`tgl_butir` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_deskriptor`
-- (See below for the actual view)
--
CREATE TABLE `vw_deskriptor` (
`kode_deskripsi` int(80)
,`kode_sop` varchar(80)
,`nama_sop` varchar(200)
,`kode_butir` varchar(80)
,`isi_butir` longtext
,`deskripsi` longtext
,`indikator` varchar(200)
,`pengendali_dokumen` varchar(300)
,`tgl_butir` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_dokumen`
-- (See below for the actual view)
--
CREATE TABLE `vw_dokumen` (
`id_dokumen` int(80)
,`kode_sop` varchar(80)
,`nama_sop` varchar(200)
,`nama_dokumen` varchar(180)
,`dokumen` varchar(300)
,`tgl_dokumen` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_jadwal`
-- (See below for the actual view)
--
CREATE TABLE `vw_jadwal` (
`kode_jadwal` varchar(80)
,`id_auditor` int(80)
,`kode_sn` varchar(80)
,`kode_sop` varchar(80)
,`nama` varchar(255)
,`program_studi` varchar(300)
,`tahun_pengukuran` varchar(300)
,`tanggal_mulai` date
,`tanggal_selesai` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_job_desk`
-- (See below for the actual view)
--
CREATE TABLE `vw_job_desk` (
`kode_jobdesk` varchar(80)
,`nik` varchar(80)
,`nama` varchar(80)
,`fungsi` longtext
,`tgl_penetapan` date
,`nama_jabatan` varchar(255)
,`uuid_jabatan` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_penanggung_jawab`
-- (See below for the actual view)
--
CREATE TABLE `vw_penanggung_jawab` (
`id_penanggung_jawab` int(80)
,`nik` varchar(80)
,`nama` varchar(80)
,`email` varchar(80)
,`no_hp` varchar(80)
,`nama_jabatan` varchar(255)
,`uuid_jabatan` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_sub_standar`
-- (See below for the actual view)
--
CREATE TABLE `vw_sub_standar` (
`nama_unit` varchar(80)
,`nama_sn` varchar(80)
,`kode_sop` varchar(80)
,`nama_sop` varchar(200)
,`nama` varchar(80)
,`tgl_sop` date
,`kode_unit` varchar(80)
,`kode_sn` varchar(80)
,`id_penanggung_jawab` int(80)
,`id` bigint(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_unit_kerja`
-- (See below for the actual view)
--
CREATE TABLE `vw_unit_kerja` (
`kode_unit` varchar(80)
,`nama_unit` varchar(80)
,`nik` varchar(80)
,`nama` varchar(80)
,`nama_jabatan` varchar(255)
,`uuid_jabatan` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_users`
-- (See below for the actual view)
--
CREATE TABLE `vw_users` (
`id` bigint(20) unsigned
,`name` varchar(255)
,`nip_npp` varchar(255)
,`nama` varchar(255)
,`email` varchar(255)
,`hak_akses` varchar(50)
,`id_pengguna` bigint(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `wakil_ketua`
--

CREATE TABLE `wakil_ketua` (
  `id_wakil_ketua` int(80) NOT NULL,
  `nip_wakil_ketua` int(80) NOT NULL,
  `nama_wakil_ketua` varchar(300) NOT NULL,
  `email_wakil_ketua` varchar(300) NOT NULL,
  `no_telp_wakil_ketua` int(80) NOT NULL,
  `jabatan_wakil_ketua` varchar(300) NOT NULL,
  `foto_wakil_ketua` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wakil_ketua`
--

INSERT INTO `wakil_ketua` (`id_wakil_ketua`, `nip_wakil_ketua`, `nama_wakil_ketua`, `email_wakil_ketua`, `no_telp_wakil_ketua`, `jabatan_wakil_ketua`, `foto_wakil_ketua`) VALUES
(5, 1, 'wakil ketua tes', 'waketu@gmail.com', 2147483647, 'Wakil Ketua 1', 'images.jpg'),
(6, 123456, 'Rini Nuraini Sukmana', 'wakilketua1@gmail.com', 858678990, 'Wakil Ketua 1', '1.png');

-- --------------------------------------------------------

--
-- Structure for view `vw_butir_sop_standar_sop`
--
DROP TABLE IF EXISTS `vw_butir_sop_standar_sop`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_butir_sop_standar_sop`  AS  select `butir_sop`.`kode_sop` AS `kode_sop`,`standar_operasional`.`nama_sop` AS `nama_sop`,`butir_sop`.`kode_butir` AS `kode_butir`,`butir_sop`.`isi_butir` AS `isi_butir`,`butir_sop`.`indikator` AS `indikator`,`butir_sop`.`tgl_butir` AS `tgl_butir`,`dokumen`.`nama_dokumen` AS `nama_dokumen`,`dokumen`.`dokumen` AS `dokumen` from ((`butir_sop` join `standar_operasional` on(`butir_sop`.`kode_sop` = `standar_operasional`.`kode_sop`)) left join `dokumen` on(`butir_sop`.`kode_sop` = `dokumen`.`kode_sop`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_butir_standar`
--
DROP TABLE IF EXISTS `vw_butir_standar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_butir_standar`  AS  select `butir_sop`.`kode_sop` AS `kode_sop`,`standar_operasional`.`nama_sop` AS `nama_sop`,`butir_sop`.`kode_butir` AS `kode_butir`,`butir_sop`.`isi_butir` AS `isi_butir`,`butir_sop`.`indikator` AS `indikator`,`butir_sop`.`tgl_butir` AS `tgl_butir` from (`butir_sop` join `standar_operasional` on(`butir_sop`.`kode_sop` = `standar_operasional`.`kode_sop`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_deskriptor`
--
DROP TABLE IF EXISTS `vw_deskriptor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_deskriptor`  AS  select `deskriptor`.`kode_deskripsi` AS `kode_deskripsi`,`deskriptor`.`kode_sop` AS `kode_sop`,`standar_operasional`.`nama_sop` AS `nama_sop`,`butir_sop`.`kode_butir` AS `kode_butir`,`butir_sop`.`isi_butir` AS `isi_butir`,`deskriptor`.`deskripsi` AS `deskripsi`,`butir_sop`.`indikator` AS `indikator`,`deskriptor`.`pengendali_dokumen` AS `pengendali_dokumen`,`butir_sop`.`tgl_butir` AS `tgl_butir` from ((`deskriptor` join `standar_operasional` on(`deskriptor`.`kode_sop` = `standar_operasional`.`kode_sop`)) join `butir_sop` on(`deskriptor`.`kode_butir` = `butir_sop`.`kode_butir`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_dokumen`
--
DROP TABLE IF EXISTS `vw_dokumen`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_dokumen`  AS  select `dokumen`.`id_dokumen` AS `id_dokumen`,`dokumen`.`kode_sop` AS `kode_sop`,`standar_operasional`.`nama_sop` AS `nama_sop`,`dokumen`.`nama_dokumen` AS `nama_dokumen`,`dokumen`.`dokumen` AS `dokumen`,`dokumen`.`tgl_dokumen` AS `tgl_dokumen` from (`dokumen` join `standar_operasional` on(`dokumen`.`kode_sop` = `standar_operasional`.`kode_sop`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_jadwal`
--
DROP TABLE IF EXISTS `vw_jadwal`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_jadwal`  AS  select `jadwal`.`kode_jadwal` AS `kode_jadwal`,`jadwal`.`id_auditor` AS `id_auditor`,`standar_operasional`.`kode_sn` AS `kode_sn`,`jadwal`.`kode_sop` AS `kode_sop`,`pengguna`.`nama` AS `nama`,`jadwal`.`program_studi` AS `program_studi`,`jadwal`.`tahun_pengukuran` AS `tahun_pengukuran`,`jadwal`.`tanggal_mulai` AS `tanggal_mulai`,`jadwal`.`tanggal_selesai` AS `tanggal_selesai` from ((`jadwal` join `standar_operasional` on(`jadwal`.`kode_sop` = `standar_operasional`.`kode_sop`)) join `pengguna` on(`jadwal`.`id_auditor` = `pengguna`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_job_desk`
--
DROP TABLE IF EXISTS `vw_job_desk`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_job_desk`  AS  select `job_desk`.`kode_jobdesk` AS `kode_jobdesk`,`job_desk`.`nik` AS `nik`,`penanggung_jawab`.`nama` AS `nama`,`job_desk`.`fungsi` AS `fungsi`,`job_desk`.`tgl_penetapan` AS `tgl_penetapan`,`position`.`nama_jabatan` AS `nama_jabatan`,`job_desk`.`uuid_jabatan` AS `uuid_jabatan` from ((`job_desk` join `penanggung_jawab` on(`job_desk`.`nik` = `penanggung_jawab`.`nik`)) join `position` on(`job_desk`.`uuid_jabatan` = `position`.`uuid`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_penanggung_jawab`
--
DROP TABLE IF EXISTS `vw_penanggung_jawab`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_penanggung_jawab`  AS  select `penanggung_jawab`.`id_penanggung_jawab` AS `id_penanggung_jawab`,`penanggung_jawab`.`nik` AS `nik`,`penanggung_jawab`.`nama` AS `nama`,`penanggung_jawab`.`email` AS `email`,`penanggung_jawab`.`no_hp` AS `no_hp`,`position`.`nama_jabatan` AS `nama_jabatan`,`penanggung_jawab`.`uuid_jabatan` AS `uuid_jabatan` from (`penanggung_jawab` join `position` on(`penanggung_jawab`.`uuid_jabatan` = `position`.`uuid`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_sub_standar`
--
DROP TABLE IF EXISTS `vw_sub_standar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_sub_standar`  AS  select `unit_kerja`.`nama_unit` AS `nama_unit`,`standar_nasional`.`nama_sn` AS `nama_sn`,`standar_operasional`.`kode_sop` AS `kode_sop`,`standar_operasional`.`nama_sop` AS `nama_sop`,`penanggung_jawab`.`nama` AS `nama`,`standar_operasional`.`tgl_sop` AS `tgl_sop`,`standar_operasional`.`kode_unit` AS `kode_unit`,`standar_operasional`.`kode_sn` AS `kode_sn`,`penanggung_jawab`.`id_penanggung_jawab` AS `id_penanggung_jawab`,`standar_operasional`.`id` AS `id` from (((`standar_operasional` join `unit_kerja` on(`standar_operasional`.`kode_unit` = `unit_kerja`.`kode_unit`)) join `standar_nasional` on(`standar_operasional`.`kode_sn` = `standar_nasional`.`kode_sn`)) join `penanggung_jawab` on(`standar_operasional`.`id_penanggung_jawab` = `penanggung_jawab`.`id_penanggung_jawab`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_unit_kerja`
--
DROP TABLE IF EXISTS `vw_unit_kerja`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_unit_kerja`  AS  select `unit_kerja`.`kode_unit` AS `kode_unit`,`unit_kerja`.`nama_unit` AS `nama_unit`,`unit_kerja`.`nik` AS `nik`,`penanggung_jawab`.`nama` AS `nama`,`position`.`nama_jabatan` AS `nama_jabatan`,`unit_kerja`.`uuid_jabatan` AS `uuid_jabatan` from ((`unit_kerja` join `penanggung_jawab` on(`unit_kerja`.`nik` = `penanggung_jawab`.`nik`)) join `position` on(`unit_kerja`.`uuid_jabatan` = `position`.`uuid`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_users`
--
DROP TABLE IF EXISTS `vw_users`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_users`  AS  select `users`.`id` AS `id`,`users`.`name` AS `name`,`pengguna`.`nip_npp` AS `nip_npp`,`pengguna`.`nama` AS `nama`,`users`.`email` AS `email`,`users`.`hak_akses` AS `hak_akses`,`pengguna`.`id` AS `id_pengguna` from (`users` join `pengguna` on(`users`.`uuid_pengguna` = `pengguna`.`uuid`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auditor`
--
ALTER TABLE `auditor`
  ADD PRIMARY KEY (`id_auditor`);

--
-- Indexes for table `butir_sop`
--
ALTER TABLE `butir_sop`
  ADD PRIMARY KEY (`kode_butir`);

--
-- Indexes for table `deskriptor`
--
ALTER TABLE `deskriptor`
  ADD PRIMARY KEY (`kode_deskripsi`);

--
-- Indexes for table `dokumen`
--
ALTER TABLE `dokumen`
  ADD PRIMARY KEY (`id_dokumen`);

--
-- Indexes for table `evaluasi`
--
ALTER TABLE `evaluasi`
  ADD PRIMARY KEY (`id_evaluasi`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id_jbt`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`kode_jadwal`);

--
-- Indexes for table `job_desk`
--
ALTER TABLE `job_desk`
  ADD PRIMARY KEY (`kode_jobdesk`) USING BTREE;

--
-- Indexes for table `login_auditor`
--
ALTER TABLE `login_auditor`
  ADD PRIMARY KEY (`id_auditor`);

--
-- Indexes for table `login_pengguna`
--
ALTER TABLE `login_pengguna`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_staf`
--
ALTER TABLE `login_staf`
  ADD PRIMARY KEY (`id_staf`);

--
-- Indexes for table `login_wakil_ketua`
--
ALTER TABLE `login_wakil_ketua`
  ADD PRIMARY KEY (`id_wakil_ketua`);

--
-- Indexes for table `penanggung_jawab`
--
ALTER TABLE `penanggung_jawab`
  ADD PRIMARY KEY (`id_penanggung_jawab`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `staf`
--
ALTER TABLE `staf`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik_staf` (`nik_staf`);

--
-- Indexes for table `standar_nasional`
--
ALTER TABLE `standar_nasional`
  ADD PRIMARY KEY (`kode_sn`);

--
-- Indexes for table `standar_operasional`
--
ALTER TABLE `standar_operasional`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unit_kerja`
--
ALTER TABLE `unit_kerja`
  ADD PRIMARY KEY (`kode_unit`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wakil_ketua`
--
ALTER TABLE `wakil_ketua`
  ADD PRIMARY KEY (`id_wakil_ketua`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `auditor`
--
ALTER TABLE `auditor`
  MODIFY `id_auditor` int(80) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `deskriptor`
--
ALTER TABLE `deskriptor`
  MODIFY `kode_deskripsi` int(80) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `dokumen`
--
ALTER TABLE `dokumen`
  MODIFY `id_dokumen` int(80) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `evaluasi`
--
ALTER TABLE `evaluasi`
  MODIFY `id_evaluasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `login_pengguna`
--
ALTER TABLE `login_pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `penanggung_jawab`
--
ALTER TABLE `penanggung_jawab`
  MODIFY `id_penanggung_jawab` int(80) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `staf`
--
ALTER TABLE `staf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `standar_operasional`
--
ALTER TABLE `standar_operasional`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `wakil_ketua`
--
ALTER TABLE `wakil_ketua`
  MODIFY `id_wakil_ketua` int(80) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
