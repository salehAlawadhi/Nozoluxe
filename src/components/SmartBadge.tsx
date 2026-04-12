import React from "react";
import { Users, Droplets, Leaf, Shield, Heart } from "lucide-react";

interface SmartBadgeProps {
  type: "family" | "private_pool" | "nature" | "privacy" | "honeymoon";
  className?: string;
}

export default function SmartBadge({ type, className = "" }: SmartBadgeProps) {
  const configs = {
    family: { icon: Users, text: "مناسب للعائلات", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    private_pool: { icon: Droplets, text: "مسبح خاص", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
    nature: { icon: Leaf, text: "طبيعة وهدوء", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    privacy: { icon: Shield, text: "خصوصية عالية", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    honeymoon: { icon: Heart, text: "شهر عسل", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
  };

  const config = configs[type];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${config.bg} ${config.border} ${className}`}>
      <Icon size={12} className={config.color} />
      <span className={`text-[10px] font-royal font-medium ${config.color}`}>{config.text}</span>
    </div>
  );
}
