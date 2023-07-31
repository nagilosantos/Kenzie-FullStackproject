import React from 'react'
import imgCrashPage from '../../assets/img/404-error-template-3.png.webp'
import { FigureCrash } from './style'

export const PageCrash = () => {
  return (
    <FigureCrash>
        <img src={imgCrashPage} alt='Erro404-PageNotFound' />
    </FigureCrash>
  )
}
