<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{name: 'Index'}">
                    <img src="images/logo.png" width="30" height="30"> SIJAMU
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-2">
                            <router-link :to="{name: 'Index'}" class="nav-link"><span class="fa fa-home"></span>
                                Beranda</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" data-bs-toggle="modal" data-bs-target="#ModalProfil"><span
                                    class="fa fa-info-circle"></span> Profil</a>
                        </li>
                        <li class="nav-item mx-2" data-bs-toggle="modal" data-bs-target="#ModalTentangLpm">
                            <a class="nav-link"><span class="fa fa-bookmark"></span> Tentang LPM</a>
                        </li>
                        <li class="nav-item mx-2" data-bs-toggle="modal" data-bs-target="#ModalKontak">
                            <a class="nav-link"><span class="fa fa-phone-alt"></span> Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section id="banner">
            <div class="inner">
                <h2>SISTEM INFORMASI PENJAMINAN MUTU</h2>
                <p class="text-white"><strong>STMIK EL RAHMA YOGYAKARTA</strong></p>
                <ul class="actions">
                    <li>
                        <router-link :to="{name: 'Login'}" class="btn btn-primary btn-lg text-white">
                            <span class="fa fa-sign-in-alt"></span> Login
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>

        <div class="main-footer bg-light">
            <div class="float-right d-none d-sm-inline">
                STMIK ElRahma Yogyakarta
            </div>
            <strong>Copyright &copy; 2021 SIJAMU - Sistem Informasi Penjaminan Mutu </strong> All
            rights reserved.
        </div>

        <!-- Modal Profil -->
        <div id="ModalProfil" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg text-dark" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="logo-login text-center">
                            <em class="glyphicon glyphicon-info-sign"></em>
                            <h4 class="modal-title">PROFIL STMIK ELRAHMA</h4>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>Tentang STMIK El Rahma Yogyakarta</h2>
                        <div class="row">
                            <div class="col-md-4">
                                <img src="images/gedung1.jpg" width="250" height="150">
                            </div>
                            <div class="col-md-8">
                                <p>
                                    STMIK EL RAHMA Yogyakarta adalah Perguruan Tinggi Informatika dan Ilmu Komputer di
                                    bawah naungan Yayasan El Rahma Yogyakarta dalam pembinaan Kementerian Pendidikan dan
                                    Kebudayaan Republik Indonesia. STMIK EL RAHMA Yogyakarta berdiri dan menyelenggarakan
                                    operasional kegiatan pendidikan berdasarkan SK Mendiknas No. 155/D/0/2001. STMIK EL
                                    RAHMA Yogyakarta memiliki misi dan positioning JAGO IT, QURANI, LULUS JADI JUTAWAN.
                                    Profil lulusan STMIK EL RAHMA adalah kompeten di bidang informatika dan komputer,
                                    bahasa asing, berjiwa pengusaha dan berkarakter Qur'ani.
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8">
                                <h3>Visi</h3>
                                <p>
                                    Visi STMIK El Rahma Yogyakarta adalah “Menjadi Perguruan Tinggi Komputer yang
                                    Unggul, Mandiri dan Qur’ani Tingkat Nasional pada tahun 2025.”
                                </p>
                            </div>
                            <div class="col-md-4">
                                <p><img src="images/dosen.jpg" width="250" height="150"></p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <h3>Misi</h3>
                                <p>
                                    <ol>
                                        <li>Menyelenggarakan tridharma perguruan tinggi yang berkualitas sesuai dengan
                                            standar akreditasi.</li>
                                        <li>Menyiapkan lulusan yang kompeten, mandiri, berani mengembangkan potensi
                                            diri, kreatif dan bertanggungjawab.</li>
                                        <li>Menyelenggarakan pendidikan tinggi yang berlandaskan pada nilai-nilai
                                            qurani.</li>
                                    </ol>
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <h3>Tujuan</h3>
                                <p>
                                    <ol>
                                        <li>Berkembangnya potensi mahasiswa dan dihasilkannya lulusan yang memiliki
                                            kompetensi dan keunggulan bidang teknologi informasi, berjiwa wirausaha dan
                                            berakhlak qurani.</li>
                                        <li>Menghasilkan penelitian yang mendukung pengembangan teknologi informasi dan
                                            meningkatkan kualitas pembelajaran.</li>
                                        <li>Terwujudnya pengabdian masyarakat berbasis karya penelitian yang bermanfaat
                                            bagi masyarakat.</li>
                                    </ol>
                                </p>
                                <a href="https://stmikelrahma.ac.id/" target="_blank">Selengkapnya >></a>
                            </div>
                        </div>
                        <div class="modal-footer text-right">
                            <button class="btn btn-danger text-white" data-bs-dismiss="modal"><span
                                    class="fa "></span> Tutup</button>
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <!-- Modal Tentang UJM -->
        <div id="ModalTentangLpm" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog text-dark" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="logo-login text-center">
                            <em class="glyphicon glyphicon-bookmark"></em>
                            <h4 class="modal-title">Tentang LPM</h4>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Lembaga Penjaminan Mutu (LPM) - STMIK EL RAHMA</h3>
                                <p>Lembaga Penjaminan Mutu (LPM) bertugas untuk menyiapkan, merencanakan, merancang,
                                    menetapkan, melaksanakan, mengendalikan, mengevaluasi dan mengembangkan SPMI STMIK
                                    El Rahma.</p>

                                <p>Tugas pokok dan fungsi dari Lembaga Penjaminan Mutu (LPM) STMIK El Rahma sebagai
                                    berikut :
                                    <ol>
                                        <li>Merencanakan, melaksanakan, dan mengembangkan SPMI.</li>
                                        <li>Menyusun perangkat pelaksanaan SPMI.</li>
                                        <li>Memonitor dan mengevaluasi pelaksanaan SPMI.</li>
                                        <li>Melaksanakan dan mengembangkan audit internal.</li>
                                        <li>Melaporkan pelaksanaan SPMI kepada pimpinan PT.</li>
                                        <li>Menyiapkan SDM penjaminan mutu (auditor).</li>
                                    </ol>
                                </p>
                                <p>Selain itu LPM juga melaksanakan fungsi pelayanan sebagai berikut :
                                    <ol>
                                        <li>Konsultasi, pendampingan, dan kerja sama di bidang penjaminan mutu.</li>
                                        <li>Pengembangan sistem informasi penjaminan mutu.</li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer text-right">
                        <button class="btn btn-danger text-white" data-bs-dismiss="modal"><span
                                class="glyphicon glyphicon-remove"></span> Tutup</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <!-- Modal Kontak -->
        <div id="ModalKontak" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog text-dark" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="logo-login text-center">
                            <em class="glyphicon glyphicon-user"></em>
                            <h4 class="modal-title">Kontak</h4>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <span class="glyphicon glyphicon-map-marker"></span> Alamat : Jl. Sisingamangaraja Jl. Karangkajen No.76, Brontokusuman, 
                                Kec. Merganngsan, Kota Yogyakarta, Daerah istimewa Yogyakarta 55791<br />
                                <span class="glyphicon glyphicon-phone-alt"></span> Telp. : (0274) 377982<br />
                                <span class="glyphicon glyphicon-envelope"></span> Email : <a
                                    href="" target="_blank">pmb@stmikelrahma.ac.id</a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer text-right">
                        <button class="btn btn-danger text-white" data-bs-dismiss="modal"><span
                                class="glyphicon glyphicon-remove"></span> Tutup</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

    </div>
</template>