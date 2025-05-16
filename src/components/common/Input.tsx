import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    register: UseFormRegister<T>;
    required?: boolean;
};

const Input = <T extends FieldValues>({
    id,
    label,
    register,
    required,
}: Props<T>) => {
    return (
        <div className="bg-white pt-4 space-y-6 rounded-lg">
            <div className="relative bg-inherit">
                <input
                    id={String(id)}
                    type="text"
                    placeholder={label}
                    {...register(id, { required })}
                    className="peer bg-transparent h-auto w-full py-[18px] rounded-[10px] text-[#232323] placeholder-transparent ring-1 px-4 ring-[#D9D9D9] focus:ring-[#1C1B1F] focus:outline-none pr-10"
                />
                <label
                    htmlFor={String(id)}
                    className="absolute cursor-text left-0 capitalize -top-3 text-sm text-[#707070] bg-inherit mx-1 px-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-[#1C1B1F] peer-focus:text-sm transition-all"
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Input;
