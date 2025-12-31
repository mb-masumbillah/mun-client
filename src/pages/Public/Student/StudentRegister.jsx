import ImageUpload from "@/components/form/ImageUpload";
import SelectInput from "@/components/form/SelectInput";
import TextInput from "@/components/form/TextInput";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const StudentRegister = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { handleSubmit, control, watch } = useForm();
    const password = watch("password");

    const onSubmit = async (data) => {

        const studentData = {
            password: data.password,
            student: {
                fullName: data.fullName,
                roll: data.roll,
                registration: data.registration,
                department: data.department,
                session: data.session,
                shift: data.shift,
                semester: data.semester,
                email: data.email,
                password: data.password,
                number: data.number,
            }
        };


        const imageFile = data.image

        const formData = new FormData();
        formData.append("data", JSON.stringify(studentData));
        if (imageFile) formData.append("file", imageFile);



        try {
            const res = await axiosPublic.post("/user/create-student", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (res.data?.success) {
                alert("Registration successful! Email এর মাধ্যমে আপনার approval মেসেজ পাঠায় দেওয়া হবে");
                navigate('/')
            } else {
                alert(res.data?.message || "Student registration failed!");
            }
        } catch (error) {
            console.error("Registration error:", error.response?.data);
            alert(error.response?.data?.message || error.message);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full  max-w-3xl bg-white rounded-2xl shadow-lg p-6 space-y-6 animate-fadeIn">

                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center">
                        <img src="/logo.svg" alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Student Registration</h2>
                    <p className="text-sm text-gray-500">Please registration to continue</p>
                </div>
                <div className="min-h-screen flex flex-col items-center justify-center p-5">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white rounded-2xl w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4"
                    >

                        <TextInput
                            label="Full Name"
                            name="fullName"
                            type="text"
                            control={control}
                            rules={{ required: "Name is required" }}
                            placeholder="Enter full name"
                        />

                        <TextInput
                            label="Roll"
                            name="roll"
                            type="number"
                            control={control}
                            rules={{ required: "Roll is required" }}
                            placeholder="651272"
                        />

                        <TextInput
                            label="Registration"
                            name="registration"
                            type="number"
                            control={control}
                            rules={{ required: "Registration required" }}
                            placeholder="651272123"
                        />

                        <SelectInput
                            label="Department"
                            name="department"
                            control={control}
                            rules={{ required: "Department is required" }}
                            options={["CST", "EEE", "Civil", "Mechanical"]}
                        />

                        <TextInput
                            label="Session"
                            name="session"
                            type="text"
                            control={control}
                            rules={{
                                required: "Session is required",
                                pattern: {
                                    value: /^\d{4}-\d{4}$/,
                                    message: "Session must be in YYYY-YYYY format (e.g., 2022-2023)",
                                },
                            }}
                            placeholder="2022-2023"
                        />

                        <SelectInput
                            label="Shift"
                            name="shift"
                            control={control}
                            rules={{ required: "Shift is required" }}
                            options={["1st", "2nd"]}
                        />

                        <SelectInput
                            label="Semester"
                            name="semester"
                            control={control}
                            rules={{ required: "Semester is required" }}
                            options={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]}
                        />

                        <TextInput
                            label="Email"
                            name="email"
                            type="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address (example@gmail.com)",
                                },
                            }}
                            placeholder="example@gmail.com"
                        />

                        <TextInput
                            label="Password"
                            name="password"
                            type="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            }}
                            placeholder="••••••"
                        />

                        <TextInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            control={control}
                            rules={{
                                required: "Confirm password is required",
                                validate: value =>
                                    value === password || "Passwords do not match",
                            }}
                            placeholder="••••••"
                        />

                        <TextInput
                            label="WhatsApp Number"
                            name="number"
                            type="text"
                            control={control}
                            rules={{
                                required: "Number is required",
                                pattern: {
                                    value: /^\+8801[3-9][0-9]{8}$/,
                                    message: "Enter a valid Bangladeshi WhatsApp number (+8801XXXXXXXXX)",
                                },
                            }}
                            placeholder="+8801XXXXXXXXX"
                        />

                        <ImageUpload
                            label="Student Image"
                            name="image"
                            control={control}
                            rules={{ required: "Image is required" }}
                        />

                        <div className="md:col-span-2 flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#00455D] text-white text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition"
                            >
                                Submit Registration
                            </button>
                        </div>

                    </form>

                </div>
                <p className="text-center text-sm text-gray-500">
                    You have a already account?{" "}
                    <Link to="/login" className="text-[#00455D] font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>

        </div>


    );
};

export default StudentRegister;
