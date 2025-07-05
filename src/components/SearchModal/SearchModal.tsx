import { useRef, useState } from "react";
import classes from "./searchModal.module.scss";

function SearchModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenModal(true)}>Open modal</button>
      <dialog
        open={isOpenModal}
        ref={dialogRef}
        className={classes["search-modal"]}
      >
        <div className={classes["search-modal__content"]}>
          <div className={classes["search-modal__input"]}>
            <input type="text" />
          </div>
          <div className={classes["search-modal__results"]}>
            <ul>
              {Array(10)
                .fill("item")
                .map((el, index) => (
                  <li key={index}>{`${el}-${index}`}</li>
                ))}
            </ul>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default SearchModal;

// const [posts, setPosts] = useState([]);
// const [users, setUsers] = useState([]);
// const [todos, setTodos] = useState([]);

// const fetchTodos = async () => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos?limit=10`
//     );
//     const data = await response.json();
//     setTodos(data);
//   } catch (e) {
//     console.error(e);
//   }
// };
// const fetchPosts = async () => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?limit=10`
//     );
//     const data = await response.json();
//     setPosts(data);
//   } catch (e) {
//     console.error(e);
//   }
// };
// const fetchUsers = async () => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users?limit=10`
//     );
//     const data = await response.json();
//     setUsers(data);
//   } catch (e) {
//     console.error(e);
//   }
// };

// useEffect(() => {
//   fetchTodos();
//   fetchUsers();
//   fetchPosts();
// }, []);

// console.log({ posts, users, todos });
