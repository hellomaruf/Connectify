import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <footer className=" mt-3 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
            
              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2022. All rights reserved.
              </p>
            </div>
            <div className="flex gap-2 text-2xl text-[#A91D3A]">
              <FaFacebookSquare />
              <RiInstagramFill />
              <IoLogoLinkedin />
              <AiFillTikTok />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
