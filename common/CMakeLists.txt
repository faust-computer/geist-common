cmake_minimum_required(VERSION 3.8)
project(common)

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  add_compile_options(-Wall -Wextra -Wpedantic)
endif()

# find dependencies
find_package(ament_cmake REQUIRED)
find_package(std_msgs REQUIRED)
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "msg/onchain/ContractOpMode.msg"
  "msg/onchain/Inputs.msg"
  "msg/sensors/DACMachineData.msg"
  "msg/sensors/GPSData.msg"
  "msg/timekeeper/Time.msg"
  "srv/attestation/CreateProof.srv"
  "srv/geist/WhoAmI.srv"
  "srv/geist/HelloWorld.srv"
  "srv/onchain/ETHTransfer.srv"
  "srv/onchain/ContractCall.srv"
  "srv/system/storage/RecordTopicData.srv"
  "srv/system/storage/SnapshotTopicData.srv"
  DEPENDENCIES builtin_interfaces std_msgs
 )

 # Set the include directories
include_directories(include)

# Install the library header files
install(
  DIRECTORY include/
  DESTINATION include
)

ament_package()
