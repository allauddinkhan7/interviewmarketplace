import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();
  console.log(user);  

  return (
     <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Prept Logo"
          width={100}
          height={100}
          className="h-11 w-auto" 
        />
      </Link>
      {/* Redirection Logic  */}
      <Show when="signed-out">
        {/* Links */}

        {/* Credits */}
        <SignInButton mode="modal">
          <Button variant="ghost">Sign In</Button>
        </SignInButton>
        <SignUpButton >
          <Button className="bg-[#6c47ff] text-white rounded-full ">
            GetStarted
          </Button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </nav>
  );
};

export default Header;
