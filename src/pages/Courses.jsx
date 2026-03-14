import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';

const FILTERS = ['all', 'beginner', 'intermediate', 'advanced'];

const Courses = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState(id ? 'all' : 'all');

  const filtered = filter === 'all'
    ? site.learningSites
    : site.learningSites.filter((s) => s.difficulty === filter);

  const getDifficulty = (level) => t(`site.difficulty.${level}`);

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
          {/* Filter Buttons */}
          <div className="edu-filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`edu-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? t('site.courses.filterAll') : getDifficulty(f)}
              </button>
            ))}
          </div>

          {/* Course Detail Cards */}
          <div className="edu-detail-grid">
            {filtered.map((ls) => (
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

                {/* Curriculum */}
                <div className="edu-detail-block">
                  <h4>{t('site.courses.curriculum')}</h4>
                  <ul>
                    {(language === 'en' ? ls.curriculumEn : ls.curriculum).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="edu-detail-block">
                  <h4>{t('site.courses.features')}</h4>
                  <ul>
                    {(language === 'en' ? ls.featuresEn : ls.features).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Target */}
                <div className="edu-detail-block">
                  <h4>{t('site.courses.target')}</h4>
                  <p>{language === 'en' ? ls.targetEn : ls.target}</p>
                </div>

                <a
                  href={ls.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary edu-detail-card-btn"
                >
                  {t('site.courses.visitSite')} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
