"use client"; // Next.js Client Component
import React from "react";
import Navbar from "@/components/shared/navbar/Navbar"; // Pastikan path ini sesuai dengan lokasi file Navbar
import Footer from "@/components/shared/footer/Footer"; // Pastikan path ini sesuai dengan lokasi file Footer

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <section className="flex-grow w-full px-5 lg:px-20 py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50">
        <div className="container mx-auto">
          {/* Bagian Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-teal-700 mb-4">About Us</h1>
            <h2 className="text-3xl font-semibold text-teal-500">
              LPK AL - Himmah
            </h2>
          </div>

          {/* Konten Utama */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Bagian Deskripsi */}
            <div className="w-full lg:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed">
                Berdiri sejak Februari 2017, kami telah mencapai beragam hal
                selama bertahun-tahun.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                LPK Al - Himmah berkomitmen menyiapkan kebutuhan tenaga kerja
                yang berkualitas dan handal untuk keperluan dan kebutuhan kerja.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Kami terinspirasi untuk memulai perusahaan ini dengan komitmen
                untuk berinovasi dan kerja keras. LPK Al - Himmah menyediakan
                permintaan tenaga kerja yang handal, kompeten, terampil, dan
                berkualitas sesuai kebutuhan pasar kerja baik di dalam maupun di
                luar negeri.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Kami percaya bahwa dedikasi dan kerja keras merupakan kunci
                utama dalam menyediakan solusi terbaik bagi tenaga kerja. Kami
                terus berinovasi untuk menghadirkan layanan yang sesuai dengan
                kebutuhan pasar tenaga kerja masa kini.
              </p>
            </div>

            {/* Bagian Gambar */}
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <img
                src="/logo/elephant.png" // Ganti path ini dengan path logo yang benar
                alt="Logo LPK Al-Himmah"
                className="h-48 w-48 object-contain rounded-full shadow-lg border-4 border-teal-500"
              />
            </div>
          </div>

          {/* Bagian Footer Konten */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Bergabunglah Bersama Kami
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jadilah bagian dari perjalanan kami untuk menciptakan masa depan
              yang lebih baik dengan menyediakan tenaga kerja yang berkualitas
              dan terpercaya.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
