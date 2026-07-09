import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomization } from "../context/CustomizationProvider";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import RecipientHero from "../components/recipientDetails/RecipientHero";
import RecipientForm from "../components/recipientDetails/RecipientForm";
import StepNavigation from "../components/common/StepNavigation";

const RecipientDetailsContainer = () => {
  const { recipient, setRecipient } = useCustomization();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!validateForm()) return;

    navigate("/customization/review");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!recipient.name.trim()) {
      newErrors.name = "Recipient name is required.";
    }

    if (!recipient.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <RecipientHero />

          <RecipientForm
            recipient={recipient}
            setRecipient={setRecipient}
            errors={errors}
          />

          <StepNavigation
            backPath="/customization/gift-box"
            backLabel="Back to Gift Box"
            nextLabel="Review Gift Box"
            onNext={handleContinue}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RecipientDetailsContainer;
