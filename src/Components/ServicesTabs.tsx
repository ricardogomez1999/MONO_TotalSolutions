import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { services } from "../data";
import Card from "./Card";

export default function Tabs() {
  return (
    <div className="md:hidden p-5">
      <TabGroup>
        <TabPanels>
          {services.map((service) => (
            <TabPanel key={service.name}>
              <Card
                key={service.name}
                title={service.name}
                img={service.img}
                description={service.description}
              />
            </TabPanel>
          ))}
        </TabPanels>
        <TabList className="flex gap-5 mt-5 justify-center">
          <Tab className="flex p-2 justify-center items-center  h-8 w-8 text-sm  rounded-full font-bold shadow-lg data-[selected]:bg-secondary data-[selected]:text-white">
            1
          </Tab>
          <Tab className="flex justify-center items-center p-2 h-8 w-8 text-sm rounded-full font-bold shadow-lg data-[selected]:bg-secondary data-[selected]:text-white">
            2
          </Tab>
          <Tab className="flex p-2 justify-center items-center  h-8 w-8 text-sm  rounded-full font-bold shadow-lg data-[selected]:bg-secondary data-[selected]:text-white">
            3
          </Tab>
        </TabList>
      </TabGroup>
    </div>
  );
}
