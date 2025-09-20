import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };
  return (
    <main>
      <div className="relative h-screen">
        <div className="lg:flex items-center justify-center h-full">
          <div className="lg:w-1/2 w-full h-full bg-[url('https://picsum.photos/1200/800')] bg-cover bg-center bg-no-repeat"></div>
          <div
            className="
          lg:w-1/2 w-full flex items-center pl-2 pr-2  justify-center h-full lg:static absolute inset-0 z-10 max-lg:bg-black/70 max-lg:text-white text-black"
          >
            <form onSubmit={handleSubmit} className="max-w-sm w-full">
              <h2 className="text-2xl  font-bold mb-4">Log In</h2>

              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <button
                type="submit"
                className={`w-[320px] my-2 btn btn-primary ${
                  isPending
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                }`}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner mr-2"></span>
                    Loading...
                  </>
                ) : (
                  "Log In"
                )}
              </button>

              <div className="mt-4 max-lg:text-white text-black">
                <p>
                  If you don't have account, please,{" "}
                  <Link className="link" to="/signup">
                    Signup
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
export default Login;
