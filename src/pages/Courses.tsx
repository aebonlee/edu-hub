import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Courses = () => {
  const { t, language } = useLanguage();

  useAOS();

  return (
    <>
      <SEOHead
        title={t('site.courses.title')}
        description={t('site.courses.subtitle')}
        path="/courses"
      />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.courses.title')}</h2>
          <p>{t('site.courses.subtitle')}</p>
        </div>
      </section>

      <section className="edu-courses-section">
        <div className="container">
          {site.hubs.map((hub, idx) => (
            <div key={hub.id} className="edu-category-section" data-aos="fade-up" data-aos-delay={idx * 80}>
              {/* Hub Title */}
              <div className="edu-category-title">
                <span className="edu-category-title-icon" style={{ color: hub.color }}>
                  <i className={hub.icon}></i>
                </span>
                <h3>{language === 'en' ? hub.name : hub.nameKo}</h3>
                <span className="edu-category-title-count">{hub.siteCount}</span>
              </div>

              {/* Hub Detail Card */}
              <div className="edu-detail-grid">
                <div className="edu-detail-card edu-hub-detail-card">
                  <div className="edu-detail-card-top">
                    <span className="edu-site-icon edu-site-icon-lg" style={{ color: hub.color }}>
                      <i className={hub.icon}></i>
                    </span>
                    <div>
                      <h3>{language === 'en' ? hub.name : hub.nameKo}</h3>
                      <span className="edu-category-count">
                        {hub.siteCount}{t('site.home.categoryCoursesCount')}
                      </span>
                    </div>
                  </div>
                  <p className="edu-detail-card-desc">
                    {language === 'en' ? hub.descriptionEn : hub.description}
                  </p>

                  <div className="edu-tech-tags">
                    {(language === 'en' ? hub.sitesEn : hub.sites).map((s) => (
                      <span key={s} className="edu-tech-tag">{s}</span>
                    ))}
                  </div>

                  <a
                    href={hub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary edu-detail-card-btn"
                  >
                    {t('site.courses.visitHub')} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
