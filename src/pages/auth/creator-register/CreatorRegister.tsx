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

type FormValues = {
    name: string;
    channel_name: string;
    birthDate: Date;
};

const CreatorRegister = () => {
    const { register, handleSubmit, control, formState: { errors }, } = useForm<FormValues>();
    // const [date, setDate] = useState<Date>()

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
                            <Input<FormValues>
                                id="name"
                                label="Your Name"
                                register={register}
                                required
                            />
                            <Input<FormValues>
                                id="channel_name"
                                label="Channel name"
                                register={register}
                                required
                            />
                            {/* This is the Date ans Gender */}
                            <div className="flex gap-4 mt-6">
                                {/* This is the first div */}
                                <div className="relative w-[280px]">
                                    <Controller
                                        name="birthDate"
                                        control={control}
                                        rules={{ required: "Date is required" }}
                                        render={({ field }) => (
                                            <div className="relative w-[280px] ">
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
                                <div>
                                    <p>This is the first div</p>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
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