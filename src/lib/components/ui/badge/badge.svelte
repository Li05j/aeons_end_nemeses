<script lang="ts">
    import { cn } from "$lib/utils";
    import type { BadgeVariant } from "./index.js";
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        variant = "default",
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        variant?: BadgeVariant;
        children?: Snippet;
    } = $props();

    const variantClasses: Record<BadgeVariant, string> = {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
    };
</script>

<div
    class={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[variant],
        className
    )}
    {...restProps}
>
    {#if children}{@render children()}{/if}
</div>
