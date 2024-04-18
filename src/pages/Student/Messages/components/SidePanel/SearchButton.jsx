import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchUser } from "api/global/profile.tsx";
import React from "react";

const SearchButton = () => {
  const {
    mutate: searchUser,
    data: usersList,
    isPending: loadingUsers,
  } = useSearchUser();
  const queryClient = useQueryClient();
  const handleSelectUser = (selected) => {
    console.log(selected);
  };
  const options = Array.isArray(usersList) ? [...usersList] : [];
  return (
    <Autocomplete
      id="search-user"
      options={options}
      autoComplete
      autoHighlight
      clearOnBlur={true}
      loading={loadingUsers}
      freeSolo
      filterSelectedOptions
      noOptionsText="no users found"
      disableClearable
      getOptionLabel={(option) => option?.userName}
      onChange={(event, newValue) => {
        handleSelectUser(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        searchUser({ userName: newInputValue, type: "user" });
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="search.." fullWidth size="small" />
      )}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          key={(option._id || Math.random()) + Math.random()}
        >
          <Grid container alignItems="center">
            <Grid item display="flex" alignItems="center" gap="8px">
              <Avatar src={option?.profilePic?.url} />
              <Typography>{option?.userName}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            label={option?.userName}
            icon={
              <Avatar
                src={option?.profilePic?.url}
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

export default SearchButton;
