import "./Home.css";
import { useState } from "react";

import Competition from "../Competition/Competition";
import UpperSec from "../UpperSec/UpperSec";
import FooterSec from "../Footer/Footer";
import Theme from "../Theme/Theme";
import Photos from "../OurPhotos/Photos";

// ----------------------------Images Imported---------------------------------------------
import DanceImg from "../../Images/dance.jpeg"
import SingingImg from "../../Images/Singing.jpeg"
import CodingImg from "../../Images/coding.jpeg"
import GroupDis from "../../Images/groupDiscussionCompetition.jpeg"
import PUBG from "../../Images/eSport.jpeg"
import Castle from "../../Images/Castle.jpeg"
import boxCricket from "../../Images/boxCricket.jpeg"
import batminton from "../../Images/batminton.jpeg"
import ppt from "../../Images/ppt.jpeg"
import Rangoli from "../../Images/Rangoli.jpeg"
import TugOfWar from "../../Images/TugOfWar.jpeg"

// -----------------------------------------------------------------



import Photo1 from "../../Images/DanceGrp.jpeg"
import Photo2 from "../../Images/Traditional Day.jpeg"
import Photo3 from "../../Images/SahilAndOthers.jpeg"
import Photo4 from "../../Images/GroupDiscussion.jpeg"
import Photo5 from "../../Images/Winner.jpeg"
import Photo6 from "../../Images/friends.jpg";
import Photo7 from "../../Images/Committe Group Photo.jpeg"

//-------------------------------------------- Commitee Import--------------------------------------------------
import Committe from "../Committe/Committe";
import Sahil from "../../Images/Sahil.jpeg"
import Neha from "../../Images/Neha.jpeg"
import Akshay from "../../Images/Akshay.jpeg"
import Ziya from "../../Images/Ziya.jpeg"
import Ishwari from "../../Images/Ishwari.jpeg"
import Gaurav from "../../Images/Gaurav.jpeg"
import Prathamesh from "../../Images/Prathamesh.jpeg"
import Pragati from "../../Images/Pragati.jpeg"
import Saloni from "../../Images/Saloni.jpeg"
import Purva from "../../Images/Purva.jpeg"
import Abhijit from "../../Images/Abhijit.jpeg"
import Krishna from "../../Images/Krishna.jpeg"
import Om from "../../Images/Om.jpeg"
import Prasad from "../../Images/Prasad.jpeg"
import Keshav from "../../Images/Keshav.jpeg"
import Saad from "../../Images/Saad.jpeg"
import Rahul from "../../Images/Rahul.jpeg"
import Srushti from "../../Images/Srushti.jpeg"
import Anushka from "../../Images/Anushka.jpeg"
import Vaidehi from "../../Images/Vaidehi.jpeg"
import Rasika from "../../Images/Rasika.jpeg"
import Anjali from "../../Images/Anjali.jpeg"
import Saloni1 from "../../Images/Saloni1.jpeg"


