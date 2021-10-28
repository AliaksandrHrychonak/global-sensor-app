import React, { FC } from 'react'
import "./CloseButton.scss"
interface CloseButtonProps {
  closeEvent: () => void
}

const CloseButton: FC<CloseButtonProps> = ({closeEvent}) => {
  return (
    <span className="button__close" onClick={closeEvent}></span>
  )
}

export default CloseButton
