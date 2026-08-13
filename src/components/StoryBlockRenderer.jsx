import React from 'react'

function ImageBlock({ block }){
  return (
    <figure className="w-full my-4">
      <div className="w-full h-80 sm:h-[420px] rounded-xl overflow-hidden shadow-sm bg-slate-100 border border-gray-200">
        <img src={block.src} alt={block.caption || 'property image'} className="w-full h-full object-cover" />
      </div>
      {block.caption && <figcaption className="text-xs font-medium text-gray-500 mt-2 text-center italic">{block.caption}</figcaption>}
    </figure>
  )
}

function TextBlock({ block }){
  return <p className="text-gray-700 leading-relaxed">{block.content}</p>
}

export default function StoryBlockRenderer({ blocks = [] }){
  return (
    <div className="space-y-6 p-6">
      {blocks.map((b, i) => (
        <div key={i}>
          {b.type === 'image' && <ImageBlock block={b} />}
          {b.type === 'text' && <TextBlock block={b} />}
        </div>
      ))}
    </div>
  )
}
