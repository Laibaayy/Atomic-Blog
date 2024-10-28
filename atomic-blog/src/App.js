import { useContext, useEffect, useMemo, useState } from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { PostContext, Provder } from "./Components/Provder";
import Test from "./Test";
import { memo } from "react";
function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // const [show, setshow] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  const ShowOptions = useMemo(() => {
    return {
      show: false,
      title: "Post Archive",
    };
  }, []);

  return (
    <Provder>
      <section>
        <Button setIsFakeDark={setIsFakeDark} isFakeDark={isFakeDark} />
        <Header />
        <Main />
        <Archive ShowOptions={ShowOptions} />
        <Test />
        <Footer />
      </section>
    </Provder>
  );
}

const Archive = memo(function Archive({ ShowOptions }) {
  const { createRandomPost } = useContext(PostContext);
  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(ShowOptions.show);

  return (
    <aside>
      <h2>{ShowOptions.title}</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

// export { PostContext };
export default App;
