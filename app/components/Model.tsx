import React, { useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";
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
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async () => {
    try {
      emailSchema.parse(email);

      setLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        toast.warn("Something went wrong!", {
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

      const data = await response.json();
      console.log(data);

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
      setLoading(false);
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
      setLoading(false);
    } finally {
      setLoading(false);
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
            <button
              className="submit"
              onClick={handleEmailSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send OTP"}
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
    </div>
  );
};

export default Model;
