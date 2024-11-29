import { cn } from "@/lib/utils";
import Image from 'next/image';

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-72 w-56 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt="image"
            layout="fill"
            className="rounded-2xl object-cover  shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-gradient-to-r from-red-200 to-amber-200 p-4 text-slate-800 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-xl font-bold text-white">{subtitle}</h1>
            <p className="mt-1 border-t border-t-gray-200 py-8 text-base font-black leading-normal text-gray-800 ">
              {description}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
