import { Button } from "../ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-3 border-b border-border/50 bg-background/80 backdrop-blur-md h-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="DentAssist AI"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
          />
          <span className="font-semibold text-lg">
            DentAssist AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button size="sm">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;