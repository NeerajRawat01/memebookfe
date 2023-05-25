import { Menu, Transition } from "@headlessui/react";
import { FC } from "react";
import { CgProfile } from "react-icons/cg";

interface Props {
  dropdownItems: any;
}

const Dropdown: FC<Props> = ({ dropdownItems }) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <CgProfile className="font-semibold text-2xl focus:outline-none" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items
              static
              as="div"
              className="absolute top-0 right-0 w-44 mt-7 bg-indigo-50 text-gray-500 flex flex-col rounded-smpx-2  shadow-sm"
            >
              {open && (
                <>
                  {dropdownItems.map((e: any) => (
                    <Menu.Item>
                      {({ active, close }) => (
                        <a
                          className={` px-5 py-2 font-semibold text-black border-b-2 ${
                            active && "bg-blue-500 text-white"
                          }`}
                          href={e.path}
                          onClick={close}
                        >
                          {e.title}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
