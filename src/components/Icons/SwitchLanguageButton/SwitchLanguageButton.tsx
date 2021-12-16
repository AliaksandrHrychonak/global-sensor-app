import React, { FC } from "react";
import "./SwitchLanguageButton.scss";
interface SwitchLanguageButtonProps {
  availableLanguages: object | any;
  i18n: object | any;
  type: string
}

export const SwitchLanguageButton: FC<SwitchLanguageButtonProps> = ({ availableLanguages, i18n, type }) => {
  return (
    <select
      defaultValue={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className={`button-select button-select_type_${type}`}
    >
      {availableLanguages.map((language: string) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
};
