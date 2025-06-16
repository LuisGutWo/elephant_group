import React, { useEffect } from 'react';
import { progressCircleSvg } from '@/data/icons';
//= Scripts
import scrollToTop from '@/common/scrollToTop';

const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="progress-wrap cursor-pointer" >
      {progressCircleSvg}
    </div>
  )
}

export default ProgressScroll
