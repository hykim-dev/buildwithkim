"use client";
import { ReactNode } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export default function CustomCursorProvider({ children }: { children: ReactNode }) {
    useCustomCursor();
    return <>{children}</>;
}
