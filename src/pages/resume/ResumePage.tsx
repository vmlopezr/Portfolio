import React, { memo } from 'react';

const ResumePage = memo(() => {
  return (
    <div>
      <h1>My Resume</h1>
      <p>This is the resume page</p>
    </div>
  );
});
ResumePage.displayName = 'ResumePage';
export default ResumePage;
