import Image from 'next/image'
import defaultProfile from "../../../public/svg"
import styles from "./header.module.css"
import { sections } from '../../../util/const'
// import {Person from "@mui/icons-material"
export default function Header() {
    function handleGetPath(path){
        const targetSection = document.querySelector(path);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <header className={styles.wrapper} >
            <div className={styles.profileDiv} onClick={()=>{handleGetPath("#home")}}>
                <Image src={defaultProfile} className={styles.profile} alt='profile Image' style={{ width: '100%', height: 'auto', }} />
            </div>
            <div>
                {sections.map(section=>(
                    <div>
                        {/* <Image src={Person} width={20} height={20} /> */}
                        <p onClick={()=>{handleGetPath(section.path)}}>{section.text}</p>
                     </div>
                ))}
            </div>
        </header>
    )
}