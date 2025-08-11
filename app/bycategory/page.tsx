"use client";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

export default function ByCategory() {
  const categories = ["this", "is", "where", "the", "categories", "go"];
  return (
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div className="bg-bark w-full m-2 p-2 border-8 border-lavender rounded-3xl">
          <h1 className="text-5xl text-cream font-bold text-center m-4">
            Check out the categories below!
          </h1>
          <div className="flex flex-wrap items-center justify-center">
            {categories.map((category) => {
              return (
                <div className="bg-bark m-6 p-2 border-8 border-lavender rounded-3xl text-cream text-3xl text-center w-64">
                  {category}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
