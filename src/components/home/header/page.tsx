import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";


interface socialIcons {
  icon : JSX.Element ,
  link : string , 
  hoverColor : string

}


const Header = () => {
  const socialIcons: socialIcons[] = [
    {
      icon: <FaFacebookF size={18} />,
      link: "https://facebook.com",
      hoverColor: "hover:bg-primaryBg",
    },
    {
      icon: <FaTwitter size={18} />,
      link: "https://twitter.com",
      hoverColor: "hover:bg-primaryBg",
    },
    {
      icon: <FaLinkedin size={18} />,
      link: "https://linkedin.com",
      hoverColor: "hover:bg-primaryBg",
    },
    {
      icon: <FaGoogle size={18} />,
      link: "https://google.com",
      hoverColor: "hover:bg-primaryBg",
    },
  ];

  return (
    <div className="bg-slate-950">
      <div className="h-[50px] mx-auto px-6 container">
        {/* Container for all content */}
        <div className="flex flex-row-reverse justify-between items-center h-full  text-white text-sm">
          {/* Contact Section */}
          <div className="flex gap-16 items-center">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} className="text-primaryBg" />
              <span className="hover:text-primaryBg transition-colors duration-500">
                +8801876127391
              </span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope size={16} className="text-primaryBg" />
              <span className="hover:text-primaryBg transition-colors duration-500">
                Email us at : info@asskamariway.com
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex h-[50px]">
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className={`${item.hoverColor} h-full w-[50px] border border-slate-700 flex justify-center items-center transition-colors duration-500`}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
