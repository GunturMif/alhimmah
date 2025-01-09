import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import { localImages } from '@/utils/localImages';

const ContactUs = () => {
    return (
        <section className='px-5 lg:px-20 py-20 w-full lg:flex items-start bg-white'>
            {/* Bagian kiri */}
            <div className='w-full lg:w-1/3'>
                <h6 className='flex items-center gap-2 text-teal-500'>About Us <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2 text-gray-900 font-semibold'>Get in Touch</h2>
                <p className='text-gray-600 text-xl'>
                    Please feel free to contact us. We are here to assist you.
                </p>

                {/* Formulir kontak */}
                <div className='mt-5'>
                    <div className='flex gap-5'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-teal-500">First Name</span>
                            </div>
                            <input type="text" placeholder="First Name" className="input input-bordered w-full border-teal-500 text-gray-800" />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-teal-500">Last Name</span>
                            </div>
                            <input type="text" placeholder="Last Name" className="input input-bordered w-full border-teal-500 text-gray-800" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Email</span>
                        </div>
                        <input type="text" placeholder="Email" className="input input-bordered w-full border-teal-500 text-gray-800" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Phone Number</span>
                        </div>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full border-teal-500 text-gray-800" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-teal-500">Message</span>
                        </div>
                        <textarea placeholder="Message" className="input textarea textarea-bordered w-full border-teal-500 text-gray-800"></textarea>
                    </label>
                    <button className='btn bg-teal-500 text-white hover:bg-teal-600 w-full mt-3'>Send Message</button>
                </div>
            </div>

            {/* Bagian kanan */}
            <div className='w-full mt-8 lg:mt-0 lg:w-2/3'>
                <div className='flex justify-end'>
                    <Image src={localImages.contactUs} alt='Contact Us' width={600} height={300} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
