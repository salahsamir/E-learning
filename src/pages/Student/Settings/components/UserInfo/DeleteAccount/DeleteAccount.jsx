import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useDeleteAccount } from "api/global/profile.tsx";
import React, { useState } from "react";
import DeleteDialog from "shared/ui/DeleteDialog";
const DeleteAccount = () => {
  const [open, setOpen] = useState(false);
  const { mutate: deleteAccount } = useDeleteAccount({
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <Box p="24px 16px ">
      <Typography variant="body1" mb="16px">
        Are you sure you want to delete your account? This action cannot be
        undone, and all associated data will be permanently removed from our
        system.
      </Typography>
      <List
        sx={{
          listStyle: "inside",
        }}
      >
        Please consider the following before proceeding:
        <ListItem>
          1) Loss of Access: You will lose access to your account, including all
          course progress, achievements, and any associated data.
        </ListItem>
        <ListItem>
          2) No Recovery: Once your account is deleted, it cannot be restored.
          You will need to create a new account if you wish to use our services
          in the future.
        </ListItem>
        <ListItem>
          3) Loss of Content: Any content you have created or contributed,
          including discussions, posts, projects, and feedback, will be
          permanently deleted.
        </ListItem>
      </List>
      <Button
        variant="contained"
        color="error"
        sx={{ float: "right", mb: 2 }}
        onClick={() => setOpen(true)}
      >
        Delete Account
      </Button>
      <DeleteDialog
        open={open}
        setOpen={setOpen}
        title="account"
        onDelete={() => deleteAccount()}
      />
    </Box>
  );
};

export default DeleteAccount;
