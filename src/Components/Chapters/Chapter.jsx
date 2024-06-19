import { Divider } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BaseApi } from 'util/BaseApi';

const data = [
  {
    name: "Get Started",
    Sections: ['Introduction', 'What is React JS', 'What is TypeScript']
  },
  {
    name: "Section 2",
    Sections: ['Introduction', 'What is React JS', 'What is TypeScript']
  },
  {
    name: "Section 3",
    Sections: ['Introduction', 'What is React JS', 'What is TypeScript']
  },
];

export default function ChapterContent({chapter}) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  // console.log(chapter)

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {data.map((item, index) => (
        <div key={index}>
          <h6 id={`accordion-collapse-heading-${index}`}>
            <div
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-md dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 gap-3"
              aria-expanded={activeAccordion === index ? 'true' : 'false'}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span className="text-gray-300">{item.name}</span>

              <div className="flex py-2 ">
                <p className="text-gray-400 mx-2" style={{ fontSize: "14px" }}>3 lectures - 23 min</p>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${activeAccordion === index ? 'rotate-180' : 'rotate-0'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </div>
            </div>
          </h6>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`px-2 rounded-md bg-slate-800 mb-1 border border-gray-200 ${activeAccordion === index ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            {item.Sections.map((section, i) => (
              <div className="m-2" key={i}>
                <div className="flex justify-between cursor-pointer">
                  <p className="text-gray-100 dark:text-gray-400">
                    {section}
                  </p>
                  <p className="text-gray-400">12:00</p>
                </div>
                <Divider style={{ backgroundColor: '#E5E7EB' }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
