# Triple H Health Services

Next.js (App Router) site for Healing Helping Hands / Triple H Health Services.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env` and add your Resend key before testing the contact form.

## Our Story video (Vercel Blob)

The recovery video on `/our-story` is stored as a **private** Vercel Blob and streamed through `/api/story-video` with origin checks and short-lived signed playback tokens.

### One-time setup

1. In the Vercel project, create a **Blob store** (Storage → Blob). Vercel adds `BLOB_READ_WRITE_TOKEN` automatically.
2. Add these environment variables in Vercel (and locally in `.env`):
   - `BLOB_READ_WRITE_TOKEN`
   - `STORY_VIDEO_BLOB_PATHNAME=story/the-ch-project.mp4`
   - `STORY_VIDEO_SIGNING_SECRET` (optional; falls back to the blob token)
3. Convert the source `.MOV` to web-friendly MP4 before upload (recommended):

```bash
ffmpeg -i "THE CH PROJECT.MOV" -c:v libx264 -crf 23 -preset medium -c:a aac -movflags +faststart story-video.mp4
```

4. Upload the MP4 to the private blob store:

```bash
npm run upload-story-video -- "path/to/story-video.mp4"
```

5. Redeploy if needed so production has the blob env vars.

The video is not served from `public/`, cannot be hotlinked from other domains, and uses deterrent controls such as signed URLs, referer/origin checks, disabled right-click on the player, and no download button in supported browsers. Screen recording cannot be fully prevented on the web.

## Production

Deploy the repo to Vercel. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `CONTACT_BCC_EMAIL`, `BLOB_READ_WRITE_TOKEN`, and `STORY_VIDEO_BLOB_PATHNAME` in the project environment variables.
