import { FC } from 'react'
import styles from './Hello.module.scss'

type HelloProps = unknown

export const Hello: FC<HelloProps> = () => {
  return (
    <div className={styles.wrapper}>
      Hello world <button>Ololo</button>
    </div>
  )
}
