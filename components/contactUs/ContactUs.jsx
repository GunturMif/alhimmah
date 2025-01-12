'use client';

import React, { useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { localImages } from '@/utils/localImages';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Gaya Toastify

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const { firstName, email, message } = formData;
        if (!firstName || !email || !message) {
            toast.error('First Name, Email, dan Message wajib diisi!');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Pesan berhasil dikirim!');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            } else {
                toast.error('Gagal mengirim pesan. Silakan coba lagi.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Terjadi kesalahan. Silakan coba lagi nanti.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='px-5 lg:px-20 py-20 w-full lg:flex items-start bg-white'>
            <ToastContainer position="top-center" autoClose={3000} />
            <div className='w-full lg:w-1/3'>
                <h6 className='flex items-center gap-2 text-teal-500'>About Us <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2 text-gray-900 font-semibold'>Get in Touch</h2>
                <p className='text-gray-600 text-xl'>
                    Please feel free to contact us. We are here to assist you.
                </p>
                <form onSubmit={handleSubmit} className='mt-5'>
                    <div className='flex gap-5'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-teal-500">First Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered w-full border-teal-500 text-gray-800"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-teal-500">Last Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered w-full border-teal-500 text-gray-800"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Email</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full border-teal-500 text-gray-800"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Phone Number</span>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="input input-bordered w-full border-teal-500 text-gray-800"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Message</span>
                        </div>
                        <textarea
                            placeholder="Message"
                            className="input textarea textarea-bordered w-full border-teal-500 text-gray-800"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className='btn bg-teal-500 text-white hover:bg-teal-600 w-full mt-3'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <div className='w-full mt-8 lg:mt-0 lg:w-2/3'>
                <div className='flex justify-end'>
                    <Image src={localImages.contactUs} alt='Contact Us' width={600} height={300} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
