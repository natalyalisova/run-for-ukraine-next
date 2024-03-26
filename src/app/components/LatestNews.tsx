import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";

const LatestNews = () => {
  return (
    <div className="text-center  mt-12 md:mt-24 border-b border-strong-azure">
      <div className="mx-auto mb-12">
        <TextGradient text={"Latest news and events"} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

      <div className="bg-img-24-feb-24 flexCenter flex-col py-48 px-6">
        <h2 className="uppercase title max-w-xl mx-auto text-white">
          Two years of war
        </h2>
      </div>
      <div className="bg-gradient-to-b from-yellow-gold to-strong-azure">
        <div className="max-w-4xl mx-auto grid gap-3 justify-center p-6 text-start  text-bace md:text-lg ">
          <h2 className="uppercase title mx-auto max-w-2xl text-center md:mt-24">
            The second anniversary of russia&apos;s full-scale invasion of
            Ukraine
          </h2>
          <p className="text-start text-gray-700 mt-12">February 24, 2024</p>

          <p className="inline mt-3">
            On February 24, 2024, in the Tel Aviv Port, the #RunForUkraine
            Tel-Aviv event brought together hearts united by a common goal.
            Timed to the second commemorate of russia’s full-scale invasion of
            Ukraine, this run showcased unwavering support, deep solidarity, and
            a determined fight for freedom and democracy. Despite the rain and
            wind, not just individuals, but entire families joined the run,
            making it a true act of spirit and unity.
          </p>
          <img src="/images/24-feb-team.jpg" />
          <p className="mt-3">
            This run is more than just a sport. It’s our voice in the fight for
            peace and justice. Every step sends a message to the world that the
            war in Ukraine continues, we remember, and we support each other.
            Our strength lies in our unity, which brings us closer to victory.
          </p>
          <p className="mt-3">
            #RunForUkraine has become a symbol of unshakeable faith in a better
            future, where peace and freedom are the core values for all nations.
            This event reminded everyone present of the importance of democratic
            values, and of passing on ideals of dignity and courage to the
            younger generation. Thank you to everyone who joined and runs with
            #RUNFORUKRAINE 🏃‍♀️🏃🏻🇺🇦 Together we will win!
          </p>
        </div>
        <div className="news-gallery gap-3 p-5 justify-center ">
          <img src="/images/24-feb-1.jpg" />
          <img src="/images/24-feb-0336.jpg" />
          <img src="/images/24-feb-team.jpg" />
          <img src="/images/24-feb-2.jpg" />
          <img src="/images/24-feb-0297.jpg" />
          <img src="/images/IMG_0481.jpg" />
          <img src="/images/IMG_0537.jpg" />
          <img src="/images/IMG_0589.jpg" />
          <img src="/images/IMG_0591.jpg" />
          <img src="/images/IMG_0593.jpg" />
          <img src="/images/IMG_0601.jpg" />
          <img src="/images/IMG_0662.jpg" />
          <img src="/images/IMG_0706.jpg" />
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
