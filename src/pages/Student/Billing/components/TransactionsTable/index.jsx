import { LoadingButton } from "@mui/lab";
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

const TransactionsTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        overflowX: "auto",
        width: "100%",
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Introduction To Algorithms</TableCell>
            <TableCell>100</TableCell>
            <TableCell>2021-10-01</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Success</TableCell>
            <TableCell>
              <LoadingButton
                variant="contained"
                sx={{
                  borderRadius: "20px",
                }}
              >
                Refund
              </LoadingButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Introduction To Algorithms</TableCell>
            <TableCell>100</TableCell>
            <TableCell>2021-10-01</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Success</TableCell>
            <TableCell>
              <LoadingButton
                variant="contained"
                sx={{
                  borderRadius: "20px",
                }}
              >
                Refund
              </LoadingButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Introduction To Algorithms</TableCell>
            <TableCell>100</TableCell>
            <TableCell>2021-10-01</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Success</TableCell>
            <TableCell>
              <LoadingButton
                variant="contained"
                sx={{
                  borderRadius: "20px",
                }}
              >
                Refund
              </LoadingButton>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Introduction To Algorithms</TableCell>
            <TableCell>100</TableCell>
            <TableCell>2021-10-01</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Success</TableCell>
            <TableCell>
              <LoadingButton
                variant="contained"
                sx={{
                  borderRadius: "20px",
                }}
              >
                Refund
              </LoadingButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
