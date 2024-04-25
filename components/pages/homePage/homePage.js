import Content from "../../molecules/content/content";
import Header from "../../sections/header/header";
import styles from "./homePage.module.css"

export default function HomePage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Content />
        </div>
    )
}