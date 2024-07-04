import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="sm:h-14 sm:w-14 lg:h-24 lg:w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-600 animate-spin">
        </div>
    </div>
</div>
  )
}

export default Loading