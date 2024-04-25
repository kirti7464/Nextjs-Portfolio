import Image from "next/image"
import { education } from "../../../util/const"
import styles from "./education.module.css"
export default function Education(){
    return (
        <section id= "education">
           <div className={styles.heading}> EDUCATION </div>
            <div className={styles.mainWrapper}>
                {
                    education.map(edu => (
                        <div className={styles.wrapper}>
                            <div className={styles.Details}>
                                <Image src={edu.img} width={80} height={100} onClick={() => { window.open("https://www.dcrustm.ac.in/", "_blank") }} />
                                <h4 onClick={() => { window.open("https://www.dcrustm.ac.in/", "_blank") }}>{edu.name}</h4>
                            </div>

                            <div className={styles.subDetails}>
                                <p>Location : {edu.location}</p>
                                <p>Course : {edu.degree}</p>
                                <p>CGPA : {edu.cgpa}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}