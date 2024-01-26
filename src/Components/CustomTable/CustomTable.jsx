import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { ReactComponent as NoData } from "./no-data.svg";
import { Skeleton } from "@mui/material";
function descendingComparator(a, b, orderBy) {
  let aVal = a[orderBy];
  let bVal = b[orderBy];
  if (aVal?.props) aVal = aVal.props.name;
  if (bVal?.props) bVal = bVal.props.name;
  if (bVal <= aVal) {
    return -1;
  }
  if (bVal > aVal) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  console.log(stabilizedThis);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    showCheckbox,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        height: "70px",
      }}
    >
      {numSelected === 0 && (
        <TableRow sx={{ width: "100%" }}>
          {showCheckbox && (
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all",
                }}
              />
            </TableCell>
          )}

          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={"left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {!headCell.disableSorting && (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  <Typography
                    variant="h6"
                    component="p"
                    fontSize="1em"
                    fontWeight="600"
                  >
                    {headCell.label}
                  </Typography>

                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )}
              {headCell.disableSorting && (
                <Typography variant="h6" component="p">
                  {headCell.label}
                </Typography>
              )}
            </TableCell>
          ))}
        </TableRow>
      )}
    </TableHead>
  );
}

function EnhancedToolbar(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <>
      {numSelected > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "70px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: (theme) => theme.palette.background.b1,
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
          }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all",
            }}
          />
          <Typography
            sx={{ flex: "1 1 100%", paddingLeft: "1em" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </>
  );
}
function LoadingSkeleton() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: (theme) => theme.palette.background.b1,
      }}
    >
      {["s1", "s2", "s3"].map((id) => (
        <Box
          key={id}
          sx={{
            height: "65px",
            borderBottom: (theme) =>
              `1px solid ${theme.palette.primary.border}`,
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            animation="wave"
            height="100%"
            sx={{
              backgroundColor: (theme) => theme.palette.background.b1,
              "::after": {
                animationDuration: "1s",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
function CustomTable({ headCells, rows, showCheckbox, loading, error }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );
  return (
    <Paper
      sx={{ width: "100%", mb: 2, borderRadius: "8px", overflow: "hidden" }}
    >
      <TableContainer sx={{ position: "relative" }}>
        <EnhancedToolbar
          onSelectAllClick={handleSelectAllClick}
          numSelected={selected.length}
          rowCount={rows.length}
        />
        <Table
          sx={{
            minWidth: 750,
            backgroundColor: (theme) => theme.palette.background.b1,
            position: "relative",
            zIndex: 1,
            "& .MuiTableCell-root": {
              borderBottomColor: (theme) => theme.palette.primary.border,
            },
          }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            rows={rows}
            headCells={headCells}
            rowCount={rows.length}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            showCheckbox={showCheckbox}
          />
          {!loading && rows.length > 0 && (
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    {showCheckbox && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onClick={(event) => handleClick(event, row.id)}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    )}

                    {Object.values(row).map((value, index) => {
                      return (
                        index !== 0 && (
                          <TableCell align="left" key={row.id + index}>
                            {value}
                          </TableCell>
                        )
                      );
                    })}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {loading && <LoadingSkeleton />}
      {!loading && error && (
        <Box
          py="3em"
          sx={{ backgroundColor: (theme) => theme.palette.background.b1 }}
        >
          <Typography
            variant="body1"
            component="p"
            textAlign="center"
            color="error"
          >
            There was an error fetching data!
          </Typography>
        </Box>
      )}
      {!loading && !error && rows.length === 0 && (
        <Box
          py="3em"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{ backgroundColor: (theme) => theme.palette.background.b1 }}
        >
          <NoData style={{ width: "70px" }} />
          <Typography color="#1bb385" textAlign="center" variant="h6" pt="1em">
            No Data Found!
          </Typography>
        </Box>
      )}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ backgroundColor: (theme) => theme.palette.background.b1 }}
      />
    </Paper>
  );
}
export default CustomTable;
