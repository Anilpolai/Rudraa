import "./bloginner.css"
import { SlCalender } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function bloginner (){
    const bloginner= [
        {
        id:1,
        image:"image-1.jpg",
        date:"12 August, 2023",
        h1:"66",
        bparagraph:"Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",

        blueparagraph:" Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.",
 

        secondparagraph:"Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",


        h3:"Conduct replied off led whether?",
        list:"",
        thirdparagraph:" Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.",    
        },

        {
        id:2,
        image:"image-2.jpg",
        date:"12 August, 2023",
        h1:"66",
        bparagraph:"Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.", 

        blueparagraph:" Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.",


        secondparagraph:"Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.",


        h3:"Conduct replied off led whether?",
        list:"",
        thirdparagraph:" Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.",    
        },
    ]



    return <>
        <div className="manin-card">
            {bloginner.map((posts)=> (
                <div className='blog-card-in' key={posts.id}>
                        <img src={posts.image} alt={posts.h3}/>


                    {/* inner-content */}

                <div className="blog-content-in">
                          <div className="blog-meta-in">
                            <span><i><SlCalender/>{posts.date}</i></span>
                          </div>
                
                      
                <p className='b-paragraph-in'>{posts.bparagraph} </p>
                            
                           

                    {/* BOX_BLUE */}

                <div className="blue-paragraph">
                                <h4>{posts.blueparagraph}</h4>
                                <h1>{posts.h1}</h1>    
                            </div>   
                               
                           <p className="second-paragraph"> {posts.secondparagraph} </p>
                           
                           <h3 className="bold-h3">{posts.h3}</h3>   
                                      

                    {/* LIST */}

                <ul className="bl-list">
                                {posts.list}
                                {/* <li>Pretty merits waited six</li>
                                <li>General few civilly amiable pleased account carried.</li>
                                <li>Continue indulged speaking</li>
                                <li>Narrow formal length my highly</li>
                                <li>Occasional pianoforte alteration unaffected impossible</li> */}
                            </ul>           
           
                    
                    {/* third-patagraph*/}

                <p className="third-paragraph">{posts.thirdparagraph}</p>

                            
                    {/* SOCIAL APP */}
                            
                <div className="blog-social-icon">
                                <h4>Share:</h4>
                                <ul className="blog-ul">
                                    <li><a><FaFacebook /></a></li>
                                    <li><a><FaSquareXTwitter /></a></li>
                                    <li><a><FaSquareInstagram /></a></li>
                                    <li><a><FaLinkedin /></a></li>
                                </ul>
                            </div>
                          
                       </div>
                    </div>             
             ))}
               
        </div>
    </>
}

export default bloginner   
                            


                          

 




