import React from 'react'
import ContentLoader from "react-content-loader";
 
function LoadingBlock() {
    return (
        <ContentLoader
          speed={2}
          width={290}
          height={500}
          viewBox="0 0 280 455"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="115" y="456" rx="3" ry="3" width="178" height="10" />
          <circle cx="130" cy="150" r="100" />
          <rect x="10" y="30" rx="15" ry="30" width="80" height="25" />
          <rect x="10" y="280" rx="15" ry="15" width="260" height="50" />
          <rect x="90" y="360" rx="5" ry="5" width="100" height="15" />
          <rect x="90" y="390" rx="5" ry="5" width="100" height="15" />
          <rect x="10" y="430" rx="15" ry="15" width="260" height="25" />
        </ContentLoader>
      );
}

export default LoadingBlock