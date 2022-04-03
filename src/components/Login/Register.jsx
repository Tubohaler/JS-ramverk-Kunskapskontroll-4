import React from "react";
import { axios } from "axios";
import { register } from "../../api";
import { authState } from "../../recoil/auth/atom";
import { useRecoilValue } from "recoil";

function Register() {
  const auth = useRecoilValue(authState);

  return <div>Register</div>;
}

export default Register;
