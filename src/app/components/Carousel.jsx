"use client"
import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  className="",
  showbtns=true,
  onClick=()=>{}
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
        onClick={onClick}
      >
        {slides}
      </div>
     { showbtns && <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="h-[24px] w-[24px] flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          className="h-[24px] w-[24px] flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        {">"}
        </button>
      </div>}

      {showbtns && <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>}
    </div>
  )
}