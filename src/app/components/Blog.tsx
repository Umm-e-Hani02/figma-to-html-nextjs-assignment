import Card from "./Card"
export default function Blog(){
    return (
        <main className="bg-[#F4E2E2] flex justify-center items-center py-12 ">
        <div className="space-y-4 px-4 " >
            <div className="flex justify-between font-bold items-center " >
                <div className="text-gray-900 font-bold ">Recent Post </div>
                <div className="text-pink-400 font-bold">View All</div>
            </div>
            <div className="flex items-center justify-evenly gap-7 max-md:flex-col ">
            <Card
            title="Making a design system from scratch"
            date="12 Feb 2020"
            category="Design, Pattern"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Card
            title="Making a design system from scratch"
            date="12 Feb 2020"
            category="Design, Pattern"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
            </div>
        </div>
     </main>
    )
}