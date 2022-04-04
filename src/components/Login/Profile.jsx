import React from "react";
import { authState } from "../../recoil/auth/atom";
import { useRecoilValue } from "recoil";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Profile() {
  const { user } = useRecoilValue(authState);

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Role:</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Username:</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Password:</TableCell>
              <TableCell>{user.password}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Name:</TableCell>
              <TableCell>{user.name.firstname}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Lastname:</TableCell>
              <TableCell>{user.name.lastname}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Adress:</TableCell>
              <TableCell>
                {user.address.street}: {user.address.number}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>City:</TableCell>
              <TableCell>{user.address.city}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Zipcode:</TableCell>
              <TableCell>{user.address.zipcode}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Phonenumber:</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Profile;
