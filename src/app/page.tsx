import Image from "next/image";
import logo from "./assets/logo.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt='SkewlAI logo' width={100} height={100} />
        <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
          Skewl AI</span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note-taking app with AI integration
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">
        Open
        </Link>
      </Button>
    </main>

  );
}
