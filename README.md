<p align="center">
    <img src="https://github.com/Emeto/coloroclock/blob/main/docs/coloroclock-logo.png?raw=true" alt="Coloroclock logo" width="500" />
</p>
<p align="center">
    <b>Demo: <a href="https://colorclock.jcastellano.me">https://colorclock.jcastellano.me</a></b>
</p>

# It's color o'clock

Color o'clock is a grid of clocks that converts the current time in an hex color code and displays it in the background.

<p align="center">
    <img src="https://github.com/Emeto/coloroclock/blob/main/docs/screenshot.png?raw=true" alt="Coloroclock screenshot" />
</p>

## How does it work?

Each part of the current time is converted to an hexadecimal number and is then concatenated to form a valid hexadecimal color value. For example with 16:20:00 :

<p align="center">
    <img src="https://github.com/Emeto/coloroclock/blob/main/docs/howitworks.png?raw=true" alt="How it works" />
</p>

**Single digit** and **single letter** hexadecimal values are **duplicated** to fill the gaps and get an actual 16-bit value, so here **a single 0 will become 00**

Time is displayed in a 24-hour format to provide a larger spectrum of available color.

## Build

This project has been built on Vite with Vue 3 + TypeScript and TailwindCSS so refer to these documentations to learn more on how to build color o'clock.

* [ViteJS](https://vitejs.dev/guide/)
* [TailwindCSS](https://tailwindcss.com/docs/installation) 
