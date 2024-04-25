import { useState } from 'react'
import { FotoPerfil } from './styles'

export const Avatar = () => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <FotoPerfil
      src="https://github.com/emersonTSsantos.png"
      alt="FOTO DO PERFIL"
      className={expanded ? 'expanded' : ''}
      onClick={handleClick}
    />
  )
}

export default Avatar
