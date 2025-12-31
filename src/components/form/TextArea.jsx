import { Controller } from "react-hook-form";

const TextArea = ({ label, name, control, rules, placeholder }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <textarea
              {...field}
              placeholder={placeholder}
              className={`w-full border-2 rounded-xl px-3 py-2 h-24 focus:outline-none focus:border-2 ${fieldState.error ? "border-red-500" : "focus:border-[#00455D]"
                }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TextArea;
