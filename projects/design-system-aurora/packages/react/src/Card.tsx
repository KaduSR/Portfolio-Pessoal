import React from "react"
export function Card({children, ...props}: React.PropsWithChildren) {
  return React.createElement("div", {"data-testid":"card", ...props}, children)
}
