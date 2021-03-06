import React from 'react';

const Droplet =
{
    name: 'Droplet',
    slug: 'droplet',
    short: 'Tiny and insignificant, you are not discourage from dreaming big. Consume those around you, but remember there is always someone bigger waiting.',
    trailer: 'https://www.youtube.com/embed/UmCM3mFo3XA',
    mediaPath: 'img/games/droplet/',
    cover: 'cover.png',
    preview: 'game_preview.png',
    screenshots:[
        'screenshot_01.png',
        'screenshot_02.png',
        'screenshot_03.png',
        'screenshot_04.png',
        'screenshot_05.png',
        'screenshot_06.png',
     ],
    links: [
        {
            name: 'Itch.io',
            url: 'https://manbeardgames.itch.io/droplet',
        },
        {
            name: 'Ludum Dare 40',
            url: 'https://ldjam.com/events/ludum-dare/40/droplet',
        }

    ],
    description:
    <span>
        <p>
            You are a small, tiny insignificant droplet. Small as you may be, this doesn't discourage you from dreaming to be bigger. As you consume those that stand in your way, you watch yourself grow. But don't let your ego blind you, as there are always others out there, bigger and better than you, waiting to grow by consuming you.
        </p>
        <p>
            Droplet was made for Ludum Dare 40 with the theme <b>"The more you have, the worse it is"</b>. In Droplet, players can only consume other droplets that are smaller than themselves, with a bit of a twist. Consuming those of the same color will allow you to grow, while those of the opposite color will allow you to shrink. The goal is to grow as large as you can, however, the bigger you get, the slower you move.
        </p>
    </span>
}


export default Droplet;
