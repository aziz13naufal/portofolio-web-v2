export default function SkillCard(props) {
    const cardStyle = {
        width: props.width || '80px'
    }
    return (
        <div className="relative w-[167px] h-[160px] sm:w-48 sm:h-48 flex flex-col justify-center items-center cursor-pointer border border-b-slate-400 bg-[#f1eae4] rounded-md shadow-sm saturate-0 hover:saturate-100 smooth-transition">
            <div className="w-20 absolute -mt-8" style={cardStyle}>
            <img src={props.image} />
            </div>
            <span className="block text-[#513c2c] font-semibold mt-28">{props.name}</span>
        </div>
    )
}