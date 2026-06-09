// import { useEffect } from "react";
// import { Wrapper } from "../Wrapper";
// import { useNewsContext } from "../../context/NewsContex";
// import { Loder } from "../Loder";

// export const News = ({ className }) => {
//   const { news, setNews, feachNews, isloding } = useNewsContext();

//   useEffect(() => {
//     (async () => {
//       const data = await feachNews();
//       setNews(data.articles);
//     })();
//   }, []); // run once on mount
//   if (isloding) return <Loder />;
//   return (
//     <Wrapper>
//       <div className={`grid grid-cols-4 gap-4 ${className}`}>
//         {news.map((item, index) => {
//           if (!item.urlToImage) return null;
//           return <NewsCard className="text-white" key={index} item={item} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const NewsCard = ({ item }) => {
//   return (
//     <div className="card bg-base-300 border shadow-md rounded-lg overflow-hidden">
//       {/* Fixed image */}
//       <figure className="h-48 w-full overflow-hidden">
//         <img
//           src={item.urlToImage}
//           alt={item.title}
//           className="w-full h-full aspect-video object-cover"
//         />
//       </figure>

//       {/* Card body */}
//       <div className="card-body">
//         {/* Title (2 lines max) */}
//         <h1 className="card-title line-clamp-2 text-lg font-semibold">
//           {item.title}
//         </h1>

//         {/* Description (3 lines max) */}
//         <p className="line-clamp-3 text-sm text-gray-200">{item.description}</p>

//         {/* Button styled as link */}
//         <div className="card-actions justify-end">
//           <a
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-primary"
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect } from "react";
import { Wrapper } from "../Wrapper";
import { useNewsContext } from "../../context/NewsContex";
import { Loder } from "../Loder";

export const News = ({ className }) => {
  const { news, setNews, feachNews, isloding } = useNewsContext();

  useEffect(() => {
    (async () => {
      const result = await feachNews();

      if (result && result.articles) {
        setNews(result.articles);
      }
    })();
  }, []);

  if (isloding) return <Loder className="w-fit m-auto py-25 mb-32" />;

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {news.map((item, index) => {
          if (!item.urlToImage) return null;

          return <NewsCard key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ item }) => {
  return (
    <div className="card bg-base-300 border shadow-md rounded-lg overflow-hidden">
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={item.urlToImage}
          alt={item.title}
          className="w-full h-full aspect-video object-cover"
        />
      </figure>

      <div className="card-body">
        <h1 className="card-title line-clamp-2 text-lg font-semibold">
          {item.title}
        </h1>

        <p className="line-clamp-3 text-sm text-gray-200">{item.description}</p>

        <div className="card-actions justify-end">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
