import SignupForm from "@/components/signup/signupForm";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-blue h-screen w-screen text-black">
      <h1 className="font-nunito text-5xl py-5 -translate-y-10">Signup</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
