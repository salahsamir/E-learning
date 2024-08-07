import { Typography, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { usePublishWorkshop } from "api/instructor/workshops.tsx";
import useGetParams from "hooks/useGetParams";
function Step6({ formik }) {
  const paramList = useGetParams();
  const { mutate: publishWorkshop, isPending } = usePublishWorkshop({
    onSuccess: () => formik.setFieldValue("status", "Pending"),
  });
  if (formik.values.status === "Draft") {
    return (
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Ready to publish your course?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
          maxWidth="600px"
          color="text.secondary"
        >
          By publishing your course, you're inviting individuals to embark on a
          journey of self-improvement, and that's a privilege and a
          responsibility. So, be confident in your content, be responsive to
          your students, and be ready to inspire and empower. You have the
          chance to make a lasting impact, and your course is the vessel through
          which knowledge and transformation will flow. Embrace this opportunity
          with pride and dedication.
        </Typography>
        <Box display="flex" gap="1em" pt="2em">
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            type="button"
            loading={isPending}
            onClick={() => publishWorkshop(paramList[1])}
          >
            Publish
          </LoadingButton>
        </Box>
      </Box>
    );
  }

  if (formik.values.status === "Pending") {
    return (
      <Box display="flex" alignItems="center" flexDirection="column" py="2em">
        <AccessTimeIcon
          color="red"
          sx={{
            fontSize: {
              xs: "4em",
              sm: "5em",
            },
            color: "primary.dark",
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 1, mt: 2 }}
          textAlign="center"
        >
          Your Course is under review
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
          color="text.secondary"
          textAlign="center"
          maxWidth="518px"
        >
          Your course is currently in the review stage, where it's being
          carefully assessed and examined for quality and accuracy. This process
          is part of ensuring that the content meets the necessary standards and
          aligns with the learning objectives. Once the review is complete, your
          course will be published.
        </Typography>
      </Box>
    );
  }
  if (formik.values.status === "Published") {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" py="2em">
        <CheckCircleIcon
          sx={{ fontSize: { xs: "4em", sm: "5em" }, color: "primary.dark" }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 1, mt: 2 }}
          textAlign="center"
        >
          Your course was published
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
          color="text.secondary"
          maxWidth="370px"
          textAlign="center"
        >
          Your course has been successfully released, ready for students to
          engage with its content and embark on their learning journey.
        </Typography>
      </Box>
    );
  }
}

export default Step6;
