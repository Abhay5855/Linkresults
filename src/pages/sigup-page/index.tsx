import { FC } from "react";
import imagecopy from "../../assets/images/image copy.png";
import SignupSideBanner from "../../components/signup/SignupSideBanner";
import MainContainer from "../../components/signup/MainContainer";

const SignUp: FC = () => {
  
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex-grow w-[66%] h-screen overflow-y-auto  flex flex-col">
        <div className="w-full mt-10 px-14 pb-5">
          <img src={imagecopy} alt="logo" height={24} width={112} />
        </div>
        {/* Form Section */}
        <MainContainer/>
      </div>
      {/* sidebanner section  */}
      <SignupSideBanner/>
    </div>
  );
};

export default SignUp;