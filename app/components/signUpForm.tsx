import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }
    // this is where you link it to the backend
  };

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center border-8 border-bark rounded-3xl">
      <img
        src="/sunflower.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 "
      />
      <div className="relative z-10 bg-petal bg-opacity-40 rounded-2xl shadow p-2">
        <form onSubmit={handleSubmit} className="text-cream w-full">
          <fieldset className="border-4 border-grape p-6 space-y-4">
            <legend className="px-2 font-bold text-lg md:text-xl mx-6 bg-grape border-lavender border-4 rounded-3xl text-cream">
              Welcome! Glad to have you 🥰 Sign up below ⬇
            </legend>
            <input
              className="w-full bg-lavender p-3  font-bold text-base text-bark md:text-lg rounded-3xl border-grape placeholder-bark border-4"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full bg-lavender p-3 text-base text-bark font-bold md:text-lg rounded-3xl border-grape placeholder-bark border-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full bg-lavender p-3 text-base text-bark font-bold md:text-lg rounded-3xl border-4 border-grape placeholder-bark focus:outline-none"
              type="password"
              placeholder="Repeat Password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full rounded bg-grape text-cream p-3 border-lavender border-4 rounded-3xl text-base font-bold hover:bg-bark"
            >
              Create Account
            </button>
            <Link
              href="/signin"
              className="block text-center text-sm text-bark font-bold mb-2 bg-lavender border-grape border-4 rounded-3xl"
            >
              Already have an account? Log in here!
            </Link>
            {/* {error && <p className="text-red-400">{error}</p>}
            {success && (
              <p className="text-green-400">Signed up successfully!</p>
            )} */}
          </fieldset>{" "}
        </form>
      </div>
    </div>
  );
}
