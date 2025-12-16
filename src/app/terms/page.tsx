import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Shield, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TN</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CV TABARAK NUGRAHA</h1>
                <p className="text-sm text-gray-600">Professional Business Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Beranda
              </Link>
              <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-sm font-medium text-blue-600">
                Syarat & Ketentuan
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Syarat & Ketentuan</h1>
            <p className="text-lg text-gray-600">
              Ketentuan penggunaan layanan CV TABARAK NUGRAHA
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di CV TABARAK NUGRAHA. Syarat dan Ketentuan ini ("Ketentuan") 
                  mengatur penggunaan layanan yang disediakan oleh CV TABARAK NUGRAHA ("kami," "kita," atau "perusahaan").
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh 
                  Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, 
                  Anda tidak boleh menggunakan layanan kami.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Penting:</strong> Ketentuan ini berlaku efektif sejak 1 Januari 2024.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Definisi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">"Layanan"</h4>
                    <p className="text-gray-700">
                      Merujuk pada semua layanan yang disediakan oleh CV TABARAK NUGRAHA, 
                      termasuk konsultasi bisnis, manajemen proyek, dan layanan pendukung lainnya.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"Klien"</h4>
                    <p className="text-gray-700">
                      Individu atau entitas bisnis yang menggunakan atau memesan layanan dari CV TABARAK NUGRAHA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"Konten"</h4>
                    <p className="text-gray-700">
                      Semua informasi, dokumen, materi, atau data yang dibagikan antara klien dan CV TABARAK NUGRAHA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"Perjanjian"</h4>
                    <p className="text-gray-700">
                      Kontrak formal atau kesepakatan lisan yang dibuat antara klien dan CV TABARAK NUGRAHA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  CV TABARAK NUGRAHA menyediakan berbagai layanan profesional termasuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Konsultasi bisnis dan strategis</li>
                  <li>Manajemen proyek dan koordinasi</li>
                  <li>Layanan pendukung administratif</li>
                  <li>Analisis dan pelaporan bisnis</li>
                  <li>Layanan pelanggan dan dukungan teknis</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan layanan apa pun 
                  kapan saja dengan atau tanpa pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Tanggung Jawab Klien
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai klien, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Melakukan pembayaran tepat waktu sesuai perjanjian</li>
                  <li>Bekerja sama dalam pelaksanaan layanan</li>
                  <li>Memberikan akses yang diperlukan untuk kelancaran proyek</li>
                  <li>Memberikan masukan dan persetujuan tepat waktu</li>
                  <li>Mematuhi jadwal dan tenggat waktu yang disepakati</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal atau tidak etis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Ketentuan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Metode Pembayaran</h4>
                    <p className="text-gray-700">
                      Pembayaran dapat dilakukan melalui transfer bank, tunai, atau metode lain yang disepakati.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jadwal Pembayaran</h4>
                    <p className="text-gray-700">
                      Pembayaran harus dilakukan sesuai dengan jadwal yang ditentukan dalam perjanjian.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keterlambatan Pembayaran</h4>
                    <p className="text-gray-700">
                      Keterlambatan pembayaran dapat dikenakan bunga atau denda sesuai dengan perjanjian.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pembatalan</h4>
                    <p className="text-gray-700">
                      Kebijakan pembatalan dan pengembalian dana mengikuti ketentuan yang disepakati dalam perjanjian.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Hak kekayaan intelektual diatur sebagai berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>CV TABARAK NUGRAHA mempertahankan hak atas metode, proses, dan sistem kerja kami</li>
                  <li>Klien mempertahankan hak atas informasi dan data yang mereka berikan</li>
                  <li>Hasil kerja yang dibuat bersama menjadi milik bersama sesuai perjanjian</li>
                  <li>Informasi rahasia dan properti intelektual dilindungi oleh perjanjian kerahasiaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Kerahasiaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kedua belah pihak setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Menjaga kerahasiaan semua informasi bisnis yang dibagikan</li>
                  <li>Tidak mengungkapkan informasi rahasia kepada pihak ketiga tanpa persetujuan</li>
                  <li>Menggunakan informasi rahasia hanya untuk tujuan yang disepakati</li>
                  <li>Mengembalikan atau menghancurkan informasi rahasia setelah hubungan bisnis berakhir</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kewajiban kerahasiaan tetap berlaku setelah hubungan bisnis berakhir.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sejauh diizinkan oleh hukum:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tanggung jawab kami dibatasi pada jumlah yang dibayarkan untuk layanan</li>
                  <li>Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kami tidak menjamin hasil spesifik dari layanan kami</li>
                  <li>Klien bertanggung jawab atas keputusan bisnis akhir mereka</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Pengakhiran Hubungan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Hubungan bisnis dapat diakhiri:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Dengan pemberitahuan tertulis sesuai periode yang disepakati</li>
                  <li>Jika salah satu pihak melanggar ketentuan perjanjian</li>
                  <li>Jika terjadi keadaan force majeure yang mencegah pelaksanaan layanan</li>
                  <li>Dengan persetujuan bersama kedua belah pihak</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Setelah pengakhiran, semua kewajiban keuangan harus diselesaikan dan informasi rahasia harus dikembalikan.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Penyelesaian Sengketa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sengketa akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Negosiasi damai antara kedua belah pihak</li>
                  <li>Mediasi dengan mediator netral</li>
                  <li>Arbitrase sesuai dengan hukum yang berlaku</li>
                  <li>Penyelesaian melalui pengadilan jika diperlukan</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  Hukum yang berlaku adalah hukum Republik Indonesia dan sengketa akan diselesaikan 
                  di pengadilan yang memiliki yurisdiksi.
                </p>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Ketentuan Umum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ketentuan ini merupakan keseluruhan perjanjian antara para pihak</li>
                  <li>Perubahan ketentuan harus dibuat secara tertulis dan disetujui kedua belah pihak</li>
                  <li>Jika salah satu ketentuan tidak sah, ketentuan lainnya tetap berlaku</li>
                  <li>Kegagalan menegakkan ketentuan tidak berarti pengabaian hak</li>
                  <li>Pemberitahuan akan dikirim melalui email atau surat tercatat</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">CV TABARAK NUGRAHA</p>
                  <p className="text-gray-700">Email: legal@tabaraknugraha.co.id</p>
                  <p className="text-gray-700">Telepon: 082396249605</p>
                  <p className="text-gray-700">
                    Alamat: JL. CUMI-CUMI NOMOR 1 GAMPONG BARU, Kel. Bandar Baru, 
                    Kec. Kuta Alam, Kota Banda Aceh, Prov. Aceh 23242
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Syarat dan Ketentuan ini berlaku efektif sejak: 1 Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Kembali ke Beranda
              </Link>
              <Link 
                href="/privacy" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Lihat Kebijakan Privasi →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}