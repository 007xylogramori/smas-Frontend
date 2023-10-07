import LoginForm from "../../components/login/LoginForm";

const LoginPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center h-full px-6 py-8 mx-auto">
        <span className="mb-6 self-center text-3xl font-semibold whitespace-nowrap text-black dark:text-white">
          Central Mess IIITDMJ
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
