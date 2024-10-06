import React from "react";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => data.data.memes)
    },[])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
