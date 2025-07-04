import React, { useEffect, useState } from 'react'
import Card from './Card'

const NewsApp = () => {
    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "77d7efb3768c4806899746dc525d24d9";

    const getData = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles)
        setNewsData(jsonData.articles)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const userInput = (e) => {
        setSearch(e.target.value)
    }

  return (
    <>
    <nav>
        <div>
            <h1>Trendy News</h1>
        </div>
        <ul>
            <a href="">All News</a>
            <a href="">Trending Topics</a>
        </ul>

        <div className='searchBar'>
            <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
            <button onClick={getData}>Search</button>
        </div>
    </nav>

    <div>
        <p className='head'>Stay Update with TrendyNews</p>
    </div>

    <div className='categorybtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
    </div>

    <div>
        {newsData ? <Card data={newsData}/> : null}    
    </div>
    </>
  )
}

export default NewsApp