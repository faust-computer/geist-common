#!/bin/bash

set -e

# generate
npm run generate

# this will run the typescript compile
npm run build

# release
npm run release