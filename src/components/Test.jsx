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
    const tabPricingData = {
        tab1: {
            name: "mobile",
            price: "₹149",
            duration: "/3month"
        },
        tab2: {
            name: "super",
            price: "₹299",
            duration: "/6month"
        },
        tab3: {
            name: "premium",
            price: "₹499",
            duration: "/year"
        }
    };
    const tabPricingData2 = {
        tab1: {
            name: "mobile",
            price: "₹149",
            duration: "/3month"
        },
        tab2: {
            name: "super",
            price: "₹299",
            duration: "/6month"
        },
        tab3: {
            name: "premium",
            price: "₹499",
            duration: "/year"
        }
    };
    const tabPricingData3 = {
        tab1: {
            name: "mobile",
            price: "₹149",
            duration: "/3month"
        },
        tab2: {
            name: "super",
            price: "₹299",
            duration: "/6month"
        },
        tab3: {
            name: "premium",
            price: "₹499",
            duration: "/year"
        }
    };
    return (
        <div className='bg-[#06090e] min-h-screen'>
            <div className='max-w-[768px] px-3 mx-auto'>
                <div className='flex flex-row flex-wrap pt-7'>
                    <div className='md:w-1/2 px-3 w-full'>
                        <h2 className='text-white text-lg fw-normal capitalize pt-5'>all content</h2>
                        <p className='text-white opacity-[0.4] text-lg fw-normal'>movie light spots,tv special</p>
                        <h2 className='text-white text-xl fw-normal capitalize pt-5'>watch on tv or laptop</h2>
                        <h2 className='text-white text-xl fw-normal capitalize pt-5'>adds free movie shows (except shows)</h2>
                        <h2 className='text-white text-xl fw-normal capitalize pt-5'>number of devices can loggined in</h2>
                        <h2 className='text-white text-xl fw-normal capitalize pt-5'>max-vedio quality</h2>
                        <h2 className='text-white text-xl fw-normal capitalize pt-5'>max-audio quality</h2>
                        <p className='text-white opacity-[0.4] text-lg fw-normal'>atoms available select this tittle only</p>
                    </div>
                    <div className={`${activeTab === "tab1" ? "bg-[#191a20] rounded-md " : ""} md:w-2/12 w-full px-3 text-center my-a uto`}>
                        <h2 className={`${activeTab === "tab1" ? "text-yellow-500 font-bold " : "text-[#3e3e3e]"}  text-xl fw-normal capitalize pt-2 `}>mobile</h2>
                        <div className="flex justify-center pt-5">
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill={activeTab === "tab1" ? "white " : "#3e3e3e"} />
                            </svg>
                        </div>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-auto pt-5 `}>x</p>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-1 pt-5'`}>x</p>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl  mx-1 pt-5 `}>1</p>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-5 `}>hd</p>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase  `}>720p</p>
                        <p className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-6`}>stereo</p>
                    </div>
                    <div className={`${activeTab === "tab2" ? "bg-[#191a20] rounded-md " : ""} md:w-2/12 w-full px-3 text-center my-a uto`}>
                        <h2 className={`${activeTab === "tab2" ? "text-yellow-500 font-bold " : "text-[#3e3e3e]"}  text-xl fw-normal capitalize pt-2 `}>premium</h2>
                        <div className="flex justify-center pt-5">
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill={activeTab === "tab2" ? "white " : "#3e3e3e"} />
                            </svg>
                        </div>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-auto pt-5 `}>x</p>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-1 pt-5'`}>x</p>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl  mx-1 pt-5 `}>1</p>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-5 `}>hd</p>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase  `}>720p</p>
                        <p className={`${activeTab === "tab2" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-6`}>stereo</p>
                    </div>
                    <div className={`${activeTab === "tab3" ? "bg-[#191a20] rounded-md " : ""} md:w-2/12 w-full px-3 text-center my-a uto`}>
                        <h2 className={`${activeTab === "tab3" ? "text-yellow-500 font-bold" : "text-[#3e3e3e]"}  text-xl fw-normal capitalize pt-2 `}>super</h2>
                        <div className="flex justify-center pt-5">
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.993 12.421L0.285995 5.58L1.714 4.18L7.007 9.579L16.293 0.292999L17.707 1.707L6.993 12.421Z" fill={activeTab === "tab3" ? "white " : "#3e3e3e"} />
                            </svg>
                        </div>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-auto pt-5 `}>x</p>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-2xl  mx-1 pt-5'`}>x</p>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl  mx-1 pt-5 `}>1</p>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-5 `}>hd</p>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase  `}>720p</p>
                        <p className={`${activeTab === "tab3" ? "text-white " : "text-[#3e3e3e]"} font-normal text-xl   text-center  uppercase pt-6`}>stereo</p>
                    </div>
                </div>
                <div className='w-[500px] rounded-[60px] px-5  pt-3 py-4 bg-[#191a20]  mx-auto flex gap-24 mt-9'>
                    <p onClick={() => setActiveTab("tab1")} className={`${activeTab === "tab1" ? "text-white " : "text-[#3e3e3e]"} font-bold text-2xl cursor-pointer`}>quartely</p>
                    <p onClick={() => setActiveTab("tab2")} className={`${activeTab === "tab2" ? "text-white  rounded-full" : "text-[#3e3e3e]"} font-bold text-2xl cursor-pointer`}>yearly</p>
                    <p onClick={() => setActiveTab("tab3")} className={`${activeTab === "tab3" ? "text-white  " : "text-[#3e3e3e]"} font-bold text-2xl cursor-pointer`}>monthly</p>
                </div>
                <div className={`${activeTab === "tab1" ? "" : ""} flex gap-3 justify-center pt-7`}>
                    {Object.keys(tabPricingData).map(tab => (
                        <div key={tab} className={`${activeTab === tab ? "border-white" : "border-[#191a20]"} w-[250px] border rounded-[8px] px-3 py-4 cursor-pointer`}>
                            <p className={`${activeTab === tab ? "text-yellow-500" : "text-white"} font-bold text-2xl`}>{tabPricingData[tab].name}</p>
                            <p className='font-bold text-2xl text-white'>{tabPricingData[tab].price}<span className='text-base'>{tabPricingData[tab].duration}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Test



