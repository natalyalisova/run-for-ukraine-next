import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next-intl/link";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Ambassadors from "@/app/components/Ambassadors";
import TextGradient from "@/app/components/AnimatedTextGradient";

const MockedAmbassadors = [
  {
    name: "Amelina Olga",
    fundraised: 120,
    goal: 500,
    profileImgUrl: "/images/olga-avatar.png",
  },
  {
    name: "Sergey Ostapenko",
    fundraised: 100,
    goal: 400,
    profileImgUrl: "/images/sergey-avatar.png",
  },
  {
    name: "Mark Lisovyi",
    fundraised: 310,
    goal: 1500,
    profileImgUrl: "/images/avatar-default.svg",
  },
];

const Home = () => {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[500px] md:h-screen bg-strong-azure">
        <Image
          src="/images/ukraine-contour.svg"
          className=" absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 "
          width={750}
          height={500}
          alt="Ukraine contour map"
        />
        <div className="h-full md:h-1/2 mt-8 md:mt-10 flex flex-col">
          <div className="flex-grow"></div>
          <div className="flex flex-row self-center pb-1 items-center ">
            <p className="text-white text-2xl md:text-5xl">1212.8</p>
            <p className="text-white  text-base md:text-lg opacity-50 ml-2">
              / 6992 km
            </p>
          </div>
        </div>

        <div className="h-full md:h-1/2 bg-yellow-gold flex justify-center items-end">
          <div className="flexCenter flex-col bg-white m-3 px-6 py-3 max-w-md text-center">
            <p className="text-sm md:text-xl font-semibold">{t("our-goal")}</p>
            <Link href="" className="bg-yellow-gold mt-2">
              <Button
                title={t("register")}
                leftIcon={faCircleDollarToSlot as IconProp}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  justify-center mt-10">
          {MockedAmbassadors.map((ambassador) => (
            <Ambassadors
              name={ambassador.name}
              key={ambassador.name}
              fundraised={ambassador.fundraised}
              goal={ambassador.goal}
              profileImgUrl={ambassador.profileImgUrl}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 text-center p-4 gap-y-6 md:mt-12 mt-10">
          <div>
            <TextGradient text={t("new-global-season-title")} />
            <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
          </div>

          <div className="text-center place-self-center">
            <p className="inline text-bace md:text-lg">
              {t("new-global-season-description-1")}
            </p>
            <Link
              href="https://runforukraine.ca/"
              title="www.runforukraine.ca"
              className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-2"
            >
              www.runforukraine.ca
            </Link>
            <p className="inline text-bace md:text-lg">
              {t("new-global-season-description-2")}
            </p>
          </div>

          <h2 className="title mt-4">{t("why-6992-km-title")}</h2>
          <div className="text-center place-self-center mb-1">
            <p className="inline mr-3 text-xl font-semibold text-strong-azure">
              {t("length-number")}
            </p>
            <p className="inline text-bace md:text-lg">
              {t("why-6992-km-description")}
            </p>
          </div>

          <h2 className="title mt-4">{t("how-count-title")}</h2>
          <p className="text-center inline text-bace md:text-lg">
            {t("how-count-description")}
          </p>
          <div className="flex justify-center flex-col">
            <p className="text-center text-bace md:text-lg mt-6">Project by</p>
            <Link
              href={"https://secondfrontukraine.com/#"}
              className="flex justify-center mt-6"
            >
              <Image
                src="/images/2nd-front-logo-full-color.svg"
                width={236}
                height={90}
                alt="Second front logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-center p-10">
        <div className="flexCenter mb-6">
          <Image
            src="/images/walkie-talkie.png"
            alt={"walkie-talkie image"}
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center flex-col">
          <h2 className="title">What is the fundraising goal?</h2>
          <p className="inline text-bace md:text-lg">
            What is the fundraising goal? The goal is to raise $CAD 69,920 to
            purchase tactical radios for our defenders in Ukraine. Together with
            the
            <span className="text-strong-azure text-bace md:text-lg underline underline-offset-2">
              <Link
                href={
                  "https://www.instagram.com/p/CpDcpkMud_l/?igshid=YmMyMTA2M2Y%3D"
                }
              >
                “Second Front Ukraine Foundation”
              </Link>
            </span>
            , we launched this fundraising initiative because reliable
            communication is the key to successful completion of military
            operations which also means the victory of Ukraine coming sooner!
          </p>
        </div>
        <div className="flex justify-center flex-col mb-1">
          <p className="text-base md:text-lg">
            <span className="font-semibold">
              “Second Front Ukraine Foundation”
            </span>
            — is an officially registered Canadian not-for-profit corporation.
            We work with trusted partners across North America and in Ukraine to
            deliver goods necessary to protect the lives of Ukrainians in the
            face of Russian aggression.
          </p>
          <p className="font-semibold text-base md:text-lg">
            As of the beginning of March 2023, volunteers of Second Front
            Ukraine already collected and delivered aid to Ukraine (for
            defenders, paramedics and firefighters) for more than 850,000 CAD.
            Let’s run together! Let’s #RunForUkraine Around Ukraine to restore
            the integrity of Ukraine’s state border and celebrate the VICTORY!
          </p>
        </div>
        <div className="flex justify-center flex-col text-2xl text-center">
          <p>GOAL CAD $69,920</p>
          <p>Widget</p>
        </div>
        <div className="flexCenter my-6">
          <Image
            src="/images/amelina-olga.png"
            alt={"Amelina Olga image"}
            width={500}
            height={700}
          />
        </div>
        <div className="flex justify-center flex-col">
          <h2 className="title">HOW EVERYTHING STARTED</h2>
          <h3 className="title-secondary">Hello everyone!</h3>
          <p>
            My name is Amelina Olga, and I am a marathon runner, an ideological
            inspirer and the leader of the #RunForUkraine project. Together with
            the volunteer team of Second Front Ukraine Foundation @secondfrontua
            we launched the #RunForUkraine project in the spring of 2022, which
            quickly grew into an international initiative and united the global
            running community around Ukraine.
            <br />
            <br />
            The main idea was to call the running community to the topic of a
            full-scale war in Ukraine, unite as many goal-oriented achievers as
            possible to #RunForUkraine together, raise money and help defenders
            of Ukraine. The most important goal for us is to make Ukraine's
            VICTORY happen as soon as possible by organizing all kinds of
            running initiatives!
            <br />
            <br />
            For the first time, #RunForUkraine showcased itself loudly at the
            Toronto Marathon in May 2022, where hundreds of athletes and
            amateurs were running in special #RunForUkraine yellow t-shirts.
            Then there were the Ottawa Tamarack Marathon, the Chicago Marathon,
            the Toronto Waterfront Marathon, the Tel Aviv Marathon, as well as a
            huge fundraising initiative for winter military boots for defenders,
            19 charity runs across Canada and the world, Ambassadors of
            different countries supporting us, politicians, stars, musicians...
            And all of that for our beloved Ukraine!
            <br />
            <br />
            We do not plan to stop! We plan to continue running for Ukraine,
            raise money to make the victory of Ukraine happen as soon as
            possible!
          </p>
        </div>
        <div className="flexCenter my-6 text-2xl font-bold">
          <TextGradient
            text={"RUN - EAT - DONATE - REPEAT!"}
            fontStyle={"text-3xl"}
          />
        </div>
        <div className="flexCenter my-6 hero-video">
          <div className="relative">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2FBD995476-9DBA-4300-BA04-7775CBD40D60.MOV"
            ></video>
            <p className="absolute  bg-black opacity-60 font-bold text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              #RunForUkraine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
