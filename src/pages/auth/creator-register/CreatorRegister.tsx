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
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";


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


const CreatorRegister = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [open, setOpen] = useState(false);


    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword((prev) => !prev);


    const onSubmit = (data: FormValues) => {
        console.log(data);
        const file = data.photo[0];
        console.log('File to upload:', file);
    };


    // Watch for image preview
    const photo = watch('photo');
    useEffect(() => {
        if (photo && photo.length > 0) {
            const file = photo[0];
            setPreview(URL.createObjectURL(file));
        }
    }, [photo]);

    const handleModalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Registration logic here (optional)

        // Open the modal
        setOpen(true);
    };

    return (
        <section>
            {/*  */}
            <div className="flex justify-between h-[100vh] overflow-hidden">
                {/* This is the left side div */}
                <div className="max-w-[590px] mx-auto px-1 overflow-y-scroll hide-scrollbar">
                    {/* This is the logo section */}
                    <div className="mt-[33px] mb-[78px]">
                        <Link to={"/"} className="font-roboto text-primaryColor text-[40.471px] font-semibold">FETISHclips</Link>
                    </div>
                    {/* This is the Become a Creator */}
                    <div>
                        <p className="text-accentColor text-[36px] font-bold">Become a Creator on Fetishclips</p>
                        <p className="text-[#707070] text-lg font-normal max-w-[486px]">Share your foot fetish clips and grow your fanbase. it's 100% free to upload and earn.</p>
                    </div>
                    {/* This is the form section */}
                    <form className="w-[515px] mt-[60px]" onSubmit={handleSubmit(onSubmit)}>
                        {/* Your name and channel name */}
                        <div className="">
                            <div>
                                <Input<FormValues>
                                    id="name"
                                    label="Your Name"
                                    register={register}
                                    required
                                    error={errors.name}
                                />
                            </div>
                            {/* This is the channel name */}
                            <div className="mt-6">
                                <Input<FormValues>
                                    id="channel_name"
                                    label="Channel name"
                                    register={register}
                                    required
                                    error={errors.channel_name}
                                />

                            </div>
                        </div>
                        {/* Date and gender */}
                        <div className="flex gap-4 mt-8">
                            {/* Date */}
                            <div className="w-[70%]">
                                <Controller
                                    name="birthDate"
                                    control={control}
                                    rules={{ required: "Date is required" }}
                                    render={({ field }) => (
                                        <div className="relative">
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
                                                <p className="text-sm font-semibold text-primaryColor mt-1">{errors.birthDate.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>
                            {/* gender */}
                            <div className="w-1/3">
                                <div className="relative">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{ required: "Select your gender" }}
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
                                                    <p className="text-sm font-semibold text-primaryColor mt-1">{errors.gender.message}</p>
                                                )}
                                            </>
                                        )}
                                    />
                                </div>

                            </div>
                        </div>
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
                        {/* Password and Confirm Password */}
                        <div className="mt-8">
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
                                    <p className="text-sm font-semibold text-primaryColor mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            {/* This is the confirm password */}
                            <div className="relative w-full mt-8">
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
                                    <p className="text-sm font-semibold text-primaryColor mt-1">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* This is the uploading photo */}
                        <div className="relative w-full border-2 border-[#D9D9D9] rounded-md py-5 mt-8">
                            {/* Floating Label */}
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#707070]">
                                Upload Photo
                            </label>
                            {/* Caption */}
                            <p className="mt-2 text-center text-[#707070] text-lg font-semibold">Upload your photo</p>
                            {/* File Input */}
                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/jpg"
                                {...register('photo', {
                                    required: 'Image is required',
                                    validate: {
                                        fileType: (value) =>
                                            ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0]?.type) ||
                                            'Only JPG, JPEG, PNG allowed',
                                        fileSize: (value) =>
                                            value[0]?.size < 2 * 1024 * 1024 || 'Max file size is 2MB',
                                    },
                                })}
                                className="mt-2 block rounded-[4px] max-w-[122px] mx-auto text-base border border-gray-300 rounded text-[#FFF] px-[2px] py-2 bg-primaryColor text-nowrap cursor-pointer"
                            />
                            {/* Error Message */}
                            {errors.photo && (
                                <p className="text-primaryColor text-center font-semibold text-sm mt-1">{errors.photo.message}</p>
                            )}
                            {/* Preview Image */}
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="mt-4 w-40 h-40 object-cover border rounded mx-auto"
                                />
                            )}
                        </div>
                        {/* This is the checkbox */}
                        <div className="mt-[30px]">
                            {/* First Checkbox */}
                            <div className="flex gap-2 items-start">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="isAdult"
                                        {...register("isAdult", {
                                            required: "You must confirm you are 18+ years old",
                                        })}
                                    />
                                </div>
                                <label htmlFor="isAdult">I confirm I am 18+ years old</label>
                            </div>
                            {errors.isAdult && (
                                <p className="text-sm font-semibold text-primaryColor mt-1">{errors.isAdult.message}</p>
                            )}
                            {/* Second Checkbox */}
                            <div className="flex gap-2 mt-5 items-start">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="agreeTerms"
                                        {...register("agreeTerms", {
                                            required: "You must agree to the Terms and Privacy Policy",
                                        })}
                                    />
                                </div>
                                <label htmlFor="agreeTerms">
                                    I agree to the{" "}
                                    <Link className="text-primaryColor" to={"/"}>
                                        Terms of Service
                                    </Link>{" "}
                                    &{" "}
                                    <Link className="text-primaryColor" to={"/"}>
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                            {errors.agreeTerms && (
                                <p className="text-sm font-semibold text-primaryColor mt-1">{errors.agreeTerms.message}</p>
                            )}
                        </div>
                        {/* This is the button section */}
                        <button
                            onClick={handleModalSubmit}
                            className="bg-primaryColor w-full border py-5 rounded-[10px] mt-5 text-[#FFF] text-lg font-semibold cursor-pointer hover:bg-white hover:border-primaryColor hover:text-primaryColor duration-300 ease-in-out"
                            type="submit"
                        >
                            Register
                        </button>
                        {/* Modal Dialog */}
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Registration Successful</DialogTitle>
                                    <DialogDescription>
                                        Your registration has been successfully completed!
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/*  */}
                        <div className="my-[54px] text-center">
                            <p className="text-[#727272] text-lg">Already have an account?? <Link className="text-primaryColor underline" to={"/auth/creator-login"}>Sign in</Link></p>
                        </div>
                    </form>
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

export default CreatorRegister;