function Hero() {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-[#c72444]  to-[#692936] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Stay Connected and Organized with
              <span className="sm:block"> Contact Management Solution. </span>
            </h1>

            <p className="mx-auto mt-4 text-lg max-w-xl">
              Effortlessly organize and access all your contacts in one place.
              Stay connected with our intuitive and secure contact management
              solution.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border-2 border-[#A91D3A] bg-[#A91D3A] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#A91D3A] focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border-2 border-[#A91D3A] px-12 py-3 text-sm font-medium text-[#A91D3A] hover:text-white hover:bg-[#A91D3A] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
