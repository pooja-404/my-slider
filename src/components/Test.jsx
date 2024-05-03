import { useState } from 'react';
import React from 'react'

function Test() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };


    return (
        <div className='bg-black min-h-screen'>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <div className='pt-5' >
                    <div className='flex gap-8 justify-end'>
                        <h2 className='text-white opacity-[0.4]  text-lg fw-normal capitalize'>mobile</h2>
                        <h2 className='text-white opacity-[0.4]  text-lg fw-normal capitalize'>super</h2>
                        <h2 className='text-white opacity-[0.4]  text-lg fw-normal capitalize'>primuim</h2>
                    </div>

                    <div className='flex items-center justify-between gap-42'>
                        <div>
                            <h2 className='text-white text-lg fw-normal capitalize'>all content</h2>
                            <p className='text-white opacity-[0.4] text-lg fw-normal'>movie light spots,tv special</p>
                        </div>
                        <div className='flex gap-[85px]'>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>

                    <div className='flex items-center justify-between gap-42'>
                        <h2 className='text-white text-lg fw-normal capitalize'>watch on tv or laptop</h2>
                        <div className='flex gap-[85px]'>
                            <p className='text-[#8a8989] font-normal text-2xl !mt-[-13px]'>x</p>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>

                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='flex items-center justify-between gap-42'>
                        <h2 className='text-white text-lg fw-normal capitalize'>watch on tv or laptop</h2>
                        <div className='flex gap-[85px]'>
                            <p className='text-[#8a8989] font-normal text-2xl !mt-[-13px] mx-auto'>x</p>
                            <p className='text-[#8a8989] font-normal text-2xl !mt-[-13px] mx-1'>x</p>
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill="#8a8989" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='flex items-center justify-between gap-42'>
                        <h2 className='text-white text-lg fw-normal capitalize'>watch on tv or laptop</h2>
                        <div className='flex gap-[85px]'>
                            <p className='text-[#8a8989] font-normal text-xl !mt-[-13px] mx-1'>2</p>
                            <p className='text-[#8a8989] font-normal text-xl !mt-[-13px] mx-1'>3</p>
                            <p className='text-[#8a8989] font-normal text-xl !mt-[-13px] mx-1'>4</p>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>

                    <div className='flex items-center justify-between gap-42'>
                        <h2 className='text-white text-lg fw-normal capitalize'>watch on tv or laptop</h2>
                        <div className='flex gap-[54px]'>
                            <div className='ml- 32'>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase'>hd</p>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase pt-2'>720p</p>
                            </div>
                            <div className='ml-[-1px]'>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase'>full hd</p>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase pt-2'>180p</p>
                            </div>
                            <div className='mr-[-30px]'>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase'>4k</p>
                                <p className='text-[#8a8989] font-normal text-xl !mt-[-13px]  text-center  uppercase pt-2'>2160p</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-[500px] rounded-[60px] px-5  py-3 bg-[#464545]  mx-auto flex gap-24 mt-9'>
                    <p onClick={() => setActiveTab("tab1")} className={`${activeTab === "tab1" ? "text-white" : "text-[#8a8989]"} font-bold text-2xl cursor-pointer`}>quartely</p>
                    <p onClick={() => setActiveTab("tab2")} className={`${activeTab === "tab2" ? "text-white" : "text-[#8a8989]"} font-bold text-2xl cursor-pointer`}>yearly</p>
                    <p onClick={() => setActiveTab("tab3")} className={`${activeTab === "tab3" ? "text-white" : "text-[#8a8989]"} font-bold text-2xl cursor-pointer`}>monthly</p>
                </div>
                <div className={`${activeTab === "tab1" ? "" : ""} flex gap-3 justify-center pt-5`}>
                    <div>
                        <div className={`${activeTab === "tab1" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab1" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>mobile</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                    <div>
                        <div className={`${activeTab === "tab2" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab2" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>super</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                    <div>
                        <div className={`${activeTab === "tab3" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab3" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>premium</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                </div>
                {/* <div className={`${activeTab === "tab2" ? "" : ""} flex gap-3 justify-center pt-5`}>
                    <div className={`${activeTab === "tab1" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                        <p className={`${activeTab === "tab1" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>mobile</p>
                        <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                    </div>

                    <div className={`${activeTab === "tab2" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                        <p className={`${activeTab === "tab2" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>super</p>
                        <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                    </div>


                    <div className={`${activeTab === "tab3" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                        <p className={`${activeTab === "tab3" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>premium</p>
                        <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                    </div>

                </div>
                <div className={`${activeTab === "tab3" ? "" : ""} flex gap-3 justify-center pt-5`}>
                    <div>
                        <div className={`${activeTab === "tab1" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab1" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>mobile</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                    <div>
                        <div className={`${activeTab === "tab2" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab2" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>super</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                    <div>
                        <div className={`${activeTab === "tab3" ? "border-white " : "border-[#8a8989]"} w-[270px] border  rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === "tab3" ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>premium</p>
                            <p className='font-bold text-2xl text-white'>₹149<span className='text-base'>/3month</span></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Test

