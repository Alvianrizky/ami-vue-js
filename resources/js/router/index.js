import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const NotFound = () => import('../pages/NotFound.vue')
const Login = () => import('../pages/Login.vue')
const Home = () => import('../pages/Home.vue')
const Index = () => import('../pages/Index.vue')

const AdminIndex = () => import('../pages/admin/IndexAdmin.vue')
const AdminHome = () => import('../pages/admin/Home.vue')
const AdminDokumen = () => import('../pages/admin/Dokumen.vue')
const AdminDataIsian = () => import('../pages/admin/DataIsian.vue')
const AdminDeskriptor = () => import('../pages/admin/Deskriptor.vue')
const AdminJabatan = () => import('../pages/admin/Jabatan.vue')
const AdminPengguna = () => import('../pages/admin/Pengguna.vue')
const AdminAkun = () => import('../pages/admin/Akun.vue')
const AdminAkunAdmin = () => import('../pages/admin/AkunAdmin.vue')
const AdminStandar = () => import('../pages/admin/Standar.vue')
const AdminSop = () => import('../pages/admin/Sop.vue')
const AdminJob = () => import('../pages/admin/Job.vue')
const AdminJadwal = () => import('../pages/admin/Jadwal.vue')
const AdminButirStandar = () => import('../pages/admin/ButirStandar.vue')
const AdminHasilRata = () => import('../pages/admin/HasilRata.vue')
const AdminHasilLaporan = () => import('../pages/admin/HasilLaporan.vue')
const AdminIstrumenAudit = () => import('../pages/admin/IstrumenAudit.vue')

const AuditorIndex = () => import('../pages/auditor/IndexAuditor.vue')
const AuditorHome = () => import('../pages/auditor/Home.vue')
const AuditorAudit = () => import('../pages/auditor/Audit.vue')
const AuditorHasil = () => import('../pages/auditor/Hasil.vue')
const AuditorDokumen = () => import('../pages/auditor/Dokumen.vue')

const KetuaIndex = () => import('../pages/ketua/IndexKetua.vue')
const KetuaHome = () => import('../pages/ketua/Home.vue')
const KetuaJabatan = () => import('../pages/ketua/Jabatan.vue')
const KetuaJob = () => import('../pages/ketua/Job.vue')
const KetuaPenanggungJawab = () => import('../pages/ketua/PenanggungJawab.vue')
const KetuaUnit = () => import('../pages/ketua/UnitKerja.vue')

const Template = () => import('../pages/Template.vue')
const GeneratePdf = () => import('../pages/GeneratePdf.vue')

const PrintRataRata = () => import('../pages/PdfRataRata.vue')
const PrintHasil = () => import('../pages/PdfHasil.vue')
const PrintInstrumen = () => import('../pages/PdfInstrumen.vue')
const PrintAuditor = () => import('../pages/PdfAuditor.vue')

const routes = [
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Generate',
        path: '/print',
        component: GeneratePdf
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/admin',
        component: AdminIndex,
        children: [
            {
                path: 'home',
                component: AdminHome,
                name: 'AdminHome'
            },
            {
                path: 'dokumen',
                component: AdminDokumen,
                name: 'AdminDokumen'
            },
            {
                path: 'data-isian',
                component: AdminDataIsian,
                name: 'AdminDataIsian'
            },
            {
                path: 'deskriptor',
                component: AdminDeskriptor,
                name: 'AdminDeskriptor'
            },
            {
                path: 'jabatan',
                component: AdminJabatan,
                name: 'AdminJabatan'
            },
            {
                path: 'pengguna',
                component: AdminPengguna,
                name: 'AdminPengguna'
            },
            {
                path: 'akun',
                component: AdminAkun,
                name: 'AdminAkun'
            },
            {
                path: 'akun-admin',
                component: AdminAkunAdmin,
                name: 'AdminAkunAdmin'
            },
            {
                path: 'standar',
                component: AdminStandar,
                name: 'AdminStandar'
            },
            {
                path: 'sop',
                component: AdminSop,
                name: 'AdminSop'
            },
            {
                path: 'jadwal',
                component: AdminJadwal,
                name: 'AdminJadwal'
            },
            {
                path: 'job-desk',
                component: AdminJob,
                name: 'AdminJob'
            },
            {
                path: 'butir-standar',
                component: AdminButirStandar,
                name: 'AdminButirStandar'
            },
            {
                path: 'hasil-rata-rata',
                component: AdminHasilRata,
                name: 'AdminHasilRata'
            },
            {
                path: 'hasil-laporan',
                component: AdminHasilLaporan,
                name: 'AdminHasilLaporan'
            },
            {
                path: 'instrumen-audit',
                component: AdminIstrumenAudit,
                name: 'AdminIstrumenAudit'
            },
        ]
    },
    {
        path: '/auditor',
        component: AuditorIndex,
        children: [
            {
                path: 'home',
                component: AuditorHome,
                name: 'AuditorHome'
            },
            {
                path: 'audit',
                component: AuditorAudit,
                name: 'AuditorAudit'
            },
            {
                path: 'hasil',
                component: AuditorHasil,
                name: 'AuditorHasil'
            },
            {
                path: 'dokumen',
                component: AuditorDokumen,
                name: 'AuditorDokumen'
            },
        ]
    },
    {
        path: '/ketua',
        component: KetuaIndex,
        children: [
            {
                path: 'home',
                component: KetuaHome,
                name: 'KetuaHome'
            },
            {
                path: 'jabatan',
                component: KetuaJabatan,
                name: 'KetuaJabatan'
            },
            {
                path: 'penanggung-jawab',
                component: KetuaPenanggungJawab,
                name: 'KetuaPenanggungJawab'
            },
            {
                path: 'job-desk',
                component: KetuaJob,
                name: 'KetuaJob'
            },
            {
                path: 'unit-kerja',
                component: KetuaUnit,
                name: 'KetuaUnit'
            },
        ]
    },
    {
        name: 'AdminPrintRata',
        path: '/hasil-rata-rata',
        component: PrintRataRata
    },
    {
        name: 'AdminPrintHasil',
        path: '/hasil',
        component: PrintHasil
    },
    {
        name: 'AdminPrintInstrumen',
        path: '/istrumen',
        component: PrintInstrumen
    },
    {
        name: 'AuditorPrint',
        path: '/audit',
        component: PrintAuditor
    },
];

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

export default router