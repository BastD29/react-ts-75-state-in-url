// import { ArticleType } from "../types/article";
// import { FilterType } from "../types/filter";
// import { isBoolean, isEmpty, isNumber, isString, toLower } from "./checkTypes";

// const filterByValue = (value: any, filterValue: any): boolean => {
//   if (isString(value)) {
//     return toLower(value).includes(toLower(filterValue));
//   }

//   if (isBoolean(value)) {
//     return (
//       (filterValue === "true" && value) || (filterValue === "false" && !value)
//     );
//   }

//   if (isNumber(value)) {
//     return value == filterValue;
//   }

//   return false;
// };

// const filterData = (
//   data: ArticleType[],
//   filters: FilterType
// ): ArticleType[] => {
//   if (isEmpty(filters)) return data;

//   return data.filter((item) => {
//     console.log("Object.keys(filters):", Object.keys(filters));

//     Object.keys(filters).every((filterKey) => {
//       const filterValue = filters[filterKey];
//       console.log("filterValue:", filterValue);

//       console.log("Object.keys(item):", Object.keys(item));

//       return Object.keys(item).some((itemKey) => {
//         filterByValue(item[itemKey as keyof ArticleType], filterValue);
//       });
//     });
//   });
// };

// export { filterData };
