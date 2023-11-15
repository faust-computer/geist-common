#!/bin/bash

set -e

# This creates a rust package on crates.io
pushd rust
./scripts/publish.sh
popd

# this creates a typescript npm package
pushd ts
# ./scripts/publish.sh
popd