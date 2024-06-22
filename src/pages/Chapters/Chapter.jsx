import { Rating } from '@mui/material';
import ChapterContent from '../../Components/Chapters/Chapter';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from 'util/BaseApi';

export default function Chapter() {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [chapters, setChapters] = useState();

  const navigate = useNavigate();

  const fetchCourses = async () => {
    const { data } = await axios.get(`${BaseApi}/course/${id}/chapter`);
    if (data.message === "Done") {
      setCourse(data.course);
      setChapters(data.chapters);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const renderCourseOverview = () => {
    return (
      <div className="Chapters col-span-3">
        <h3>Courses Overview</h3>
        <p className="text-gray-400">
          9 sections - 21 lecture - 5h 30m
        </p>
        <ChapterContent chapter={chapters} id={id}  />
      </div>
    );
  };

  const renderRelatedCourses = () => {
    return (
      <div className="related Courses mt-2 p-3">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <h6 className="px-2">Related Courses</h6>
        </div>
        <div
          className="group relative shadow-lg"
          onClick={() => navigate(`/courseDetails/`)}
        >
          <div className="mt-2">
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_640.jpg"
                alt="React"
                className="h-40 w-full object-cover object-center rounded-lg"
              />
              <div className="absolute bottom-2 right-2 bg-black opacity-60 p-1 rounded-md ">
                Best
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <h6 className="text-1xl font-medium">React js</h6>
                <div className="pt-1 px-2">
                  <Rating
                    size="small"
                    color="secondary"
                    name="read-only"
                    value="4"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex">
                  <img
                    className="rounded-full w-10 h-10"
                    src="https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_640.png"
                    alt="image description"
                  />
                  <p className="pt-1 px-2" style={{ fontSize: "14px" }}>
                    John Doe
                  </p>
                </div>
                <h6 className="pt-1 px-2">400 EGP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {course && (
        <div className="container my-2">
          <div className="header py-3">
            <div className="img relative">
              <img
                class="h-50 w-80 m-auto rounded-lg"
                src="https://media.istockphoto.com/id/1166978137/photo/male-speaker-giving-presentation-in-hall-at-university-workshop.jpg?s=612x612&w=0&k=20&c=OC4wH_PMhXIurkHbBf1IDVD8s2TVct90HV17l6gnz_w="
                alt="image description"
              />
              <div className="absolute h-full w-full top-0 bg-gray-900 bg-opacity-60 flex justify-center items-center">
                <div>
                  <h2 className="text-1xl text-gray-300">Dr john Deo</h2>
                  <h2 className="text-3xl text-gray-100">{course.title}</h2>
                  <p className="text-1xl text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                    esse suscipit cum perspiciatis sapiente voluptate.
                  </p>
                  <div className="info flex whitespace-normal">
                    <div className="level flex">
                      {/* svg code */}
                    </div>
                    <div className="hours flex px-2">
                      {/* svg code */}
                    </div>
                    <div className="rating flex">
                      {/* svg code */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {renderCourseOverview()}
            {renderRelatedCourses()}
          </div>
        </div>
      )}
    </>
  );
}
