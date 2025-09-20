import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import toast from "react-hot-toast";

function Signup() {
  const { isPending, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    await signup(displayName, email, password);
  };
  return (
    <main>
      <div className="relative h-screen">
        <div className="lg:flex h-full">
          <div className="lg:w-1/2 w-full h-full bg-[url('https://picsum.photos/1200/800')] bg-cover bg-center bg-no-repeat"></div>

          <div className="lg:w-1/2 pl-2 pr-2 w-full flex items-center justify-center h-full lg:static absolute inset-0 z-10 max-lg:bg-black/60">
            <form onSubmit={handleSubmit} className="max-w-sm w-full">
              <h2 className="text-2xl font-bold max-lg:text-white mb-4">
                Sign Up
              </h2>

              <FormInput label="User Name" name="displayName" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <button
                type="submit"
                style={isPending ? { pointerEvents: "none", opacity: 0.5 } : {}}
                className="w-[320px] my-2 btn btn-primary"
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner mr-2"></span>
                    Loading...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>

              <button className="my-1 opacity-50 pointer-events-none cursor-not-allowed btn w-[320px] bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-2"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <div className="mt-4 max-lg:text-white text-black">
                <p>
                  If you have account, please,{" "}
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
// sm	 (640px)
// md	 (768px)
// lg	 (1024px)
// xl	 (1280px)
// 2xl (1536px)
export default Signup;
