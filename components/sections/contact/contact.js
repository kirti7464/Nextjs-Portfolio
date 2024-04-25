import Image from "next/image";
import { contact } from "../../../util/const";
import styles from "./contact.module.css"
import {linkdin} from "../../../public/svg"
export default function Contact(){
    return (
        <section id= "contact">
        <div className={styles.heading}> CONTACT </div>
        <div className={styles.Details}>
            {contact.map(cont=>(
                <div className={styles.subDetails}>
                     <Image src={cont.img ? linkdin :""} width={20} height={50} />
                    <p>{cont.value}</p>
                </div>
            ))}
        </div>
        </section>
    )
}