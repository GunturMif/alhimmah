"use client"; // Next.js Client Component
import React from "react";
import Navbar from "@/components/shared/navbar/Navbar"; // Pastikan path sesuai dengan lokasi file Navbar
import Footer from "@/components/shared/footer/Footer"; // Pastikan path sesuai dengan lokasi file Footer

const Program = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <section className="flex-grow w-full px-5 lg:px-20 py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-700">Program</h1>
          <div className="mt-4">
            <img
              src="/logo/elephant.png" // Ganti dengan path logo yang sesuai
              alt="Logo Program"
              className="h-40 w-40 mx-auto object-contain"
            />
          </div>
        </div>

        {/* Kartu Program */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Pendidikan */}
          <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-teal-500 text-5xl mb-4">
              <i className="fas fa-graduation-cap"></i>{" "}
              {/* Simbol pendidikan */}
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Pendidikan
            </h2>
            <p className="text-gray-600">
              Program pendidikan kami bertujuan untuk memberikan pengetahuan dan
              keterampilan yang dibutuhkan oleh individu untuk sukses di dunia
              profesional. Dengan mengedepankan pembelajaran berbasis
              keterampilan dan teori, kami membantu peserta didik mengembangkan
              kompetensi mereka agar siap berkontribusi di berbagai sektor
              industri.
            </p>
          </div>

          {/* Pelatihan */}
          <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-teal-500 text-5xl mb-4">
              <i className="fas fa-laptop-code"></i> {/* Simbol pelatihan */}
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Pelatihan
            </h2>
            <p className="text-gray-600">
              Program pelatihan kami dirancang untuk membantu individu
              mempelajari keterampilan praktis yang dibutuhkan dalam dunia
              kerja. Dengan pendekatan yang terfokus pada keterampilan teknis
              dan aplikatif, kami memastikan peserta memiliki kemampuan yang
              siap digunakan di berbagai industri, mulai dari teknologi hingga
              keterampilan kerja praktis lainnya.
            </p>
          </div>

          {/* Kegiatan Sosial */}
          <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-teal-500 text-5xl mb-4">
              <i className="fas fa-globe"></i> {/* Simbol kegiatan sosial */}
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Kegiatan Sosial
            </h2>
            <p className="text-gray-600">
              Program kegiatan sosial kami berfokus pada pemberdayaan masyarakat
              dan menciptakan perubahan positif melalui berbagai inisiatif
              sosial. Kami melibatkan masyarakat dalam kegiatan yang berfokus
              pada pembangunan komunitas, pengurangan kesenjangan sosial, dan
              perbaikan kualitas hidup. Dengan program ini, kami berharap dapat
              memberi dampak langsung dan membantu menciptakan masa depan yang
              lebih baik bagi banyak orang.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Program;
