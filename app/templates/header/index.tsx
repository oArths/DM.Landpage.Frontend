"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "../../components/menu";

export default function Header() {
  const [menu, setmenu] = useState(false);

  const openMenu = () => {
    setmenu(!menu);
  };

  return (
    <header className="flex items-center justify-between w-full h-[90px] py-5 px-[60px] bg-transparent">
      <Link href="/" className="relative w-[51px] h-[51px]">
        <Image
          src="/images/logoPurple.svg"
          fill
          sizes="(max-width: 51px) 5vw"
          alt="Logo da Empresa Data Mastery"
        />
      </Link>
      <button
        type="button"
        onClick={openMenu}
        aria-label="Abrir menu"
        className="relative w-[30px] h-[24px] cursor-pointer"
      >
        <Image
          src="/images/menuIcon.svg"
          fill
          sizes="(max-width: 30px) 5vw"
          alt="Icone do menu lateral"
        />
      </button>
      {menu && <Menu openMenu={openMenu} />}
    </header>
  );
}
