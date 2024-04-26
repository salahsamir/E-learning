import { Box, Button, Switch, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { get_obj_diff } from "util/common.ts";

const SwitchLabel = ({ htmlFor, children }) => {
  return (
    <Typography
      variant="subtitle1"
      fontWeight="500"
      mb="16px"
      component="label"
      htmlFor={htmlFor}
    >
      {children}
    </Typography>
  );
};
const CustomSwitch = ({ formik, id }) => {
  return (
    <Switch
      checked={formik.values[id]}
      name={id}
      id={id}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  );
};
const Communication = () => {
  const formik = useFormik({
    initialValues: {
      notifyMention: true,
      notifyMessage: true,
      emailCourseMaterials: false,
      sendDailySchedule: false,
      emailCourseProgress: false,
      notifySuspiciousActivity: false,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(get_obj_diff(formik.initialValues, values));
    },
  });
  return (
    <Box p="16px 24px" component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h6" fontWeight="500" mb="16px">
        Communication Preferences
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="notifyMention">
          Notify me when someone mentions or replies to me in a discussion
        </SwitchLabel>
        <CustomSwitch formik={formik} id="notifyMention" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="notifyMessage">
          Notify me when someone sends me a message
        </SwitchLabel>
        <CustomSwitch formik={formik} id="notifyMessage" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="emailCourseMaterials">
          Email me when new course materials, lectures, or resources are added
        </SwitchLabel>
        <CustomSwitch formik={formik} id="emailCourseMaterials" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="sendDailySchedule">
          Send me a reminder of my daily schedule
        </SwitchLabel>
        <CustomSwitch formik={formik} id="sendDailySchedule" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="emailCourseProgress">
          Email me periodic updates on my course progress or completion status
        </SwitchLabel>
        <CustomSwitch formik={formik} id="emailCourseProgress" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <SwitchLabel htmlFor="notifySuspiciousActivity">
          Notify me of any suspicious activity or changes to my account
          settings.
        </SwitchLabel>
        <CustomSwitch formik={formik} id="notifySuspiciousActivity" />
      </Box>
      <Button variant="outlined" color="primary" mt="16px" type="submit">
        Save Changes
      </Button>
    </Box>
  );
};

export default Communication;
