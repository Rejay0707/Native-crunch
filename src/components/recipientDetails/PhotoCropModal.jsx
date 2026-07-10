import { useState } from "react";
import Cropper from "react-easy-crop";

const PhotoCropModal = ({ image, onCancel, onSave }) => {
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(0.6);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-[32px] bg-white p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-[#2E1E13]">Adjust Your Photo</h2>

        <p className="mt-2 text-[#6D5B4E]">
          Drag and zoom the image until it looks perfect.
        </p>

        {/* Cropper */}

        <div className="relative mt-8 h-[450px] overflow-hidden rounded-3xl bg-[#F8F2EA]">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            objectFit="contain"
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(area, areaPixels) =>
              setCroppedAreaPixels(areaPixels)
            }
          />
        </div>

        {/* Zoom */}

        <div className="mt-8">
          <label className="mb-3 block font-semibold text-[#2E1E13]">
            Zoom
          </label>

          <input
            type="range"
            min={0.5}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />
        </div>

        {/* Buttons */}

        <div className="mt-10 flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded-full border border-[#D7C5B6] px-8 py-3 font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(croppedAreaPixels)}
            className="rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white hover:bg-[#B86D2D]"
          >
            Save Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCropModal;
