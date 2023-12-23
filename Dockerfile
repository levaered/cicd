# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install git
RUN apt-get update && \
    apt-get install -y git

# Copy the entire project to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 80 for the application
EXPOSE 80

# Command to run the application
CMD ["npm", "run", "dev"]
