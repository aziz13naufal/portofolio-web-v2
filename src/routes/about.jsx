import HeroImg from "../assets/img/hero-1.jpg"
import Sertifikat1 from "../assets/img/sertifikat-1.jpg"
import Sertifikat2 from "../assets/img/sertifikat-2.jpg"

export default function About() {
    return (
        <div className="w-full flex flex-col items-center pt-40 px-6 sm:px-10 bg-[#513c2c]">
            <div className="flex">
                <div className="sm:mr-10">
                    <h1 className="text-3xl font-bold">AZIZ NAUFAL<p className="whitespace-nowrap sm:whitespace-normal">BAGASKARA SETIAWAN</p></h1>
                    <div className="">
                        <img src={HeroImg} className="w-full mt-5 h-40 rounded-sm sm:hidden object-cover object-top" />
                    </div>

                    <p className="leading-6 mt-7">Hello Everyone !
                        <p>I am a front-end developer,</p>
                        <p>I really like making designs</p>
                        <p>and other creative works.</p>
                    </p>

                    <p className="leading-6 mt-5">I was born in Bandung,
                        <p>august 14, 2001. i love</p>
                        <p>to enjoy the beautiful</p>
                        <p>scenery, then take pictures.</p>
                    </p>

                    <p className="leading-6 mt-5">I also like the appearance of
                        <p>Japanese style in the era of</p>
                        <p>"Japanese delinquency".</p>
                    </p>
                </div>
                <div className="text-end hidden sm:block">
                    <div className="">
                        <img src={HeroImg} className="w-64 h-40 rounded-sm object-cover object-top" />
                    </div>
                    <p className="leading-6 mt-3 hidden sm:block">that's some information
                        <p>about me, thank you for</p>
                        <p>visiting my portfolio</p>
                        <p>website.</p>
                    </p>
                </div>
            </div>
            <div className="w-full md:w-[640px] mt-14">
                <div className="text-3xl font-bold text-center">
                    <h1>Education</h1>
                </div>
                <div className="mt-5">
                    <ol class="relative border-l border-[#f1eae4]">                  
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-[#f1eae4] rounded-full mt-1.5 -left-1.5 border border-[#513c2c]"></div>
                            <time class="mb-1 text-sm font-normal leading-none">2017 - 2020</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Vocational High School</h3>
                            <p class="text-base font-normal">SMKN 7 Baleendah</p>
                            <p class="mb-4 text-base font-normal">Software Engineering</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="w-full md:w-[640px] mt-10">
                <div className="text-3xl font-bold text-center">
                    <h1>Work Experience</h1>
                </div>
                <div className="mt-5">
                    <ol class="relative border-l border-[#f1eae4]">                  
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-[#f1eae4] rounded-full mt-[9px] -left-1.5 border border-[#513c2c]"></div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Host Data</h3>
                            <p class="text-base font-normal">Junior Front-end Web Dev Internship Program</p>
                            <p class="text-base font-normal mb-3">June 2023 - </p>
                            <ul className="ml-4">
                                <li className="list-disc">
                                    <p class="text-base font-normal">Create a website interface according to the UI from the Client</p>
                                </li>
                                <li className="list-disc">
                                    <p class="text-base font-normal">Making the display responsive</p>
                                </li>
                                <li className="list-disc">
                                    <p class="text-base font-normal">Fix the css display of other people's websites</p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="w-full md:w-[640px] mt-10">
                <div className="text-3xl font-bold text-center mb-8">
                    <h1>Certificate</h1>
                </div>
                <div className="shadow-black shadow-lg mb-9">
                    <img src={Sertifikat1} alt="" />
                </div>
                <div className="shadow-black shadow-lg mb-9">
                    <img src={Sertifikat2} alt="" />
                </div>
            </div>
        </div>
    )
}