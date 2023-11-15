import m from '../../page.module.css'
import s from '../../styles/Footer.module.css'

const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className={`${m.wrapper} ${s.footer__container}`}>
                <div className={s.block}>
                    <span className={s.block__title}>Выполнил</span>
                    <span className={s.block__desc}>Лёвкин Артём</span>
                </div>
                <div className={s.block}>
                    <span className={s.block__title}>Телефон</span>
                    <span className={s.block__desc}>+375 (29) 574-42-36</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer