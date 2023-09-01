import Image from "next/image";

import { useSession } from "next-auth/react";

import { AiFillCaretDown } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { dropdownMenu } from "@constants/Data";

const Top = ({ setToggleLeftSide }) => {
  const { data: session } = useSession();

  return (
    <div className="flex-between p-5 bg-[#111111]">
      <div className="flex-center gap-3">
        <ChevronLeft
          size={45}
          className="text-white bg-black rounded-full p-3 cursor-pointer"
          onClick={() => setToggleLeftSide(prev => !prev)}
        />
        <ChevronRight
          size={45}
          className="text-white bg-black rounded-full p-3 cursor-pointer"
          onClick={() => setToggleLeftSide(prev => !prev)}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="bg-black rounded-full md:p-[3px]">
            <div className="flex-center gap-2">
              <Image
                src={session?.user?.image}
                width={30}
                height={30}
                alt="user photo"
                className="rounded-full"
              />
              <div className="hidden lg:flex items-center gap-3">
                <h1 className="text-white text-sm font-semibold">
                  {session?.user?.name.substring(0, 14) + "..."}
                </h1>
                <AiFillCaretDown className="text-white cursor-pointer mr-2" />
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-[#111111] border-none mt-2">
          {dropdownMenu.links.map((link, id) => (
            <DropdownMenuItem>
              <p className="flex justify-between w-full text-white cursor-pointer">
                {link.n} <i>{link.icon}</i>
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Top;
