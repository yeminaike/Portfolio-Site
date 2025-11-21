"use client"

import Spinner from "./Spinner"

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566]">
      <div className="flex flex-col items-center gap-4">
        <Spinner />
      </div>
    </div>
  )
}
