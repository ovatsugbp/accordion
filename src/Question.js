import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
    const [showItem, setShowItem] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowItem(!showItem)}>
                    {showItem ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showItem && <p>{info}</p>}
        </article>
    );
};

export default Question;
