export default function Hero(){
    return(
        <section className="bg-[#C3C0C0] min-h-96 p-12 flex items-centre justify-evenly max-md:flex-col max-md:justify-center ">

            <div className="max-md:order-2 mb-8 md:mb-0 max-md:text-center space-y-7">

                <h1 className="text-3xl font-extrabold">Hi, I am John, <br/> Creative Technologist</h1>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
                
                <button className="text-sm font-semibold bg-red-300 py-2 px-4 text-white hover:bg-red-600 drop-shadow-xl">
                    <a href="#">Download Resume</a>
                </button>

            </div>
            
            <div className="max-md:order-1 max-md:mb-10 max-md:w-full">
                <img className="w-52 h-52 m-auto rounded-full" src="images/profile.png" alt="landing.img" />
            </div>

        </section>
    )
}