<template>
    <div>
        <div>
            <router-view></router-view>
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