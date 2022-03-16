import React from 'react'
import ContentLoader from "react-content-loader";
 
function LoadingBlock() {
    return (
        <ContentLoader
        className='phone-block'
          speed={2}
          width={290}
          height={500}
          viewBox="0 0 280 455"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="115" y="456" rx="3" ry="3" width="178" height="20" />
          <circle cx="140" cy="130" r="90" />
          <rect x="17" y="19" rx="15" ry="30" width="80" height="25" />
          <rect x="45" y="240" rx="15" ry="15" width="200" height="40" />
          <rect x="120" y="330" rx="5" ry="5" width="50" height="15" />
          <rect x="120" y="350" rx="5" ry="5" width="50" height="20" />
          <rect x="45" y="390" rx="20" ry="20" width="200" height="40" />
        </ContentLoader>
      );
}

export default LoadingBlock