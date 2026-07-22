import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div
        className="
    relative
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-br
    from-white
    to-[#F5E9DC]
    border
    border-[#E7D8CA]
    p-10
    shadow-[0_20px_60px_rgba(46,30,19,0.08)]
  "
      >
        <img
          src={selectedImage.image}
          alt=""
          className="
 mx-auto
 h-[500px]
 w-full
 object-contain
 transition-transform
 duration-500
 hover:scale-105
"
        />
      </div>

      {/* Thumbnails */}
      <div
        className="
        mt-5
        flex
        gap-4
      "
      >
        {images.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`
 rounded-2xl
 border
 p-2
 cursor-pointer
 transition-all
 duration-300
 ${
   selectedImage.id === item.id
     ? "border-[#C97A34] shadow-lg scale-105"
     : "border-[#E7D8CA] bg-white hover:border-[#C97A34]"
 }
`}
          >
            <img
              src={item.image}
              alt=""
              className="
                h-24
                w-24
                object-contain
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
