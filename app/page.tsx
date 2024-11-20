import ClientSay from "@/components/ClientSay";
import Customise from "@/components/Customise";
import Data from "@/components/Data";
import Favourite from "@/components/Favourite";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import ProjectMangnet from "@/components/ProjectMangnet";
import Sponsers from "@/components/Sponsers";
import ThreeDivs from "@/components/ThreeDivs";
import Try from "@/components/Try";
import UseExtension from "@/components/UseExtension";
import WorkTogether from "@/components/WorkTogether";
import YourWork from "@/components/YourWork";
import { GoArrowRight } from "react-icons/go";


export default function Home() {
  return (
    <>
    <HomePage/>
    <ProjectMangnet/>
    <WorkTogether/>
    <UseExtension/>
    <Customise/>
    <ThreeDivs/>
    <YourWork/>
    <Data/>
    <Sponsers/>
    <Favourite/>
    <ClientSay/>
    <Try/>
    <Footer/>
    </>
  );
}
