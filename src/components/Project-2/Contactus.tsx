export default function Contactus() {
  return (
    <main>
      <header className="mx-10">
        <nav>
          <img src="/logo.png" alt="logo" className="w-[80px]" />
        </nav>
      </header>
      <section className="mx-10">
        <div>
          <h1 className="text-5xl font-bold">CONTACT US</h1>
          <p className="text-sm mt-3">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR <br /> JUST WANT TO CHAT ,
            YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR{" "}
            <br /> BY PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>

        <div className="flex mt-4 items-center">
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-md">Via Support Chat</button>
              <button className="bg-black text-white px-4 py-2 rounded-md">Via Call</button>
              <button className="col-span-2 border border-black px-4 py-2 rounded-md">Via Email Form</button>
            </div>
            <div className="my-4 mx-4">
                <form action="" className="flex flex-col gap-3">
                    <input type="text" placeholder="Name" className="px-3 py-1 border border-black rounded-md " />
                    <input type="text" placeholder="Email" className="px-3 py-1 border border-black rounded-md "  />
                    <textarea placeholder="Message" className="px-3 py-1 border border-black rounded-md h-32" ></textarea>
                    <button className="bg-black text-white px-4 py-2 rounded-md w-fit">Submit</button>
                </form>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/contact.svg" alt="" className="w-[500px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
