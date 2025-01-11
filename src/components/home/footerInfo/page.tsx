const FooterInfo = () => {
    return (
      <div>
        <div className="bg-[#1A1D1F]">
          <div className="h-[50px] mx-auto px-16 container">
            <div className="flex justify-around items-center h-full">
              {/* Left Section */}
              <div>
                <p className="text-white">
                  © Copyright 2025 All rights reserved By Assk 
                </p>
              </div>
              {/* Right Section */}
              <div>
                <div className="flex text-primaryBg gap-10 text-sm font-medium">
                  <p>HOME</p>
                  <p>ABOUT US</p>
                  <p>SERVICES</p>
                  <p>BLOG</p>
                  <p>CONTACT US</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterInfo;
  