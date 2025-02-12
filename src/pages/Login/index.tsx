import Logo from "../../components/Logo";
import FooterComponent from "../../components/FooterComponent";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('Cover.jpg')] bg-cover bg-center">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm lg:max-w-md mx-4 bg-gray-800/90 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo />
            <h2 className="mt-2 text-center text-2xl font-roboto-mono font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white font-roboto-mono"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white font-roboto-mono"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Not a member?{" "}
              <a
                href="/register"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
