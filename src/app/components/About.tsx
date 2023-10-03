import React from "react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="flex justify-center flex-col" id="about">
      <h2 className="title uppercase">HOW EVERYTHING STARTED</h2>
      <h3 className="title-secondary">Hello everyone!</h3>
      <p>
        My name is Amelina Olga, and I am a marathon runner, an ideological
        inspirer and the leader of the #RunForUkraine project. Together with the
        volunteer team of Second Front Ukraine Foundation @secondfrontua we
        launched the #RunForUkraine project in the spring of 2022, which quickly
        grew into an international initiative and united the global running
        community around Ukraine.
        <br />
        <br />
        The main idea was to call the running community to the topic of a
        full-scale war in Ukraine, unite as many goal-oriented achievers as
        possible to #RunForUkraine together, raise money and help defenders of
        Ukraine. The most important goal for us is to make Ukraine's VICTORY
        happen as soon as possible by organizing all kinds of running
        initiatives!
        <br />
        <br />
        For the first time, #RunForUkraine showcased itself loudly at the
        Toronto Marathon in May 2022, where hundreds of athletes and amateurs
        were running in special #RunForUkraine yellow t-shirts. Then there were
        the Ottawa Tamarack Marathon, the Chicago Marathon, the Toronto
        Waterfront Marathon, the Tel Aviv Marathon, as well as a huge
        fundraising initiative for winter military boots for defenders, 19
        charity runs across Canada and the world, Ambassadors of different
        countries supporting us, politicians, stars, musicians... And all of
        that for our beloved Ukraine!
        <br />
        <br />
        We do not plan to stop! We plan to continue running for Ukraine, raise
        money to make the victory of Ukraine happen as soon as possible!
      </p>
    </div>
  );
};

export default About;
