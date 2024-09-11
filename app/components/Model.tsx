import React, { useState } from "react";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";
import OutsideClickHandler from "react-outside-click-handler";

const emailSchema = z.string().email("Invalid email address");

interface ModelProps {
  setVisible: (visible: boolean) => void;
}

const Model = ({ setVisible }: ModelProps) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOTP, setSendOTP] = useState(false);

  const handleEmailSubmit = () => {
    try {
      emailSchema.parse(email);
      setSendOTP(true);
      setOtp("");
      toast.success("OTP sent successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.warn(error.errors[0].message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="model-container">
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div className="model">
          <h1 className="title">Enter your e-mail</h1>
          <input
            type="text"
            className="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!sentOTP && (
            <button className="submit" onClick={handleEmailSubmit}>
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
                  marginBottom: "15px",
                }}
              />
              <button className="submit" onClick={() => setVisible(false)}>
                Submit your OTP
              </button>
            </>
          )}
        </div>
      </OutsideClickHandler>
      <ToastContainer />
    </div>
  );
};

export default Model;
