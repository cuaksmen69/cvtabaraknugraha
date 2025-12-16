import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Link href="/privacy" className="text-sm font-medium text-blue-600">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-gray-900">
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
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kebijakan Privasi</h1>
            <p className="text-lg text-gray-600">
              Perlindungan data dan privasi Anda adalah prioritas utama kami
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di Kebijakan Privasi CV TABARAK NUGRAHA. Dokumen ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                  pribadi Anda saat menggunakan layanan kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan CV TABARAK NUGRAHA, Anda setuju dengan praktik 
                  pengumpulan dan penggunaan data yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat fisik</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Informasi perangkat</li>
                    <li>Data penggunaan website</li>
                    <li>Cookies dan teknologi pelacakan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-blue-600" />
                  Penggunaan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Menyediakan dan memelihara layanan kami</li>
                  <li>Memproses transaksi dan mengirim informasi terkait pembelian</li>
                  <li>Mengirimkan informasi teknis, pembaruan, dan pesan keamanan</li>
                  <li>Merespons pertanyaan, komentar, dan permintaan pelanggan</li>
                  <li>Meningkatkan pengalaman pengguna dan website kami</li>
                  <li>Memantau penggunaan website dan menganalisis tren</li>
                  <li>Deteksi, pencegahan, dan penanganan masalah teknis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  CV TABARAK NUGRAHA berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Prosedur keamanan fisik dan teknis yang ketat</li>
                  <li>Audit keamanan berkala</li>
                  <li>Pelatihan staf tentang perlindungan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                  Hak Anda sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak pengumpulan informasi tertentu</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Menarik persetujuan untuk pemrosesan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-blue-600" />
                  Pembagian dengan Pihak Ketiga
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda 
                  kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Penyedia layanan yang membantu operasi bisnis kami</li>
                  <li>Untuk memenuhi persyaratan hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Dalam kaitannya dengan merger, akuisisi, atau penjualan aset</li>
                </ul>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Pembaruan Kebijakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan 
                  signifikan akan diinformasikan melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pemberitahuan di website kami</li>
                  <li>Email ke pengguna terdaftar</li>
                  <li>Pemberitahuan langsung melalui layanan kami</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Pengguna disarankan untuk secara berkala meninjau kebijakan privasi ini 
                  untuk tetap informasi tentang praktik perlindungan data kami.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi 
                  kami atau perlindungan data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">CV TABARAK NUGRAHA</p>
                  <p className="text-gray-700">Email: privacy@tabaraknugraha.co.id</p>
                  <p className="text-gray-700">Telepon: 082396249605</p>
                  <p className="text-gray-700">
                    Alamat: JL. CUMI-CUMI NOMOR 1 GAMPONG BARU, Kel. Bandar Baru, 
                    Kec. Kuta Alam, Kota Banda Aceh, Prov. Aceh 23242
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Kebijakan Privasi ini berlaku efektif sejak: 1 Januari 2024
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
                href="/terms" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Lihat Syarat & Ketentuan →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}