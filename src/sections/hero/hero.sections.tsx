import { Spotlight } from "@/components/ui/spotLight";
import { cn } from "@/utils/cn";

export default function Hero() {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 text-center space-y-5">
        <p className="font-bold text-xl">Dynamic web magic with next.js</p>
        <h1 className="text-4xl md:text-8xl font-extrabold text-transparent stroke">
          Adapting design into beatiful webs apps <br />
        </h1>
        <p className="mt-4 font-semibold text-xl text-neutral-300 max-w-lg  mx-auto">
          A Front end Developer based in Peru
        </p>
      </div>
    </div>
  );
}
