import React, { useState, useEffect } from 'react'
import SingleEmoji from '../SingleEmoji/SingleEmoji'
import data from '../Data/emojis.json'
import { v4 as uuidv4 } from 'uuid'

const List = () => {
  const [emojiArray, setEmojiArray] = useState(data)
  const [searchValue, setSearchValue] = useState('')
  const [category, setCategory] = useState()

  let filteredArray = []
  let categoryArray = ['All']

  const uniqueCategory = new Set()
  data.forEach((item) => {
    uniqueCategory.add(item.category)
  })
  uniqueCategory.forEach((item) => {
    categoryArray.push(item)
  })

  if (!searchValue) {
    if (category) {
      filteredArray = []
      const arraySortedByCategory = data.filter((item) => {
        return item.category === category
      })
      filteredArray = arraySortedByCategory
    }

    if (category === 'All') {
      filteredArray = data
    }
  } else {
    data.forEach((item) => {
      if (
        item.description.toLowerCase() === searchValue.toLowerCase() ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        filteredArray.push(item)
      }
    })
  }

  useEffect(() => {
    setEmojiArray(filteredArray)
  }, [searchValue, category])
  return (
    <>
      <section className='search'>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          value={searchValue}
          type='text'
          className='emoji-search'
          placeholder='Search 🔎'
        />
      </section>
      {!searchValue &&
        categoryArray.map((item, index) => {
          return (
            <button
              key={index}
              className={`category ${item === category && 'selected'}`}
              onClick={(e) => {
                setCategory(e.target.textContent)
              }}>
              {item}
            </button>
          )
        })}
      <div className='list'>
        {emojiArray.map((item) => {
          return <SingleEmoji {...item} key={uuidv4()} />
        })}
      </div>
    </>
  )
}

export default List
