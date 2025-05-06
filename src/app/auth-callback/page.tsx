"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, error } = trpc.authCallback.useQuery(undefined, {
    onSuccess: (data) => {
      console.log("onSuccess", data);
      if (data?.success) {
        // user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      console.log("onError", err);
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
    retry: false, // Disable automatic retries
    staleTime: Infinity, // Prevent refetching
    refetchOnWindowFocus: false, // Prevent refetch on window focus
    refetchOnMount: false, // Prevent refetch on mount
  });

  if (error) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-semibold text-xl text-red-500">
            Authentication Error
          </h3>
          <p>Please try signing in again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
