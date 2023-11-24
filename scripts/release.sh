#!/bin/bash

set -e

# This creates a rust package on crates.io
./scripts/publish.sh

# this creates a typescript npm package, need to be in the ts directory to run
pushd ts
./scripts/publish.sh
popd

# create the github release
./scripts/create_github_release.sh