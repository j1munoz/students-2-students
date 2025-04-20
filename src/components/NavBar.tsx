import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-francois-one bg-amber-950 flex flex-row items-center px-5 py-2 text-4xl text-black">
      <div className="flex w-1/2 items-center justify-start">
        <Link href="/" className="px-5">
          Students2Students
        </Link>
      </div>
      <div className="flex w-1/2 justify-end">
        <Link href="/jobs" className="px-10">
          JOBS
        </Link>
        <Link href="/profile" className="px-10">
          PROFILE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
