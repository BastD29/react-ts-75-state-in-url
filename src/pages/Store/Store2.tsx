// import { FC } from "react";
// import { DEFAULT_ITEMS } from "../../data/data";
// import { useLocation, useSearchParams } from "react-router-dom";
// import style from "./Store.module.scss";

// const Store: FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams(); // everything in search params is gonna be stored as string
//   console.log("searchParams:", searchParams.toString());

//   const location = useLocation();
//   console.log("Current Location:", location);

//   const q = searchParams.get("q") || "";
//   const onlyComputerItems = searchParams.get("onlyComputerItems") === "true";

//   const items: string[] = DEFAULT_ITEMS.filter((item) => {
//     return (
//       item.toLowerCase().includes(q?.toLowerCase()) &&
//       (!onlyComputerItems ||
//         (onlyComputerItems && (item === "Computer" || item === "Keyboard")))
//     );
//   });

//   return (
//     <div className={style["store"]}>
//       <h2>Store</h2>
//       <div>
//         <label htmlFor="q">Title</label>
//         <input
//           type="text"
//           id="q"
//           value={q}
//           onChange={(e) =>
//             setSearchParams(
//               (prev) => {
//                 prev.set("q", e.target.value);
//                 return prev;
//               },
//               { replace: true }
//             )
//           }
//         />
//       </div>
//       <div>
//         <label htmlFor="onlyComputerItems">Only computer items</label>
//         <input
//           type="checkbox"
//           id="onlyComputerItems"
//           checked={onlyComputerItems}
//           onChange={(e) =>
//             setSearchParams(
//               (prev) => {
//                 prev.set("onlyComputerItems", e.target.checked.toString());
//                 return prev;
//               },
//               { replace: true }
//             )
//           }
//         />
//       </div>
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Store;
