"use client"
import useTrackCursor from "./useTrackCursor";
const MouseTrailer=()=>{
    const[x,y,bind]=useTrackCursor();
    const animationStyle={
        transition:"150ms",
        left: `${x}px`,
        Top: `${y}px`,
        animation: "150ms ease-in 150ms infinite"
    }
    return(
        <div{...bind} className={`size-8 bg-white bg-center transition-transform animate-pulse shadow-lg shadow-white`}style={animationStyle}>
        </div>
    );
};
export default MouseTrailer;