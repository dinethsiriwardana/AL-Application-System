import React, { useState } from "react";
import OtpInput from "react-otp-input";

const Model = () => {
  const [otp, setOtp] = useState("");
  const [sentOTP, setSendOTP] = useState(false);
  return (
    <div className="model-container">
      <div className="model">
        <h1 className="title">Enter your e-mail</h1>
        <input type="text" className="emailInput" />
        {!sentOTP && (
          <button
            className="submit"
            onClick={() => {
              setSendOTP(true);
              setOtp("");
            }}
          >
            Send OTP
          </button>
        )}

        {sentOTP && (
          <>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              renderSeparator={<span>-</span>}
              shouldAutoFocus
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "50px",
                aspectRatio: "1 / 1",
                margin: "auto",
                background: "rgb(34, 34, 34)",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "900",
                marginBlock: "20px",
              }}
            />
            <button className="submit">Submit your OTP</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Model;
