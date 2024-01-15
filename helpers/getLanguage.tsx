export const getLanguage = (ext: string) => {
  switch (ext) {
    case "html":
      return { id: 1, name: "html" };
    case "jsx":
      return { id: 1, name: "jsx" };
    case "tsx":
      return { id: 1, name: "tsx" };
    case "js":
      return { id: 63, name: "javascript" };
    case "py":
      return { id: 71, name: "python" };
    case "c":
      return { id: 50, name: "c" };
    case "cpp":
      return { id: 54, name: "cpp" };
    default:
      return { id: 0, name: "txt" };
  }
};
