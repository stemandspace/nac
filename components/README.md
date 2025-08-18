# Awards Ceremony Carousel Component

A responsive, interactive carousel component for displaying awards ceremony images with simple navigation and accessibility features.

## Features

- **Auto-play functionality** with 5-second intervals
- **Manual navigation** with left/right arrow buttons
- **Touch/swipe support** for mobile devices
- **Keyboard navigation** (Arrow keys)
- **Progress bar** showing current position
- **Loading states** with smooth transitions
- **Accessibility features** including ARIA labels and keyboard support
- **Responsive design** for all screen sizes
- **Pause/Play toggle** for auto-play functionality

## Usage

```tsx
import AwardsCeremonyCarousel from "@/components/awards-ceremony-carousel";

export default function Page() {
  return (
    <div>
      <AwardsCeremonyCarousel />
    </div>
  );
}
```

## Props

This component doesn't accept any props. All configuration is handled internally.

## Image Configuration

The carousel uses images from the `/public/home/` directory. To add or modify images, update the `awardImages` array in the component:

```tsx
const awardImages: AwardImage[] = [
  {
    id: 1,
    src: "/home/img2.png",
    alt: "Awards Ceremony 2019",
  },
  // ... more images
];
```

## Navigation

- **Arrow Buttons**: Click left/right navigation arrows
- **Touch/Swipe**: Swipe left/right on mobile devices
- **Keyboard**: Use left/right arrow keys
- **Auto-play**: Automatically advances every 5 seconds

## Accessibility

- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus indicators for keyboard users

## Styling

The component uses Tailwind CSS classes and includes a separate CSS file (`awards-ceremony-carousel.css`) for custom animations and responsive behavior.

## Browser Support

- Modern browsers with ES6+ support
- Touch devices with swipe gestures
- Keyboard navigation support
- Responsive design for all screen sizes

## Customization

To customize the carousel:

1. Modify the `awardImages` array to change images and content
2. Adjust timing in the auto-play functionality
3. Update CSS classes for styling changes
4. Modify transition durations and animations

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
