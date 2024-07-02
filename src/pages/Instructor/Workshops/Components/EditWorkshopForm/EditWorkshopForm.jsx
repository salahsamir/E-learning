import { Box, Button } from "@mui/material";
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import Step6 from "./Step6";
import { useUpdateWorkshop } from "api/instructor/workshops.tsx";
const steps = [
  { name: "Basic Information", status: "draft" },
  { name: "Target group", status: "draft" },
  { name: "Promotion", status: "draft" },
  { name: "Price", status: "draft" },
  { name: "Schedule", status: "draft" },
  { name: "Publish", status: "draft" },
];
const get_differece = (a, b) => {
  let result = {};
  Object.keys(a).forEach((key) => {
    if (a[key] !== b[key]) {
      result[key] = a[key];
    }
  });
  return result;
};
function getStepStatus(step, formik) {
  const check_status = (...involved_values) => {
    let status = "completed";
    involved_values.every((value) => {
      if (formik.errors[value]) {
        status = "error";
        return false;
      } else {
        let formikVal = formik.values[value];
        switch (typeof formikVal) {
          case "string":
            if (formikVal === "") {
              status = "draft";
              return false;
            }
            break;
          case "object":
            if (formikVal.length === 0) {
              status = "draft";
              return false;
            }
            break;
          case "undefined":
            status = "draft";
            return false;
          default:
            break;
        }
      }
      return true;
    });
    return status;
  };
  switch (step) {
    case 0:
      return check_status("title", "subtitle", "description", "requirements");
    case 1:
      return check_status(
        "languages",
        "categoryId",
        "subCategoryId",
        "level",
        "tags"
      );
    case 2:
      return check_status("promotionImage", "promotionVideo");
    case 3:
      return check_status("price");

    case 4:
      return check_status(
        "durationInWeek",
        "startDay",
        "sessionTime",
        "schedule"
      );
    case 5:
      return formik.values.status === "Published" ? "completed" : "draft";
    default:
      return "draft";
  }
}
function EditWorkshopForm({ workshop }) {
  const { mutate: updateWorkshop, isPending: formLoading } =
    useUpdateWorkshop();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      title: workshop.title,
      subtitle: workshop.subtitle || "",
      requirements: workshop.requirements || [],
      languages: workshop.languages || [],
      categoryId: workshop.categoryId || "",
      subCategoryId: workshop.subCategoryId || "",
      level: workshop.level || "",
      price: workshop.price || "",
      coupons: workshop.coupons || [],
      description: workshop.description || "",
      tags: workshop.tags || [],
      promotionImage: workshop.promotionImage || "",
      promotionVideo: workshop.promotionVideo || "",
      durationInWeek: workshop.durationInWeek || "",
      startDay: workshop.startDay,
      sessionTime: workshop.sessionTime,
      schedule: workshop.schedule || [],
      status: workshop.status || "draft",
    },
    enableReinitialize: true,
    validationSchema:
      workshop.status !== "Published"
        ? yup.object().shape({
            title: yup.string().required("Title is required"),
            price: yup.number("Enter valid number"),
            discount: yup.number("Enter valid number"),
          })
        : yup.object().shape({
            title: yup.string().required("Title is required"),
            subtitle: yup.string().required("Subtitle is required"),
            requirements: yup.array().required("Requirements is required"),
            description: yup.string().required("Description is required"),
            languages: yup.array().required("Language is required"),
            categoryId: yup.string().required("Category is required"),
            subCategoryId: yup.string().required("Subcategory is required"),
            level: yup.string().required("Level is required"),
            tags: yup.array().required("Tags is required"),
            price: yup.number().required("Enter valid number"),
            coupons: yup.array().required("Enter valid number"),
            promotionImage: yup
              .object()
              .required("Promotion Image is required"),
            promotionVideo: yup
              .object()
              .required("Promotion Video is required"),
            durationInWeek: yup.number().required("Duration is required"),
            startDay: yup.string().required("Start Day is required"),
            sessionTime: yup.string().required("Session Time is required"),
            schedule: yup.array().required("Schedule is required"),
          }),
    onSubmit: (values) => {
      const updatedValues = get_differece(values, formik.initialValues);
      delete updatedValues.status;
      delete updatedValues.promotionImage;
      delete updatedValues.promotionVideo;
      delete updatedValues.coupons;
      updateWorkshop({ id: workshop._id, data: updatedValues });
    },
  });
  const tabsList = [
    <Step1 formik={formik} />,
    <Step2 formik={formik} />,
    <Step3 formik={formik} />,
    <Step4 formik={formik} />,
    <Step5 formik={formik} />,
    <Step6 formik={formik} />,
  ];

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.background.b1,
          px: "1em",
          py: "3em",
          borderRadius: "8px",
        }}
      >
        <Box width={{ xs: "100%", sm: "90%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{ flexWrap: "wrap", rowGap: "1em", pb: "3em" }}
          >
            {steps.map((item, index) => {
              const stepStatus = getStepStatus(index, formik);
              return (
                <Step
                  key={item.name}
                  completed={stepStatus === "completed"}
                  sx={{
                    "& circle": {
                      color:
                        stepStatus === "error"
                          ? (theme) => theme.palette.error.main
                          : "inherit",
                    },
                  }}
                >
                  <StepButton
                    color="inherit"
                    onClick={() => setActiveStep(index)}
                  >
                    {item.name}
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
          {tabsList[activeStep]}
          {activeStep !== 5 && (
            <Box display="flex" justifyContent="flex-end" gap="1em" pt="2em">
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/instructor/courses/" + workshop._id)}
              >
                Cancel
              </Button>
              <LoadingButton
                variant="contained"
                type="submit"
                loading={formLoading}
              >
                Save
              </LoadingButton>
            </Box>
          )}
        </Box>
      </Box>
      {/* <ErrorDialog
        open={errorDialogOPen}
        setOpen={setErrorDialogOpen}
        title={"You must enter all the information"}
      /> */}
    </Box>
  );
}

export default EditWorkshopForm;
