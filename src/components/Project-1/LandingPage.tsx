import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="flex mx-20 mt-6">
    <div className="w-1/2">
      <h1 className="font-bold text-8xl">YOUR FEET <br /> DESERVES <br /> THE BEST</h1>
      <p className="text-sm ">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
      <div className="flex gap-6 mt-3">
        <button  className="px-4 py-1 text-white rounded-md bg-red-500">Shop Now</button>
        <button className="px-4 py-1 text-black rounded-md border border-black">Category</button>
      </div>
      <div className="mt-3">
        <p>Also Available on</p>
        <div className="flex gap-2 mt-3">
        <img src="/amazon.png" alt="" />
        <img src="/flipkart.png" alt="" />
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <img src="/hero-image.png" alt="heo image" className="w-[500px]" />
    </div>
    </div>
    </>
  )
}
