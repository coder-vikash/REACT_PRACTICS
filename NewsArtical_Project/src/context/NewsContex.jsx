import { createContext, useContext, useState } from "react";
import api from "../config/axios";

// Create the context
const NewsContext = createContext();

// Provider component
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [isloding, setIsLoder] = useState(false);

  const feachNews = async (url = "everything?q=india") => {
    setIsLoder(true);
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoder(false);
    }
  };

  const value = {
    news,
    setNews,
    feachNews,
    isloding,
    setIsLoder,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

// Custom hook
const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
