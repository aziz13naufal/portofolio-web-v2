import { useState } from "react"

export default function ProjectCard(props) {
    return (
        <div className="bg-gradient-to-b from-[#f1eae4] to-[#e8e2dc] p-2 rounded-[5px] border border-[#EADFD7]" id="project-card">
            <div className="bg-[#f1eae4] flex flex-col h-full rounded-[3px] overflow-hidden text-[#654b36] w-72 relative">
                <div className="">
                    <img src={props.image} className='w-72' />
                </div>
                <div className="px-3 pt-2 pb-4 flex flex-col flex-1">
                    <div className="font-semibold text-2xl">{props.title}</div>
                    <div className="font-normal text-base mt-2">{props.desc}</div>
                </div>
                <div className="flex items-end" id="card-icon">
                    <div className=" bottom-0 mb-2 ml-2 flex w-full justify-start h-[20px]">
                        {props.techStack}
                    </div>
                    <div className="absolute flex top-0 right-0 mt-2 mr-2">
                        <a href={props.repo} className={`cursor-pointer opacity-40 hover:opacity-100 ${props.repo === 'none' ? 'hidden' : ''}`} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={`${props.linkColor === 'black' ? 'black' : 'white'}`} class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                        </a>
                        <a href={props.url} className={`cursor-pointer -mt-[2px] ml-1 opacity-40 hover:opacity-100 ${props.url === 'none' ? 'hidden' : ''}`} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${props.linkColor === 'black' ? 'black' : 'white'}`} className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}