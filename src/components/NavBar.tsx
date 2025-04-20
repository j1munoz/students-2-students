import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-kanit bg-banner-blue flex flex-row items-center px-5 py-4 text-4xl text-black">
      <div className="flex w-1/2 items-center justify-start">
        <Link href="/" className="px-5">
          Students2Students
        </Link>
      </div>
      <div className="flex w-1/2 justify-end">
        <Link href="/jobs" className="px-10">
          Jobs
        </Link>
        <Link href="/profile" className="px-10">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
