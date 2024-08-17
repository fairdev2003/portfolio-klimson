"use client";

import React from "react";
import AnimatedText from "./AnimatedText";
import { useStore } from "@/store/portfoliostore";

interface Section {
  title: string;
  ref: string;
  component: React.ReactNode;
}

interface SectionListingProps {
  sections: Section[];
}

const SectionListing = ({ sections }: SectionListingProps) => {
  const { setSectionName, sectionName } = useStore();

  return (
    <div className="flex justify-center flex-col gap-y-3 px-5 gap-5">
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center rounded-lg p-2"
          >
            <AnimatedText
              active={sectionName === section.ref}
              onClick={() => {
                setSectionName(section.ref);
              }}
            >
              <h1 className="font-bold text-lg">{section.title}</h1>
            </AnimatedText>
          </div>
        );
      })}
    </div>
  );
};

const ListElement = ({ section }: { section: Section }) => {};

export default SectionListing;
