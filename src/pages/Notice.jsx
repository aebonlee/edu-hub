import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Notice = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('site.notice.title')}
        description={t('site.notice.subtitle')}
        path="/notice"
      />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.notice.title')}</h2>
          <p>{t('site.notice.subtitle')}</p>
        </div>
      </section>

      <section className="edu-coming-soon-section">
        <div className="container">
          <div className="edu-coming-soon-card">
            <div className="edu-coming-soon-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <h3>{t('site.notice.comingSoon')}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notice;
