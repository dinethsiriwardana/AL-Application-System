"use client";

import React, { useState, useEffect } from "react";
import PassAuth from "./PassAuth";
import WatchPage from "./WatchPage";
import Cookies from "js-cookie";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    const storedPassword = Cookies.get("password");

    if (storedUsername && storedPassword) {
      if (storedUsername === "admin" && storedPassword === "wod#Nm^qzBg41Oy2") {
        setLoggedIn(true);
      }
    }
  }, []);

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (username === "admin" && password === "wod#Nm^qzBg41Oy2") {
      setLoggedIn(true);
      Cookies.set("username", username, { expires: 7 });
      Cookies.set("password", password, { expires: 7 });
    }
  };

  return (
    <div className="watchPage">
      {!loggedIn ? (
        <PassAuth
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <WatchPage />
      )}
    </div>
  );
};

export default Page;
