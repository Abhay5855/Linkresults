import { FC } from "react";
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
const Logo:FC = () => {
  return (
    <Link to="https://flowbite.com" className="flex w-min ms-2 gap-2 md:me-24">
      <Sparkles className="w-8 h-8 text-primary" />
      <span className="self-center text-xl font-bold sm:text-2xl text-primary whitespace-nowrap dark:text-white">
        PostWiz
      </span>
    </Link>
  );
};

export default Logo;
