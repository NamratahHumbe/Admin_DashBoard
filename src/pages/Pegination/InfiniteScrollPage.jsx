// import React from 'react';
// import { useInfiniteQuery } from 'react-query';
// import './InfiniteScrollPage.css'

// const PAGE_SIZE = 2;

// const fetchUsers = async ({ pageParam = 0 }) => {
//   const response = await fetch(`http://localhost:3001/api/users?page=${pageParam}&limit=${PAGE_SIZE}`);
//   const data = await response.json();
//   return data;
// };

// const InfiniteScrollPage = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isLoading,
//     isError,
//   } = useInfiniteQuery(
//     'userData',
//     ({ pageParam }) => fetchUsers({ pageParam }),
//     {
//       getNextPageParam: (lastPage, pages) => {
//         if (lastPage.length < PAGE_SIZE) {
//           return undefined;
//         }
//         return pages.length+1;
//       },
//     }
//   );

//   const allData = data?.pages.flatMap((page) => page) || [];

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div className="infiniteScrollPage-container">
//       <ul>
//         {allData?.map((user, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {user.name.firstName} {user.name.lastName}
//             <br />
//             <strong>Address:</strong> {user.address}
//             <br />
//             <strong>City:</strong> {user.city}
//             <br />
//             <strong>State:</strong> {user.state}
//           </li>
//         ))}
//       </ul>

//       {hasNextPage && (
//         <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
//           {isFetchingNextPage ? 'Loading more...' : 'Load more'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default InfiniteScrollPage;




// import React, { useRef, useState, useCallback, useEffect } from 'react';
// import { useInfiniteQuery } from 'react-query';
// import './InfiniteScrollPage.css';

// const PAGE_SIZE = 2;
// const LOAD_THRESHOLD = 4;

// const fetchUsers = async ({ pageParam = 0 }) => {
//   const response = await fetch(`http://localhost:3001/api/users?page=${pageParam}&limit=${PAGE_SIZE}`);
//   const data = await response.json();
//   return data;
// };

// const InfiniteScrollPage = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isLoading,
//     isError,
//   } = useInfiniteQuery(
//     'userData',
//     ({ pageParam }) => fetchUsers({ pageParam }),
//     {
//       getNextPageParam: (lastPage, pages) => {
//         if (lastPage.length < PAGE_SIZE) {
//           return undefined;
//         }
//         return pages.length + 1;
//       },
//     }
//   );

//   const allData = data?.pages.flatMap((page) => page) || [];

//   const containerRef = useRef(null);
//   const [shouldFetchNextPage, setShouldFetchNextPage] = useState(false);
//   const [loadedItemsCount, setLoadedItemsCount] = useState(allData.length);

//   const handleScroll = useCallback(() => {
//     if (containerRef.current && loadedItemsCount >= LOAD_THRESHOLD && hasNextPage && !isFetchingNextPage) {
//       if (containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight) {
//         setShouldFetchNextPage(true);
//       }
//     }
//   }, [loadedItemsCount, hasNextPage, isFetchingNextPage]);

//   useEffect(() => {
//     containerRef?.current?.addEventListener('scroll', handleScroll);
//     return () => {
//       containerRef?.current?.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     if (shouldFetchNextPage) {
//       fetchNextPage();
//       setShouldFetchNextPage(false);
//     }
//   }, [shouldFetchNextPage, fetchNextPage]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div className="infiniteScrollPage-container" ref={containerRef}>
//       <ul>
//         {allData?.map((user, index) => (
//           <li key={index}>
//             <span>Name:</span> {user.name.firstName} {user.name.lastName}
//             <br />
//             <span>Address:</span> {user.address}
//             <br />
//             <span>City:</span> {user.city}
//             <br />
//             <span>State:</span> {user.state}
//           </li>
//         ))}
//       </ul>

//       {hasNextPage && (
//         <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
//           {isFetchingNextPage ? 'Loading more...' : 'Load more'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default InfiniteScrollPage;




import React from 'react';
import { useInfiniteQuery } from 'react-query';
import './InfiniteScrollPage.css'

const PAGE_SIZE = 2;

const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await fetch(`http://localhost:3001/api/users?page=${pageParam}&limit=${PAGE_SIZE}`);
  const data = await response.json();
  return data;
};

const InfiniteScrollPage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    'userData',
    ({ pageParam }) => fetchUsers({ pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < PAGE_SIZE) {
          return undefined;
        }
        return pages.length + 1;
      },
      getFetchMore: (lastPage) => lastPage.length,
    }
  );

  const allData = data?.pages.flatMap((page) => page) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="infiniteScrollPage-container">
      <ul>
        {allData?.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name.firstName} {user.name.lastName}
            <br />
            <strong>Address:</strong> {user.address}
            <br />
            <strong>City:</strong> {user.city}
            <br />
            <strong>State:</strong> {user.state}
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load more'}
        </button>
      )}
    </div>
  );
};

export default InfiniteScrollPage;
