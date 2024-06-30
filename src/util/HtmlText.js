import React from 'react';

const HtmlText = ({ description }) => {
  return (
    <div className="course-description" dangerouslySetInnerHTML={{ __html: description }} />
  );
}


export default HtmlText;
