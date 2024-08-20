import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-7 bg-black text-white/60 border-t border-white/20">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="border h-12 w-14 rounded-lg inline-flex justify-center items-center border-white/15">
            <Link href={"/"}>
              <p
                className="font-bold text-2xl bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]
        text-transparent bg-clip-text text-center"
              >
                BA
              </p>
            </Link>
          </div>
          <nav className="flex gap-8 text-sm">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="programs"
              className="text-white/70 hover:text-white transition"
            >
              Programs
            </Link>
            <Link
              href="blogs"
              className="text-white/70 hover:text-white transition"
            >
              Blogs
            </Link>
            <Link
              href="jobs"
              className="text-white/70 hover:text-white transition"
            >
              Jobs
            </Link>
          </nav>
          <ul className="flex justify-center gap-5">
            <Link
              href={"https://www.facebook.com/profile.php?id=61557169582718"}
              target="_blank"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/buildersacademy"}
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            {/* <Link href={"https://twitter.com/BuildersAcadHQ"} target="_blank">
              <FaTwitter className="w-8 h-8" />
            </Link> */}
            <Link href={"https://t.me/+CzSrLytJb0JjZWQ9"} target="_blank">
              <FaTelegram className="w-6 h-6" />
            </Link>
          </ul>
        </div>
        <div className="text-white text-sm text-center mt-10">
          &copy; 2024 Builders Academy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