function Home()
{      
  const [more,setMore]=useState(false);
     
     return (
      <>
      

        <div id="Home-Page">
            <UpperSec/> 
            <Theme/>
        </div>

      {/* ------------------------------------------------------------------------------------------- */}
      <div className="Competitions-section">
          <h1>Events in Tri-Fest</h1>
          <div>

              

               <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7cuVGXAHBhHRUql9fgbcT6fKVPs6If_1leCNxD5CZDR87Uw/viewform?usp=sf_link"> 
                              <Competition name="Dance" 
               imgSrc={DanceImg} altName="Dance"  competitionID="1" />
               </a>

          

               {/* Coding */}
               <Competition name="Coding" 
                imgSrc={CodingImg} altName="Coding"  competitionID="2" />
               
               
               <Competition name="Singing" 
               imgSrc={SingingImg} altName="Singing" competitionID="3" />
               <Competition name="PPT Presentation" 
               imgSrc={ppt} altName="PPT"  competitionID="4" />
               <Competition name="Group Discussion"  
               imgSrc={GroupDis} altName="Grp" competitionID="5"/>
               <Competition name="E-Sport" imgSrc={PUBG}/>
               {/* <Competition name="Paper-Castle" imgSrc={PaperCastle}/> */}
               <Competition name="Card-Castle" imgSrc={Castle}/>
               <Competition name ="Box-Cricket" imgSrc={boxCricket}/>
               <Competition name="Batminton" imgSrc={batminton}/>
               <Competition name="Rangoli" imgSrc={Rangoli}/>
               <Competition name="Tug Of War" imgSrc={TugOfWar}/>


          </div>
      </div>

      {/* ------------------------------------------------------------------------------------------- */}

      <div className="Competitions-section">
          <h1>Our Photos</h1>
            <div>
              <Photos imgName={Photo1} altName="Image Not "/> 
              <Photos imgName={Photo2} altName="Image Not "/>
              <Photos imgName={Photo3} altName="Image Not "/> 
              <Photos imgName={Photo4} altName="Image Not "/> 
              <Photos imgName={Photo5} altName="Image Not "/> 
              <Photos imgName={Photo6} altName="Image Not "/>
              <Photos imgName={Photo7} altName="Image Not "/> 
 
            </div>
          
      </div>

      {/* ---------------------------------------------------------------------------------- */}


      {/* Commitee Section */}

      <div className="Competitions-section" data-aos="fade-up" >
  
      <h1>BCA Department Committe 2023-2024</h1>

      <div id="CommitteSection">
         <Committe imgSrc={Sahil} name="Sahil R. Kale" altName="President" post="President"/>
         <Committe imgSrc={Neha} name="Neha A. Wakti" altName="Vice President" post="Vice President"/>
         <Committe imgSrc={Akshay} name="Akshay A. Satpute" altName="Vice President" post="Vice President"/>
         <Committe imgSrc={Ziya} name="Mohommad Ziya" altName="Secretary" post="Secretary"/>
         <Committe imgSrc={Ishwari} name="Ishwari Kukde" altName="Join Secretary" post="Join Secretary"/>
         <Committe imgSrc={Gaurav} name="Kamdeo S. Kalaskar" altName="Treasurer" post="Treasurer"/>
         <Committe imgSrc={Abhijit} name="Abhijit K. Devghare" altName="PRO" post="PRO"/>
         <Committe imgSrc={Prathamesh} name="Prathamesh M.Dhore" altName="PRO" post="PRO"/>
         <Committe imgSrc={Pragati} name="Pragati R. Gadge" altName="PRO" post="PRO"/>
         
        
         
        {
          (!more)?<p className="morePara" onClick={()=>{setMore(!more)}} >More</p>:
          <>
            <Committe imgSrc={Saloni} name="Saloni Y.Gaikwad" altName="PRO" post="PRO"/>
            <Committe imgSrc={Purva} name="Purva Parihar" altName="PRO" post="PRO"/>
            <Committe imgSrc={Krishna} name="Krishna M. Bhoyar" altName="PRO" post="PRO"/>
            <Committe imgSrc={Om} name="Om A. Hage" altName="Member" post="Member"/>
            <Committe imgSrc={Prasad} name="Prasad Khedkar" altName="Member" post="Member"/>
            <Committe imgSrc={Keshav} name="Keshav N. Sharma" altName="Member" post="Member"/>
            <Committe imgSrc={Saad} name="Mohommad Saad" altName="Member" post="Member"/>
            <Committe imgSrc={Rahul} name="Rahul B. Chavan" altName="Member" post="Member"/>
            <Committe imgSrc={Srushti} name="Srushti S. Samdure" altName="Member" post="Member"/>
            <Committe imgSrc={Anushka} name="Anushka Bhopale" altName="Member" post="Member"/>
            <Committe imgSrc={Vaidehi} name="Vaidehi M. Chavan" altName="Member" post="Member"/>
            <Committe imgSrc={Rasika} name="Rasika Vaidya" altName="Member" post="Member"/>
            <Committe imgSrc={Anjali} name="Anjali S. Sahagal" altName="Member" post="Member"/>
            <Committe imgSrc={Saloni} name="Saloni Khandarkar" altName="Member" post="Member"/>

            <p className="morePara" onClick={()=>{setMore(!more)}}>See Less</p>
          </>
        }
       

      </div>      

      </div>


      {/* Footer Section */}
       <FooterSec/>
      </>
     )
        

}

export default Home