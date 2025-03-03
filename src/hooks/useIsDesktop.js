import { useState, useEffect } from "react"

const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      )
      setIsDesktop(!isMobile && window.innerWidth >= breakpoint)
    }

    checkDevice() // Run on mount

    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [breakpoint])

  return isDesktop
}

export default useIsDesktop
