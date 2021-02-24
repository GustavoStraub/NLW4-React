import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)


  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ?
        (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="" />
              <strong>Exercicio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button
                className={styles.challengeFailedButton}
                onClick={resetChallenge}
                type='button'>
                Falhei
                  </button>
              <button className={styles.challengeSucceededButton}
                type='button'>
                Completei
                  </button>
            </footer>
          </div>
        ) :
        (
          <div className={styles.ChallengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}
