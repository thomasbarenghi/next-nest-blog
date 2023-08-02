"use client";
import { useRouter, useParams, usePathname } from 'next/navigation'

export default function Discover() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  console.log(pathname);
    return (
      <div>
        <p className="text-center">Client Home page</p>
      </div>
    );
  }
  