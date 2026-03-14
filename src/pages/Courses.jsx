import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';

const CATEGORY_IDS = site.categories.map((c) => c.id);

const Courses = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();

  // Determine if id is a category slug or a specific site id
  const isCategory = id && CATEGORY_IDS.includes(id);
  const isSiteId = id && !isCategory && site.learningSites.some((s) => s.id === id);
  const activeSite = isSiteId ? site.learningSites.find((s) => s.id === id) : null;
  const activeCategory = isCategory ? id : (activeSite ? activeSite.category : null);

  // Scroll to highlighted card
  useEffect(() => {
    if (isSiteId) {
      const el = document.getElementById(`course-${id}`);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
      }
    }
  }, [id, isSiteId]);

  // Categories to display
  const categoriesToShow = activeCategory
    ? site.categories.filter((c) => c.id === activeCategory)
    : site.categories;

  const getDifficulty = (level) => t(`site.difficulty.${level}`);

  // Page title based on context
  const getPageTitle = () => {
    if (isCategory) {
      const catTitle = t('site.courses.categoryTitle');
      return typeof catTitle === 'object' ? catTitle[id] : t('site.courses.title');
    }
    return t('site.courses.title');
  };

  return (
    <>
      <SEOHead
        title={getPageTitle()}
        description={t('site.courses.subtitle')}
        path="/courses"
      />

      <section className="page-header">
        <div className="container">
          <h2>{getPageTitle()}</h2>
          <p>{t('site.courses.subtitle')}</p>
        </div>
      </section>

      <section className="edu-courses-section">
        <div className="container">
          {categoriesToShow.map((cat) => {
            const sitesInCat = site.learningSites.filter((s) => s.category === cat.id);
            const catName = language === 'en' ? cat.nameEn : cat.name;

            return (
              <div key={cat.id} className="edu-category-section">
                {/* Category Title */}
                <div className="edu-category-title">
                  <span className="edu-category-title-icon">{cat.icon}</span>
                  <h3>{catName}</h3>
                  <span className="edu-category-title-count">{sitesInCat.length}</span>
                </div>

                {/* Course Cards */}
                <div className="edu-detail-grid">
                  {sitesInCat.map((ls) => (
                    <div
                      key={ls.id}
                      className={`edu-detail-card ${id === ls.id ? 'highlighted' : ''}`}
                      style={{ '--card-accent': ls.color }}
                      id={`course-${ls.id}`}
                    >
                      <div className="edu-detail-card-top">
                        <span className="edu-site-icon edu-site-icon-lg">{ls.icon}</span>
                        <div>
                          <h3>{language === 'en' ? ls.nameEn : ls.name}</h3>
                          <span className={`edu-difficulty-badge ${ls.difficulty}`}>
                            {getDifficulty(ls.difficulty)}
                          </span>
                        </div>
                      </div>
                      <p className="edu-detail-card-desc">
                        {language === 'en' ? ls.descriptionEn : ls.description}
                      </p>

                      <div className="edu-tech-tags">
                        {ls.techStack.map((tech) => (
                          <span key={tech} className="edu-tech-tag">{tech}</span>
                        ))}
                      </div>

                      {/* Curriculum / Features / Target — 2-column layout */}
                      <div className="edu-detail-blocks-row">
                        <div className="edu-detail-block">
                          <h4>{t('site.courses.curriculum')}</h4>
                          <ul>
                            {(language === 'en' ? ls.curriculumEn : ls.curriculum).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="edu-detail-block-right">
                          <div className="edu-detail-block">
                            <h4>{t('site.courses.features')}</h4>
                            <ul>
                              {(language === 'en' ? ls.featuresEn : ls.features).map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="edu-detail-block">
                            <h4>{t('site.courses.target')}</h4>
                            <p>{language === 'en' ? ls.targetEn : ls.target}</p>
                          </div>
                        </div>
                      </div>

                      {ls.url === '#' ? (
                        <span className="btn btn-secondary edu-detail-card-btn edu-coming-soon">
                          {t('site.courses.comingSoon')}
                        </span>
                      ) : (
                        <a
                          href={ls.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary edu-detail-card-btn"
                        >
                          {t('site.courses.visitSite')} →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Courses;
