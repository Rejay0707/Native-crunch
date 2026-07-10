import { useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

import PhotoCropModal from "./PhotoCropModal";
import getCroppedImg from "../../utils/cropImage";

const RecipientPhotoUpload = ({
  recipient,
  setRecipient,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [showCropper, setShowCropper] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const image = URL.createObjectURL(file);

    setSelectedImage(image);

    setShowCropper(true);
  };

  const handleSave = async (croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(
      selectedImage,
      croppedAreaPixels
    );

    setRecipient({
      ...recipient,
      photo: croppedImage,
    });

    setShowCropper(false);
  };

  return (
    <>
      <div className="mt-8">
        <label className="mb-3 block font-semibold text-[#2E1E13]">
          Recipient Photo
          <span className="ml-2 text-sm font-normal text-gray-400">
            (Optional)
          </span>
        </label>

        {recipient.photo ? (
          <div className="rounded-3xl border border-[#E6D9CB] bg-[#FCFAF8] p-6">
            <img
              src={recipient.photo}
              alt="Recipient"
              className="mx-auto h-56 w-56 rounded-full object-cover shadow-lg"
            />

            <button
              onClick={() =>
                setRecipient({
                  ...recipient,
                  photo: null,
                })
              }
              className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600"
            >
              <Trash2 size={18} />
              Remove Photo
            </button>
          </div>
        ) : (
          <label
            className="
              flex
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-3xl
              border-2
              border-dashed
              border-[#D8C5B4]
              bg-[#FCFAF8]
              py-16
              hover:border-[#C97A34]
              hover:bg-[#FFF8F3]
            "
          >
            <ImagePlus
              size={42}
              className="text-[#C97A34]"
            />

            <h3 className="mt-5 text-xl font-semibold text-[#2E1E13]">
              Upload Recipient Photo
            </h3>

            <p className="mt-2 text-center text-[#6D5B4E]">
              PNG, JPG or JPEG
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
        )}
      </div>

      {showCropper && (
        <PhotoCropModal
          image={selectedImage}
          onCancel={() => setShowCropper(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default RecipientPhotoUpload;