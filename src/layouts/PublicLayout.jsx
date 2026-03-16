import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const Courses = lazy(() => import('../pages/Courses'));
const Franchise = lazy(() => import('../pages/Franchise'));
const About = lazy(() => import('../pages/About'));
const Notice = lazy(() => import('../pages/Notice'));
const NoticeDetail = lazy(() => import('../pages/NoticeDetail'));
const NoticeWrite = lazy(() => import('../pages/NoticeWrite'));
const QnA = lazy(() => import('../pages/QnA'));
const QnADetail = lazy(() => import('../pages/QnADetail'));
const QnAWrite = lazy(() => import('../pages/QnAWrite'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));
const Shop = lazy(() => import('../pages/Shop'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Edu Hub Pages */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Courses />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/about" element={<About />} />
            <Route path="/notice/write" element={<NoticeWrite />} />
            <Route path="/notice/:id" element={<NoticeDetail />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/qna/write" element={<QnAWrite />} />
            <Route path="/qna/:id" element={<QnADetail />} />
            <Route path="/qna" element={<QnA />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
            <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />

            {/* Shop */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
