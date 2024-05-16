#!/bin/bash
# This script is to start a server side and client side concurrently.
  ##// "dev": "concurrently \"nodemon server.js\" \"npm run client\""##
echo "######FIRE SHELL!!!######"
sleep 1
cd backend && npm run dev
echo "######FIRED UP!!! -SUCCESS######"