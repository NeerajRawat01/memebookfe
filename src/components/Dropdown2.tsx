import { Menu, Transition } from "@headlessui/react";
import { CgProfile } from "react-icons/cg";

function Dropdown2() {
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
              className="absolute top-0 right-0 w-44 mt-7 bg-indigo-50 text-gray-500 flex flex-col gap-2 rounded shadow-md py-5"
            >
              {open && (
                <>
                  <Menu.Item>
                    {({ active, close }) => (
                      <a
                        className={`${
                          active && "bg-blue-500 text-white"
                        } px-2 py-1`}
                        href="#"
                        onClick={close}
                      >
                        Sample
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, close }) => (
                      <a
                        className={`${
                          active && "bg-blue-500 text-white"
                        } px-2 py-1`}
                        href="#"
                        onClick={close}
                      >
                        Sample
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled>
                    <span className="opacity-75 px-2 py-1">Sample</span>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, close }) => (
                      <a
                        className={`${
                          active && "bg-blue-500 text-white"
                        } px-2 py-1`}
                        href="#"
                        onClick={close}
                      >
                        Sample
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, close }) => (
                      <a
                        className={`${
                          active && "bg-blue-500 text-white"
                        } px-2 py-1`}
                        href="#"
                        onClick={close}
                      >
                        Sample
                      </a>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Dropdown2;
