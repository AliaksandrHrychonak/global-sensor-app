import React, { FC } from 'react'

 interface SwitchLanguageButtonProps {
   availableLanguages: object | any,
   i18n: object | any,
 }

export const SwitchLanguageButton: FC<SwitchLanguageButtonProps> = ({ availableLanguages, i18n }) => {
  return (
    <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
      {availableLanguages.map((language: string) => (
            <option key={language}>{language}</option>
      ))}
    </select>
  )
}
