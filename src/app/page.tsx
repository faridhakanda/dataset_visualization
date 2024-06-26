import Image from "next/image";
import Items from "./items";

export default function Home() {
  
  return (
    <main className="flex-col flex items-center p-2 text-center justify-center">
      <div>
        <div className="sm:mt-6 sm:p-3 md:mt-6 lg:mt-1 xl:mt-1 2xl:mt-1 md:p-3">
          <Items />
        </div>
      </div>
    </main>
  );
}
