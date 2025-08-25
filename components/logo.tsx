import Image from "next/image"

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return <Image src="/jkllogo.png" alt="JKL Technologies Logo" width={40} height={40} className={className} />
}
