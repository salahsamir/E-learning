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
import { useUpdateCourse } from "api/instructor/courses.tsx";
const steps = [
  { name: "Basic Information", status: "draft" },
  { name: "Target group", status: "draft" },
  { name: "Promotion", status: "draft" },
  { name: "Price", status: "draft" },
  { name: "Publish", status: "draft" },
];
function getStepStatus(step, formik) {
  switch (step) {
    case 0:
      if (
        formik.errors.title ||
        formik.errors.subtitle ||
        formik.errors.description
      )
        return "error";
      else if (
        formik.values.title !== "" &&
        formik.values.subtitle !== "" &&
        formik.values.description !== ""
      )
        return "completed";
      else return "draft";
    case 1:
      if (
        formik.errors.category ||
        formik.errors.subCategory ||
        formik.errors.level ||
        formik.errors.language ||
        formik.errors.tags
      )
        return "error";
      else if (
        formik.values.category !== "" &&
        formik.values.subCategory !== "" &&
        formik.values.level !== "" &&
        formik.values.language !== "" &&
        formik.values.tags !== ""
      )
        return "completed";
      else return "draft";
    case 2:
      if (formik.errors.promotionImage || formik.errors.promotionVideo)
        return "error";
      else if (
        formik.values.promotionImage !== "" &&
        formik.values.promotionVideo !== ""
      )
        return "completed";
      else return "draft";
    case 3:
      if (formik.errors.price || formik.errors.discount) return "error";
      else if (formik.values.price !== "" && formik.values.discount !== "")
        return "completed";
      else return "draft";

    case 4:
      if (formik.errors.status) return "error";
      else if (formik.values.status === "Published") return "completed";
      else return "draft";
    default:
      return "draft";
  }
}
function EditCourseForm({ course }) {
  const { mutate: editCourse, isPending: formLoading } = useUpdateCourse({
    onSuccess: () => setActiveStep(4),
  });
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      title: course.title,
      subtitle: course.subtitle || "",
      language: course.language || "",
      category: course.category || "",
      subCategory: course.subCategory || "",
      level: course.level || "",
      price: course.price || "",
      discount: course.discount || "",
      description: course.description || "",
      tags: course.tags || "",
      promotionImage: course.coverImageUrl || "",
      promotionVideo: course.promotionalVideoUrl || "",
      status: course.status || "draft",
    },
    enableReinitialize: true,
    validationSchema:
      course.status !== "published"
        ? yup.object().shape({
            title: yup.string().required("Title is required"),
            price: yup.number("Enter valid number"),
            discount: yup.number("Enter valid number"),
          })
        : yup.object().shape({
            title: yup.string().required("Title is required"),
            subtitle: yup.string().required("Subtitle is required"),
            description: yup.string().required("Description is required"),
            language: yup.string().required("Language is required"),
            category: yup.string().required("Category is required"),
            subCategory: yup.string().required("Subcategory is required"),
            level: yup.string().required("Level is required"),
            price: yup.number().required("Enter valid number"),
            discount: yup.number().required("Enter valid number"),
            tags: yup.string().required("Tags is required"),
            promotionImage: yup
              .string()
              .required("Promotion Image is required"),
            promotionVideo: yup
              .string()
              .required("Promotion Video is required"),
          }),
    onSubmit: (values) => {
      editCourse({ id: course._id, data: values });
    },
  });

  const tabsList = [
    <Step1 formik={formik} />,
    <Step2 formik={formik} />,
    <Step3 formik={formik} />,
    <Step4 formik={formik} />,
    <Step5 formik={formik} />,
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
          {activeStep !== 4 && (
            <Box display="flex" justifyContent="flex-end" gap="1em" pt="2em">
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/instructor/courses/" + course._id)}
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

export default EditCourseForm;
