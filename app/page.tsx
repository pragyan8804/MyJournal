import { Navbar } from "@/components/Navbar";
import { Redirect } from "@/components/Redirect";

export default function Home() {
  return (
   <>
   <Navbar />
   <Redirect />
   <div>Hi there!</div>
   </>
  );
}
