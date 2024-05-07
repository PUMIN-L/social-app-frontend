import AuthContextProvider from "./Context/AuthenContext";
import PostContextProvider from "./Context/PostContext";
import ThemeContextProvider from "./Context/ThemeContext";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <Router />
          </PostContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
