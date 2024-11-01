export default function Footer(){
    return(
        <footer className="bg-[#C3C0C0] py-10 space-y-2 text-gray-800">

            <div className="flex gap-6 justify-center items-center">
            <img className="h-[20px]" src="images/fb.png" alt="facebook" />
            <img className="h-[20px]" src="images/ig.png" alt="instagram" />
            <img className="h-[20px]" src="images/twitter.png" alt="twitter" />
            <img className="h-[20px]" src="images/linkedin.png" alt="linkedin" />
            </div>

            <div>
            <p className="text-sm font-bold flex justify-center items-center">Copyright  ©2020 All Rights Reserved</p>
            </div>

        </footer>
    )
}