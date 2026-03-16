import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const QnA = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('site.qna.title')}
        description={t('site.qna.subtitle')}
        path="/qna"
      />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.qna.title')}</h2>
          <p>{t('site.qna.subtitle')}</p>
        </div>
      </section>

      <section className="edu-coming-soon-section">
        <div className="container">
          <div className="edu-coming-soon-card">
            <div className="edu-coming-soon-icon">
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <h3>{t('site.qna.comingSoon')}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default QnA;
