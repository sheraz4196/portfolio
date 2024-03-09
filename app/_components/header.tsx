import Image from "next/image";
import Navbar from "./navbar";
export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 left-0 w-full px-6 py-4   bg-white border-b border-blue-900">
      <div>
        <Image
          src={"/user.svg"}
          width={50}
          height={50}
          alt="placeholder-image"
        />
      </div>
      <Navbar />
      <div></div>
    </header>
  );
}
