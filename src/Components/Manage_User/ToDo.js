import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.int";

const ToDo = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <button onClick={() => signOut(auth)}>log out</button>
    </>
  );
};

export default ToDo;
