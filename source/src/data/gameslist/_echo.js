import React from 'react';

const Echo =
{
    name: 'Echo',
    slug: 'echo',
    short: 'Waking up, trapped in a room with the ceiling closing in. Death is ensured, but how long can you survive.',
    trailer: null,
    mediaPath: 'img/games/echo/',
    cover: 'cover.png',
    preview: 'game_preview.png',
    screenshots:[
        'screenshot_01.png',
        'screenshot_02.png',
        'screenshot_03.png',
     ],
    links: [
        {
            name: 'Itch.io',
            url: 'https://ldjam.com/events/ludum-dare/42/echo',
        },
        {
            name: 'Ludum Dare 42',
            url: 'https://ldjam.com/events/ludum-dare/42/echo',
        }
    ],
    description:
    <span>
        <p>
            You wake up and find yourself trapped inside a room of a ruined structure. The ceiling is descending, and you have no way to climb out. You're a slime after all, how can you climb. Once the ceiling has completely lowered, it will squish you like it has done to so many before. You're only hope is to find some way to stop the ceiling from completely descending on you. Can you survive, or are you only prolonging your eventual death?
        </p>
        <p>
            Echo was developed for Ludum Dare 42, with the theme <b>"Running out of space"</b>. In this game, the ceiling is constantly and slowly descending. The player must hurry to find the active nodes that will push back and delay the ceiling. Eventually, the ceiling will descend completely. While managing this, the player will also have to fight off a horde of dead slimes who have died before them. They close in fast and overwhelm quickly if not dealt with.
        </p>
    </span>
}

export default Echo;
