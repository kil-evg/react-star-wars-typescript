import { useEffect, useState } from 'react'
import { characters, period_month } from '../utils/constants'
import { Hero, HeroInfo } from '../utils/types';
import { useParams } from 'react-router-dom';

const AboutMe = () => {
  const [hero, setHero] = useState<HeroInfo>();
  const { heroId } = useParams();
  console.log(heroId);
  const aboutHero: Hero = characters.find(h => h.id === heroId)! || characters.find(h => h.id === 'luke');

  useEffect(() => {
    const hero = JSON.parse(localStorage.getItem(aboutHero.id)!);
    if (hero && ((Date.now() - hero.time) < period_month)) {
      setHero(hero.payload)
    }
    else {
      fetch(aboutHero.url)
        .then(response => response.json())
        .then(data => {
          const info = {
            name: data.name,
            gender: data.gender,
            birth_year: data.birth_year,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color
          }
          setHero(info);
          localStorage.setItem(aboutHero.id, JSON.stringify({
            time: Date.now(),
            payload: info
          }))
        })
    }
    return () => console.log(`Component AboutMe was unmounted`)
  }, [heroId])

  return (
    <>

      {(!!hero) &&
        <div className='text-3xl leading-loose text-justify tracking-widest ml-8'>
          {Object.keys(hero).map(key => <p key={key}><span className='text-[1.5em] capitalize'>{key.replace('_', ' ')}:</span> {hero[key as keyof HeroInfo]}</p>)}
        </div>
      }

    </>
  )
}

export default AboutMe