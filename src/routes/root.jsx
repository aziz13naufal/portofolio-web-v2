import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation();
    const [isClicked, setIsClicked] = useState(false);

    const toggleNavbar = () => {
        setIsClicked(!isClicked);
    };

    const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

    return(
        // <div className="w-full h-screen relative sm:bg-re bg-[#513c2c] font-medium text-[#f1eae4] text-lg">
        //     <div className="absolute top-0 left-0 right-0 flex justify-center mt-10 font-semibold">
        //             <ul className="flex bg-[#f1eae4] w-fit px-5 py-4 rounded-full border border-b-[#e2d5ca] uppercase text-[#775840]">
        //                 {links.map((link) => (
        //                     <li key={link.path}>
        //                         <Link to={link.path} className={"px-9 hover:text-[#423124] smooth-transition " + (location.pathname === link.path ? 'text-[#423124]' : '')}>
        //                         {link.text}
        //                         </Link>
        //                     </li>
        //                 ))}
        //             </ul>
        <div className="w-full h-screen relative sm:px-0 sm:bg-re bg-[#513c2c] font-medium text-[#f1eae4] text-lg">
            {/* <div className="absolute px-4 sm:px-0 top-0 left-0 right-0 flex justify-center mt-10 font-semibold smooth-transition" ref={navbarRef}>
                    <ul className="flex flex-col items-end sm:items-center sm:flex-row sm:bg-red-500 w-full h-[61px] sm:w-fit justify-between py-4 rounded-full border border-b-[#e2d5ca] uppercase text-[#775840]">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className={`${isClicked ? 'visible' : 'invisible'} sm:px-9 sm:visible hover:text-[#423124] smooth-transition ` + (location.pathname === link.path ? 'text-[#423124]' : '')}>
                                {link.text}
                                </Link>
                            </li>
                        ))}
                        <li className="cursor-pointer absolute right-0 mr-10 mt-[2px] sm:hidden" onClick={toggleNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </li>
                    </ul>
            </div> */}
            <div className="z-20 w-[90%] h-[61px] fixed mx-auto top-0 left-0 px-6 right-0 mt-7 bg-[#f1eae4] rounded-full md:w-fit md:flex md:items-center">
                <ul className={`uppercase absolute top-0 right-0 mt-[70px] text-right bg-[#513c2c] rounded-md border border-[#af8c72] ${isClicked ? 'visible' : 'invisible'} md:visible md:border-none md:relative md:mt-0 md:bg-transparent md:text-start md:flex md:justify-evenly`} onClick={toggleNavbar}>
                    <li className="text-[#f1eae4] px-3 pt-2 block md:inline md:pt-0 md:px-0">
                        <Link
                        to={links[0].path}
                        className={`w-full block pl-10 pr-2 py-[2px] rounded-md hover:bg-[#765c49] md:inline md:pl-0 md:mx-9 md:pr-0 md:hover:bg-[#f1eae4] md:hover:text-[#000000] ` + (location.pathname === links[0].path ? 'md:text-[#000000]' : 'md:text-[#513c2c]')}>{links[0].text}</Link>
                    </li>
                    <li className="text-[#f1eae4] px-3 block md:inline md:px-0">
                        <Link
                        to={links[1].path}
                        className={`w-full block pl-10 pr-2 py-[2px] rounded-md hover:bg-[#765c49] md:inline md:pl-0 md:mx-9 md:pr-0 md:hover:bg-[#f1eae4] md:hover:text-[#000000] ` + (location.pathname === links[1].path ? 'md:text-[#000000]' : 'md:text-[#513c2c]')}>{links[1].text}</Link>
                    </li>
                    <li className="text-[#f1eae4] px-3 block md:inline md:px-0">
                        <Link
                        to={links[2].path}
                        className={`w-full block pl-10 pr-2 py-[2px] rounded-md hover:bg-[#765c49] md:inline md:pl-0 md:mx-9 md:pr-0 md:hover:bg-[#f1eae4] md:hover:text-[#000000] ` + (location.pathname === links[2].path ? 'md:text-[#000000]' : 'md:text-[#513c2c]')}>{links[2].text}</Link>
                    </li>
                    <li className="text-[#f1eae4] px-3 block md:inline md:px-0">
                        <Link
                        to={links[3].path}
                        className={`w-full block pl-10 pr-2 py-[2px] rounded-md hover:bg-[#765c49] md:inline md:pl-0 md:mx-9 md:pr-0 md:hover:bg-[#f1eae4] md:hover:text-[#000000] ` + (location.pathname === links[3].path ? 'md:text-[#000000]' : 'md:text-[#513c2c]')}>{links[3].text}</Link>
                    </li>
                    <li className="text-[#f1eae4] px-3 pb-2 block md:inline md:pb-0 md:px-0">
                        <Link
                        to={links[4].path}
                        className={`w-full block pl-10 pr-2 py-[2px] rounded-md hover:bg-[#765c49] md:inline md:pl-0 md:mx-9 md:pr-0 md:hover:bg-[#f1eae4] md:hover:text-[#000000] ` + (location.pathname === links[4].path ? 'md:text-[#000000]' : 'md:text-[#513c2c]')}>{links[4].text}</Link>
                    </li>
                </ul>
                <ul className="absolute right-0 top-0 bottom-0 mt-[18px] mr-6 cursor-pointer md:hidden" onClick={toggleNavbar}>
                    <li className="text-[#513c2c]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>

    )
}