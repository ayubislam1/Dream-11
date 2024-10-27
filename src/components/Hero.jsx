import hero from "../assets/bg-shadow.png"; 
import banner from "../assets/banner-main.png"; 
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Hero = () => {

	
	const [price ,setPrice]=useState(1500000);

	const handleIncreasePrice=()=>{
		const coin=document.getElementById("coin")
        coin.innerText=price;
		setPrice(price+price)
		toast.success('Credit Added to you Account', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			
			});
	} 
  return (

    <>
	
      <div className="container mx-auto mt-28">
        <div className="px-5">
          <div className="relative flex items-center justify-center overflow-hidden">
           
            <img
              className="bg-black rounded-3xl w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
              src={hero}
              alt="Hero"
            />

          
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[120px] md:w-[200px] lg:w-[300px] ">
              <img src={banner} alt="Banner" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-8 w-full flex flex-col items-center space-y-2 md:space-y-4 text-center px-4 ">
              <h1 className="text-white text-sm md:text-3xl lg:text-4xl">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-xs md:text-lg lg:text-xl text-gray-500 ">
                Beyond Boundaries, Beyond Limits
              </p>
              <button onClick={()=>handleIncreasePrice()} className="btn bg-[#E7FE29] font-semibold py-2 px-6 rounded-lg text-xs md:text-base lg:text-lg">
                Claim Free Credit
              </button>
			 
            </div>
          </div>
        </div>
		<ToastContainer />
      </div>
    </>
  );
};
