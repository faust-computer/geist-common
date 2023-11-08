/* eslint-disable */
// These files were generated using "ros-typescript-generator"
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