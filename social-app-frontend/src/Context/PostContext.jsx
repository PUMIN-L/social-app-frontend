import { createContext, useState, useEffect } from "react";
import * as postAPI from "../apiComponent/postApi";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const response = await postAPI.getAllPost();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
}

export default PostContextProvider;
