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
} from "@mui/material";
import { useRefund } from "api/student/billing.tsx";
import React from "react";

const DataRow = ({ item }) => {
  const { mutate: refund, isPending: loadingRefund } = useRefund();
  const handleRefund = (transactionId) => {
    refund({ transactionId });
  };
  return (
    <TableRow
      sx={{
        "& td": {
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        },
        "&:last-child td": {
          border: 0,
        },
      }}
    >
      <TableCell>{item._id}</TableCell>
      <TableCell>{item.price + " EGP"}</TableCell>
      <TableCell>
        {new Date(item.updatedAt).toLocaleString("en-us", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>
        <LoadingButton
          variant="contained"
          aria-label="refund"
          onClick={() => handleRefund(item._id)}
          loading={loadingRefund}
          sx={{
            borderRadius: "20px",
          }}
        >
          Refund
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};
const TransactionsTable = ({ transactions }) => {
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
            <TableCell>Order Id</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((item, index) => (
            <DataRow key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
      {transactions.length === 0 && (
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
