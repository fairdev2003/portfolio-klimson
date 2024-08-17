import HeroHeader from "./(components)/HeroHeader";
import SectionListing from "./(components)/SectionListing";
import SectionProvider from "./(components)/SectionProvider";

import { sections } from "@/utils/sections";

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-14">
      <div className="lg:grid flex flex-col gap-5 md:flex md:flex-col grid-cols-10 w-full h-[85vh] gap-x-10">
        <div className="col-span-2 w-full rounded-xl h-full flex flex-col gap-y-5 py-5">
            <HeroHeader />
            <SectionListing sections={sections} />
        </div>
        <div className="col-span-5 rounded-xl w-full p-5">
          <SectionProvider/>
        </div>
        <div className="col-span-3 lg:bg-gray-800/70 h-full rounded-xl w-full">

        </div>
      </div>
    </main>
  );
}
