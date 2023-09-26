import {useTranslations} from 'next-intl';
import Image from "next/image";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next-intl/link";
import {faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


const Home = () => {
    const t = useTranslations('Home');
    return (
        <div className="items-center flex-start flex-col mt-17 self-center h-screen pt-16">
            <Image src="/images/ukraine-contour.svg"
                   className=" absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 "
                   width={750} height={500}
                   alt="Ukraine contour map"/>
            <div className="flex flex-col mt-17 self-center justify-center h-1/4 md:h-96 bg-strong-azure">
                <div className="flex-grow"></div>
                <div className="flex flex-row self-center pb-1 items-center ">
                    <p className="text-white text-2xl md:text-5xl">1212.8</p>
                    <p className="text-white  text-base md:text-lg opacity-50 ml-2">/ 6992 km</p>
                </div>

            </div>
            <div className="flex-start flex-col mt-17 text-center h-1/4 md:h-82 bg-yellow-gold">
            </div>
            <div className="flexCenter  h-1/4  md:h-96 bg-yellow-gold p-3">
                <div className="flexCenter flex-col bg-white mb-3 px-6 py-3 max-w-md text-center">
                    <p className="text-sm md:text-xl font-semibold">{t('our-goal')}</p>
                    <Link href="" className="bg-yellow-gold mt-2">
                        <Button title={t('register')} leftIcon={faCircleDollarToSlot as IconProp}/>
                    </Link>
                </div>
            </div>
            <div className="flex w-full justify-center ">
                <div className="max-w-2xl text-center p-4 md:mt-12">
                    <h2 className="text-xl md:text-4xl my-6 text-strong-azure font-semibold">
                        {t('new-global-season-title')}
                    </h2>

                    <p className="inline  text-bace md:text-lg">{t('new-global-season-description-1')}</p>
                    <Link href="https://runforukraine.ca/" title="www.runforukraine.ca"
                          className="inline  mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-2">www.runforukraine.ca</Link>
                    <p className="inline text-bace md:text-lg">{t('new-global-season-description-2')}</p>

                </div>
            </div>
        </div>
    )
}

export default Home;
