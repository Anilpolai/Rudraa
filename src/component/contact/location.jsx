import "./location.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

function Location() {
  return (
    <div className="location">
      <div className="contact-container">
        <h1 className="title">Find Food Lounge</h1>
        <p className="disc">
          Plan upon yet way get cold spot its week. Almost do am or limits hearts.
          Resolve parties but why she shewing.
        </p>

        <div className="contact-info">
          {/* 📞 Hotline */}
          <div className="info-block">
            <div className="icon i-p">
              <FaPhoneAlt />
            </div>
            <div className="indisc">
              <h4>Hotline</h4>
              <p>+91 9601481587</p>
            </div>
          </div>

          {/* 📍 Location */}
          <div className="info-block">
            <div className="icon i-l">
              <FaLocationDot />
            </div>
            <div className="indisc">
              <h4>Our Location</h4>
              <p>Plot no.36.37  sai shraddha industrial estate, near masama road,olpad,surat 394107</p>
            </div>
          </div>

          {/* 📧 Email */}
          <div className="info-block">
            <div className="icon i-e">
              <IoIosMailOpen />
            </div>
            <div className="indisc">
              <h4>Official Email</h4>
              <p>co-founder@rudraafoods.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
