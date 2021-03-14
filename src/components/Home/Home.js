import React from 'react';
import { useEffect, useState } from 'react';
import Character from '../Character/Character';
import Death from '../Death/Death';
import Episode from '../Episode/Episode';
import Quote from '../Quote/Quote';

const Home = () => {
      const quoteUrl = 'https://www.breakingbadapi.com/api/quotes'
      const [quote, setQuote] = useState([])
      useEffect(() => {
            fetch(quoteUrl)
                  .then(res => res.json())
                  .then(data => setQuote(data))
      }, [])

      const [episode, setEpisode] = useState([])
      const episodeUrl = 'https://breakingbadapi.com/api/episodes'
      useEffect(() => {
            fetch(episodeUrl)
                  .then(response => response.json())
                  .then(data => setEpisode(data))
      }, [])

      const [death, setDeath] = useState([])
      const deathUrl = 'https://breakingbadapi.com/api/deaths'
      useEffect(() => {
            fetch(deathUrl)
                  .then(response => response.json())
                  .then(data => setDeath(data))
      }, [])

      const [character,setCharacter] = useState([])
      const characterUrl = 'https://breakingbadapi.com/api/characters'
      useEffect(()=>{
            fetch(characterUrl)
            .then(res=>res.json)
            .then(data=>setCharacter(data))
      },[])
      return (
            <div>
                  <h1>Quotes</h1>
                  {
                        quote.map(quote => <Quote quote={quote} key={quote.quote_id}></Quote>)
                  }
                  <h1>Episodes</h1>
                  {
                        episode.map(episode =><Episode episode={episode} key={episode.episode_id}></Episode>)
                  }
                  <h1>Deaths</h1>
                  {
                        death.map(death=><Death death={death}></Death>)
                  }
                  <h1>Characters</h1>
                  {
                        character.map(character=> <Character character={character} key={character.char_id}></Character>)
                  }
            </div>
      );
};

export default Home;