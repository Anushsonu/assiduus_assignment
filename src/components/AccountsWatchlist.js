import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const AccountsWatchlist = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex justify-between items-center px-5 py-4 border-gray-200 border-b-[1px]">
        <div className="text-xl font-semibold">Accounts watchlist</div>
      </div>
      <div className="w-full py-2 px-5">
        {/* <TableContainer component={Paper}> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ border: "none", color: "#c0c0c0 " }}
              >
                Account
              </TableCell>
              <TableCell
                sx={{ border: "none", color: "#c0c0c0 " }}
                align="right"
              >
                This month
              </TableCell>
              <TableCell
                sx={{ border: "none", color: "#c0c0c0 " }}
                align="right"
              >
                YTD
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: "700",
                    padding: "0rem",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", fontSize: "1rem", fontWeight: "700" }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: "none", fontSize: "1rem", fontWeight: "700" }}
                >
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainer> */}
      </div>
    </div>
  );
};

export default AccountsWatchlist;
