
export default function Index() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center sm:px-10  sm:flex-row relative">
      <div className="mr-10 hidden sm:block">
        <p className="sm:whitespace-nowrap">Hi Everyone, welcome to my<p>portofolio website</p></p>
        <h1 className="text-3xl font-bold mt-10">AZIZ NAUFAL<p>BAGASKARA SETIAWAN</p></h1>
        <h3 className="font-semibold sm:mt-2">Junior Front-end Developer</h3>
      </div>
      <div>
        <p className="mb-8 font-semibold sm:hidden">Hi Everyone, welcome to my<p>portofolio website</p></p>
        <div className="w-80 h-48 bg-[#f1eae4] rounded-custom mx-auto"></div>
        <h1 className="text-3xl font-bold mt-10 sm:hidden">AZIZ NAUFAL<p className="whitespace-nowrap">BAGASKARA SETIAWAN</p></h1>
        <h3 className="font-semibold sm:hidden">Junior Front-end Developer</h3>
      </div>
    </div>
  )
}
