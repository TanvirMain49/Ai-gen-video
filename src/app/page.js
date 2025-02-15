import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href='/dashboard'><Button>Dashboard</Button></Link>

      <UserButton></UserButton>
    </div>
  )
}
