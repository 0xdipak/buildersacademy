import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:items-center sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            &copy; 2025 BuildersAcademy, Inc. All rights reserved.
          </div>
          <ul className="flex justify-center gap-5">
            <Link
              href={"https://www.facebook.com/profile.php?id=61557169582718"}
              target="_blank"
            >
              <FaFacebook className="w-8 h-8" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/buildersacademy"}
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
            <Link href={"https://twitter.com/BuildersAcadHQ"} target="_blank">
              <FaTwitter className="w-8 h-8" />
            </Link>
            <Link href={"https://t.me/+CzSrLytJb0JjZWQ9"} target="_blank">
              <FaTelegram className="w-8 h-8" />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
