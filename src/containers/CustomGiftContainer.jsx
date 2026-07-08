import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import GiftSummary from "../components/customGift/GiftSummary";
import RecipientDetails from "../components/customGift/RecipientDetails";
import GiftPhotoUpload from "../components/customGift/GiftPhotoUpload";
import GiftMessage from "../components/customGift/GiftMessage";
import ReviewGift from "../components/customGift/ReviewGift";

import { useState } from "react";

const CustomGiftContainer = () => {
  const [recipient, setRecipient] = useState({});
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <GiftSummary />

          <RecipientDetails
            recipient={recipient}
            setRecipient={setRecipient}
          />

          <GiftPhotoUpload
            photo={photo}
            setPhoto={setPhoto}
          />

          <GiftMessage
            message={message}
            setMessage={setMessage}
          />

          <ReviewGift />

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomGiftContainer;