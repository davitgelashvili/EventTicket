import styles from "./Auth.module.css"

function Auth({children}) {
    return (
        <div className={styles.auth}>
            {children}
        </div>
    )
}

export default Auth