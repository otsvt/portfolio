import ticTacToe from "../images/works/tic-tac-toe.png";
import burgers from "../images/works/burgers.png";
import dailyProphet from "../images/works/daily-prophet.png";
import gallery from "../images/works/gallery.png";
import safety from "../images/works/safety.png";
import shop from "../images/works/shop.png";
import htmlIcon from "../images/icons/html5.svg";
import sassIcon from "../images/icons/sass.svg";
import gulpIcon from "../images/icons/gulp.svg";
import jsIcon from "../images/icons/js.svg";
import gsapIcon from "../images/icons/gsap.svg";
import gitIcon from "../images/icons/git.svg";
import reactIcon from "../images/icons/reactjs.svg";
import tsIcon from "../images/icons/typescript.svg";
import nextIcon from "../images/icons/nextjs.svg";
import tailwindIcon from "../images/icons/tailwindcss.svg";

export const projectsLeft = [
  { img: ticTacToe, hasAdapt: false, icons: [reactIcon, tailwindIcon], link: "/tic-tac-toe" },
  { img: dailyProphet, hasAdapt: false, icons: [htmlIcon, sassIcon], link: "/daily-prophet" },
  { img: burgers, hasAdapt: true, icons: [reactIcon, sassIcon], link: "/burgers" },
];

export const projectsRight = [
  { img: gallery, hasAdapt: true, icons: [htmlIcon, sassIcon, jsIcon], link: "/gallery" },
  { img: safety, hasAdapt: true, icons: [htmlIcon, sassIcon, jsIcon, gsapIcon], link: "/safety" },
  { img: shop, hasAdapt: false, icons: [reactIcon, sassIcon], link: "#" },
];
