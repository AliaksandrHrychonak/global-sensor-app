import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TermsList from "../TermsList/TermsList";

interface TermsProps {
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

const Terms: FC<TermsProps> = ({isMobile, toggleMenu}) => {
  const terms = [
    {
      title: 'terms-title-1',
      subtitles: [
        { text: "terms-1-subtitle-1" },
        { text: "terms-1-subtitle-2" },
        { text: "terms-1-subtitle-3" },
      ]
    },
    {
      title: 'terms-title-2',
      subtitles: [
        { text: "terms-2-subtitle-1"},
        { text: "terms-2-subtitle-2"},
        { text: "terms-2-subtitle-3"},
        { text: "terms-2-subtitle-4"},
        { text: "terms-2-subtitle-5"},
        { text: "terms-2-subtitle-6"},
        { text: "terms-2-subtitle-7"},
        { text: "terms-2-subtitle-8"},
        { text: "terms-2-subtitle-9"},
        { text: "terms-2-subtitle-10"},
        { text: "terms-2-subtitle-11"},
        { text: "terms-2-subtitle-12"},
        { text: "terms-2-subtitle-13"},
      ]
    },
    {
      title: 'terms-title-3',
      subtitles: [
        { text: "terms-3-subtitle-1"},
        { text: "terms-3-subtitle-2"},
        { text: "terms-3-subtitle-3"},
        { text: "terms-3-subtitle-4"},
        { text: "terms-3-subtitle-5"},
      ]
    },
    {
      title: 'terms-title-4',
      subtitles: [
        { text: "terms-4-subtitle-1"},
        { text: "terms-4-subtitle-2"},
        { text: "terms-4-subtitle-3"},
        { text: "terms-4-subtitle-4"},
        { text: "terms-4-subtitle-5"},
      ]
    },
    {
      title: 'terms-title-5',
      subtitles: [
        { text: "terms-5-subtitle-1"},
        { text: "terms-5-subtitle-2"},
        { text: "terms-5-subtitle-3"},
        { text: "terms-5-subtitle-4"},
        { text: "terms-5-subtitle-5"},
        { text: "terms-5-subtitle-6"},
        { text: "terms-5-subtitle-7"},
        { text: "terms-5-subtitle-8"},
      ]
    },
    {
      title: 'terms-title-6',
      subtitles: [
        { text: "terms-6-subtitle-1"},
        { text: "terms-6-subtitle-2"},
        { text: "terms-6-subtitle-3"},
        { text: "terms-6-subtitle-4"},
        { text: "terms-6-subtitle-5"},
        { text: "terms-6-subtitle-6"},
        { text: "terms-6-subtitle-7"},
        { text: "terms-6-subtitle-8"},
        { text: "terms-6-subtitle-8"},
        { text: "terms-6-subtitle-10"},
      ]
    },
    {
      title: 'terms-title-7',
      subtitles: [
        { text: "terms-7-subtitle-1"},
        { text: "terms-7-subtitle-2"},
        { text: "terms-7-subtitle-3"},
        { text: "terms-7-subtitle-4"},
        { text: "terms-7-subtitle-5"},

      ]
    },
    {
      title: 'terms-title-8',
      subtitles: [
        { text: "terms-8-subtitle-1"},
        { text: "terms-8-subtitle-2"},
        { text: "terms-8-subtitle-3"},

      ]
    },
    {
      title: 'terms-title-9',
      subtitles: [
        { text: "terms-9-subtitle-1"},
        { text: "terms-9-subtitle-2"},
        { text: "terms-9-subtitle-3"},
      ]
    },
    {
      title: 'terms-title-10',
      subtitles: [
        { text: "terms-10-subtitle-1"},
        { text: "terms-10-subtitle-2"},
      ]
    },
  ]
  return (
    <>
      <Header isMobile={isMobile} toggleMenu={toggleMenu} />
      <main className="main main_type_terms">
          <TermsList terms={terms} />
      </main>
      <Footer />
    </>
  );
};

export default Terms;
