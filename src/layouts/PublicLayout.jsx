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
            {/* Auth — 로그인 없이 접근 가능 */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* 로그인 필수 — 모든 페이지 */}
            <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
            <Route path="/courses" element={<AuthGuard><Courses /></AuthGuard>} />
            <Route path="/courses/:id" element={<AuthGuard><Courses /></AuthGuard>} />
            <Route path="/franchise" element={<AuthGuard><Franchise /></AuthGuard>} />
            <Route path="/about" element={<AuthGuard><About /></AuthGuard>} />
            <Route path="/notice/write" element={<AuthGuard><NoticeWrite /></AuthGuard>} />
            <Route path="/notice/:id" element={<AuthGuard><NoticeDetail /></AuthGuard>} />
            <Route path="/notice" element={<AuthGuard><Notice /></AuthGuard>} />
            <Route path="/qna/write" element={<AuthGuard><QnAWrite /></AuthGuard>} />
            <Route path="/qna/:id" element={<AuthGuard><QnADetail /></AuthGuard>} />
            <Route path="/qna" element={<AuthGuard><QnA /></AuthGuard>} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
            <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
            <Route path="/shop" element={<AuthGuard><Shop /></AuthGuard>} />
            <Route path="/cart" element={<AuthGuard><Cart /></AuthGuard>} />
            <Route path="/checkout" element={<AuthGuard><Checkout /></AuthGuard>} />
            <Route path="/order-confirmation" element={<AuthGuard><OrderConfirmation /></AuthGuard>} />

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
