import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import PrivateText from "./Privatetext";

import Signup from "./Signup";

const User = ({ currUser, setCurrUser }) => {
  const [show] = useState(true);

  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );

  return (
    <div>
      {show ? (
        <Signup setCurrUser={setCurrUser} />
      ) : (
        <Login setCurrUser={setCurrUser} />
      )}
    </div>
  );
};
export default User;
