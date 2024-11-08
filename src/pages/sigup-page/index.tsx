import { FC } from "react";
import SignupSideBanner from "../../components/signup/SignupSideBanner";
import Logo from "../../components/base/logo/Logo";
import SignupContainer from "../../components/signup/SignupContainer";

const SignUp: FC = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <main className="flex-grow w-[66%] h-screen overflow-y-auto  flex flex-col">
        <header className="w-full mt-10 px-8 sm:px-14 pb-5">
          <Logo/>
        </header>
        {/* Form Section */}
        <SignupContainer />
      </main>
      {/* sidebanner section  */}
      <SignupSideBanner />
    </div>
  );
};

export default SignUp;
