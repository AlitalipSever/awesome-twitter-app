# Stage 1: Build the React application
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN echo "Installing dependencies..." && \
    yarn install

# Copy all the files into image filesystem.
COPY . ./

ARG REACT_APP_ENV=dev

RUN echo "Building the React app...with build:$REACT_APP_ENV" && \
    yarn build:$REACT_APP_ENV


# Stage 2: Nginx server
FROM nginx:alpine

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx default host location
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
