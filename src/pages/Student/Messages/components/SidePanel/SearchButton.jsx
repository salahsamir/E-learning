import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useGetChatByUser } from "api/global/messages.tsx";
import { useSearchUser } from "api/global/profile.tsx";
import useGetParams from "hooks/useGetParams";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const navigate = useNavigate();
  const params = useGetParams();
  const [searchValue, setSearchValue] = useState(null);
  const {
    mutate: searchUser,
    data: usersList,
    isPending: loadingUsers,
  } = useSearchUser();
  const { mutate: getChat } = useGetChatByUser({
    onSuccess: (chat) => {
      console.log(chat);
      navigate(
        `/${
          params[params.length - 2] === "instructor" ? "instructor" : "student"
        }/messages/${chat._id}`
      );
      setSearchValue(null);
    },
  });
  const handleSelectUser = (selected) => {
    if (selected) {
      getChat({ userId: selected._id });
    }
  };
  const options = Array.isArray(usersList) ? [...usersList] : [];
  return (
    <Autocomplete
      id="search-user"
      value={searchValue}
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
        <TextField
          {...params}
          placeholder="search.."
          fullWidth
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  mr: 0,
                }}
              >
                <Search />
              </InputAdornment>
            ),
          }}
        />
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
