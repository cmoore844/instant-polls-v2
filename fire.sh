#!/bin/bash

# This script is to start a server and UI concurrently.

echo "Fire Up!..."

cd backend && npm run dev
 
cd ../frontend && npm run dev

echo "Fired Up! -Success"
