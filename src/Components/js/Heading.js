import React from "react";
import Popup from 'reactjs-popup';
import "../css/Heading.css"
const Heading = () => {
    return (
        <>
            <div className="contheading">
                <div className="title">
                    <h1>SRM Hub</h1>
                </div>
                <div className="contverify">
                    <Popup trigger={<button className="b1" > Sign up </button>} modal>
                        <span>
                            <div className="popl">
                                <h3>Sign up</h3>
                                <input type="text" placeholder="first name" />
                                <input type="text" placeholder="last name" />
                                <input type="text" placeholder="registration number" />
                                <input type="text" placeholder="enter SRM ID" />
                                <input type="password" placeholder="enter password" />
                                <input type="password" placeholder="re-enter password" />
                                <button className="b1">sign up</button>
                            </div>

                        </span>
                    </Popup>

                    <Popup trigger={<button className="b1" > Log in </button>} modal>
                        <span>
                            <div className="popl">
                                <h3>Log In</h3>
                                <input type="text" placeholder="email" />
                                <input type="password" placeholder="password" />
                                <button className="b1">Log in</button>
                            </div>
                        </span>
                    </Popup>








                </div>
            </div>
        </>
    );
}

export default Heading;
