import { about, languages } from "../../../util/const"
import style from "./about.module.css"
export default function About (){
    return (
        <section id= "about">
        <div className={style.wrapper}>
            <div className={style.heading}> ABOUT </div>
            <div className={style.aboutDesc}>
                <p>{about}</p>
                <p>{about}</p>
            </div>
        </div>
        </section>
    )
}