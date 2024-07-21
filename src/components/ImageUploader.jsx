import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    navigate(0);
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-4 rounded-lg ">
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 p-1 rounded-md"
        /> */}

      <input
        onChange={handleImageChange}
        type="file"
        className="text-sm text-stone-500
        file:mr-5 file:py-1 file:px-3 file:border-[1px]
        file:text-xs file:font-medium
        file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700"
      />
      {image && (
        <div className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="mt-4 h-64 w-full rounded-lg shadow-lg"
          />
          <button
            onClick={removeImage}
            className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
