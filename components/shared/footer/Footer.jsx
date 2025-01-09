import React from 'react';
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-white py-10">
            <div className="container mx-auto px-5 text-center">
                <p className="text-lg font-semibold">
                    Jln. KH. Fudholi 50, Desa Karang Asih, Kec. Cikarang Utara, Kabupaten Bekasi
                </p>
                <div className="flex justify-center items-center gap-10 my-4">
                    <div className="flex items-center gap-2">
                        <FiPhone className="text-2xl" />
                        <span>021 890 713 86</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMessageSquare className="text-2xl" />
                        <span>0823 1191 5376</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMail className="text-2xl" />
                        <span>alhimmahcikarang20@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
