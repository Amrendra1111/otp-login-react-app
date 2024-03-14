import { useState } from "react";
import OtpInput from "./OtpInput";
import myVideo from '/src/assets/otpProject.mp4';
import instagram from '/src/assets/instagram.png';
import facebook from '/src/assets/facebook.png';
import twitter from '/src/assets/twitter.png';
function OtpValidation() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const [showOtpInput, setShowOtpInput] = useState(false)
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handlePhoneSubmit = (event) => {
    event.preventDefault()
    //phone number validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }
    
    // if we have nay backend api we can integrate it here
    
    //show OTP field
    setShowOtpInput(true);

  };

  const onOtpSubmit = (otp) => {
    console.log("otp received", otp)
  };

 return (
   <div className="otp-form">
     <div className="sideDiv">
       <video className="video" autoPlay loop muted>
         <source src={myVideo} type="video/mp4" />
       </video>
     </div>
     <div className="rightSideDiv">
       {!showOtpInput ? (
         <form onSubmit={handlePhoneSubmit} className="rightDivContent">
           <label htmlFor="">Log in or Sign up to Continue</label>
           <input
             type="text"
             onChange={handlePhoneNumber}
             value={phoneNumber}
             placeholder="Enter Phone Number"
             maxLength={10}
             className="otpValidation-input"
           />
           <button type="submit" className="submit-btn">
             Submit
           </button>
           <p className="privacy-policy-text">
             By proceeding you confirm that you are above 18 years of age and
             agree to the{" "}
             <a href="#" className="link">
               Privacy Policy{" "}
             </a>
             &{" "}
             <a href="#" className="link">
               Terms of Use.
             </a>
           </p>
           <h3 style={{ color: "#ffffffdc" }}>
             Having trouble logging in?{" "}
             <a href="#" style={{ color: "#ff914ddc" }}>
               Get Help
             </a>{" "}
           </h3>
           <div className="social-media">
             <h5 style={{ color: "#ffffffdc" }}>Follow us:</h5>
             <ul>
               <li>
                 <img src={facebook} style={{ width: "30px" }} alt="facebook" />
               </li>
               <li>
                 <img
                   src={instagram}
                   style={{ width: "30px" }}
                   alt="instagram"
                 />
               </li>
               <li>
                 <img src={twitter} style={{ width: "30px" }} alt="twitter" />
               </li>
             </ul>
           </div>
         </form>
       ) : (
         <div style={{display:"flex", flexDirection:"column",marginTop:"30%"}}>
           <p style={{ color: "white" }} className="otp-page">
             Enter OTP sent to {phoneNumber}
           </p>
           <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
         </div>
       )}
     </div>
   </div>
 );
}

export default OtpValidation