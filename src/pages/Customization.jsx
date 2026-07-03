const Customization = () => {
  return (
    <section className="min-h-screen bg-[#F8F1E7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[4px] text-[#C97A34] font-semibold">
            Customized Orders
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-[#2E1E13] leading-tight">
            Create Your
            <br />
            Perfect Snack Box
          </h1>

          <p className="mt-8 text-lg text-[#5A4637] leading-8">
            Whether you're planning a corporate event, celebrating a special
            occasion, or looking for thoughtful gifting options, Native Crunch
            offers customized snack boxes made to suit your needs. Choose your
            favourite flavours, personalize your packaging, and create a healthy
            gifting experience everyone will enjoy.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button
              className="
                bg-[#C97A34]
                hover:bg-[#B86D2D]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition
                cursor-pointer
              "
            >
              Request Customization
            </button>

            <button
              className="
                border-2
                border-[#2E1E13]
                text-[#2E1E13]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-[#2E1E13]
                hover:text-white
                transition
                cursor-pointer
              "
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;