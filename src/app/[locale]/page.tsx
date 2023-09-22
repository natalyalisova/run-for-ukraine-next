import {useTranslations} from 'next-intl';
// Link from "next-intl/link";

const Home = () => {
    const t = useTranslations('Home');
    return (
        <div className="mt-20">
            <h1>RUN FOR UKRAINE!</h1>
            <p>{t('title')}</p>
        </div>
    )
}

export default Home;
