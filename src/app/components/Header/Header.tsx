import m from '../../page.module.css'
import s from '../../styles/Header.module.css'
import {inter} from "@/app/fonts/fonts";

const Header = () => {
    return(
        <header className={`${s.header} ${inter.className}`}>
            <div className={m.wrapper}>
                <h1 className={s.header__title}>logo</h1>
            </div>
        </header>
    )
}

export default Header