/* eslint-disable */
// These files were generated using "ros-typescript-generator"
export interface IGeometryMsgsAccel {
  linear: IGeometryMsgsVector3;
  angular: IGeometryMsgsVector3;
}

export interface IGeometryMsgsAccelStamped {
  header: IStdMsgsHeader;
  accel: IGeometryMsgsAccel;
}

export interface IGeometryMsgsAccelWithCovariance {
  accel: IGeometryMsgsAccel;
  covariance: number[];
}

export interface IGeometryMsgsAccelWithCovarianceStamped {
  header: IStdMsgsHeader;
  accel: IGeometryMsgsAccelWithCovariance;
}

export interface IGeometryMsgsInertia {
  m: number;
  com: IGeometryMsgsVector3;
  ixx: number;
  ixy: number;
  ixz: number;
  iyy: number;
  iyz: number;
  izz: number;
}

export interface IGeometryMsgsInertiaStamped {
  header: IStdMsgsHeader;
  inertia: IGeometryMsgsInertia;
}

export interface IGeometryMsgsPoint {
  x: number;
  y: number;
  z: number;
}

export interface IGeometryMsgsPoint32 {
  x: number;
  y: number;
  z: number;
}

export interface IGeometryMsgsPointStamped {
  header: IStdMsgsHeader;
  point: IGeometryMsgsPoint;
}

export interface IGeometryMsgsPolygon {
  points: IGeometryMsgsPoint32[];
}

export interface IGeometryMsgsPolygonStamped {
  header: IStdMsgsHeader;
  polygon: IGeometryMsgsPolygon;
}

export interface IGeometryMsgsPose {
  position: IGeometryMsgsPoint;
  orientation: IGeometryMsgsQuaternion;
}

export interface IGeometryMsgsPose2D {
  x: number;
  y: number;
  theta: number;
}

export interface IGeometryMsgsPoseArray {
  header: IStdMsgsHeader;
  poses: IGeometryMsgsPose[];
}

export interface IGeometryMsgsPoseStamped {
  header: IStdMsgsHeader;
  pose: IGeometryMsgsPose;
}

export interface IGeometryMsgsPoseWithCovariance {
  pose: IGeometryMsgsPose;
  covariance: number[];
}

export interface IGeometryMsgsPoseWithCovarianceStamped {
  header: IStdMsgsHeader;
  pose: IGeometryMsgsPoseWithCovariance;
}

export interface IGeometryMsgsQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface IGeometryMsgsQuaternionStamped {
  header: IStdMsgsHeader;
  quaternion: IGeometryMsgsQuaternion;
}

export interface IGeometryMsgsTransform {
  translation: IGeometryMsgsVector3;
  rotation: IGeometryMsgsQuaternion;
}

export interface IGeometryMsgsTransformStamped {
  header: IStdMsgsHeader;
  child_frame_id: string;
  transform: IGeometryMsgsTransform;
}

export interface IGeometryMsgsTwist {
  linear: IGeometryMsgsVector3;
  angular: IGeometryMsgsVector3;
}

export interface IGeometryMsgsTwistStamped {
  header: IStdMsgsHeader;
  twist: IGeometryMsgsTwist;
}

export interface IGeometryMsgsTwistWithCovariance {
  twist: IGeometryMsgsTwist;
  covariance: number[];
}

export interface IGeometryMsgsTwistWithCovarianceStamped {
  header: IStdMsgsHeader;
  twist: IGeometryMsgsTwistWithCovariance;
}

export interface IGeometryMsgsVector3 {
  x: number;
  y: number;
  z: number;
}

export interface IGeometryMsgsVector3Stamped {
  header: IStdMsgsHeader;
  vector: IGeometryMsgsVector3;
}

export interface IGeometryMsgsWrench {
  force: IGeometryMsgsVector3;
  torque: IGeometryMsgsVector3;
}

export interface IGeometryMsgsWrenchStamped {
  header: IStdMsgsHeader;
  wrench: IGeometryMsgsWrench;
}

export interface IStdMsgsBool {
  data: boolean;
}

export interface IStdMsgsByte {
  data: number;
}

export interface IStdMsgsByteMultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsChar {
  data: number;
}

export interface IStdMsgsColorRgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface IStdMsgsFloat32 {
  data: number;
}

export interface IStdMsgsFloat32MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsFloat64 {
  data: number;
}

export interface IStdMsgsFloat64MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsHeader {
  stamp: { sec: number, nanosec: number };
  frame_id: string;
}

export interface IStdMsgsInt16 {
  data: number;
}

export interface IStdMsgsInt16MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsInt32 {
  data: number;
}

export interface IStdMsgsInt32MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsInt64 {
  data: number;
}

export interface IStdMsgsInt64MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsInt8 {
  data: number;
}

export interface IStdMsgsInt8MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsMultiArrayDimension {
  label: string;
  size: number;
  stride: number;
}

export interface IStdMsgsMultiArrayLayout {
  dim: IStdMsgsMultiArrayDimension[];
  data_offset: number;
}

export interface IStdMsgsString {
  data: string;
}

export interface IStdMsgsUInt16 {
  data: number;
}

export interface IStdMsgsUInt16MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsUInt32 {
  data: number;
}

export interface IStdMsgsUInt32MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsUInt64 {
  data: number;
}

export interface IStdMsgsUInt64MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IStdMsgsUInt8 {
  data: number;
}

export interface IStdMsgsUInt8MultiArray {
  layout: IStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IUndefinedContractCallRequest {
  header: IStdMsgsHeader;
  path: string;
  address: string;
  method: string;
  chain_id: number;
  inputs: IUndefinedInputs[];
  op: IUndefinedContractOpMode;
  output: string;
}

export interface IUndefinedContractCallResponse {
  success: boolean;
  tx_hash: string;
  error: string;
}

export interface IUndefinedContractOpMode {
  mode: number;
}

export enum IUndefinedContractOpModeConst {
  GET = 0,
  SET = 1,
}

export interface IUndefinedCreateProofRequest {
  path: string;
  proof_type: number;
}

export interface IUndefinedCreateProofResponse {
  success: boolean;
  proof: string;
  error: string;
}

export interface IUndefinedDacMachineData {
  header: IStdMsgsHeader;
  co2_captured: number;
  total_kwh_used: number;
}

export interface IUndefinedEthTransferRequest {
  header: IStdMsgsHeader;
  author: string;
  to: string;
  amount: number;
  gas: number;
  chain_id: number;
  gas_price: number;
  value: number;
  data: string;
}

export interface IUndefinedEthTransferResponse {
  success: boolean;
  tx_hash: string;
  error: string;
}

export interface IUndefinedGpsData {
  header: IStdMsgsHeader;
  latitude: number;
  longitude: number;
  altitude: number;
}

export interface IUndefinedHelloWorldResponse {
  success: boolean;
  message: string;
}

export interface IUndefinedInputs {
  key: string;
  value: string;
}

export interface IUndefinedRecordTopicDataRequest {
  topic: string;
  duration: number;
  target_path: string;
  max_record_count: number;
  storage_medium: number;
}

export interface IUndefinedRecordTopicDataResponse {
  success: boolean;
  path: string;
  message: string;
}

export interface IUndefinedSnapshotTopicDataRequest {
  topic: string;
  duration: number;
  target_path: string;
  max_record_count: number;
}

export interface IUndefinedSnapshotTopicDataResponse {
  success: boolean;
  path: string;
  message: string;
}

export interface IUndefinedTime {
  header: IStdMsgsHeader;
  epoch_time: string;
  utc_time: string;
}

export interface IUndefinedWhoAmIResponse {
  success: boolean;
  version: string;
}

export interface IVisionMsgsBoundingBox2D {
  center: IVisionMsgsPose2D;
  size_x: number;
  size_y: number;
}

export interface IVisionMsgsBoundingBox2DArray {
  header: IStdMsgsHeader;
  boxes: IVisionMsgsBoundingBox2D[];
}

export interface IVisionMsgsBoundingBox3D {
  center: IGeometryMsgsPose;
  size: IGeometryMsgsVector3;
}

export interface IVisionMsgsBoundingBox3DArray {
  header: IStdMsgsHeader;
  boxes: IVisionMsgsBoundingBox3D[];
}

export interface IVisionMsgsClassification {
  header: IStdMsgsHeader;
  results: IVisionMsgsObjectHypothesis[];
}

export interface IVisionMsgsDetection2D {
  header: IStdMsgsHeader;
  results: IVisionMsgsObjectHypothesisWithPose[];
  bbox: IVisionMsgsBoundingBox2D;
  id: string;
}

export interface IVisionMsgsDetection2DArray {
  header: IStdMsgsHeader;
  detections: IVisionMsgsDetection2D[];
}

export interface IVisionMsgsDetection3D {
  header: IStdMsgsHeader;
  results: IVisionMsgsObjectHypothesisWithPose[];
  bbox: IVisionMsgsBoundingBox3D;
  id: string;
}

export interface IVisionMsgsDetection3DArray {
  header: IStdMsgsHeader;
  detections: IVisionMsgsDetection3D[];
}

export interface IVisionMsgsLabelInfo {
  header: IStdMsgsHeader;
  class_map: IVisionMsgsVisionClass[];
  threshold: number;
}

export interface IVisionMsgsObjectHypothesis {
  class_id: string;
  score: number;
}

export interface IVisionMsgsObjectHypothesisWithPose {
  hypothesis: IVisionMsgsObjectHypothesis;
  pose: IGeometryMsgsPoseWithCovariance;
}

export interface IVisionMsgsPoint2D {
  x: number;
  y: number;
}

export interface IVisionMsgsPose2D {
  position: IVisionMsgsPoint2D;
  theta: number;
}

export interface IVisionMsgsVisionClass {
  class_id: number;
  class_name: string;
}

export interface IVisionMsgsVisionInfo {
  header: IStdMsgsHeader;
  method: string;
  database_location: string;
  database_version: number;
}