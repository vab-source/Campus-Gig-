"use client";
import Button from "@/components/ui/Button";

export default function ShareButton({ url, title }: { url: string; title: string }) {
  async function onShare() {
    try {
      if (navigator.share) {
        await navigator.share({ url, title });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch (_) {
      // user canceled or not supported
    }
  }
  return (
    <Button type="button" onClick={onShare}>Share</Button>
  );
}

