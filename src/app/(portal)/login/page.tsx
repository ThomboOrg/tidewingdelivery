import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { photos } from "@/lib/site";
import LoginForm from "./LoginForm";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-ink/60">Log in to your Tidewing business account.</p>
          <LoginForm />
          <p className="mt-8 text-center text-sm text-ink/60">
            No account yet?{" "}
            <Link href="/support#business" className="font-medium text-flare hover:underline">
              Apply for business rates
            </Link>
          </p>
        </div>
        <p className="text-xs text-ink/40">© 2026 Tidewing Logistics Ltd.</p>
      </div>
      <div className="relative hidden bg-ink lg:block">
        <Image src={photos.port} alt="" fill priority sizes="50vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <p className="eyebrow text-flare">Tidewing for Business</p>
          <p className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight">
            Every shipment, invoice and document in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
