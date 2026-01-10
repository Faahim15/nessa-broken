"use client"
import React from 'react'
import PageHeading from '../components/common/PageHeading/PageHeading'
import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { BsSend } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'

const ContactPage = () => {
    return (
        <div>
            <PageHeading title='Contact' description='Send your thoughts or questions to the author' />
            <div className='bg-[#0C0E0F] py-10'>
                <div className=' max-w-3xl mx-auto border border-[#9D9A97]  p-10 rounded-md'>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{ fullName: '' }}
                    // onFinish={onFinish}
                    // style={{ maxWidth: 420 }}
                    >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input
                                className="white-placeholder"
                                placeholder="Enter your name (e.g. Rahim Khan)"
                                size="large"

                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input
                                className="white-placeholder"
                                placeholder="your.email@example.com"
                                size="large"

                            />
                        </Form.Item>
                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true, message: 'Please enter your Subject!' }]}
                        >
                            <Input
                                className="white-placeholder"
                                placeholder="What's this about?"
                                size="large"

                            />
                        </Form.Item>
                        <Form.Item
                            label="Message"
                            name="subject"
                            rules={[{ required: true, message: 'Please enter your Subject!' }]}
                        >
                            <TextArea
                                className="white-placeholder"
                                placeholder="What's this about?"
                                size="large"
                                rows={5}
                            />
                        </Form.Item>

                        <Form.Item>
                            <button className='text-white bg-[#2B2F36] w-full flex items-center justify-center py-2 gap-2 rounded-md cursor-pointer '>
                                Send Message <BsSend />
                            </button>
                        </Form.Item>
                    </Form>


                </div>
                <div className='text-white flex flex-col justify-center items-center my-5'>
                    <p className='flex items-center gap-2 '> <CiMail /> contact@nessasbrokenworld.com</p>
                    <p className='text-[#9D9A97] text-sm'>"We love hearing from readers. Every message becomes part of the story."</p>
                </div>

                <div className='bg-[#131417] text-center py-8 mt-10'>
                    <h4 className='text-3xl'>"In every conversation, we discover new fragments of meaning."</h4>
                    <p className='text-[#9D9A97]'>— From the Archives of the Broken World</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage