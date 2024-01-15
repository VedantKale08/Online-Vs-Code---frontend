import HtmlLogo from "../public/assets/html.svg";
import JsLogo from "../public/assets/js.svg";
import ReactLogo from "../public/assets/reactjs.svg";
import PythonLogo from "../public/assets/python.svg";
import TxtLogo from "../public/assets/txr.svg";
import CLogo from "../public/assets/c.svg";
import CPPLogo from "../public/assets/c-plusplus.svg";

export const getImage = (ext: string) => {
  switch (ext) {
    case "html":
      return HtmlLogo;
    case "jsx":
      return ReactLogo;
    case "tsx":
      return ReactLogo;
    case "js":
      return JsLogo;
    case "py":
      return PythonLogo;
    case "c":
      return CLogo;
    case "cpp":
      return CPPLogo;
    default:
      return TxtLogo;
  }
};
