import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSearchUser } from "api/global/profile.tsx";
import React from "react";

const InstructorsInput = ({ formik }) => {
  const {
    mutate: searchUser,
    data: usersList,
    isPending: loadingUsers,
  } = useSearchUser();
  const selectedInstructors = formik.values.instructors || [];
  const setSelectedInstructors = (value) => {
    formik.setFieldValue("instructors", value);
  };
  const options = Array.isArray(usersList)
    ? [...usersList, ...selectedInstructors]
    : [...selectedInstructors];
  console.log(selectedInstructors);
  return (
    <Autocomplete
      id="google-map-demo"
      sx={{ width: 300 }}
      options={options}
      autoComplete
      autoHighlight
      multiple
      clearOnBlur={false}
      loading={loadingUsers}
      includeInputInList
      filterSelectedOptions
      value={selectedInstructors}
      noOptionsText="no users found"
      disableClearable
      getOptionLabel={(option) => option?.user?.userName}
      onChange={(event, newValue) => {
        setSelectedInstructors(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        searchUser(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Add instructor" fullWidth />
      )}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          key={(option.user?.id || Math.random()) + Math.random()}
        >
          <Grid container alignItems="center">
            <Grid item display="flex" alignItems="center" gap="8px">
              <Avatar src={option?.user?.profilePic?.url} />
              <Typography>{option?.user?.userName}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            label={option?.user?.userName}
            icon={
              <Avatar
                src={option?.user?.profilePic?.url}
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
            }
          />
        ))
      }
    />
  );
};

export default InstructorsInput;
