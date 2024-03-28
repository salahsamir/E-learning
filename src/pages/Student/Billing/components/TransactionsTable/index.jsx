import { LoadingButton } from "@mui/lab";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  alpha,
} from "@mui/material";
import React from "react";

const TransactionsTable = () => {
  const items = [
    {
      title: "Introduction To Algorithms",
      amount: 100,
      date: "2021-10-01",
      paymentMethod: "Credit Card",
      status: "Success",
    },
    {
      title: "Introduction To Algorithms",
      amount: 100,
      date: "2021-10-01",
      paymentMethod: "Credit Card",
      status: "Success",
    },
    {
      title: "Introduction To Algorithms",
      amount: 100,
      date: "2021-10-01",
      paymentMethod: "Credit Card",
      status: "Success",
    },
  ];
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        overflowX: "auto",
        width: "100%",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                "& td": {
                  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                },
                "&:last-child td": {
                  border: 0,
                },
              }}
            >
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell>{item.status}</TableCell>
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
          ))}
        </TableBody>
      </Table>
      {items.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          No transactions found
        </Box>
      )}
    </TableContainer>
  );
};

export default TransactionsTable;
