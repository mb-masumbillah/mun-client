import { Controller } from "react-hook-form";
import { X } from "lucide-react";
import { useState } from "react";

const ImageUpload = ({ label, name, control, rules }) => {
  const [preview, setPreview] = useState(null);

  return (
    <div className="w-full md:col-span-2">
      <label className="block text-sm font-medium mb-2">{label}</label>

      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {/* Only show Drag & Drop Box if preview is null */}
            {!preview && (
              <div
                onClick={() => document.getElementById(`imgInput-${name}`).click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    field.onChange(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
                className={`border-2 border-dashed rounded-xl h-36 flex flex-col items-center justify-center cursor-pointer bg-gray-50 ${
                  fieldState.error ? "border-red-500 bg-red-50" : "border-gray-400"
                }`}
              >
                <p className="text-gray-600">Drag & Drop or Click</p>
                <input
                  id={`imgInput-${name}`}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      field.onChange(file);
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </div>
            )}

            {/* Show preview if image is selected */}
            {preview && (
              <div className="relative mt-3 flex justify-center">
                <img
                  src={preview}
                  className="h-28 w-28 rounded-xl object-cover shadow"
                />
                <button
                  type="button"
                  onClick={() => {
                    field.onChange(null); // clear field value
                    setPreview(null); // clear preview
                  }}
                  className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            )}

            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1 text-center">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ImageUpload;
