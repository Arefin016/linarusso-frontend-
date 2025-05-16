import { Link } from "react-router";
import authImage from "../../../assets/auth-image/auth-img.jpg"

const ChooseMember = () => {

    return (
        <section>
            {/*  */}
            <div className="flex gap-44 justify-end">
                {/* This is the left side div */}
                <div className="space-y-[231px] mt-11">
                    {/* This is logo link */}
                    <div>
                        <Link to={"/"} className="font-roboto text-primaryColor text-[40.471px] font-semibold">FETISHclips</Link>
                    </div>
                    {/* This is the owener link */}
                    <div className="flex flex-col gap-6">
                        <p className="text-secondaryColor text-[40px] font-semibold">Choose Member Type</p>
                        {/* This is the button section */}
                        <Link to={"/auth/creator-register"} className="cursor-pointer border border-primaryColor px-[155px] py-5 rounded-[8px] font-semibold hover:bg-primaryColor hover:text-[#FFFFFF] duration-300 ease-in-out">Become a Creator</Link>
                        <Link to={"/"} className="cursor-pointer border border-primaryColor px-[155px] py-5 rounded-[8px] font-semibold hover:bg-primaryColor hover:text-[#FFFFFF] duration-300 ease-in-out">Become a Viewer</Link>
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

export default ChooseMember;