import React from 'react';

const HtmlText = ({ quillContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: quillContent }} />
  );
}

export default HtmlText;