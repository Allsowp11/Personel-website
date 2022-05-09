import { HeroLayout } from './Herolayout.js';
import { Hero } from '../components/hero/hero.js';
import { About } from '../components/About/about.js';
import { TechStack } from '../components/techstack/techstack.js';
import { Project } from '../components/Projects/projects.js';
import { useEffect, useState } from 'react';
import { Contact } from '../components/Contact/Contact.js';
import { GithubURL } from '../libs/apis/apis.js';
import { Startups } from '../components/Startups/Startups.js';
export const Main = () =>{
    const [Api, Setapi] = useState([])
    
    useEffect(() =>{
        fetch(GithubURL)
        .then(response => response.json())
        .then(response => Setapi(response))

    },[])
    return(
        <HeroLayout>
            <Hero/>
            <About/>
            <div className='bg-[#141413] pb-10 space-y-20 flex flex-col '>
                <Startups/>
                <TechStack/>
                <Project Api={Api}/>
                <Contact/>
            </div>
        </HeroLayout>
    );
}