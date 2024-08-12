import { useState } from "react";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log in</button>
      )}
    </nav>
  );
};