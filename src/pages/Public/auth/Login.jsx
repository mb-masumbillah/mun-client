import TextInput from "@/components/form/TextInput";
import useAuth from "@/hooks/useAuth";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm();
    const { login } = useAuth()


    const onSubmit = (data) => {
        login(data).then(() => {
            navigate("/")
        })
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6 animate-fadeIn">

                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center">
                        <img src="/logo.svg" alt="" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-sm text-gray-500">Please login to continue</p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" p-6 w-full max-w-3xl gap-4"
                >

                    <div>
                        <TextInput
                            label="Roll Or Email"
                            name="rollOrEmail"
                            type="text"
                            control={control}
                            rules={{
                                required: "This Field is required",
                            
                            }}
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="pt-5">
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
                    </div>
                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-[#00455D] text-white block w-full text-base cursor-pointer md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-transparent border-transparent border hover:border hover:border-[#00455D] hover:text-[#00455D]  transition"
                        >
                            Login
                        </button>
                    </div>

                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/student-register" className="text-[#00455D] font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>

        </div>
    );
};

export default Login;
