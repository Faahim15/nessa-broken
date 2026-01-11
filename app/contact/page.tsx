"use client"
import { useState } from 'react'
import PageHeading from '../components/common/PageHeading/PageHeading'
import { BsSend } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import InputField from '../components/common/InputField/InputField'



const ContactPage = () => {


    // Contact form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Handle form submit
    const handleContactUs = () => {
        console.log("Contact Form Data:", formData)
       
    }

    return (
        <div className="overflow-x-hidden">
            <PageHeading title='Contact' description='Send your thoughts or questions to the author' />

            <div className='bg-[#0C0E0F] py-10'>
                {/* Container */}
                <div className='max-w-3xl w-full mx-auto border border-[#9D9A97] p-6 sm:p-8 rounded-md space-y-5 box-border'>
                    
                    {/* Input fields */}
                    <InputField
                        label="Name"
                        type="text"
                        name='name'
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <InputField
                        label="Email"
                        type="email"
                        name='email'
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <InputField
                        label="Subject"
                        type="text"
                        name='subject'
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Message"
                        type="text"
                        name='message'
                        placeholder="Share your thoughts..."
                        value={formData.message}
                        onChange={handleChange}
                    />

                   
                    {/* Submit button */}
                    <button
                        onClick={handleContactUs}
                        className='text-white bg-[#2B2F36] w-full flex items-center justify-center py-3 gap-2 rounded-md cursor-pointer'
                    >
                        Send Message <BsSend />
                    </button>
                </div>

                {/* Contact info */}
                <div className='text-white flex flex-col justify-center items-center my-5'>
                    <p className='flex items-center gap-2'> <CiMail /> contact@nessasbrokenworld.com</p>
                    <p className='text-[#9D9A97] text-sm'>"We love hearing from readers. Every message becomes part of the story."</p>
                </div>

                {/* Footer quote */}
                <div className='bg-[#131417] text-center py-8 mt-10'>
                    <h4 className='text-3xl'>"In every conversation, we discover new fragments of meaning."</h4>
                    <p className='text-[#9D9A97]'>— From the Archives of the Broken World</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
