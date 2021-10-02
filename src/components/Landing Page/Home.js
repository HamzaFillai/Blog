import React from 'react'
import Navbar from './Navbar'
import "../../style/Home.css"

export default function Home() {

    var c = 0;

    function butt()
    {
        c++;

        if(c==0)
        {
            document.getElementById('imgmon').style.backgroundImage="url(https://wallpaperaccess.com/full/758246.jpg)";
            document.getElementById('name').innerHTML = "The Eiffel Tour";
            document.getElementById('city').innerHTML = "Paris";
        }

        if(c==1)
        {
            document.getElementById('imgmon').style.backgroundImage="url(https://www.wallpaperuse.com/wallp/17-178654_m.jpg)";
            document.getElementById('name').innerHTML = "Statue Of Liberty";
            document.getElementById('city').innerHTML = "New York";
        }

        if(c==2)
        {
            document.getElementById('imgmon').style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/1/13/Jefferson_Memorial_At_Dusk_1.jpg)";
            document.getElementById('name').innerHTML = "Jefferson Memorial";
            document.getElementById('city').innerHTML = "Washington";
            c=c-3;
        }
    }
    

    return (
        <div className="homepage">
            <Navbar/>
            <h1>Tickets Blog</h1>
            <div className="monuments" id="imgmon">
                <h3 id="name">The Eiffel Tour</h3>
                <h2 id="city">Patris</h2>
                <button onClick={()=>butt()} id="next">Next</button>
            </div>
        </div>
    )
}
