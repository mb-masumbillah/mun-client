import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import ImageUpload from "@/components/form/ImageUpload";
import SelectInput from "@/components/form/SelectInput";
import TextInput from "@/components/form/TextInput";
import { X } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { handleSubmit, control, setValue, getValues } = useForm({
        defaultValues: {
            roll: "",
            amount: "",
            txnId: "",
            number: "",
            semester: "",
            repeats: [],
        },
    });

    const [repeats, setRepeats] = useState([]);
    const semesterOptions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

    const addRepeatField = () => {
        const mainSemester = getValues("semester");
        if (!mainSemester) {
            alert("Please select Running / Drop Semester first!");
            return;
        }

        const newField = { semester: "", subject: [], subjectCode: "" };
        const updated = [...repeats, newField];
        setRepeats(updated);
        setValue("repeats", updated);
    };

    const removeRepeatField = (index) => {
        const updated = repeats.filter((_, i) => i !== index);
        setRepeats(updated);
        setValue("repeats", updated);
    };

    const handleSubjectInput = (index, e) => {
        const input = e.target.value.replace(/,,+/g, ",");
        const codesArray = input.split(",").map(c => c.trim()).filter(Boolean);

        const updated = [...repeats];
        updated[index].subject = codesArray;
        updated[index].subjectCode = input;
        setRepeats(updated);

        setValue(`repeats.${index}.subject`, codesArray);
        setValue(`repeats.${index}.subjectCode`, input);
    };

    const onSubmit = (data) => {
        // 1️⃣ FormData তৈরি
        const formData = new FormData();

        // 2️⃣ Text / Object fields JSON string হিসেবে
        const payload = {
            roll: data.roll,
            amount: data.amount,
            txnId: data.txnId,
            number: data.number,
            semester: data.semester,
            repeat: repeats.map(r => ({
                semester: r.semester || "",
                subject: r.subject || [],
            })),

        };

        formData.append("data", JSON.stringify(payload));

        // 3️⃣ Image থাকলে append করুন
        if (data.image) {
            formData.append("file", data.image);
        }

        // 4️⃣ Axios POST call (example)
        axiosSecure.post("/payment/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(res => {
                if (res.data) {
                    alert("Payment submitted successfully! কন্ট্রোল রুমে যান approved করার জন্য");
                    navigate('/dashboard')
                }
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Payment submission failed!");
            });
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full  max-w-3xl bg-white rounded-2xl shadow-lg p-6 space-y-6 animate-fadeIn">

                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center">
                        <img src="/logo.svg" alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Student Payment</h2>

                </div>
                <div className="min-h-screen flex flex-col items-center justify-center p-5">

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=" w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {/* Reusable Fields */}
                        <TextInput label="Roll" name="roll" type="number" control={control} rules={{ required: "Roll is required" }} placeholder="651272" />
                        <TextInput label="Amount" name="amount" type="number" control={control} rules={{ required: "Amount is required" }} placeholder="1200" />
                        <TextInput label="Number" name="number" type="number" control={control} rules={{ required: "Number is required" }} placeholder="017XXXXXXXX" />
                        <TextInput label="Transaction ID" name="txnId" control={control} rules={{ required: "Transaction ID required" }} placeholder="ABC12345" />

                        <SelectInput label="Running / Drop Semester" name="semester" control={control} rules={{ required: "Ranning / Drop Semester required" }} options={semesterOptions} />

                        {/* Add Repeat Button */}
                        <button
                            type="button"
                            onClick={addRepeatField}
                            className="md:col-span-2 bg-[#00455D] text-white cursor-pointer py-2 rounded-xl"
                        >
                            Add Repeats Semester & Subject Codes
                        </button>

                        {/* Dynamic Repeat Fields */}
                        {repeats.map((item, index) => {


                            return (
                                <div key={index} className="md:col-span-2 border border-gray-300 p-4 rounded-xl bg-gray-50 space-y-2 relative">
                                    <label className="block text-sm font-medium">Repeat {index + 1}</label>

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        onClick={() => removeRepeatField(index)}
                                        className="absolute top-2 right-2 text-red-600 bg-amber-50 p-1 cursor-pointer rounded-full border font-bold hover:text-red-800"
                                    >
                                        <X />
                                    </button>

                                    <label className="block text-sm font-medium pt-2">Repeat Semester</label>
                                    <Controller
                                        name={`repeats.${index}.semester`}
                                        control={control}
                                        render={({ field }) => {
                                            const mainSemester = getValues("semester");
                                            const mainIndex = semesterOptions.indexOf(mainSemester);
                                            let validOptions = semesterOptions.slice(0, mainIndex + 1);

                                            // preserve previously selected value if it's higher than mainSemester
                                            if (field.value && !validOptions.includes(field.value)) {
                                                validOptions = [...validOptions, field.value].sort((a, b) => semesterOptions.indexOf(a) - semesterOptions.indexOf(b));
                                            }

                                            return (
                                                <select
                                                    {...field}
                                                    onChange={(e) => {
                                                        const updated = [...repeats];
                                                        updated[index].semester = e.target.value;
                                                        setRepeats(updated);
                                                        field.onChange(e);
                                                    }}
                                                    className="w-full border-2 rounded-xl p-2 border-gray-300 outline-none"
                                                >
                                                    <option value="">Select Semester</option>
                                                    {validOptions.map(s => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                            );
                                        }}
                                    />


                                    <label className="block text-sm font-medium pt-1">Repeat Subject Code</label>
                                    <Controller
                                        name={`repeats.${index}.subjectCode`}
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                onChange={(e) => handleSubjectInput(index, e)}
                                                className="w-full rounded-xl p-2 border-2 border-gray-300 outline-none"
                                                placeholder="101, 102, 203"
                                            />
                                        )}
                                    />

                                    {/* Live Preview */}
                                    <div className="text-xs bg-white p-2 rounded-xl">
                                        <p>Semester: {getValues(`repeats.${index}.semester`) || ""}</p>
                                        <p>Subject Codes: {JSON.stringify(getValues(`repeats.${index}.subject`) || [])}</p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Optional Image Upload */}
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <ImageUpload
                                    label="Payment Screenshot (Optional)"
                                    name="image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    onChange={(file) => field.onChange(file)}
                                />
                            )}
                        />

                        <div className="md:col-span-2 flex justify-center mt-4">
                            <button type="submit" className="bg-[#00455D] text-white px-6 py-2 rounded-xl border hover:border-[#00455D] hover:bg-transparent hover:text-[#00455D] transition cursor-pointer">
                                Payment Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PaymentForm;
