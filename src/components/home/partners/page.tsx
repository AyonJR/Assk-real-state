import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-base text-primaryBg font-semibold">
          Some of our trusted partners who are providing support to us.
        </p>
        <h2 className="text-4xl font-semibold">Trusted Partners</h2>
        <div className="flex">
          <div className="w-10 bg-black h-1"></div>
          <div className="w-10 bg-primaryBg h-1"></div>
        </div>
      </div>
      <div className=" mt-16 text-white">
        <Marquee speed={100}>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/yVJgc9Y/download-3.png"
              alt="BSRM"
            />
          </div>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/QYBhSNQ/images-9.png"
              alt="Premier Cement"
            />
          </div>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/hK14Kh1/images-10.png"
              alt="KSRM"
            />
          </div>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/PzLcwGr/images-54.jpg"
              alt="Raheem steel"
            />
          </div>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/0mCTQcb/images-11.png"
              alt="Concord"
            />
          </div>
          <div className="mx-16">
            <img
              className="h-28"
              src="https://i.ibb.co.com/27xfyWL/images-55.jpg"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
