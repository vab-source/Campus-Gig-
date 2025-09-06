const KEY = "campusgig:bookmarks";

function safeStorage() {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function getBookmarks(): string[] {
  const s = safeStorage();
  if (!s) return [];
  const raw = s.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function isBookmarked(id: string) {
  return getBookmarks().includes(id);
}

export function toggleBookmark(id: string) {
  const s = safeStorage();
  if (!s) return [];
  const current = getBookmarks();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  s.setItem(KEY, JSON.stringify(next));
  return next;
}

