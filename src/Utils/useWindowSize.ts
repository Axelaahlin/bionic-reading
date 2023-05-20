import { onBeforeMount, onScopeDispose, inject, ref, onMounted } from 'vue'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
type SizeName = (typeof sizes)[number]

const breakPoints: { [key in SizeName]: number } = {
  xs: 375,
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1232,
}

export default () => {
  // OBSERVE - SSR info
  // If you experience hydration warnings you might want to provide an initial server side size value, either hardcoded or dynamic; based on user agent info from Node request header.
  // In that case, use provide("ssrCurrentSize", _SSR-user-agent-based-value_) in a parent component.
  const ssrSize = inject('ssrCurrentSize', '')
  const currentSize = ref((ssrSize as SizeName) || 'sm')

  // If you want to check windowsize onMounted even if ssrSize is set - provide("checkWindowSizeOnMount", true)
  const checkWindowSizeOnMount = inject('checkWindowSizeOnMount', false)

  const currentSizeEquals = (size: SizeName) => {
    // Current size is exactly as param.
    return sizes.indexOf(currentSize.value) === sizes.indexOf(size)
  }

  const currentSizeLte = (size: SizeName) => {
    // Current size is Less than or equal to param.
    return sizes.indexOf(currentSize.value) <= sizes.indexOf(size)
  }

  const currentSizeGte = (size: SizeName) => {
    // Current size is Greater than or equal to param.
    return sizes.indexOf(currentSize.value) >= sizes.indexOf(size)
  }

  const addEventListeners = () => {
    const mediaQueryListXs = window.matchMedia(
      `(max-width: ${breakPoints.xs}px)`
    ) // 0 - 374
    const mediaQueryListSm = window.matchMedia(
      `(min-width: ${breakPoints.xs}px) and (max-width: ${
        breakPoints.md - 1
      }px)`
    ) // 375 - 767
    const mediaQueryListMd = window.matchMedia(
      `(min-width: ${breakPoints.md}px) and (max-width: ${
        breakPoints.lg - 1
      }px)`
    ) // 768 - 1023
    const mediaQueryListLg = window.matchMedia(
      `(min-width: ${breakPoints.lg}px) and (max-width: ${
        breakPoints.xl - 1
      }px)`
    ) // 1024 - 1231
    const mediaQueryListXl = window.matchMedia(
      `(min-width: ${breakPoints.xl}px)`
    ) // 1232 - infinite

    // Trigger the matchmedias at first load (not only on change).
    // If providing ssrSize value we want the client to have same size as the server so we skip first trigger.
    if (!ssrSize) {
      if (mediaQueryListXs.matches) currentSize.value = 'xs'
      else if (mediaQueryListSm.matches) currentSize.value = 'sm'
      else if (mediaQueryListMd.matches) currentSize.value = 'md'
      else if (mediaQueryListLg.matches) currentSize.value = 'lg'
      else currentSize.value = 'xl'
    }

    if (checkWindowSizeOnMount) {
      //wait until mounted to get away from hydration errors if client and server size did not match.
      onMounted(() => {
        if (mediaQueryListXs.matches) currentSize.value = 'xs'
        else if (mediaQueryListSm.matches) currentSize.value = 'sm'
        else if (mediaQueryListMd.matches) currentSize.value = 'md'
        else if (mediaQueryListLg.matches) currentSize.value = 'lg'
        else currentSize.value = 'xl'
      })
    }

    // Add event listeners for the different media query changes
    const xs = (e: MediaQueryListEvent) => {
      if (e.matches) currentSize.value = 'xs'
    }
    const sm = (e: MediaQueryListEvent) => {
      if (e.matches) currentSize.value = 'sm'
    }
    const md = (e: MediaQueryListEvent) => {
      if (e.matches) currentSize.value = 'md'
    }
    const lg = (e: MediaQueryListEvent) => {
      if (e.matches) currentSize.value = 'lg'
    }
    const xl = (e: MediaQueryListEvent) => {
      if (e.matches) currentSize.value = 'xl'
    }

    // addEventListener & removeEventListener isn't supported on Safari < 14 so we add the depricated variant to minimize error logs
    try {
      mediaQueryListXs.addEventListener('change', xs)
      mediaQueryListSm.addEventListener('change', sm)
      mediaQueryListMd.addEventListener('change', md)
      mediaQueryListLg.addEventListener('change', lg)
      mediaQueryListXl.addEventListener('change', xl)
    } catch (err) {
      mediaQueryListXs.addListener(xs)
      mediaQueryListSm.addListener(sm)
      mediaQueryListMd.addListener(md)
      mediaQueryListLg.addListener(lg)
      mediaQueryListXl.addListener(xl)
    }

    onScopeDispose(() => {
      try {
        mediaQueryListXs.removeEventListener('change', xs)
        mediaQueryListSm.removeEventListener('change', sm)
        mediaQueryListMd.removeEventListener('change', md)
        mediaQueryListLg.removeEventListener('change', lg)
        mediaQueryListXl.removeEventListener('change', xl)
      } catch (err) {
        mediaQueryListXs.removeListener(xs)
        mediaQueryListSm.removeListener(sm)
        mediaQueryListMd.removeListener(md)
        mediaQueryListLg.removeListener(lg)
        mediaQueryListXl.removeListener(xl)
      }
    })
  }

  onBeforeMount(() => {
    // We use before mount to be sure that the currentSize methods aren't used
    addEventListeners()
  })

  return { currentSize, currentSizeLte, currentSizeGte, currentSizeEquals }
}
