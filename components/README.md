# Components

This directory contains reusable React components for the NAC frontend application.

## Available Components

### AwardsCeremonyCarousel

A carousel component for displaying awards ceremony images with touch/swipe support and auto-play functionality.

**Features:**

- Touch/swipe navigation
- Auto-play with pause on interaction
- Responsive design
- Custom navigation controls

**Usage:**

```tsx
import AwardsCeremonyCarousel from "@/components/awards-ceremony-carousel";

<AwardsCeremonyCarousel />;
```

### HighlightReelCarousel

A modern carousel component for displaying highlight reel content using Swiper.js.

**Features:**

- Swiper.js integration for smooth carousel functionality
- Responsive breakpoints (1-4 slides per view)
- Auto-play with 5-second intervals
- Custom navigation buttons and pagination
- Hover effects and smooth transitions
- Touch/swipe support

**Usage:**

```tsx
import HighlightReelCarousel from "@/components/highlight-reel-carousel";

<HighlightReelCarousel />;
```

**Props:** None (data is configured internally)

**Data Structure:**
The component uses an internal array of `HighlightReelItem` objects:

```typescript
interface HighlightReelItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}
```

**Customization:**

- Modify the `highlightReelData` array to change content
- Adjust Swiper configuration in the component
- Customize styles in `highlight-reel-carousel.css`

### Header

Main navigation header component with responsive design.

### Footer

Footer component with links and information.

### RegistrationSuccessPopup

Modal component for displaying registration success messages.

### UI Components

Located in the `ui/` subdirectory:

- Button
- Input
- Select
- Textarea

## Component Guidelines

1. **File Naming**: Use kebab-case for file names (e.g., `highlight-reel-carousel.tsx`)
2. **CSS**: Create separate CSS files for complex styling
3. **Props**: Use TypeScript interfaces for prop definitions
4. **Responsive**: Ensure components work on all screen sizes
5. **Accessibility**: Include proper ARIA labels and keyboard navigation
6. **Performance**: Use React.memo and useCallback when appropriate

## Dependencies

- **Swiper.js**: For carousel functionality in HighlightReelCarousel
- **Lucide React**: For icons
- **Tailwind CSS**: For styling
- **Radix UI**: For accessible UI primitives
