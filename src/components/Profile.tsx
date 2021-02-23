import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GustavoStraub.png" alt="Gustavo Straub" />
      <div>
        <strong>Gustavo Straub</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
          </p>
      </div>
    </div>
  )
}
