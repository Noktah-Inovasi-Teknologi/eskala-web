// Plays a below-the-fold animation once (the motion block in main.css). Bind the returned class on
// the element: "motion-armed" holds the first frame, "motion-armed motion-play" runs it.

import type { Ref } from "vue"

interface MotionHooks {
  onArm?: () => void
  onPlay?: () => void
}

export function useMotionOnce(target: Readonly<Ref<HTMLElement | null>>, hooks: MotionHooks = {}) {
  const motion = ref<string>()
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const el = target.value
    // Already on screen (an anchor link, a restored scroll) or reduced motion: keep the finished state.
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < innerHeight) return
    motion.value = "motion-armed"
    hooks.onArm?.()
    observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      observer?.disconnect()
      motion.value = "motion-armed motion-play"
      hooks.onPlay?.()
    }, { rootMargin: "0px 0px -20% 0px" })
    observer.observe(el)
  })
  onBeforeUnmount(() => observer?.disconnect())

  return motion
}
