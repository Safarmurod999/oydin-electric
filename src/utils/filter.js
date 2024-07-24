const filterHandler = (arr, filter) => {
  const lang = JSON.parse(localStorage.getItem("lang"));
  switch (filter) {
    case "ascending":
      return arr.sort((a, b) => {
        if (lang == "ru") {
          return a.name_ru.localeCompare(b.name_ru, "ru", {
            sensitivity: "base",
          });
        } else {
          return a.name_uz.localeCompare(b.name_uz, "en", {
            sensitivity: "base",
          });
        }
      });
    case "descending":
      return arr.sort((a, b) => {
        if (lang == "ru") {
          return b.name_ru.localeCompare(a.name_ru, "ru", {
            sensitivity: "base",
          });
        } else {
          return b.name_uz.localeCompare(a.name_uz, "en", {
            sensitivity: "base",
          });
        }
      });
    case "ascending_date":
      return arr.sort((a, b) => {
        return a.created_at - b.created_at;
      });
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
