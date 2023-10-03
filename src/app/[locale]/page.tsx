import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next-intl/link";
import Ambassadors from "@/app/components/Ambassadors";
import TextGradient from "@/app/components/AnimatedTextGradient";
import HomeTop from "@/app/components/HomeTop";

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
      <HomeTop />
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
        <div className="flex justify-center flex-col" id="gather">
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
        <div
          className="flex justify-center flex-col text-2xl text-center"
          id="donate"
        >
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
        <div className="flex justify-center flex-col" id="about">
          <h2 className="title uppercase">HOW EVERYTHING STARTED</h2>
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
      <div className="bg-img flexCenter flex-col py-16">
        <Image
          src={"/images/run-for-ukraine-logo-blue.svg"}
          width={150}
          height={150}
          alt={"Run for Ukraine Logo"}
        />
        <h2 className="uppercase text-strong-azure max-w-[550px] font-semibold text-center md:text-2xl leading-relaxed px-3 pt-10">
          #RunForUkraine is a global community that unites runners and athletes
          from all over the world to support and help Ukraine and the Ukrainian
          military.
        </h2>
      </div>

      <div
        className="flex justify-center flex-col md:flex-row  mt-10"
        id="social"
      >
        <div className="p-3" id="strava">
          <h2 className="font-semibold text-2xl py-3">
            Join our run club on
            <a
              href="https://strava.app.link/GAROuCXupyb"
              className="text-strong-azure hover:underline hover:underline-offset-2 ml-2"
            >
              Strava
            </a>
          </h2>
          <div className="strava-container">
            <iframe
              allowTransparency
              frameBorder="0"
              height="160"
              scrolling="no"
              src="https://www.strava.com/clubs/1123141/latest-rides/214252ff5b5c952649075a008151320e8d2b11b8?show_rides=false"
              width="100%"
            ></iframe>
            <iframe
              allowTransparency
              frameBorder="0"
              height="454"
              scrolling="no"
              src="https://www.strava.com/clubs/1123141/latest-rides/214252ff5b5c952649075a008151320e8d2b11b8?show_rides=true"
              width="100%"
            ></iframe>
          </div>
        </div>
        <div className="p-3" id="telegram">
          <h2 className="font-semibold text-2xl py-3">
            Join our Telegram channels
          </h2>
          <ul className="text-strong-azure ml-3 text-base flex flex-col space-y-3 mt-3 ">
            <li>
              <a
                href="https://t.me/runforukrainetoronto"
                className="hover:underline hover:underline-offset-2"
              >
                <Image
                  src={"/images/telegram.svg"}
                  alt={"telegram icon"}
                  width={25}
                  height={25}
                  className="inline mr-2"
                />
                Toronto, Canada
              </a>
            </li>

            <li>
              <a
                href="https://t.me/runforukrainelondon"
                className="hover:underline hover:underline-offset-2"
              >
                <Image
                  src={"/images/telegram.svg"}
                  alt={"telegram icon"}
                  width={25}
                  height={25}
                  className="inline mr-2"
                />
                London, UK
              </a>
            </li>
            <li>
              <a
                href="https://t.me/runforukrainetelaviv"
                className="hover:underline hover:underline-offset-2"
              >
                <Image
                  src={"/images/telegram.svg"}
                  alt={"telegram icon"}
                  width={25}
                  height={25}
                  className="inline mr-2"
                />
                Tel-Aviv, Israel
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col text-center my-10 md:my-24" id="report">
        <h1 className="uppercase text-2xl md:text-5xl font-semibold">
          PREVIOUS FUNDRAISERS
        </h1>
        <div className="mt-4 h-1 w-24 bg-yellow-gold mx-auto mb-3"></div>

        <div className="flex justify-center flex-col md:flex-row md:space-x-24 mt-10">
          <div>
            <img src="/images/fundraiser-img-fall.png" />
            <p className="mt-3 mb-10 md:text-2xl font-semibold">Fall 2022</p>
          </div>
          <div>
            <img src="/images/fundraiser-img-may.png" />
            <p className="mt-3  mb-10  md:text-2xl font-semibold">May 2022</p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col text-center my-6 md:my-24 "
        id="gallery"
      >
        <h1 className="uppercase text-2xl md:text-5xl font-semibold">
          GALLERY
        </h1>
        <div className="mt-4 h-1 w-24 bg-yellow-gold mx-auto mb-3"></div>

        <div className="gallery-container flex flex-wrap gap-3 p-5 justify-center ">
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_20220529ukrainiansatottawarw_ta271.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta312.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta317.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_20220529ukrainiansatottawarw_ta349.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408348.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408350.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1dsc_3522.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1cm2_8662.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408354-edit.jpg" />
          <img
            className="flex self-start"
            src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3502-long.jpg"
          />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1ava_3468-long.jpg" />
          <img
            className="flex self-start"
            src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1dsc_3511-long.jpg"
          />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3547.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3534.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta312.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2707.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2706.jpg" />
          <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2708.jpg" />
        </div>
      </section>
    </div>
  );
};

export default Home;
