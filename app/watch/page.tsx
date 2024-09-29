"use client";

import React, { use, useState } from "react";
import PassAuth from "./PassAuth";
import WatchPage from "./WatchPage";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(process.env.ADMIN_USERNAMEst);
  console.log(process.env.ADMIN_PASSWORD);

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setLoggedIn(true);
    }
  };
  return (
    <div className="watchPage">
      {loggedIn ? (
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
