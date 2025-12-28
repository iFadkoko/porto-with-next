'use client'

import useSound from 'use-sound'
import { useState, useEffect, useCallback, useContext, createContext } from 'react';
import { useSoundContext } from './sound-context';




export default function useSoundLogic() {
    const [playing, setPlaying] = useState(false);

    const [play, { pause }] = useSound('/light-desain.mp3', {
        loop: true,
        volume: 1,
        onplay: () => setPlaying(true),
        onend: () => setPlaying(false),
        onpause: () => setPlaying(false),
        onstop: () => setPlaying(false),
    });


    const toggle = useCallback(() => {
        console.log('toggle clicked', playing);
        if (playing) {
            pause();
        } else {
            play();
        }
    }, [playing, play, pause]);

    return { playing, toggle };

}
