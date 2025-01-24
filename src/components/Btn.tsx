interface BtnProps{
    type: string;
    onClick: ()=> void;
}

export const Btn = (props:BtnProps)=>{

    const {type,onClick} = props;

    return <button className={type} onClick={onClick}>{type}</button>
}