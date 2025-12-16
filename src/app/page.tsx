'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Target,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

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
              <button 
                onClick={() => setActiveTab('about')}
                className={`text-sm font-medium transition-colors ${activeTab === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-sm font-medium transition-colors ${activeTab === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`text-sm font-medium transition-colors ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Kontak
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Award className="w-4 h-4 mr-2" />
              Terpercaya & Profesional
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Selamat Datang di <span className="text-blue-600">CV TABARAK NUGRAHA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mitra bisnis terpercaya Anda untuk solusi profesional dan berkualitas tinggi. 
              Kami berkomitmen untuk memberikan layanan terbaik dengan standar internasional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {activeTab === 'about' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  CV TABARAK NUGRAHA adalah perusahaan profesional yang berdedikasi untuk memberikan 
                  layanan berkualitas tinggi kepada klien kami. Dengan pengalaman yang luas dan 
                  komitmen yang kuat terhadap kepuasan pelanggan, kami telah menjadi mitra terpercaya 
                  bagi berbagai bisnis dan individu.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Kami percaya pada integritas, profesionalisme, dan inovasi dalam setiap aspek 
                  bisnis kami. Tim kami terdiri dari para ahli yang berpengalaman dan siap 
                  membantu Anda mencapai tujuan bisnis Anda.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tim Profesional</h4>
                      <p className="text-sm text-gray-600">Ahli berpengalaman</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hasil Terjamin</h4>
                      <p className="text-sm text-gray-600">Kualitas terbaik</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-blue-600">TN</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">CV TABARAK NUGRAHA</h4>
                    <p className="text-gray-600">Excellence in Business</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Layanan Kami</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Konsultasi Bisnis",
                    description: "Solusi strategis untuk pengembangan bisnis Anda",
                    icon: <Target className="w-6 h-6" />,
                    features: ["Perencanaan strategis", "Analisis pasar", "Optimasi proses"]
                  },
                  {
                    title: "Manajemen Proyek",
                    description: "Pengelolaan proyek profesional dan efisien",
                    icon: <Award className="w-6 h-6" />,
                    features: ["Perencanaan detail", "Eksekusi terkoordinasi", "Pelaporan berkala"]
                  },
                  {
                    title: "Layanan Pelanggan",
                    description: "Dukungan pelanggan responsif dan ramah",
                    icon: <Users className="w-6 h-6" />,
                    features: ["Support 24/7", "Konsultasi gratis", "Follow-up berkala"]
                  }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-blue-600">{service.icon}</div>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hubungi Kami</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Kontak</CardTitle>
                    <CardDescription>Hubungi kami untuk informasi lebih lanjut</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Telepon</p>
                        <p className="text-sm text-gray-600">082396249605</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">info@tabaraknugraha.co.id</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Alamat</p>
                        <p className="text-sm text-gray-600">
                          JL. CUMI-CUMI NOMOR 1 GAMPONG BARU, Kel. Bandar Baru, 
                          Kec. Kuta Alam, Kota Banda Aceh, Prov. Aceh 23242
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Jam Operasional</p>
                        <p className="text-sm text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                        <p className="text-sm text-gray-600">Sabtu: 08:00 - 12:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Kirim Pesan</CardTitle>
                    <CardDescription>Isi formulir di bawah ini untuk menghubungi kami</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nama Lengkap
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pesan
                        </label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={4}
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Testimoni Klien</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Layanan yang sangat profesional dan memuaskan. Tim CV TABARAK NUGRAHA 
                    sangat responsif dan membantu kami mencapai tujuan bisnis."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Klien {item}</p>
                      <p className="text-sm text-gray-600">Direktur Eksekutif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">CV TABARAK NUGRAHA</h4>
              <p className="text-gray-400 text-sm">
                Mitra bisnis terpercaya untuk solusi profesional dan berkualitas tinggi.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Konsultasi Bisnis</a></li>
                <li><a href="#" className="hover:text-white">Manajemen Proyek</a></li>
                <li><a href="#" className="hover:text-white">Layanan Pelanggan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>082396249605</li>
                <li>info@tabaraknugraha.co.id</li>
                <li>Banda Aceh, Aceh 23242</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 CV TABARAK NUGRAHA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}