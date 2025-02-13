import Logo from "../../components/Logo";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/registerBG.jpg')] bg-cover bg-center">
      <div className="flex-1 flex items-center justify-center p-1">
        <div className="w-full max-w-sm lg:max-w-md mx-4 bg-gray-800/90 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo />
            <h2 className="mt-2 text-center text-2xl font-roboto-mono font-bold tracking-tight text-white">
              Create a new account
            </h2>
          </div>

          <div className="mt-6">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white font-roboto-mono"
                >
                  Full Name
                </label>
                <div className="mt-1.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm font-roboto-mono"
                    autoComplete="name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white font-roboto-mono"
                >
                  Email address
                </label>
                <div className="mt-1.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm font-roboto-mono"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white font-roboto-mono"
                >
                  Password
                </label>
                <div className="mt-1.5">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm font-roboto-mono"
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-white font-roboto-mono"
                >
                  Confirm Password
                </label>
                <div className="mt-1.5">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 text-sm font-roboto-mono"
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-3 rounded-lg bg-indigo-600  hover:bg-indigo-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-roboto-mono"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm text-gray-400 font-roboto-mono">
              Already have an account?{" "}
              <a
                href="/login"
                className=" text-indigo-400 hover:text-indigo-300 font-roboto-mono"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
