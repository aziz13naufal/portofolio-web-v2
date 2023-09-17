export default function About() {
    return (
        <div className="w-full h-screen flex justify-center pt-40 px-6 sm:px-10">
            <div className="sm:mr-10">
                <h1 className="text-3xl font-bold">AZIZ NAUFAL<p className="whitespace-nowrap sm:whitespace-normal">BAGASKARA SETIAWAN</p></h1>
                <div className="w-full mt-5 h-40 bg-[#f1eae4] rounded-sm sm:hidden"></div>
                

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
                <div className="w-64 h-40 bg-[#f1eae4] rounded-sm"></div>
                <p className="leading-6 mt-3 hidden">that's some information
                    <p>about me, thank you for</p>
                    <p>visiting my portfolio</p>
                    <p>website.</p>
                </p>
            </div>
        </div>
    )
}