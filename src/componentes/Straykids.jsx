export function Straykids ({integrantes,foto}){
    return(
        <div>
            <img src={foto} alt="" />
            <p>{integrantes}</p>
        </div>
    )
}