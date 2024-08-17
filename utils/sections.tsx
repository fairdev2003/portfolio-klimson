import About from "@/app/(components)/(sections)/About";
import Contact from "@/app/(components)/(sections)/Contact";
import Experience from "@/app/(components)/(sections)/Experience";
import MyRig from "@/app/(components)/(sections)/MyRig";
import Projects from "@/app/(components)/(sections)/Projects";
import TechStack from "@/app/(components)/(sections)/TechStack";

export const sections = [
    {
      title: "About",
      ref: "about",
      component: <About/>
    },
    {
      title: "Tech Stack",
      ref: "tech_stack",
      component: <TechStack/>
    },
    {
      title: "My Rig",
      ref: "my_rig",
      component: <MyRig/>
    },
    {
      title: "Experience",
      ref: "experience",
      component: <Experience/>
    },
    {
      title: "Projects",
      ref: "projects",
      component: <Projects/>
    },
    {
      title: "Contact",
      ref: "contact",
      component: <Contact/>
    },
  ]