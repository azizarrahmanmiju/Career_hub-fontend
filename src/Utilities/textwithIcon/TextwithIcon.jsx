
const TextWithIcon = ({ text, icon, texttitle }) => {
    return (
        <div className="flex P-2 items-center gap-2">
            <img src={icon}></img>
            <p className="text-[14px]"><span className="text-[#181818] font-medium">{texttitle}</span> {text}</p>

        </div>
    );
};

export default TextWithIcon;