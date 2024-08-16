import MenuIcon from "../../public/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl  relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <Link href={"/"}>
                <p className="font-bold text-xl">BA</p>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8">
            <div className="hidden md:block">
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
            </div>
            <div className="flex gap-4 items-center">
              <Link href="https://discord.gg/HNhfAugqjb">
                <Button>Join the community</Button>
              </Link>
              <MenuIcon className="md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
