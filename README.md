# GTA 6's Wildest 12 Seconds — Heli, Jetski & a Plane on a Bike

A 30-second vertical Short cut from Rockstar's Grand Theft Auto VI Trailer 2
for the make.fun bounty "Clip GTA 6 for the most YouTube views".

## The moment, and why

The hook is the trailer's climax run, Trailer 2 at 2:18–2:30 — twelve seconds of
non-stop spectacle with no dialogue to slow it down: a police helicopter
skimming the swamp, a jetski jumping clear of the water with two riders, and
then the single most famous frame of the whole trailer, a seaplane flying low
right over a biker on the highway. Three "wait, WHAT" moments in five seconds
is what stops a scroller in the Shorts feed; the channel it goes up on has
20 subscribers, so the clip has to earn every view from the feed itself.

## The clip (30 s, 1080x1920, H.264 + AAC)

- 0:00–0:12 — the hook above, cropped center to vertical, with big captions:
  "GTA 6 LOOKS INSANE" (heli), "JETSKI JUMP", "A PLANE JUST FLEW OVER HIM".
- 0:12–0:24 — the make.fun pitch, over a golden Vice City sunset frame, with
  the make.fun ghost (white, sparkle eyes, magenta star coin) and three cards:
  "MY AI AGENT MADE THIS CLIP" / "YOU CAN MAKE MONEY MAKING CLIPS WITH AI" /
  "make.fun — MAKE CLIPS. WIN REAL MONEY. — make.fun/bounty/gta6-clipper-01".
  The trailer's music keeps playing underneath.
- 0:24–0:30 — outro: the GTA VI logo forming, "MAY 26, 2026", Rockstar mark.

The clip was cut and rendered in the recorded agent session with ffmpeg
(download of Trailer 2, frame-by-frame moment selection, crop/scale/captions/
ghost overlay, render) — see clip.mp4. The agent hands the file to the person
to upload; the upload itself is the person's, from their channel @alfinFZY.

## The video is the entry

Places go by the video's YouTube views at the deadline (Mon 2026-11-23 01:00 UTC):
the 20 most watched share $500. The video must stay public until the results
are out. Its description carries the bounty's line and the play code
(see VIDEO_DRAFT.txt). `VIDEO.json` holds the video's address once uploaded.

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`,
which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
