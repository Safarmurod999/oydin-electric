const filterHandler = (arr, filter) => {
  // const lang = JSON.parse(localStorage.getItem("lang"));
  switch (filter) {
    case "ascending":
      return arr.sort((a, b) => {
        // if (lang == "ru") {
        //   return a.name_ru.toLowerCase().localeCompare(b.name_ru.toLowerCase(), "ru", {
        //     sensitivity: "base",
        //   });
        // } else {
          return a.name_uz.toLowerCase().localeCompare(b.name_uz.toLowerCase(), "en", {
            sensitivity: "base",
          });
        // }
      });
    case "descending":
      return arr.sort((a, b) => {
        // if (lang == "ru") {
        //   return b.name_ru.toLowerCase().localeCompare(a.name_ru.toLowerCase(), "ru", {
        //     sensitivity: "base",
        //   });
        // } else {
          return b.name_uz.toLowerCase().localeCompare(a.name_uz.toLowerCase(), "en", {
            sensitivity: "base",
          });
        // }
      });
    // case "latest":
    //   return arr.sort((a, b) => {
    //     return a.created_at - b.created_at;
    //   });
    default:
      return arr;
  }
};

export { filterHandler };
