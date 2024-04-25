import Image from "next/image";
import styles from "./experience.module.css"
export default function Experience (){
    return (
        <section id= "experience">
        <div className={styles.heading}> EXPERIENCE </div>
        <div className={styles.mainWrapper}>          
            <div className={styles.wrapper}>
                <div className={styles.Details}>
                    {/* <Image src={}/> */}
                    <h4>companyName</h4>
                </div >
                <div  className={styles.subDetails}>
                    <ul>
                        <li>companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                        <li>companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                        <li>companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                        <li>companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                        <li>companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                        <li>Tools : companyDetailscompanyDetailscompanyDetailscompanyDetails</li>
                    </ul>
                </div>
                <div className={styles.footerInfo}>
                    <p>Dates | </p>
                    <p> location</p>
                </div>
            </div>
        </div>
        </section>
    )
}