import "./Photos.css"
function Photos(props)
{
    return(
        <div id="photo-section" data-aos="fade-up">
            <img src={props.imgName} alt={props.altName} />
        </div>
    )
}

export default Photos