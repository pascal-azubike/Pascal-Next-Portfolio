#!/bin/bash

# Directory setup
FAVICON_DIR="public/favicon"
mkdir -p $FAVICON_DIR

# Generate PNG files from SVG
sharp favicon.svg -o $FAVICON_DIR/favicon-16x16.png --width 16
sharp favicon.svg -o $FAVICON_DIR/favicon-32x32.png --width 32
sharp favicon.svg -o $FAVICON_DIR/apple-touch-icon.png --width 180
sharp favicon.svg -o $FAVICON_DIR/android-chrome-192x192.png --width 192
sharp favicon.svg -o $FAVICON_DIR/android-chrome-512x512.png --width 512

# Generate ICO file
convert $FAVICON_DIR/favicon-32x32.png $FAVICON_DIR/favicon.ico