


const Fifthsection = () => {
    return (
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7572149/pexels-photo-7572149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="flex items-center flex-col justify-center mb-[10%] relative z-10  md:text-left px-2 md:px-1 w-full ">
         
            <h2 className="sm:text-[7vh] text-[9vw] font-bold text-white text-center ">
              Let's Connect for All Your Logistic Needs
            </h2>
            {/* </div> */}

            <p className="text-[2vh] md:text-xl text-gray-200 mb-4 text-center">
              Our facilities are open 24 x 7 days to serve you.
            </p>

            <button className="bg-blue-500  text-white  text-center content-center sm:p-4 p-2 text-[75%] font-semibold rounded-full hover:bg-blue-600 transition duration-300 ">
              CONTACT US
            </button>
          
        </div>
        {/* <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 w-full max-w-2xl">
    <h2 className="text-[3vh] md:text-4xl font-bold text-white mb-4">
      Let's Connect for All Your Logistic Needs
    </h2>
    <p className="text-[2vh] md:text-xl text-gray-200 mb-4">
      Our facilities are open 24 x 7 days to serve you.
    </p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
      CONTACT US
    </button>
  </div> */}
      </div>
    );
}
  

export default Fifthsection