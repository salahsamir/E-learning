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
import useGetData from "hooks/useGetData";
import React from "react";

const filter = createFilterOptions();

function Step2({ formik }) {
  const {
    data: categoriesData,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetData("category");
  const categoryList = categoriesData?.category;
  const levelList = ["Beginner", "Intermediate", "Expert", "All Levels"];
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
        error={
          formik.errors.categoryId !== undefined && formik.touched.categoryId
        }
      >
        <InputLabel id="select-category">Category</InputLabel>
        <Select
          labelId="select-category"
          id="categoryId"
          label="Category"
          onChange={(event) =>
            formik.setFieldValue("categoryId", event.target.value)
          }
          onBlur={formik.handleBlur}
          value={loadingCategories ? "" : formik.values.categoryId}
          error={
            formik.errors.categoryId !== undefined && formik.touched.categoryId
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
        {formik.errors.categoryId && formik.touched.categoryId && (
          <FormHelperText>{formik.errors.categoryId}</FormHelperText>
        )}
      </FormControl>
      {/*----------------------------------Subcategory ------------------------*/}
      <FormControl
        fullWidth
        error={
          formik.errors.subCategoryId !== undefined &&
          formik.touched.subCategoryId
        }
      >
        <InputLabel id="select-subcategory">Subcategory</InputLabel>
        <Select
          labelId="select-subcategory"
          id="subCategoryId"
          label="Subcategory"
          onChange={(event) =>
            formik.setFieldValue("subCategoryId", event.target.value)
          }
          onBlur={formik.handleBlur}
          value={loadingCategories ? "" : formik.values.subCategoryId}
          error={
            formik.errors.subCategoryId !== undefined &&
            formik.touched.subCategoryId
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
            ?.find((ele) => ele._id === formik.values.categoryId)
            ?.subCategory.map((category) => (
              <MenuItem value={category._id} key={category._id}>
                {category.name}
              </MenuItem>
            ))}
        </Select>
        {formik.errors.subCategoryId && formik.touched.subCategoryId && (
          <FormHelperText>{formik.errors.subCategoryId}</FormHelperText>
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
      {/*----------------------------------Languages ------------------------*/}
      <Autocomplete
        multiple
        id="languages"
        options={languagesList.map((option) => option)}
        value={formik.values.languages}
        onChange={(event, newValue) => {
          formik.setFieldValue("languages", newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Languages"
            placeholder="Add language"
            onBlur={formik.handleBlur}
            error={
              formik.errors.languages !== undefined && formik.touched.languages
            }
            helperText={
              formik.errors.languages && formik.touched.languages
                ? formik.errors.languages
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
          if (newValue[newValue.length - 1]?.startsWith('Add "')) {
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

const languagesList = [
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
