# Drag-and-Drop V1

## Overview

Drag-and-Drop V1 is a simple, interactive drag-and-drop component built using React. This component allows users to drag a "card" element both on desktop (using mouse events) and on mobile devices (using touch events). The component is designed to be responsive and customizable, making it easy to integrate into your projects.

---

## Features

- **Cross-Platform Support**: Works on both desktop (mouse) and mobile (touch) devices.
- **Responsive Design**: The card is draggable across the screen, allowing for dynamic UI interactions.
- **Easy to Customize**: Modify the appearance, behavior, and content to suit your needs.
- **Lightweight**: Minimal dependencies, making it easy to integrate into various React applications.

---

## Known Issues

### **Touch Event Bug on Smartphones**

Currently, there is a bug with touch events on mobile devices. When trying to drag the card element on a smartphone, the default browser behavior (such as scrolling or refreshing) may interfere with the drag functionality. This issue arises because the touch events used for dragging the card also trigger the default touch actions, like scrolling the page.

**What’s being worked on**:
- I am actively working on refining the touch event handling to prevent the default scroll/refresh actions and make the drag functionality smoother on mobile devices. 
- This bug is still being addressed, and a fix will be implemented in future updates.

If you're using the component on mobile, please be aware of this limitation while the fix is in progress.


## Installation

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/zofienora/draganddropv1.git
cd draganddropv1