import { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';
import '../../../assets/css/vimeoPlayer.css';

const VimeoPlayer = ({ vimeoID }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current && vimeoID) {
            playerRef.current.setAttribute('data-vimeo-id', vimeoID);
        }
    }, [vimeoID]);

    useEffect(() => {
        let player;

        try {
            if (vimeoID && playerRef.current) {
                player = new Vimeo(playerRef.current, {
                    id: vimeoID,
                    autoplay: true,
                    loop: true,
                    muted: true,
                    controls: false,
                    title: false,
                    responsive: true,
                });
            }
        } catch (error) {
            // Suppress error in development
        }

        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, [vimeoID]);

    if (!vimeoID) return null;

    return (
        <div className="vimeo-section">
            <div className="p-0 overflow-hidden">
                <div className="vim-container">
                    <div ref={playerRef} />
                </div>
            </div>
        </div>
    );
};

export default VimeoPlayer;