import { Wrapper } from "./Wrapper";
import { useNewsContext } from "../context/NewsContex";

export const Category = ({ className }) => {
  const { setNews, feachNews } = useNewsContext();

  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const cate = e.target.value;
    const data = await feachNews(`/everything?q=${cate}`);
    setNews(data.articles);
  };

  return (
    <div className={className}>
      <Wrapper>
        <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 scroll-bar">
          {category.map((items) => (
            <button
              onClick={handleClick}
              className="btn btn-primary m-2 text-xl"
              key={items}
              value={items}
            >
              {items}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
