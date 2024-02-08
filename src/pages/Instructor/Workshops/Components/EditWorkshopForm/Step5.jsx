import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank,
} from "@mui/icons-material";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import dayjs from "dayjs";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import React from "react";
const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Step5({ formik }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" gap="1em">
        {/*----------------------------------Duration in weeks ------------------------*/}
        <TextField
          id="durationInWeek"
          label="Workshop Duration"
          variant="outlined"
          placeholder="enter the duration of the workshop in weeks"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.durationInWeek}
          error={
            formik.errors.durationInWeek !== undefined &&
            formik.touched.durationInWeek
          }
          helperText={
            formik.errors.durationInWeek && formik.touched.durationInWeek
              ? formik.errors.durationInWeek
              : ""
          }
        />
        {/*----------------------------------Start Day ------------------------*/}
        <DatePicker
          value={dayjs(formik.values.startDay)}
          onChange={(newValue) => {
            formik.setFieldValue("startDay", newValue.toJSON());
          }}
          label="Start Day"
          openTo="year"
        />
        {/*----------------------------------Session Time ------------------------*/}
        <TimePicker
          label="Session Time"
          value={dayjs(formik.values.sessionTime)}
          onChange={(newValue) => {
            formik.setFieldValue("sessionTime", newValue.toJSON());
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
        {/*----------------------------------Session Days ------------------------*/}
        <Autocomplete
          multiple
          id="schedule"
          value={formik.values.schedule}
          onChange={(event, newValue) => {
            formik.setFieldValue("schedule", newValue);
          }}
          onBlur={formik.handleBlur}
          options={weekDays}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Session Days"
              placeholder="choose the days of your sessions"
              error={
                formik.errors.schedule !== undefined && formik.touched.schedule
              }
              helperText={
                formik.errors.schedule && formik.touched.schedule
                  ? formik.errors.schedule
                  : ""
              }
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default Step5;
