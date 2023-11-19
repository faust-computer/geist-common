# geist_common

This repository named 'common' contains the following:
- `assets/common_interfaces`: contians common ROS2 `msgs`
- `assets/vision_msgs`: contains the ROS2 submodule package for all the vision messages and services
- `common`: contains the ROS2 package for Geist and its messages and services
- `rust`: contains for the rust crate that packages common
- `ts` for the Typescript npm package that packages common
- `scripts`: helpful util scripts (for releasing, publishing etc)

## Installation

Rust: `cargo add geist_common`
JS/TS: `npm install geist_common`

### To use within ROS2

Make sure you update the submodules:

```
❯ git submodule update --init --recursive --progress
```

### Submodules
- https://github.com/ros2/common_interfaces
- https://github.com/ros-perception/vision_msgs