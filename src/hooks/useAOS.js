import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAOS = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Reset AOS animations for fresh page
    document.querySelectorAll('.aos-animate').forEach((el) => {
      el.classList.remove('aos-animate');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('aos-animate');
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all [data-aos] elements not yet animated
    const observeAll = () => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    // Fallback: immediately animate elements already in viewport
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delay = el.getAttribute('data-aos-delay') || 0;
          setTimeout(() => {
            el.classList.add('aos-animate');
          }, parseInt(delay));
        }
      });
    });

    // Watch for dynamically added elements (e.g. after async data loads)
    const mutObs = new MutationObserver(observeAll);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, [pathname]);
};

export default useAOS;
