import cssText from "data-text:~style.css"
import { C } from "nextra/dist/types-fa5ec8b0"
import type { PlasmoCSConfig } from "plasmo"
import React from "react"
import { createRoot } from "react-dom/client"

import { Button } from "~lib/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~lib/components/ui/sheet"
import { injectMainStyles } from "~lib/utils"

export const config: PlasmoCSConfig = {
  matches: ["https://chat.openai.com/*"]
}
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  injectMainStyles(cssText)

  return (
    <div className="fixed z-50 flex top-16 right-8">
      <Sheet>
        <SheetTrigger>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] bg-[#bada55] ">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default PlasmoOverlay
