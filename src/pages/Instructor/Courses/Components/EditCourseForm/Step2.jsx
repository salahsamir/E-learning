import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  createFilterOptions,
} from "@mui/material";
import React from "react";
import useGetData from "../../../../../hooks/useGetData";
import { BaseApi } from "../../../../../util/BaseApi";
const filter = createFilterOptions();

function Step2({ formik }) {
  const { data: categoriesData } = useGetData(BaseApi + "/category");
  const categoryList = categoriesData?.category;
  const levelList = ["Beginner", "Intermediate", "Expert", "All Levels"];
  console.log(formik);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1em"
      sx={{
        "& MuiPaper-root": {
          backgroundColor: "red",
        },
      }}
    >
      {/*----------------------------------Category ------------------------*/}
      <FormControl
        fullWidth
        error={formik.errors.category !== undefined && formik.touched.category}
      >
        <InputLabel id="select-category">Category</InputLabel>
        <Select
          labelId="select-category"
          id="category"
          label="Category"
          onChange={(event) =>
            formik.setFieldValue("category", event.target.value)
          }
          onBlur={formik.handleBlur}
          value={formik.values.category}
          error={
            formik.errors.category !== undefined && formik.touched.category
          }
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: (theme) => theme.palette.background.b1,
              },
            },
          }}
        >
          {categoryList?.map((category) => (
            <MenuItem value={category._id} key={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        {formik.errors.category && formik.touched.category && (
          <FormHelperText>{formik.errors.category}</FormHelperText>
        )}
      </FormControl>
      {/*----------------------------------Subcategory ------------------------*/}
      <FormControl
        fullWidth
        error={
          formik.errors.subcategory !== undefined && formik.touched.subcategory
        }
      >
        <InputLabel id="select-subcategory">Subcategory</InputLabel>
        <Select
          labelId="select-subcategory"
          id="subcategory"
          label="Subcategory"
          onChange={(event) =>
            formik.setFieldValue("subcategory", event.target.value)
          }
          onBlur={formik.handleBlur}
          value={formik.values.subcategory}
          error={
            formik.errors.subcategory !== undefined &&
            formik.touched.subcategory
          }
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: (theme) => theme.palette.background.b1,
              },
            },
          }}
        >
          {categoryList
            ?.find((ele) => ele._id === formik.values.category)
            ?.subCategory.map((category) => (
              <MenuItem value={category._id} key={category._id}>
                {category.name}
              </MenuItem>
            ))}
        </Select>
        {formik.errors.subcategory && formik.touched.subcategory && (
          <FormHelperText>{formik.errors.subcategory}</FormHelperText>
        )}
      </FormControl>
      {/*----------------------------------Level ------------------------*/}
      <FormControl
        fullWidth
        error={formik.errors.level && formik.touched.level}
      >
        <InputLabel id="select-level">Level</InputLabel>
        <Select
          labelId="select-level"
          id="level"
          label="Level"
          onChange={(event) =>
            formik.setFieldValue("level", event.target.value)
          }
          onBlur={formik.handleBlur}
          value={formik.values.level}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: (theme) => theme.palette.background.b1,
              },
            },
          }}
        >
          {levelList.map((level) => (
            <MenuItem value={level} key={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
        {formik.errors.level && formik.touched.level && (
          <FormHelperText>{formik.errors.level}</FormHelperText>
        )}
      </FormControl>
      {/*----------------------------------language ------------------------*/}
      <Autocomplete
        multiple
        id="language"
        options={languageList.map((option) => option)}
        value={
          formik.values.language !== "" ? formik.values.language.split(",") : []
        }
        onChange={(event, newValue) => {
          formik.setFieldValue("language", newValue.join(","));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="language"
            placeholder="Add language"
            onBlur={formik.handleBlur}
            error={
              formik.errors.language !== undefined && formik.touched.language
            }
            helperText={
              formik.errors.language && formik.touched.language
                ? formik.errors.language
                : ""
            }
          />
        )}
      />
      {/*----------------------------------Tags ------------------------*/}
      <Autocomplete
        multiple
        id="tags"
        freeSolo
        options={tagsList.map((option) => option)}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option);
          if (inputValue !== "" && !isExisting) {
            filtered.push(`Add "${inputValue}"`);
          }

          return filtered;
        }}
        value={formik.values.tags}
        onChange={(event, newValue) => {
          let newArr = [...newValue];
          if (newValue[newValue.length - 1].startsWith('Add "')) {
            newArr = newArr.slice(0, -1);
            newArr.push(
              newValue[newValue.length - 1].split(" ")[1].replaceAll('"', "")
            );
          }
          formik.setFieldValue("tags", newArr);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tags"
            placeholder="Add tag"
            onBlur={formik.handleBlur}
            error={formik.errors.tags !== undefined && formik.touched.tags}
            helperText={
              formik.errors.tags && formik.touched.tags
                ? formik.errors.tags
                : ""
            }
          />
        )}
      />
    </Box>
  );
}

export default Step2;

const languageList = [
  "English",
  "Spanish",
  "Mandarin Chinese",
  "Hindi",
  "Arabic",
  "French",
  "Russian",
  "Portuguese",
  "Bengali",
  "German",
  "Japanese",
  "Punjabi",
  "Javanese",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
  "Turkish",
  "Italian",
  "Vietnamese",
];
const tagsList = [];