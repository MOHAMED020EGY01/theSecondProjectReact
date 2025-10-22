interface IMsg{
msg:string
}
const Msg = ({msg}: IMsg) => {
    return (
        msg ? <span className="text-red-500 text-sm font-thin">{msg}</span> : null
    )
}
export default Msg;
