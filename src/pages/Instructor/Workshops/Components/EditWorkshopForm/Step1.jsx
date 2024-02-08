import { Box, Chip, List, ListItem, TextField } from "@mui/material";
import TextEditor from "../../../../../Components/TextEditor/TextEditor";
import { useState } from "react";
import { Add } from "@mui/icons-material";

function Step1({ formik }) {
  const [requirement, setRequirement] = useState("");
  return (
    <Box display="flex" flexDirection="column" gap="1em">
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        error={formik.errors.title !== undefined && formik.touched.title}
        helperText={
          formik.errors.title && formik.touched.title ? formik.errors.title : ""
        }
      />
      <TextField
        id="subtitle"
        label="Subtitle"
        variant="outlined"
        multiline
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subtitle}
        error={formik.errors.subtitle && formik.touched.subtitle !== undefined}
        helperText={
          formik.errors.subtitle && formik.touched.subtitle
            ? formik.errors.subtitle
            : ""
        }
      />
      <Box position="relative">
        <TextField
          id="requirement"
          label="Requirements"
          variant="outlined"
          sx={{ width: "100%" }}
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
          onBlur={formik.handleBlur}
          error={
            formik.errors.requirements !== undefined &&
            formik.touched.requirements
          }
          helperText={
            formik.errors.requirements && formik.touched.requirements
              ? formik.errors.requirements
              : ""
          }
          placeholder="add some requirements"
        />
        <Chip
          label="Add"
          icon={<Add />}
          onClick={(event) => {
            let val = requirement.repeat(1);
            val.trim();
            if (val.length > 0) {
              formik.setFieldValue("requirements", [
                ...formik.values.requirements,
                val,
              ]);
              setRequirement("");
            }
          }}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </Box>
      <List
        disablePadding
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        {formik.values.requirements?.map((requirement, index) => (
          <ListItem key={"requirement" + index} sx={{ width: "fit-content" }}>
            <Chip
              label={requirement}
              onDelete={() => {
                formik.setFieldValue(
                  "requirements",
                  formik.values.requirements.filter(
                    (ele) => ele !== requirement
                  )
                );
              }}
            />
          </ListItem>
        ))}
      </List>
      <TextEditor
        id="description"
        label="Description"
        sx={{ width: "100%", height: "450px" }}
        onBlur={() => {
          formik.setFieldTouched("description");
        }}
        onChange={(value) => {
          formik.setFieldValue("description", value);
        }}
        value={formik.values.description}
        placeholder="Write a description for your course..."
      />
    </Box>
  );
}

export default Step1;
