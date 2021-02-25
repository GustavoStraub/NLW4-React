import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Countdown.module.css'
import { CountdownContext } from '../contexts/CountdownContext'


export default function Countdown() {

  const { minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')



  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button
          disabled
          className={styles.CountdownButton}>
          Ciclo encerrado
        </button>
      ) :
        (
          <>
            { isActive ? (
              <button
                type='button'
                onClick={resetCountdown}
                className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}>
                Abandonar ciclo
              </button>
            ) : (
                <button
                  type='button'
                  onClick={startCountdown}
                  className={styles.CountdownButton}>
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}

    </div>
  )
}
