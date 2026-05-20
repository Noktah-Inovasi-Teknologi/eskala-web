export function useResponsiveSize() {
  //@ts-ignore
  const viewport = useViewport();
  const componentSize = computed(() => {
    if (viewport.isLessThan("sm")) return "xs";
    if (viewport.isLessThan("md")) return "sm";
    if (viewport.isLessThan("lg")) return "md";
    if (viewport.isLessThan("xl")) return "lg";
    return "xl";
  });
  const iconSize = computed(() => {
    if (viewport.isLessThan("sm")) return "text-lg";
    if (viewport.isLessThan("md")) return "text-xl";
    if (viewport.isLessThan("lg")) return "text-2xl";
    if (viewport.isLessThan("xl")) return "text-3xl";
    return "text-4xl";
  });
  const textSize = computed(() => {
    if (viewport.isLessThan("sm")) return "text-sm";
    if (viewport.isLessThan("md")) return "text-base";
    if (viewport.isLessThan("lg")) return "text-lg";
    if (viewport.isLessThan("xl")) return "text-xl";
    return "text-2xl";
  });
  const iconDimension = computed(() => {
    if (viewport.isLessThan("sm")) return "w-4! h-4!";
    if (viewport.isLessThan("md")) return "w-6! h-6!";
    if (viewport.isLessThan("lg")) return "w-8! h-8!";
    if (viewport.isLessThan("xl")) return "w-10! h-10!";
    return "w-12! h-12!";
  });
  return { componentSize, iconSize, textSize, iconDimension };
}
