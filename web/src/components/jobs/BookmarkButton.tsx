"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { isBookmarked, toggleBookmark } from "@/utils/bookmarks";

export default function BookmarkButton({ jobId }: { jobId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(jobId));
  }, [jobId]);

  function onClick() {
    const next = toggleBookmark(jobId);
    setSaved(next.includes(jobId));
  }

  return (
    <Button type="button" onClick={onClick} aria-pressed={saved} className={saved ? "bg-slate-700 hover:bg-slate-800" : ""}>
      {saved ? "Saved" : "Save"}
    </Button>
  );
}

