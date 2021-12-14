import React, { FC } from 'react'
import "./BackButton.scss"
interface BackButtonProps {
  backEvent: (e: React.MouseEvent<HTMLElement>) => void
}

export const BackButton: FC<BackButtonProps> = ({}) => {
  return (
    <div className="button__arrow-icon">
      <button className="button__arrow-back"/>
    </div>
    
  )
}
