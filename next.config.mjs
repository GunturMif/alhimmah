/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Mengaktifkan mode Static Export
  trailingSlash: true, // Menambahkan slash di akhir URL
  images: {
    unoptimized: true, // Nonaktifkan pengoptimalan gambar
  },
};

export default nextConfig;
