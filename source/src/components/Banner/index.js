import React from 'react';
import styles from './styles.module.css';

const Banner = () => (
    <div className={styles.banner}>
        <svg
            className={styles.logo}
            fill="none"
            version="1.1"
            viewBox="0 0 192.97436 172.4396"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m 70.222722,0.50020095 c -0.02187,0.00556 -0.04382,0.011169 -0.06569,0.016858 -1.493072,0.016729 -2.966789,0.3402973 -4.329538,0.95061865 -0.167082,0.09526 -0.331606,0.1949301 -0.493394,0.2989077 -0.407784,0.242496 -0.799287,0.5113687 -1.172059,0.8049478 -0.581899,0.3137676 -1.133966,0.6798449 -1.649476,1.093744 L 24.713713,41.220557 c -2.048802,2.035655 -3.205185,4.801592 -3.214712,7.689963 l -0.171771,53.28396 c 0.09347,0.43756 0.213832,0.86889 0.360376,1.29163 0.129233,1.17767 0.449767,2.32634 0.948937,3.40081 0.05076,0.20506 0.107477,0.40867 0.170085,0.61042 L 3.6856171,126.61836 c -4.25168115,4.25297 -4.25168115,11.14694 0,15.40018 l 26.4208269,26.42085 c 4.25306,4.25224 11.147816,4.25224 15.401048,0 l 18.953314,-18.95418 c 0.113158,0.0331 0.22684,0.0637 0.341007,0.0926 1.484881,0.8049 3.136598,1.25343 4.824441,1.31016 0.03728,0.0105 0.07457,0.0202 0.111988,0.0307 l 53.283968,0.17173 c 1.85144,-0.0557 3.65801,-0.58298 5.24907,-1.53158 l 19.19645,19.1956 c 4.25324,4.25146 11.14738,4.25107 15.40019,-0.001 l 26.42082,-26.42082 c 4.25169,-4.25298 4.25169,-11.14696 0,-15.4002 l -19.07013,-19.06985 c 0.9366,-1.57171 1.4622,-3.35405 1.5282,-5.18226 l 0.17173,-53.283959 c -0.0234,-0.13661 -0.0492,-0.27276 -0.0783,-0.408369 -0.0444,-1.076284 -0.24751,-2.140066 -0.60372,-3.156643 -0.10951,-0.31796 -0.23371,-0.630657 -0.37219,-0.937126 -0.45595,-1.026793 -1.068,-1.976851 -1.8145,-2.816463 -0.071,-0.09804 -0.14429,-0.194883 -0.21894,-0.290489 -0.0258,-0.03414 -0.0516,-0.06803 -0.0775,-0.101876 L 131.19738,3.8860262 c -2.03587,-2.0490185 -4.80245,-3.20540125 -7.69083,-3.21471305 z" />
            <path d="M 69.77726,140.0264 32.221549,102.22798 32.393198,48.944015 70.191619,11.388304 123.47558,11.559978 161.0313,49.3584 l -0.17165,53.28396 -37.79843,37.55571 z" />
            <path d="M 70.191547,11.39046 57.397791,101.09375 69.77726,140.02899" />
            <path d="M 32.222411,102.22755 57.398654,101.09073 32.393989,48.944878 96.42097,62.070581 70.193703,11.39046" />
            <path d="m 123.47508,11.5629 11.96474,89.53085 -12.37946,39.10681" />
            <path d="M 160.85835,102.64141 135.4394,101.09018 161.03036,49.358173 96.417089,62.069158 123.47336,11.561477" />
            <path d="M 96.418808,62.070581 57.397791,101.0916 96.418808,140.11262 135.43982,101.0916 Z" />
            <path d="M 96.418808,91.497472 72.110805,115.80548 96.418808,140.11349 120.72682,115.80548 Z" />
            <path d="M 37.809467,107.89652 64.188049,134.36002 37.809467,160.7386 11.388639,134.31778 Z" />
            <path d="m 155.21094,108.25433 26.37859,26.37814 -26.42083,26.42083 -26.42084,-26.42083 z" />
        </svg>
        <h1 className={styles.title}>Aristurtle Dev</h1>
        <p>indie Game Developer | Occasional Twitch Streamer</p>
    </div>
);

export default Banner;
