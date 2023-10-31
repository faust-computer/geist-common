use roslibrust_codegen_macro::find_and_generate_ros_messages;

find_and_generate_ros_messages!(
    "./common",
    "assets/common_interfaces",
    "assets/vision_msgs"
);

