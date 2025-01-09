"use client";

const AboutContent = () => {
    return (
        <section className="px-5 lg:px-20 py-10 bg-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-teal-700 mb-5">About LPK Al-Himmah</h1>
                <img 
                    src="/logo/lpk-al-himmah.png" 
                    alt="LPK Al-Himmah Logo" 
                    className="mx-auto h-24 w-24 mb-5"
                />
                <p className="text-lg text-gray-700">
                    Berdiri sejak Februari 2017, kami telah mencapai berbagai hal selama bertahun-tahun.
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    LPK Al-Himmah berkomitmen menyiapkan kebutuhan tenaga kerja yang berkualitas dan handal untuk keperluan dan kebutuhan kerja.
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    Kami terinspirasi untuk memulai perusahaan ini dengan komitmen untuk berinovasi dan kerja keras. 
                    LPK Al-Himmah menyediakan permintaan tenaga kerja yang handal, kompeten, terampil, dan berkualitas sesuai kebutuhan kerja baik di dalam maupun di luar negeri.
                </p>
            </div>
        </section>
    );
};

export default AboutContent;
