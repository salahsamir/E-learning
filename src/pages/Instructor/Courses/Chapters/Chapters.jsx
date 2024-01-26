import React, { useEffect, useState } from "react";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import ChaptersList from "./Components/ChaptersList/ChaptersList";
import NewChapter from "./Components/NewChapter/NewChapter";
import useGetData from "../../../../hooks/useGetData";
import { BaseApi } from "../../../../util/BaseApi";
import { Helmet } from "react-helmet";
import useGetParams from "../../../../hooks/useGetParams";
import EmptyState from "../../Components/EmptyState/EmptyState";
import ErrorPage from "../../Error/ErrorPage";
function LoadingSkeleton() {
  return (
    <Box display="flex" flexDirection="column" gap="0.5em">
      {["s1", "s2", "s3"].map((id) => (
        <Skeleton
          height="50px"
          key={id}
          variant="rectangular"
          width="100%"
          animation="wave"
          sx={{
            backgroundColor: (theme) => theme.palette.background.b1,
            "::after": {
              animationDuration: "0.5s",
            },
          }}
        />
      ))}
    </Box>
  );
}
function Chapters() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const params = useGetParams();
  const {
    data: chaptersData,
    loading: loadingChaptersData,
    error: errorChaptersData,
    setRefetch: refetchChaptersData,
  } = useGetData(BaseApi + `/course/${params[0]}/chapter`);
  const [chaptersList, setChaptersList] = useState([]);
  useEffect(() => {
    if (chaptersData && chaptersData.chapters.length > 0) {
      const modifiedList = [...chaptersData.chapters];
      modifiedList.map((chapter) => {
        chapter.id = chapter._id;
        return chapter;
      });
      setChaptersList(modifiedList);
    }
  }, [chaptersData]);
  if (errorChaptersData?.response?.status < 500) {
    return (
      <ErrorPage error={errorChaptersData} redirectTo="/instructor/courses" />
    );
  }
  return (
    <Box>
      <Helmet>
        <title>Chapters | Eduvation</title>
      </Helmet>
      <Box
        mb="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">Chapters List</Typography>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Add />}
          onClick={() => setNewFormIsShown(true)}
        >
          Add Chapter
        </Button>
      </Box>
      <Box>
        {loadingChaptersData && <LoadingSkeleton />}
        {!loadingChaptersData && chaptersList.length > 0 && (
          <ChaptersList items={chaptersList} setItems={setChaptersList} />
        )}
        {!loadingChaptersData && chaptersList.length === 0 && (
          <Box
            height="calc(100vh - 152px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EmptyState
              title="No Chapters Found"
              description="Create a new chapter to get started"
            />
          </Box>
        )}
      </Box>
      <NewChapter
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setItems={setChaptersList}
      />
    </Box>
  );
}

export default Chapters;
