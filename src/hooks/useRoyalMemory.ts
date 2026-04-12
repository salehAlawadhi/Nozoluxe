"use client";

import { useState, useEffect } from "react";

// As the 50-year veteran Director, I'm building a 'memory' system. 
// Standard sites forget the customer. Nozoluxe remembers their taste.

export function useRoyalMemory() {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [lastVibe, setLastVibe] = useState<string>("All");

  useEffect(() => {
    // Load from memory
    const saved = localStorage.getItem("royal_memory");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setRecentlyViewed(parsed.recentlyViewed || []);
        setLastVibe(parsed.lastVibe || "All");
      } catch (e) {
        console.error("Memory failure", e);
      }
    }
  }, []);

  const saveToMemory = (slug: string) => {
    const updated = [slug, ...recentlyViewed.filter(s => s !== slug)].slice(0, 5);
    setRecentlyViewed(updated);
    localStorage.setItem("royal_memory", JSON.stringify({ recentlyViewed: updated, lastVibe }));
  };

  const setVibeMemory = (vibe: string) => {
    setLastVibe(vibe);
    localStorage.setItem("royal_memory", JSON.stringify({ recentlyViewed, lastVibe: vibe }));
  };

  return { recentlyViewed, lastVibe, saveToMemory, setVibeMemory };
}
