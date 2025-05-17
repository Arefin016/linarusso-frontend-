import { Link } from "react-router";
import authImage from "../../../assets/auth-image/auth-img.jpg"
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { GoogleSvg, OrBorderSvg } from "@/components/svg-container/SvgContainer";

type FormValues = {
    name: string;
    channel_name: string;
    birthDate: Date;
    gender: string;
    password: string;
    confirmPassword: string;
    photo: FileList;
    email: string;
    isAdult: boolean;
    agreeTerms: boolean;
};


const CreatorLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <section>
            {/*  */}
            <div className="flex justify-between h-[100vh] overflow-hidden">
                {/* This is the left side div */}
                <div className="mt-11 max-w-[590px] px-1 mx-auto overflow-y-scroll hide-scrollbar">
                    {/* This is logo link */}
                    <div>
                        <Link to={"/"} className="font-roboto text-primaryColor text-[40.471px] font-semibold">FETISHclips</Link>
                    </div>
                    {/* This is the login */}
                    <div className="mt-[78px]">
                        <p className="text-accentColor text-[40px] font-bold">Login</p>
                        <p className="text-[#707070] text-lg">Please login to continue to your account.</p>
                    </div>
                    {/* This is the Email and Password */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 ">
                        {/* Email */}
                        <div className="relative w-full mt-8">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className={cn(
                                    "peer bg-transparent h-[60px] w-full py-[18px] rounded-[10px] text-[#232323] placeholder-transparent ring-1 px-4 ring-[#D9D9D9] focus:ring-[#1C1B1F] focus:outline-none",
                                    errors.email && "ring-red-500"
                                )}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />

                            {/* Floating Label */}
                            <label
                                htmlFor="email"
                                className={cn(
                                    "absolute cursor-text left-0 capitalize -top-3 text-sm text-[#707070] mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#1C1B1F] peer-focus:text-sm transition-all bg-white"
                                )}
                            >
                                Email
                            </label>

                            {/* Error Message */}
                            {errors.email && (
                                <p className="text-sm font-semibold text-primaryColor mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        {/* Password */}
                        <div className="w-full">
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    className={cn(
                                        "peer bg-transparent h-[60px] w-full py-[18px] rounded-[10px] text-[#232323] placeholder-transparent ring-1 px-4 ring-[#D9D9D9] focus:ring-[#1C1B1F] focus:outline-none pr-10",
                                        errors.password && "ring-red-500"
                                    )}
                                    {...register("password", { required: "Password is required" })}
                                />

                                {/* Eye Toggle Icon */}
                                <div
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                                </div>

                                {/* Floating Label */}
                                <label
                                    htmlFor="password"
                                    className={cn(
                                        "absolute cursor-text left-0 capitalize -top-3 text-sm text-[#707070] mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#1C1B1F] peer-focus:text-sm transition-all bg-white"
                                    )}
                                >
                                    Password
                                </label>
                            </div>
                            {/* Error Message (outside relative container) */}
                            {errors.password && (
                                <p className="text-sm font-semibold text-primaryColor mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        {/*  */}
                        <div className="flex gap-2 items-start">
                            <div>
                                <input
                                    type="checkbox"
                                />
                            </div>
                            <label className="text-[#727272]">Keep me logged in</label>
                        </div>
                        {/*  */}
                        <button className="bg-primaryColor w-full border py-5 rounded-[10px] text-[#FFF] text-lg font-semibold cursor-pointer hover:bg-white hover:border-primaryColor hover:text-primaryColor duration-300 ease-in-out" type="submit">Sign in</button>
                    </form>
                    {/* This is the or border */}
                    <div className="flex items-center gap-[10px] my-6">
                        <OrBorderSvg />
                        <p className="text-[#6E6E6E] text-base font-medium">or</p>
                        <OrBorderSvg />
                    </div>
                    {/*  */}
                    <Link to={"/"} className="flex items-center gap-3 justify-center border border-[#E6E8E7] rounded-[10px] py-4 ">
                        <button className="flex items-center gap-3 cursor-pointer">
                            <p className="text-accentColor text-lg font-semibold">Sign in with Google</p>
                            <GoogleSvg />
                        </button>
                    </Link>

                    <div className="my-[54px] text-center">
                        <p className="text-[#727272] text-lg">Need an account ? <Link className="text-primaryColor underline" to={"/auth/creator-register"}>Create one</Link></p>
                    </div>
                </div>
                {/* This is the right side div */}
                <div className="overflow-auto">
                    <figure className="w-[960px] h-[100vh]">
                        <img className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl" src={authImage} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default CreatorLogin;