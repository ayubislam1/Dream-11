import logo from "../assets/logo-footer.png";
import hero from "../assets/bg-shadow.png";

export const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-20 bg-base-100 mt-10">
        {/* Hero Image Section */}
        <div className="relative -mb-40 z-10 p-5 border object-cover backdrop-opacity-10 backdrop-invert bg-white/30 rounded-3xl">
          <img
            className="bg-white rounded-3xl w-full h-[250px] md:h-[300px]"
            src={hero}
            alt="Hero"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 text-center">
            <h1 className="text-black font-bold text-base md:text-3xl md:px-1">
              Subscribe to our Newsletter
            </h1>
            <p className="text-sm md:text-lg">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="md:space-x-2 flex flex-col gap-2 md:flex-row  justify-center items-center">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full md:w-[300px]  md:mb-0"
              />
              <button className="btn btn-primary bg-gradient-to-r from-red-500 to-orange-500 text-black w-full md:w-36">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#070738] pt-40">
        <div className="flex justify-center py-5">
          <img className="w-20 md:w-24" src={logo} alt="Logo" />
        </div>
        <footer className="footer text-base-content p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <nav>
            <h6 className="text-white font-semibold text-lg">About Us</h6>
            <span className="text-gray-500 text-sm md:text-base md:pr-28">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </span>
          </nav>
          <nav>
            <h6 className="text-white font-semibold text-lg">Quick Links</h6>
            <ul className="text-gray-500 space-y-2 text-sm md:text-base">
              <li className="link link-hover">Home</li>
              <li className="link link-hover">Services</li>
              <li className="link link-hover">About</li>
              <li className="link link-hover">Contact</li>
            </ul>
          </nav>
          <form>
            <h6 className="text-white font-semibold text-lg">Subscribe</h6>
            <fieldset className="form-control">
             
                <span className="label-text text-gray-500 text-sm md:text-base mb-3">
                  Subscribe to our newsletter for the latest updates.
                </span>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 join ">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full md:w-auto md:border-r-0 md:rounded-r-none" 
                />
                <button className="btn btn-primary bg-gradient-to-r from-orange-400 to-red-300 text-black join-item rounded-none md:rounded-xl">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <hr  />
        <p className="py-5 text-gray-500 text-sm md:text-base text-center">
          © 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </>
  );
};
