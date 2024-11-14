# Use an official node image as a base

FROM node:20-alpine AS build
 
# Set the working directory inside the container

WORKDIR /app
 
# Copy package.json and pnpm-lock.yaml for dependency installation

COPY package.json pnpm-lock.yaml ./
 
# Install pnpm globally and install dependencies

RUN npm install -g pnpm && pnpm install
 
# Copy the rest of the application code into the container

COPY . .
 
# Expose the port for your app

EXPOSE 3004
 
# Run the app in development mode

CMD ["pnpm", "run", "dev"]
 
 
