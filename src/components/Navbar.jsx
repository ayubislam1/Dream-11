import coin from "../assets/coin.png";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="fixed backdrop-opacity-10 backdrop-invert bg-white/90  top-0 left-0 right-0 z-20 px-5">
        <div className="navbar  md:px-10">
          <div className=" flex-1">
            <img src={logo} alt="Logo" />
          </div>

        
          <div className="hidden md:flex  justify-center items-center space-x-4">
            <ul className="menu menu-horizontal px-1 text-base space-x-3 text-black">
              <li><a href="#">Home</a></li>
              <li><a href="#">Fixture</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Schedules</a></li>
            </ul>
            
          </div>
          <a className="btn text-center flex items-center space-x-2 bg-transparent "><span id="coin" className="">0</span>
              Coin <img src={coin} alt="Coin" className="w-5 h-5" />
            </a>

        </div>
      </div>
    </>
  );
};
