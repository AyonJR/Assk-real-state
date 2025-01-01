import Header from "@/components/home/header/page";
import Navbar from "@/components/home/navbar/page";
import Banner from "@/components/home/banner/page";
import PropertyCategories from "@/components/home/propertyCategories/page";
import FeaturedProperties from "@/components/home/featuredProperties/page";
import WhyChoose from "@/components/home/whyChooseUs/page";
import Advertise from "@/components/home/advertise/page";
import Testimonials from "@/components/home/testimonials/page";
import Partners from "@/components/home/partners/page";
import Footer from "@/components/home/footer/page";

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
      <div className="mt-20">
        <FeaturedProperties></FeaturedProperties>
      </div>
      <div className="mt-20">
        <WhyChoose></WhyChoose>
      </div>
      <div className="mt-20">
        <Advertise></Advertise>
      </div>
      <div className="mt-20">
        <Testimonials></Testimonials>
      </div>
      <div className="mt-20">
        <Partners></Partners>
      </div>
      <div className="mt-36">
        <Footer></Footer>
      </div>
    </div>
  );
}
