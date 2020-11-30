import img_webskola from"./webpage__prew/webskolalv_prew.jpg";
import img_landing_profile from "./webpage__prew/landing__prew.jpg";
import img_landing_signUp from "./webpage__prew/SignUp__prew.jpg";
import img_landing_about from "./webpage__prew/profile__prew.jpg"
import img_todolist from "./webpage__prew/todolistPrew.jpg";
import img_porfolio_v1 from "./webpage__prew/porfolio_v.1.png";
import img_moto_page from "./webpage__prew/dacati__page.png";
import img_mogo_page from "./webpage__prew/Mogo__prew.png";


export const works_data = [
  {
    workGroups: "WebSkola.lv",
    start: "feb",
    end: "July",
    works: [
      {
        work_name: "1th site",
        img: img_webskola,
        url: "https://github.com/austrisD/darbi/tree/master/landing-Page",
        tech: ["Html", "css", "Responsive"],
      },
      {
        work_name: "Landing page/profile",
        img: img_landing_profile,
        url: "https://github.com/austrisD/darbi/tree/master/landing-Page",
        tech: ["Html", "scss", "Responsive", "Jekyll"],
      },
      {
        work_name: "Landing page/SignUp",
        img: img_landing_signUp,
        url: "https://github.com/austrisD/darbi/tree/master/landing-Page",
        tech: ["Html", "scss", "Responsive", "Jekyll"],
      },
      {
        work_name: "Landing page/about",
        img: img_landing_about,
        url: "https://github.com/austrisD/darbi/tree/master/landing-Page",
        tech: ["Html", "scss", "Responsive", "Jekyll"],
      },
      {
        work_name: "toDoList",
        img: img_todolist,
        url:
          "https://github.com/austrisD/darbi/tree/master/4th-project%3DToDOList",
        tech: ["Html", "scss", "Responsive", "Bootstrap", "jQuery"],
      },
    ],
  },
  {
    workGroups: "Self Training",
    start: "aug",
    end: "nov",
    works: [
      {
        work_name: "Portfolio V:0.1",
        img: img_porfolio_v1,
        url: "https://github.com/austrisD/darbi/tree/master/my-site",
        tech: ["Jsx", "scss", "Responsive", "React"],
      },
      {
        work_name: "Ducati page",
        img: img_moto_page,
        url: "https://github.com/austrisD/darbi/tree/master/moto_page",
        tech: ["Jsx", "scss", "Responsive", "React"],
      },

      {
        work_name: "Mogo_page",
        img: img_mogo_page,
        url: "https://github.com/austrisD/darbi/tree/master/MoGoPage",
        tech: ["Html", "scss"],
      },
    ],
  },
];
