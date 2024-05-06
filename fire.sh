#!/bin/bash

# This script is to start a server and UI concurrently.

echo "############"
echo "Fire Up!..."
echo "############"

cd backend && npm run dev
 
cd ../frontend && npm run dev

echo "##################"
echo "Fired Up! -Success"
echo "##################"
