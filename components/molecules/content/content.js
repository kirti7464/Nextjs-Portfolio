import About from "../../sections/about/about";
import Contact from "../../sections/contact /contact";
import Education from "../../sections/education/education";
import Experience from "../../sections/experience/experience";
import Header from "../../sections/header/header";
import Home from "../../sections/home/home";
import Skills from "../../sections/skills/skills";
import styles from "./content.module.css"

export default function Content() {
    return (
        <div className={styles.wrapper}>
            <Home/>
            <About/>
            <Experience/>
            <Skills/>
            <Education/>
            <Contact/>
        </div>
    )
}