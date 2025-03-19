import Image from "next/image";
export default function Header() {
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
      <div className="relative w-[30px] h-[24px]">
        <Image
          src='./images/menuIcon.svg'
          fill
          sizes="(max-width: 30px) 5vw"
          alt="Icone do menu lateral"
        />
      </div>
    </header>
  );
}
