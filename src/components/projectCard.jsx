export default function ProjectCard(props) {
    return (
        <div className="bg-gradient-to-b from-[#f1eae4] to-[#e8e2dc] p-2 rounded-[5px] border border-[#EADFD7] cursor-pointer" id="project-card">
            <div className="bg-[#f1eae4] h-full rounded-[3px] overflow-hidden text-[#654b36] w-72 relative">
                <div className="">
                    <img src={props.image} className='w-72' />
                </div>
                <div className="px-3 pt-2 pb-4">
                    <div className="font-semibold text-2xl">{props.title}</div>
                    <div className="font-normal text-base mt-2">{props.desc}</div>
                </div>
                <div className="hidden" id="card-icon">
                    <div className="absolute top-0 right-0 mt-2 mr-2">😶 😯</div>
                    <div className="absolute bottom-0 mb-2 ml-2">😂 😋</div>
                </div>
            </div>
        </div>

    )
}