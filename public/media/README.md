# Portfolio media uploads

Store all uploaded images in the folders below. These are served from the Vite public folder, so paths in the app are referenced like:

```jsx
<img src="/media/experience/hpe/cover.jpg" alt="HPE internship" />
```

## Experience folders

- /public/media/experience/hpe
- /public/media/experience/robotics-club
- /public/media/experience/whitney

## Project folders

- /public/media/projects/whats-in-the-fridge
- /public/media/projects/ai-snake
- /public/media/projects/just-prance
- /public/media/projects/get-away
- /public/media/projects/sticky-situation
- /public/media/projects/datafest

## Naming convention

- Use short descriptive filenames, for example: `cover.jpg`, `team-photo.jpg`, `demo-shot.jpg`
- Keep image sizes reasonable and use the same extension across a project when possible
- Add more than one image per project if you want a gallery later

## Example usage

```jsx
const imagePath = "/media/projects/ai-snake/demo-shot.jpg";
```
