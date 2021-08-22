<template>
    <div class="wrapper">
        <nav-admin></nav-admin>
        <div id="content">
            <div class="content-wrapper">
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" id="sidebarCollapse" data-widget="pushmenu" href="#" role="button">
                                <i class="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <router-view></router-view>

                <footer class="main-footer">
                    <div class="float-right d-none d-sm-inline">
                        STMIK ElRahma Yogyakarta
                    </div>
                    <strong>Copyright &copy; 2021 SIJAMU - Sistem Informasi Penjaminan Mutu </strong>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
</script>