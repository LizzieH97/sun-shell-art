"use client";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import SignupForm from "../components/signUpForm";

export default function Account() {
  return (
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div className="bg-none w-full m-2 p-2 rounded-3xl flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center bg-none text-maroon text-3xl w-100 rounded-3xl ">
            <SignupForm />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
