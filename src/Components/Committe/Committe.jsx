import "./Committe.css"

function Committe(props)
{
    return (
        <div class="Committee">
            <img src={props.imgSrc} alt={props.altName} />
            <p>{props.name}</p>
            <h2>{props.post}</h2>
        </div>
    )
}

export default Committe