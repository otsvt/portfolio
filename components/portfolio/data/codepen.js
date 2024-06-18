import projectIcon from "../images/codepen/project.svg";
import gitIcon from "../images/codepen/git.svg";
import searchIcon from "../images/codepen/search.svg";
import pluginsIcon from "../images/codepen/plugins.svg";
import settingstIcon from "../images/codepen/settings.svg";
import openFolderIcon from "../images/codepen/open-folder.svg";
import closeFolderIcon from "../images/codepen/close-folder.svg";
import txtIcon from "../images/codepen/txt-icon.svg";
import mdIcon from "../images/codepen/md-icon.svg";
import jsIcon from "../images/codepen/js-icon.svg";

export const optionIcons = [projectIcon, gitIcon, searchIcon, pluginsIcon, settingstIcon];
export const folders = [
  { icon: closeFolderIcon, text: ".github", arrow: true },
  { icon: closeFolderIcon, text: "node_modules", arrow: true },
  { icon: openFolderIcon, text: "src", arrow: true, reverse: true },
  { icon: txtIcon, text: ".gitignore", arrow: false },
  { icon: jsIcon, text: "index.js", arrow: false },
  { icon: mdIcon, text: "README.md", arrow: false },
];
