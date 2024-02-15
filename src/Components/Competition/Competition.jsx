import "./Competition.css"
function Competition(props)
{
  
  
  return(
    <>
       <div id="Competition-Box" data-aos="fade-up" >
        
        <img src={props.imgSrc} alt={props.altName} />
         <p>{props.name}</p>
         {/* <p>Registration Fee : {props.fees}/-</p> */}
         {/* <p>Prize : {props.prize}/-</p>     */}

         <button id="Register-Button">Register</button>

       </div>

       
    </>
  )
}

export default Competition


