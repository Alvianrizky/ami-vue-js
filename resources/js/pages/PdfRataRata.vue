<template>
    <div class="bg-white" id="print">
        <div class="row justify-content-center">
            <div class="">
                <table class="table-borderless mt-2 mx-6">
                    <tr>
                        <td rowspan="3" style="width: 100px"><img src="images/logo.png" class="text-center mx-auto d-block" width="80" height="80"></td>
                        <td class="fw-bold text-center f-kop-2" style="width: 1000px">SISTEM INFORMASI PENJAMINAN MUTU</td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-center f-kop-1">STMIK ELRAHMA YOGYAKARTA</td>
                    </tr>
                    <tr>
                        <td class="fw-bold text-center">Jalan Sisingamangaraja No.76, Brontokusuman, Yogyakarta City, Special Region of Yogyakarta, Indonesia
Kodepos 55153</td>
                    </tr>
                </table>
                <hr class="mx-6">
                <table class="table-bordered mt-5 mx-6">
                    <thead>
                        <tr class="table-secondary fw-bold text-center">
                            <td>Kode Standar</td>
                            <td>Standar</td>
                            <td>Auditor</td>
                            <td>Jumlah Butir</td>
                            <td>Persentase</td>
                            <td>Hasil | ADA</td>
                            <td>Hasil | TIDAK</td>
                            <td>Program Studi</td>
                            <td>Tahun</td>
                            <td>Tanggal</td>
                        </tr>
                    </thead>
                    <tbody v-for="(data,index) in form" :key="index">
                        <tr>
                            <td class="pl-1">{{ data.kode_sop }}</td>
                            <td class="pl-1">{{ data.nama_sop }}</td>
                            <td class="pl-1">{{ data.nama_auditor }}</td>
                            <td class="pl-1">{{ data.jumlah_butir_evaluasi_pada_kode_sop }}</td>
                            <td class="pl-1">{{ data.rata_rata_persentase }}</td>
                            <td class="pl-1">{{ data.ada }}</td>
                            <td class="pl-1">{{ data.tidak }}</td>
                            <td class="pl-1">{{ data.program_studi }}</td>
                            <td class="pl-1">{{ data.tahun_pengukuran }}</td>
                            <td class="pl-1">{{ data.tanggal_mulai ||  data.tanggal_selesai }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- target='_blank' -->

        <!-- <button class="btn btn-danger" @click="generatePdf">generate PDF</button> -->
    </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
    data() {
        return {
            form: []
        }
    },
    created() {
        this.generatePdf()
        this.getData()
    },
    methods: {
        getData() {
            axios.get('/api/admin/hasil/rata-rata').then((response) => {
                this.form = response.data
            }).catch((error) => {
                return this.$router.push({ name: 'Login' })
            })
        },
        generatePdf(){
            setTimeout(function(){
                window.print()
            }, 1000);
        }
    }
}
</script>

<style scoped>
@media screen {
   #print {
        display:none;
    }
}
@media print {
    @page {
        size: A4 landscape;
        margin: 80 10;
    }
    
}
</style>