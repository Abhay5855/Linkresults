import { FC } from "react";
import SignupSideBanner from "../../components/signup/SignupSideBanner";
import MainContainer from "../../components/signup/MainContainer";
import Logo from "../../components/base/logo/Logo";

const SignUp: FC = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex-grow w-[66%] h-screen overflow-y-auto  flex flex-col">
        <div className="w-full mt-10 px-8 sm:px-14 pb-5">
          <Logo/>
        </div>
        {/* Form Section */}
        <MainContainer />
      </div>
      {/* sidebanner section  */}
      <SignupSideBanner />
    </div>
  );
};

export default SignUp;
