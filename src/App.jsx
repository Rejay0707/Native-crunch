import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";

// Registration Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

// Website Policy Pages
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/policies/TermsAndConditionsPage";
import RefundPolicy from "./pages/policies/RefundPolicy";
import ShippingPolicy from "./pages/policies/ShippingPolicy";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import Contact from "./pages/Contact";

// Protected Pages
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Customization from "./pages/Customization";
import GiftBox from "./pages/GiftBox";
import RecipientDetails from "./pages/RecipientDetails";
import ReviewGiftBox from "./pages/ReviewGiftBox";

// Context Providers
import { CustomizationProvider } from "./context/CustomizationProvider";

function App() {
  return (
    <>
      {/* Always reset scroll position when route changes */}
      <ScrollToTop />

      {/* Main Layout */}
      <div className="min-h-screen flex flex-col">
        <CustomizationProvider>
          <Routes>
            {/* =====================================================
                PUBLIC ROUTES
                ===================================================== */}

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Shop */}
            <Route path="/shop" element={<Shop />} />

            {/* Cart
                Cart is intentionally PUBLIC.
                Users should be able to view their cart without login.
            */}
            <Route path="/cart" element={<CartPage />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* =====================================================
                AUTH ROUTES
                ===================================================== */}

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            <Route path="/verify-otp" element={<VerifyOtp />} />

            <Route
              path="/reset-password"
              element={<ResetPassword />}
            />

            {/* =====================================================
                REGISTRATION POLICY ROUTES

                These are the separate Privacy Policy and
                Terms & Conditions pages used during registration.
                ===================================================== */}

            <Route
              path="/register/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/register/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            {/* =====================================================
                WEBSITE POLICY ROUTES

                These are the main Privacy Policy and Terms &
                Conditions pages accessible from the website.
                ===================================================== */}

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicyPage />}
            />

            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />

            <Route
              path="/refund-policy"
              element={<RefundPolicy />}
            />

            <Route
              path="/shipping-policy"
              element={<ShippingPolicy />}
            />

            {/* =====================================================
                PROTECTED ROUTES

                All routes inside this block require authentication.

                If the user is NOT logged in:
                    /protected-page
                            ↓
                    /login

                If the user IS logged in:
                    /protected-page
                            ↓
                    Protected Page
                ===================================================== */}

            <Route element={<ProtectedRoute />}>
              {/* Product Details */}
              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />

              {/* Orders */}
              <Route
                path="/orders"
                element={<Orders />}
              />

              <Route
                path="/orders/:orderId"
                element={<Orders />}
              />

              {/* Checkout */}
              <Route
                path="/checkout"
                element={<Checkout />}
              />

              {/* Payment */}
              <Route
                path="/payment"
                element={<Payment />}
              />

              {/* Payment Success */}
              <Route
                path="/success"
                element={<Success />}
              />

              {/* Customization */}
              <Route
                path="/customization"
                element={<Customization />}
              />

              {/* Gift Box */}
              <Route
                path="/customization/gift-box"
                element={<GiftBox />}
              />

              {/* Recipient Details */}
              <Route
                path="/customization/recipient-details"
                element={<RecipientDetails />}
              />

              {/* Review Gift Box */}
              <Route
                path="/customization/review"
                element={<ReviewGiftBox />}
              />
            </Route>
          </Routes>
        </CustomizationProvider>
      </div>
    </>
  );
}

export default App;