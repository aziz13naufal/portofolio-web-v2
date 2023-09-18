import HeroImg from "../assets/img/hero-1.jpg"

export default function About() {
    return (
        <div className="w-full h-screen flex justify-center items-center px-6 sm:px-10">
            <div className="flex">
            <div className="sm:mr-10">
                <h1 className="text-3xl font-bold">AZIZ NAUFAL<p className="whitespace-nowrap sm:whitespace-normal">BAGASKARA SETIAWAN</p></h1>
                <div className="">
                    <img src={HeroImg} className="w-full mt-5 h-40 rounded-sm sm:hidden object-cover object-top" />
                </div>
                

                <div className="leading-6 mt-7">Hello Everyone !
                    <p>I am a front-end developer,</p>
                    <p>I really like making designs</p>
                    <p>and other creative works.</p>
                </div>

                <div className="leading-6 mt-5">I was born in Bandung,
                    <p>august 14, 2001. i love</p>
                    <p>to enjoy the beautiful</p>
                    <p>scenery, then take pictures.</p>
                </div>

                <div className="leading-6 mt-5">I also like the appearance of
                    <p>Japanese style in the era of</p>
                    <p>"Japanese delinquency".</p>
                </div>
            </div>
            <div className="text-end hidden sm:block">
                <div className="">
                    <img src={HeroImg} className="w-64 h-40 rounded-sm object-cover object-top" />
                </div>
                <p className="leading-6 mt-3 hidden">that's some information
                    <p>about me, thank you for</p>
                    <p>visiting my portfolio</p>
                    <p>website.</p>
                </p>
            </div>
            </div>
        </div>
    )
}