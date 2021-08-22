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
                            <td>Program Studi</td>
                            <td>Tahun</td>
                            <td>Kode</td>
                            <td>Elemen Standar</td>
                            <td>Deskriptor</td>
                            <td>Indikator</td>
                            <td>Hasil</td>
                            <td>Persentase</td>
                            <td>Temuan</td>
                            <td>Ktgr Temuan</td>
                            <td>Pendendali Dokumen</td>
                            <td>Tanggal</td>
                        </tr>
                    </thead>
                    <tbody v-for="(data,index) in form" :key="index">
                        <tr>
                            <td class="pl-1">{{ data.program_studi }}</td>
                            <td class="pl-1">{{ data.tahun_pengukuran }}</td>
                            <td class="pl-1">{{ data.kode_sn }}</td>
                            <td class="pl-1"><nl2br tag="p" className="text-dark" :text="data.isi_butir" /> </td>
                            <td class="pl-1">{{ data.deskripsi }}</td>
                            <td class="pl-1">{{ data.indikator }}</td>
                            <td class="pl-1">{{ data.hasil }}</td>
                            <td class="pl-1">{{ data.persentase }}</td>
                            <td class="pl-1">{{ data.temuan }}</td>
                            <td class="pl-1">{{ data.kategori_temuan }}</td>
                            <td class="pl-1">{{ data.pengendali_dokumen }}</td>
                            <td class="pl-1">{{ data.tanggal_mulai || data.tanggal_mulai }}</td>
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
        this.getData()
        this.generatePdf()
    },
    methods: {
        getData() {
            axios.get('/api/auditor/audit/instrumen/'+atob(localStorage.getItem('user'))).then((response) => {
                console.log(response)
                this.form = response.data
            }).catch((error) => {
                return this.$router.push({ name: 'Login' })
            })
        },
        generatePdf(){
            setTimeout(function(){
                // window.html2canvas = html2canvas
                // var doc = new jsPDF('l', 'pt', 'A4');
                // doc.html(document.querySelector('#print'), {
                //     callback: function(pdf) {
                //         pdf.save('mypdf.pdf')
                //     },
                //     margin: [0, 200, 0, 200]
                // })
                window.print()
            }, 1000);
            // window.print()
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