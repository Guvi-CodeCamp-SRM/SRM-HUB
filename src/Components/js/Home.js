import "../css/Home.css"
import React from "react";
const Home = () => {
    return (
        <>
            <div className="conthome">
                <div className="contdiv">
                    <div className="one">
                        <h2>Currently Trending Blogs</h2>
                        <div className="onelite">
                            <div className="onea">
                                <h4>SRM Hub Launches</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, itaque! Illum maxime debitis veniam consequatur quasi, vitae iure tenetur soluta voluptate nihil! Ipsum excepturi quae, impedit cumque mollitia illo reprehenderit.</p>
                            </div>
                            <div className="oneb">
                                <h4>Holiday Announced</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, itaque! Illum maxime debitis veniam consequatur quasi, vitae iure tenetur soluta voluptate nihil! Ipsum excepturi quae, impedit cumque mollitia illo reprehenderit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                        <h2>Resources for 2022 Batch</h2>
                        <div className="twolite">
                            <div className="twoa"><h4>Semi-Conductor Physics</h4></div>
                            <div className="twoa"><h4>German</h4></div>
                            <div className="twoa"><h4>Calculus</h4></div>
                            <div className="twoa"><h4>Basic Civil & Mechinical</h4></div>
                            <div className="twoa"><h4>Basic Electrical & Electronics</h4></div>
                            <div className="twoa"><h4>Programming For Problem Solving</h4></div>
                        </div>

                    </div>
                </div>
                <div className="contdiv">

                    <div className="two twox">
                        <h1>Gaming Events</h1>
                        <p className="p1">GCC Hosts the Gaming Event of the Year</p>
                        <p className="p2"> Valorant</p>
                        <p className="p3">  Call of Duty: Warzone</p>
                        <p className="p4">  CS:GO</p>
                        <p className="p5">  Fortnite</p>
                        <p className="p6">  Prizes Worth Upto 2 Lakhs</p>
                        


                    </div>

                    <div className="one">
                        <h2>Download Books and Movies</h2>
                        <div className="onelite">
                            <div className="onea onex">
                                <h3>Books</h3>
                            </div>
                            <div className="oneb onex">
                                <h3>Movies</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;