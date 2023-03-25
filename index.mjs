import { SpotifyClient } from "spotify-mini";
import express from "express";
const app = express();
const spotify = new SpotifyClient({
  clientId: "****",
  clientSecret: "****",
  refreshToken:
    "*****",
});

let apiKey = `*****`;
app.get("/", (req, res) => {
  if (req.query.apiKey != apiKey)
    return res.json({ message: "invalid api key", github: "pxsty0" });
  spotify.getCurrentTrack().then((data) => {
    res.json({
      message: "OK",
      github: "pxsty0",
      data: {
        isPlaying: data.isPlaying,
        songName: data.title,
        songArtist: data.artist,
      },
    });
  });
});
app.get("*", (req, res) => {
  res.json({
    message: "error 404",
    github: "pxsty0",
  });
});
app.listen(80, () => console.log("Web Server Active"));
