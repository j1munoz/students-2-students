import Link from "next/link";

const Profile = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-black">Profile Page</p>
      <Link href="/signup" className="text-blue-500 underline">
        Go to Signup Page
      </Link>
      <Link href="/login" className="text-blue-500 underline mt-2">
        Go to Login Page
      </Link>
    </div>
  );
};

export default Profile;
