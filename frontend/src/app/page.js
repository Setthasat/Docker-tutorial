import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Link href="/user" className="border-[1px] shadow-2xl border-black p-[2rem] rounded-lg">
        GO TO USER
      </Link>
    </div>
  );
}
