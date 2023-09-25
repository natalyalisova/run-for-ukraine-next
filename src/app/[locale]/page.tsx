import {useTranslations} from 'next-intl';
import Image from "next/image";
import React from "react";
// Link from "next-intl/link";

const Home = () => {
    const t = useTranslations('Home');
    return (
        <div className="flex-start flex-col mt-17 self-center h-screen pt-16">
                <Image src="/images/ukraine-contour.svg" className=" absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 " width={750} height={500}
                       alt="Ukraine contour map"/>
            <div className="flex flex-col mt-17 self-center justify-center h-1/4 md:h-96 bg-strong-azure">
                <div className="flex-grow"></div>
                <div className="flex flex-row self-center pb-1 items-center ">
                    <p className="text-white text-2xl md:text-5xl">1212.8</p>
                    <p className="text-white  text-base md:text-lg opacity-50 ml-2">/ 6992 km</p>
                </div>

            </div>
            <div className="flex-start flex-col mt-17 self-center h-1/4 md:h-96 bg-yellow-gold"></div>
            <p>{t('title')}</p>
        </div>

    )
}

export default Home;
