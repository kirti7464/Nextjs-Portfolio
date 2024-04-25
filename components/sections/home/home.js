import styles from "./home.module.css"
export default function Home (){
    return (
        <section id= "home">
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <h4><div className={styles.highlightedText}>Hi !</div> I'm <div>Kirti</div></h4>
                </div>
                <div className={styles.Details} >
                    <p>loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies,loves to enjoy music and explore new technologies, </p>
                </div>
            </div>
        </section>
       
    )
}