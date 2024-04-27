import React from 'react';

const HtmlText = ({ quillContent }) => {
  return (
    <div className="w-75" color='primary' dangerouslySetInnerHTML={{ __html: quillContent }} />
  );
}

export default HtmlText;
