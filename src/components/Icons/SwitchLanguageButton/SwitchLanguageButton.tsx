import React, { FC, useState } from "react";
import "./SwitchLanguageButton.scss";

interface SwitchLanguageButtonProps {
  availableLanguages: object | any;
  i18n: object | any;
  type: string;
}

export const SwitchLanguageButton: FC<SwitchLanguageButtonProps> = ({
  availableLanguages,
  i18n,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language.split('-').slice(0, 1).toString()
  
  const handleChangeLang = (e: any) => {
    i18n.changeLanguage(e.target.id)
  }

  return (
    <div
      className={`button-select ${isOpen ? "button-select_type_active" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className={`button-select__lang button-select__lang_type_${type}`}>
        {currentLanguage}
        <span className={`button-select__arrow button-select__arrow_type_${type}`}>
          <span className={`button-select__arrow_line button-select__arrow_line_theme_${type}`} />
          <span className={`button-select__arrow_line button-select__arrow_line_theme_${type}`}  />
        </span>
      </p>
      <ul
        className={`button-select__list button-select__list_type_${type} ${
          isOpen ? "button-select__list_type_open" : ""
        }`}
      >
        {availableLanguages.map((item: any) => (
          <li key={item} className="button-select__list_item" id={item} onClick={handleChangeLang}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
