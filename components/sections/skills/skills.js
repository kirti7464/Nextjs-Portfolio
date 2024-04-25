import Image from "next/image"
import { skills } from "../../../util/const"
import styles from "./skills.module.css"
export default function Skills(){
    return (
        <section id= "skills">
            <div className={styles.heading}> SKILLS </div>
            <div className={styles.mainWrapper}>
                {
                    skills.map(skill=>(
                        <div className={styles.wrapper}>
                        <h4 className={styles.Details}>{skill.tech}</h4>
                        <div className={styles.subDetails}>
                        {skill.tools.map(tool=>(
                            <Image src={tool.img} width={50} height={50}/>
                        ))}
                        </div>
                    </div>
                    ))
                }
        </div>
        </section>
        
    )
}