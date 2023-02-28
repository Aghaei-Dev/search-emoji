import React, { useState, useEffect } from 'react'
import { Tooltip } from '@mui/material'
const SingleEmoji = ({ emoji, description }) => {
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
    <Tooltip title={description} arrow>
      <article
        className={`single-emoji ${clip === emoji && 'copied'}`}
        onClick={() => {
          setClip(emoji)
          navigator.clipboard.writeText(emoji)
        }}>
        <span>{emoji}</span>
      </article>
    </Tooltip>
  )
}

export default SingleEmoji
