Note: The order of these instructions matter. Please go about this from top to bottom.

## Setup Your Enviroment
1. `nvm use`
2. `npm install`
3. `npm install -g typescript`

## Generate Messages
We use https://github.com/Greenroom-Robotics/ros-typescript-generator under the hood to generate the ts interfaces for the corresponding ROS2 and Geist msgs.

This *only* generates ts types and enums. This means the output does not include any nodejs or runtime dependencies at all.

1. Make sure the `ros-ts-generator-config.json` is has he correct input directories
2. `npm run generate` (this will generate the typescript interfaces in src/generated/msgs.ts)

## Build & Publish
1. `npm run build`
2. `npm run release`