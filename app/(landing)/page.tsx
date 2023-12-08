import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-full bg-sky-500 flex-col">
      <h1 className="font-mono text-3xl text-white font-thin absolute top-1/3">
        Welcome to yuv-ai
      </h1>
      <div className="flex space-x-4">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
