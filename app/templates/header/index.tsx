"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "../../components/menu";
export default function Header() {
  const [menu, setmenu] = useState(false);

  const openMenu = () => {
    setmenu(!menu);
  };
  return (
    <header className="h-[90px] w-full bg-transparent flex items-center justify-between py-5 px-[60px]">
      <div className="relative w-[51px] h-[51px]">
        <Image
          src="/images/logoPurple.svg"
          fill
          sizes="(max-width: 51px) 5vw"
          alt="Logo da Empresa Data Mastery"
        />
      </div>
      <div onClick={() => openMenu()} className="relative w-[30px] h-[24px] cursor-pointer">
        <Image
          src="./images/menuIcon.svg"
          fill
          sizes="(max-width: 30px) 5vw"
          alt="Icone do menu lateral"
        />
      </div>
      {menu && <Menu openMenu={openMenu}/>}
    </header>
  );
}
