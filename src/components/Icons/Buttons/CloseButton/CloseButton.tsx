import React, { FC } from 'react'
import "./CloseButton.scss"
interface CloseButtonProps {
  closeEvent: (e: React.MouseEvent<HTMLElement>) => void
}

const CloseButton: FC<CloseButtonProps> = ({closeEvent}) => {
  return (
    <span className="button__close" onClick={closeEvent}></span>
  )
}

export default CloseButton
