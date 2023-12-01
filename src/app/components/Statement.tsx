import TextGradient from "@/app/components/AnimatedTextGradient";
import Link from "next-intl/link";
import React from "react";
import {useTranslations} from "next-intl";
import {auto} from "@popperjs/core";

const Statement = () => {
    const t = useTranslations("Goals");

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 text-center py-4 gap-y-6 mt-12 md:mt-1">
            <div>
                <TextGradient text={"Official Statement from Olga Amelina, Founder of #RunForUkraine"}/>
                <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
            </div>

            <div className="text-start place-self-center text-bace md:text-lg mt-2 px-6">
                <p className="inline text-bace md:text-lg mt-3">
                    Dear Supporters, Volunteers, and Followers of <b>#RunForUkraine</b>,<br/>
                </p>
                <p className="inline text-bace md:text-lg mt-3">
                    I am aware of the recent statement from the Second Front Ukraine Foundation regarding the
                    #RunForUkraine initiative. I would like to take this opportunity to provide clarity and reassurance
                    to our community.
                </p>
                <p className="mt-3">Firstly, I wish to express my deep gratitude to the Second Front Ukraine Foundation
                    for their past
                    support and collaboration. Our joint efforts have significantly contributed to supporting Ukraine.
                    The decision to transition #RunForUkraine into an independent initiative was not taken lightly. Due
                    to the rapid growth and the need for a separate organizational structure, along with the shift in
                    management culture at Second Front, it became necessary for #RunForUkraine to evolve independently.
                    The international recognition of the #RunForUkraine brand has played a key role in this decision.
                </p>
                <p className="mt-3">As we work towards registering the #RunForUkraine fund, our focus remains on
                    bringing Ukraine closer
                    to victory and maintaining transparency in our financial activities. Therefore, from November 22,
                    2023, the #RunForUkraine project will temporarily pause fundraising activities until all legal and
                    organizational matters are settled.</p>
                <p className="mt-3">Please note that all funds collected by #RunForUkraine until November 22, 2023, are
                    managed by the
                    Second Front Foundation, which is responsible for providing a public report on their utilization,
                    including the allocation for walkie-talkies.</p>


                <p className="mt-3">Our official website's domain has been changed to
                    <Link
                        href="https://runforukraine.org.ua/"
                        title="https://runforukraine.org.ua"
                        className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-4"
                    >
                        runforukraine.org.ua
                    </Link>
                </p>
                <p className="mt-3">
                    The rights to use the #RunForUkraine logo and other creative assets have been transferred to me,
                    Olga Amelina, as the founder, by its author for continued use in the project's charitable
                    activities.
                </p>
                <p className="mt-3">
                    The
                    <Link
                        href="https://www.instagram.com/runforukraine/"
                        title="https://www.instagram.com/runforukraine/"
                        className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-4"
                    >
                        @runforukraine Instagram page
                    </Link> was transferred to me as
                    the founder in November 2022 by its previous owner. As of November 2022, this <Link
                    href="https://www.instagram.com/runforukraine/"
                    title="https://www.instagram.com/runforukraine/"
                    className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-4"
                >instagram page
                </Link> was not
                    affiliated with the Second Front or the #RunForUkraine team. The<Link
                    href="https://www.facebook.com/runforukraine.united"
                    title="https://www.facebook.com/runforukraine.united"
                    className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-4"
                >Facebook page
                </Link>, <Link
                    href="https://strava.app.link/UNqX6rmXaFb"
                    title="Strava"
                    className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-4"
                >Strava
                </Link>, and Telegram channels have been created and are
                    administered by the <b>#RunForUkraine</b> team under my leadership.
                </p>
                <p className="mt-3">
                    I deeply respect and appreciate the contributions and hard work of all our volunteers, including
                    those from Canada. The achievements of the #RunForUkraine project are the result of the collective
                    effort of our large international team.</p>
                <p className="mt-3">
                    #RunForUkraine continues with the same passion and commitment, focusing on creating greater impact and expanding our support for Ukraine. We keep all communication channels open and transparent for our supporters and volunteers.
                </p>
                <p className="mt-3">
                    Thank you for your continued support and understanding. Together, we can and will make a difference!
                </p>
                <p className="mt-8">Sincerely,<br/>
                    <b>Olga Amelina<br/>
                        Founder of #RunForUkraine</b>
                </p>
            </div>

        </div>
    );
};
export default Statement;
