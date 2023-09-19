import {useTranslations} from 'next-intl';
import Link from "next-intl/link";

const Home = () => {
    const t = useTranslations('Home');
    return (
        <div>
            <div>
                <Link href="/" locale="en">
                    En
                </Link>{" "}| {" "}
                <Link href="/" locale="ua">
                    Ua
                </Link>
                <br/>
            </div>
            <h1>RUN FOR UKRAINE!</h1>
            <p>{t('title')}</p>
        </div>
    )
}

export default Home;
