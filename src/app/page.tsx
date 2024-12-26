import Header from "@/components/home/header/page";
import Navbar from "@/components/home/navbar/page";
import Banner from "@/components/home/banner/page";
import PropertyCategories from "@/components/home/propertyCategories/page";
export default function Home() {
  return (
    <div>
      <div className="">
      <Header></Header>
      </div>
      <Navbar></Navbar>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-20">
        <PropertyCategories></PropertyCategories>
      </div>
    </div>
  );
}
