import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { services } from "../data";
import Card from "./Card";

export default function Tabs() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null; // or a loading spinner
  }
  return (
    <div className="md:hidden p-5">
      <TabGroup>
        <TabPanels>
          {services.map((service) => {
            const description = t<string[] | string>(service.descriptionKey, {
              returnObjects: true,
            });
            return (
              <TabPanel key={service.id}>
                <Card
                  key={service.id}
                  title={t(service.titleKey)}
                  img={service.img}
                  imgAlt={t(service.imageAltKey)}
                  description={
                    Array.isArray(description) ? description : [description]
                  }
                />
              </TabPanel>
            );
          })}
        </TabPanels>
        <TabList className="flex gap-5 mt-5 justify-center">
          {services.map((service, index) => (
            <Tab
              key={`${service.id}-tab`}
              className="flex p-2 justify-center items-center  h-8 w-8 text-sm  rounded-full font-bold shadow-lg data-[selected]:bg-secondary data-[selected]:text-white"
            >
              {index + 1}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
    </div>
  );
}
