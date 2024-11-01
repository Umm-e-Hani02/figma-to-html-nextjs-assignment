import FeatureCard from "./FeatureCard";
export default function Featured(){
    return (
        <div className="bg-[#C3C0C0] p-12  flex flex-col justify-center max-md:px-4">
            
            <div className="text-base font-bold pt-11 pl-7 text-gray-600">Featured Works</div>
 
            <FeatureCard
        imageSrc="images/img1.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <FeatureCard
        imageSrc="images/img2.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <FeatureCard
        imageSrc="images/img3.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
  

        </div>
    )
}