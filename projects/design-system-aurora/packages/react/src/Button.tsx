import React from "react"
export function Button({children, ...props}: React.PropsWithChildren) {
  return React.createElement("div", {"data-testid":"button", ...props}, children)
}
