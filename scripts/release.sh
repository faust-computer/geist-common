#!/bin/bash

set -e

# This creates a rust package on crates.io
./scripts/publish.sh

# this creates a typescript npm package
pushd ts
./scripts/publish.sh
popd