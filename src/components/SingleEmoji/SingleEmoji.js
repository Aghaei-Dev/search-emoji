import React, { useState, useEffect } from 'react'

const SingleEmoji = ({ emoji }) => {
  const [clip, setClip] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setClip('')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <article
      className={`single-emoji ${clip === emoji && 'copied'}`}
      onClick={() => {
        setClip(emoji)
        navigator.clipboard.writeText(emoji)
      }}>
      <span>{emoji}</span>
    </article>
  )
}

export default SingleEmoji
