import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useCountUp from '../hooks/useCountUp';
import site from '../config/site';

const Home = () => {
  const { t, language } = useLanguage();

  const statSites = useCountUp(4, 1500);
  const statStudents = useCountUp(500, 2000);
  const statInstructors = useCountUp(12, 1500);
  const statCompletion = useCountUp(95, 2000);

  const getDifficulty = (level) => t(`site.difficulty.${level}`);

  return (
    <>
      <SEOHead
        title={t('site.home.title')}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-effect">
          <div className="particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  '--duration': `${15 + Math.random() * 15}s`,
                  animationDelay: `${Math.random() * 10}s`,
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">{t('site.home.title')}</span>
              <span className="title-line">
                <span className="highlight">{t('site.home.subtitle')}</span>
              </span>
            </h1>
            <p className="hero-description">
              {t('site.home.heroDesc')}
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                {t('site.home.ctaStart')}
              </Link>
              <Link to="/franchise" className="btn btn-secondary">
                {t('site.home.ctaFranchise')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="edu-stats-section">
        <div className="container">
          <h2 className="section-title text-center">{t('site.home.statsTitle')}</h2>
          <div className="edu-stats-grid">
            <div className="edu-stats-card" ref={statSites.ref}>
              <span className="edu-stats-number">{statSites.count}</span>
              <span className="edu-stats-suffix">+</span>
              <p className="edu-stats-label">{t('site.home.statSites')}</p>
            </div>
            <div className="edu-stats-card" ref={statStudents.ref}>
              <span className="edu-stats-number">{statStudents.count}</span>
              <span className="edu-stats-suffix">+</span>
              <p className="edu-stats-label">{t('site.home.statStudents')}</p>
            </div>
            <div className="edu-stats-card" ref={statInstructors.ref}>
              <span className="edu-stats-number">{statInstructors.count}</span>
              <span className="edu-stats-suffix"></span>
              <p className="edu-stats-label">{t('site.home.statInstructors')}</p>
            </div>
            <div className="edu-stats-card" ref={statCompletion.ref}>
              <span className="edu-stats-number">{statCompletion.count}</span>
              <span className="edu-stats-suffix">%</span>
              <p className="edu-stats-label">{t('site.home.statCompletion')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Sites Section */}
      <section className="edu-sites-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('site.home.sitesTitle')}</h2>
            <p className="section-subtitle">{t('site.home.sitesSubtitle')}</p>
          </div>
          <div className="edu-sites-grid">
            {site.learningSites.map((ls) => (
              <div key={ls.id} className="edu-site-card" style={{ '--card-accent': ls.color }}>
                <div className="edu-site-card-header">
                  <span className="edu-site-icon">{ls.icon}</span>
                  <div>
                    <h3>{language === 'en' ? ls.nameEn : ls.name}</h3>
                    <span className={`edu-difficulty-badge ${ls.difficulty}`}>
                      {getDifficulty(ls.difficulty)}
                    </span>
                  </div>
                </div>
                <p className="edu-site-card-desc">
                  {language === 'en' ? ls.descriptionEn : ls.description}
                </p>
                <div className="edu-tech-tags">
                  {ls.techStack.map((tech) => (
                    <span key={tech} className="edu-tech-tag">{tech}</span>
                  ))}
                </div>
                <a
                  href={ls.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary edu-site-card-btn"
                >
                  {t('site.home.visitSite')} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>{t('site.home.ctaBottomTitle')}</h2>
            <p>{t('site.home.ctaBottomDesc')}</p>
            <Link to="/courses" className="btn btn-primary-large">
              {t('site.home.ctaBottomBtn')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
