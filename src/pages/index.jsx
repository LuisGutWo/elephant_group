import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  if (!router) {
    throw new Error("router is null");
  }

  useEffect(() => {
    try {
      if (router) {
        router.replace("/light/page-home");
      } else {
        throw new Error("router is null");
      }
    } catch (error) {
      console.error("Error redirecting to /light/page-home", error);
    }
  }, [router]);
  return null;
}
