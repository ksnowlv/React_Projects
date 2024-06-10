import React from 'react';


const LikeButton: React.FC = () => {

    const [liked, setLiked] = React.useState(false)

    if (liked)
    {
        return (
            <button className="myButton" onClick={() => setLiked(false)}>
                Unlike
            </button>
        );
    }
    else
    {
        return (
            <button className="myButton" onClick={() => setLiked(true)}>
                Like
            </button>
        );
    };
}

export default LikeButton
