
const TextWithIcon = ({ text, icon }) => {
    return (
        <div className="flex P-2 items-center gap-1">
            <img src={icon}></img>
            <p className="text-[14px]">{text}</p>

        </div>
    );
};

export default TextWithIcon;