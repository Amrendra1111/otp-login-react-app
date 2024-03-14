import { useState, useRef, useEffect } from "react";


const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    //allow only one number in each otp
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    //submit trigger
    const combinedOtp = newOtp.join("")
    if (combinedOtp.length === length)
    onOtpSubmit(combinedOtp);
    
      // move to the next input if current is filled
    if (value && index < length - 1 && inputRefs.current[index+1]) {
      inputRefs.current[index+1].focus()
    }
      
      
  }
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)
    //optional

  }
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
       // move to the previous input if pressing backspace
      inputRefs.current[index-1].focus()
    }
  }
  
  return (
    <>
      <div className="otp-page">
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otpInput"
              ref={(input) => (inputRefs.current[index] = input)}
            />
          );
        })}
      </div>
      <div style={{display:"flex", alignItems:"center",textAlign:"center",justifyContent:"center"}}>
        <button type="button" className="submit-btn">
          Submit
        </button>
      </div>
    </>
  );
}

export default OtpInput