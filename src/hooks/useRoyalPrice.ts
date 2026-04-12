"use client";

import { create } from "zustand";

// 🏛️ The Royal Price Engine: Absolute Market Authority
// As a 50-year veteran, I know that for a GCC traveler, seeing prices in
// their local currency (SAR/AED/KWD) is the first step of trust.

type Currency = "SAR" | "AED" | "KWD" | "USD";

interface PriceState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  rates: Record<Currency, number>;
  convert: (amountInUSD: number) => { amount: string; symbol: string };
}

export const useRoyalPriceStore = create<PriceState>((set, get) => ({
  currency: "SAR",
  setCurrency: (currency) => set({ currency }),
  rates: {
    USD: 1,
    SAR: 3.75, // Sovereign Saudi Riyal
    AED: 3.67, // Emirati Dirham
    KWD: 0.31, // Kuwaiti Dinar
  },
  convert: (amountInUSD) => {
    const { currency, rates } = get();
    const rate = rates[currency];
    const amount = (amountInUSD * rate).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const symbols: Record<Currency, string> = {
      SAR: "ر.س",
      AED: "د.إ",
      KWD: "د.ك",
      USD: "$",
    };

    return { amount, symbol: symbols[currency] };
  },
}));

// Simple hook wrapper for cleaner usage
export function useRoyalPrice() {
  const store = useRoyalPriceStore();
  return store;
}
