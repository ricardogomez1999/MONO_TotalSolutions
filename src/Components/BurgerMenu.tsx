import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SocialMedia from "./SocialMedia";
import NavLinks from "./NavLinks";

export default function BurgerMenu() {
  return (
    <Popover className="relative md:hidden">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-primary">
        <Bars3Icon className="w-8 h-8 text-white " />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen  lg:max-w-min -translate-x-1/2">
          <div className="w-1/2 rounded-xl bg-white p-2 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <NavLinks hidden={false} />
            <SocialMedia />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
