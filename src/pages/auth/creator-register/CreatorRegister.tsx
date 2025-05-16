import { Link } from "react-router";
import authImage from "../../../assets/auth-image/auth-img.jpg"
import Input from "../../../components/common/Input";
import { Controller, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

type FormValues = {
    name: string;
    channel_name: string;
    birthDate: Date;
    gender: string;
    password: string;
    confirmPassword: string;
};

const CreatorRegister = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword((prev) => !prev);


    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <section>
            {/*  */}
            <div className="flex gap-44 justify-end">
                {/* This is the left side div */}
                <div className="mt-11">
                    {/* This is logo link */}
                    <div>
                        <Link to={"/"} className="font-roboto text-primaryColor text-[40.471px] font-semibold">FETISHclips</Link>
                    </div>
                    {/* This is the Become a Creator */}
                    <div className="mt-[78px]">
                        <p className="text-accentColor text-[40px] font-bold">Become a Creator on Fetishclips</p>
                        <p className="text-[#707070] text-lg font-normal max-w-[486px]">Share your foot fetish clips and grow your fanbase. it's 100% free to upload and earn.</p>
                    </div>
                    {/* This is the input field */}
                    <div className="mt-[60px] max-w-[515px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* This is the your name */}
                            <Input<FormValues>
                                id="name"
                                label="Your Name"
                                register={register}
                                required
                            />
                            {/* This is the channel  */}
                            <div className="mt-[10px]">
                                <Input<FormValues>
                                    id="channel_name"
                                    label="Channel name"
                                    register={register}
                                    required
                                />
                            </div>
                            {/* This is the Date ans Gender */}
                            <div className="flex gap-4 mt-6">
                                {/* This is the first div */}
                                <div className="relative w-[315px]">
                                    <Controller
                                        name="birthDate"
                                        control={control}
                                        rules={{ required: "Date is required" }}
                                        render={({ field }) => (
                                            <div className="relative w-[315px] ">
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal bg-transparent peer ring-1 ring-[#D9D9D9] focus:ring-[#1C1B1F] h-[60px] pr-10 py-[18px]",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={(date) => field.onChange(date)}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                {field.value && (
                                                    <Label
                                                        htmlFor="birthDate"
                                                        className="absolute left-4 -top-2 text-sm text-[#1C1B1F] bg-white px-2 transition-all pointer-events-none"
                                                    >
                                                        Birth Date
                                                    </Label>
                                                )}
                                                {errors.birthDate && (
                                                    <p className="text-sm text-primaryColor mt-1">{errors.birthDate.message}</p>
                                                )}
                                            </div>
                                        )}
                                    />

                                </div>
                                {/* This is the second div */}
                                <div className="relative w-[185px]">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{ required: "Please select your gender" }}
                                        render={({ field }) => (
                                            <>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="peer w-full ring-1 ring-[#D9D9D9] focus:ring-[#1C1B1F] py-[18px] !h-[60px]">
                                                        <SelectValue placeholder="Select gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Gender</SelectLabel>
                                                            <SelectItem value="male">Male</SelectItem>
                                                            <SelectItem value="female">Female</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                {/* Floating Label */}
                                                {field.value && (
                                                    <Label
                                                        htmlFor="gender"
                                                        className={cn(
                                                            "absolute left-3 -top-2 text-sm text-[#1C1B1F] bg-white px-1 transition-all pointer-events-none"
                                                        )}
                                                    >
                                                        Gender
                                                    </Label>
                                                )}
                                                {/* Error Message */}
                                                {errors.gender && (
                                                    <p className="text-sm text-primaryColor mt-1">{errors.gender.message}</p>
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            {/* This is the password section  */}
                            <div className="mt-6">
                                {/* This is the password */}
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
                                    {/* Floating Label */}
                                    <label
                                        htmlFor="password"
                                        className={cn(
                                            "absolute cursor-text left-0 capitalize -top-3 text-sm text-[#707070] mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#1C1B1F] peer-focus:text-sm transition-all bg-white"
                                        )}
                                    >
                                        Password
                                    </label>

                                    {/* Toggle Button */}
                                    <div
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                                    </div>

                                    {/* Error Message */}
                                    {errors.password && (
                                        <p className="text-sm text-primaryColor mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                {/* This is the confirm password */}
                                <div className="relative w-full mt-6">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        placeholder=" "
                                        className={cn(
                                            "peer bg-transparent h-[60px] w-full py-[18px] rounded-[10px] text-[#232323] placeholder-transparent ring-1 px-4 ring-[#D9D9D9] focus:ring-[#1C1B1F] focus:outline-none pr-10",
                                            errors.confirmPassword && "ring-red-500"
                                        )}
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (value) =>
                                                value === watch("password") || "Passwords do not match",
                                        })}
                                    />

                                    {/* Floating Label */}
                                    <label
                                        htmlFor="confirmPassword"
                                        className={cn(
                                            "absolute cursor-text left-0 capitalize -top-3 text-sm text-[#707070] mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[#1C1B1F] peer-focus:text-sm transition-all bg-white"
                                        )}
                                    >
                                        Confirm Password
                                    </label>
                                    {/* Toggle Button */}
                                    <div
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                                    </div>

                                    {/* Error Message */}
                                    {errors.confirmPassword && (
                                        <p className="text-sm text-primaryColor mt-1">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button className="bg-primaryColor px-[231px] py-5 rounded-[10px] mt-5 text-[#FFF] text-lg font-semibold cursor-pointer" type="submit">Register</button>
                        </form>
                    </div>
                </div>
                {/* This is the right side div */}
                <div>
                    <figure className="w-[960px] h-[100vh]">
                        <img className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl" src={authImage} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default CreatorRegister;