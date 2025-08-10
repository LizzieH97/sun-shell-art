import NavBar from "../components/navBar";

export default function Account() {
  return (
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div className="bg-bark w-full m-2 p-2 border-8 border-lavender rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-5xl text-cream font-bold text-center m-4">
            This is the account page
          </h1>
          <div className="flex flex-wrap items-center justify-center bg-petal text-maroon text-3xl w-60 rounded-3xl ">
            <span>
              Name: <br></br> <br></br>
              Address: <br></br> <br></br>
              Previous orders: <br></br> <br></br>
              Profile pic?
            </span>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>this is the footer</div>
      </footer>
    </div>
  );
}
