
## Deployed version

This app is deployed [here](https://datkami.github.io/bartending-interface/index.html)

## Motivations

This project is inspired by [VA-11 Hall-A](https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/), a game by Sukeban Games. This game is very stylish, and I wanted to share the uniqueness in a simple web app. Besides teaching myself React, there were a few hurdles to overcome in order to get a satisfactory experience.

## Technical Challenges
The app runs with a virtual canvas of 820x482. Most elements adhere to the pixel grid, with the goal to attempt to render the app in a pixel style. There are a few cases where this is broken or cheated:
- Fonts do not maintain a standard of conversion from their em height to pixels. More reading [here](https://graphicdesign.stackexchange.com/questions/4035/what-does-the-size-of-the-font-translate-to-exactly). Fonts are scaled in the app to the best of my ability by sight, but still may appear blurry in some situations.
- Images by default scale with anti-aliasing. The Calicomp logo and drink pictures would appear markedly blurry without the css `image-rendering: pixelated;` applied.





