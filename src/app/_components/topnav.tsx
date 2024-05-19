import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
    
    return (
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b p-4 text-xl font-semibold bg-black">
        <div>Gallery</div>
  
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <SimpleUploadButton />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }