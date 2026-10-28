"use client";

import { useRouter } from "next/navigation";

const field =
  "h-12 w-full rounded-lg border border-line bg-white px-4 outline-none transition focus:border-flare focus:ring-4 focus:ring-flare/15";

export default function LoginForm() {
  const router = useRouter();
  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        // ponytail: demo login, no auth backend yet — any credentials open the dashboard
        router.push("/dashboard");
      }}
    >
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Work email</span>
        <input required type="email" name="email" autoComplete="email" defaultValue="ama@kenteco.example" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 flex justify-between text-sm font-medium">
          Password
          <a href="#" className="font-normal text-flare hover:underline">Forgot password?</a>
        </span>
        <input required type="password" name="password" autoComplete="current-password" defaultValue="demo-password" className={field} />
      </label>
      <label className="flex items-center gap-2 text-sm text-ink/70">
        <input type="checkbox" name="remember" className="size-4 accent-flare" /> Keep me signed in
      </label>
      <button className="h-12 w-full rounded-lg bg-flare font-semibold text-white transition hover:bg-flare-dark">Log in</button>
    </form>
  );
}
