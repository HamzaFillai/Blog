import React from 'react'
import Navbar from './Navbar'
import "../../style/Home.css"
import history from "../../image/history.jpg"
import science from "../../image/science.jpg"
import culture from "../../image/culture.jpg"

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
            <br/>
            <br/>
            <h1>The most blog created</h1>
            <div className="blogscreated">
                <section>
                    <p><img src={history}/></p>
                    <h2>History</h2>
                    <button>Example <i className="fas fa-arrow-right"></i></button>
                </section>
                <br/>
                <section>
                    <p><img src={science}/></p>
                    <h2>Science</h2>
                    <button>Example <i className="fas fa-arrow-right"></i></button>
                </section>
                <br/>
                <section>
                    <p><img src={culture}/></p>
                    <h2>Culture</h2>
                    <button>Example <i className="fas fa-arrow-right"></i></button>
                </section>
            </div>
            <br/>
            <br/>
            <h1>What do our customers say about us</h1>
            <div className="blogcustomers">
                <div className="eachcustomers">
                    <div>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <p>Rebecca<br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
                    </div>
                    <p>I'll be using this app on all of my stores ans the stores I build for my students. Y'all are literally the best thing I have found for automating my sales.</p>
                </div>
                <br/>
                <div className="eachcustomers">
                    <div>
                        <img src="data:image/jpeg;base64,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"/>
                        <p>Josmar<br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
                    </div>
                    <p>Works like a charm. I love the ease of the app and would highly recommend purchasing their monthly program to create a perfect selling opportunity for yourself</p>
                </div>
                <br/>
                <div className="eachcustomers">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxv0P4qDS_KAn-lIeyKpOSVEM87pPKbIVIQ&usqp=CAU"/>
                        <p>Kimberley<br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></p>
                    </div>
                    <p>I didn't even know where to start as far advertising goes or how to reach people. Sixads really made this part so easy and effective, thank you !</p>
                </div>
            </div>
        </div>
    )
}
