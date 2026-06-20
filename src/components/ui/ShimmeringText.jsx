import * as React from "react";
import { cn } from "../../lib/utils";

// CSS-driven shimmer (single composited background-position animation)
// instead of one Framer Motion color animation per character running
// on the JS thread forever — that was the source of constant CPU usage.
export function ShimmeringText({
    text,
    duration = 2,
    isStopped = false,
    className,
    ...props
}) {
    return (
        <span
            className={cn(
                "inline-block select-none bg-clip-text text-transparent bg-[length:200%_100%]",
                "bg-linear-to-r from-zinc-400 via-zinc-950 to-zinc-400",
                "dark:from-zinc-600 dark:via-zinc-50 dark:to-zinc-600",
                !isStopped && "animate-shimmer-text",
                className
            )}
            style={{ animationDuration: `${duration * 2}s` }}
            {...props}
        >
            {text}
        </span>
    );
}
