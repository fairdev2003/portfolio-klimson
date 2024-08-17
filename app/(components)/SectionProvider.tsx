'use client'

import { useStore } from "@/store/portfoliostore";
import { sections } from "@/utils/sections";

const SectionProvider = () => {
  const { sectionName } = useStore();

  return (
    <div>
      {sections.filter((section) => section.ref === sectionName)[0].component}
    </div>
  );
};

export default SectionProvider;
