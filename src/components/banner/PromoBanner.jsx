import bannerImage from "../../assets/banners/native-crunch-banner.png";

const PromoBanner = () => {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={bannerImage}
        alt="Native Crunch Banner"
        className="
          block
          w-full
          h-[50vh]
          md:h-[95vh]
        "
      />
    </section>
  );
};

export default PromoBanner;