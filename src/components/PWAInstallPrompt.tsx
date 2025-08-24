import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // چک کردن وضعیت نصب
    const checkInstallStatus = () => {
      if (
        window.matchMedia &&
        window.matchMedia('(display-mode: standalone)').matches
      ) {
        setIsInstalled(true)
      }
      if (window.navigator.standalone === true) {
        setIsInstalled(true)
      }
    }

    // چک کردن اینکه آیا قبلاً dismiss شده
    const isPromptDismissed = () => {
      return localStorage.getItem('pwa-prompt-dismissed') === 'true'
    }

    // Event listener برای beforeinstallprompt
    const handleBeforeInstallPrompt = (e: any) => {
      console.log('PWA: beforeinstallprompt رخ داد')
      console.log('isInstalled:', isInstalled)
      console.log('isPromptDismissed:', isPromptDismissed())

      e.preventDefault()
      setDeferredPrompt(e)

      if (!isInstalled && !isPromptDismissed()) {
        console.log('نمایش پرامپت...')
        setShowPrompt(true)
      } else {
        console.log('پرامپت نمایش داده نشد چون:', {
          isInstalled,
          dismissed: isPromptDismissed(),
        })
      }
    }

    // Event listener برای appinstalled
    const handleAppInstalled = () => {
      console.log('PWA: اپ با موفقیت نصب شد')
      setShowPrompt(false)
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    checkInstallStatus()
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [isInstalled])

  const handleInstall = async () => {
    if (!deferredPrompt) {
      console.log('PWA: امکان نصب وجود ندارد')
      return
    }

    try {
      deferredPrompt.prompt()
      const choiceResult = await deferredPrompt.userChoice

      if (choiceResult.outcome === 'accepted') {
        console.log('PWA: کاربر نصب را پذیرفت')
      } else {
        console.log('PWA: کاربر نصب را رد کرد')
      }

      setDeferredPrompt(null)
      setShowPrompt(false)
    } catch (error) {
      console.error('PWA: خطا در نصب:', error)
    }
  }

  const handleClose = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompt-dismissed', 'true')
  }

  if (!showPrompt || isInstalled) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm animate-slide-in">
      <div className="bg-primary-700 text-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">
              <img src="/favicon.ico" className="w-10 " />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1">نصب اپلیکیشن</h3>
              <p className="text-sm text-slate-300 mb-4">
                آیا می‌خواهید برنامه را نصب کنید؟
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstall}
                  className="bg-MidYellow hover:bg-LightYellow text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  نصب
                </button>
                <button
                  onClick={handleClose}
                  className="bg-transparent border border-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PWAInstallPrompt
