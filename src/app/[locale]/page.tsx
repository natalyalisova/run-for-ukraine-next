import {useTranslations} from 'next-intl';

const Home = () => {
    const t = useTranslations('Index');
    return (
        <div>
            <h1>RUN FOR UKRAINE!</h1>
            <p>{t('title')}</p>
        </div>
    )
}

export default Home;
