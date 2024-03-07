import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useGetProfile, useUpdateProfile } from "api/global/profile.tsx";
import { useFormik } from "formik";
import React from "react";
import { countryList } from "shared/data/countries";
import { languagesList } from "shared/data/languages";
const genderList = ["male", "female"];
const Profile = () => {
  const { data: user } = useGetProfile();
  const { mutate: updateProfile, isPending: formLoading } = useUpdateProfile();
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      occupation: user?.occupation || "",
      school: user?.school || "",
      country: user?.country || "",
      language: user?.language || "",
      age: user?.age || "",
      gender: user?.gender || "",
      about: user?.about || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateProfile(values);
    },
  });
  return (
    <Grid2
      component="form"
      container
      p="16px"
      spacing={2}
      onSubmit={formik.handleSubmit}
    >
      <Grid2 xs={12} md={6}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={
            formik.errors.firstName !== undefined && formik.touched.firstName
          }
          helperText={
            formik.errors.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={
            formik.errors.lastName !== undefined && formik.touched.lastName
          }
          helperText={
            formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="occupation"
          label="Occupation"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.occupation}
          error={
            formik.errors.occupation !== undefined && formik.touched.occupation
          }
          helperText={
            formik.errors.occupation && formik.touched.occupation
              ? formik.errors.occupation
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="school"
          label="School"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.school}
          error={formik.errors.school !== undefined && formik.touched.school}
          helperText={
            formik.errors.school && formik.touched.school
              ? formik.errors.school
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <FormControl
          fullWidth
          error={formik.errors.country !== undefined && formik.touched.country}
        >
          <InputLabel id="select-country">Country</InputLabel>
          <Select
            labelId="select-country"
            id="country"
            label="Country"
            onChange={(event) =>
              formik.setFieldValue("country", event.target.value)
            }
            onBlur={formik.handleBlur}
            value={formik.values.country}
            error={
              formik.errors.country !== undefined && formik.touched.country
            }
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: (theme) => theme.palette.background.b1,
                },
              },
            }}
          >
            {countryList.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {formik.errors.country && formik.touched.country && (
            <FormHelperText>{formik.errors.country}</FormHelperText>
          )}
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={6}>
        <FormControl
          fullWidth
          error={
            formik.errors.language !== undefined && formik.touched.language
          }
        >
          <InputLabel id="select-language">Language</InputLabel>
          <Select
            labelId="select-language"
            id="language"
            label="Language"
            onChange={(event) =>
              formik.setFieldValue("language", event.target.value)
            }
            onBlur={formik.handleBlur}
            value={formik.values.language}
            error={
              formik.errors.language !== undefined && formik.touched.language
            }
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: (theme) => theme.palette.background.b1,
                },
              },
            }}
          >
            {languagesList.map((language) => (
              <MenuItem value={language} key={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
          {formik.errors.language && formik.touched.language && (
            <FormHelperText>{formik.errors.language}</FormHelperText>
          )}
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="age"
          label="Age"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          error={formik.errors.age !== undefined && formik.touched.age}
          helperText={
            formik.errors.age && formik.touched.age ? formik.errors.age : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <FormControl
          fullWidth
          error={formik.errors.gender !== undefined && formik.touched.gender}
        >
          <InputLabel id="select-gender">Gender</InputLabel>
          <Select
            labelId="select-gender"
            id="gender"
            label="Gender"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            error={formik.errors.gender !== undefined && formik.touched.gender}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: (theme) => theme.palette.background.b1,
                },
              },
            }}
          >
            {genderList.map((gender) => (
              <MenuItem value={gender} key={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
          {formik.errors.gender && formik.touched.gender && (
            <FormHelperText>{formik.errors.gender}</FormHelperText>
          )}
        </FormControl>
      </Grid2>
      <Grid2 xs={12}>
        <TextField
          id="about"
          label="About"
          variant="outlined"
          fullWidth
          multiline
          minRows={6}
          maxRows={8}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.about}
          error={formik.errors.about !== undefined && formik.touched.about}
          helperText={
            formik.errors.about && formik.touched.about
              ? formik.errors.about
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12}>
        <LoadingButton variant="outlined" type="submit" loading={formLoading}>
          Save
        </LoadingButton>
      </Grid2>
    </Grid2>
  );
};

export default Profile;
