import LoginForm from "@/components/login/loginForm";

const LoginPage = () => {
  return (
    <div className="bg-sky-blue text-black h-screen w-screen">
      <p className="font-nunito flex justify-center text-xl py-10">Please enter your credentials to log in.</p>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;