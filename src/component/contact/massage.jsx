import "./massage.css"
import { FaTelegramPlane } from "react-icons/fa";


function Massage () {
    return (
        <>
        <div className="main-container">
            <div className="Contact-card">
                <p className="contact-subtitle">
                    <span className="arrow-line"><img src="arrow1.png" alt="" />KEEP IN TOUCH</span>
                        <span className="arrow-line"><img src="arrow2.png" alt="" /></span>
                </p>
                <h3 className="contact-title">Send us a Massage</h3>

                            {/* Form */}

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="name"/>
                    </div>

                    <div className="form-group-double">
                        <input type="email" placeholder="Email*"/>
                        <input type="tel" placeholder="Phone"/>
                    </div>

                    <div className="form-group">
                        <textarea rows="10"  placeholder="Your Massage*">
                        </textarea>                    
                    </div>

                    <button type="submit" className="submit-btn"> 
                        <span><FaTelegramPlane /></span> Get in touch</button>
                </form>
            </div>
        </div>
        
      </>  
    )
}

export default Massage;