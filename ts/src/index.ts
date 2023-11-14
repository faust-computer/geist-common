/* eslint-disable */
export interface IGeistMsgsContractOpMode {
  mode: number;
}

export enum IGeistMsgsContractOpModeConst {
  GET = 0,
  SET = 1,
}

export interface IGeistMsgsDacMachineData {
  header: IStdMsgsHeader;
  co2_captured: number;
  total_kwh_used: number;
}

export interface IGeistMsgsGpsData {
  header: IStdMsgsHeader;
  latitude: number;
  longitude: number;
  altitude: number;
}

export interface IGeistMsgsInputs {
  key: string;
  value: string;
}

export interface IGeistSrvContractCallRequest {
  header: IStdMsgsHeader;
  path: string;
  address: string;
  method: string;
  chain_id: number;
  inputs: IGeistMsgsInputs[];
  op: IGeistMsgsContractOpMode;
  output: string;
}

export interface IGeistSrvContractCallResponse {
  success: boolean;
  tx_hash: string;
  error: string;
}

export interface IGeistSrvCreateProofRequest {
  path: string;
  proof_type: number;
}

export interface IGeistSrvCreateProofResponse {
  success: boolean;
  proof: string;
  error: string;
}

export interface IGeistSrvEthTransferRequest {
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

export interface IGeistSrvEthTransferResponse {
  success: boolean;
  tx_hash: string;
  error: string;
}

export interface IGeistSrvHelloWorldResponse {
  success: boolean;
  message: string;
}

export interface IGeistSrvRecordTopicDataRequest {
  topic: string;
  topic_msg_type: string;
  duration: number;
  target_path: string;
  max_record_count: number;
  storage_medium: number;
}

export interface IGeistSrvRecordTopicDataResponse {
  success: boolean;
  message: string;
}

export interface IGeistSrvSnapshotTopicDataRequest {
  file_path: string;
  topic_name: string;
}

export interface IGeistSrvSnapshotTopicDataResponse {
  success: boolean;
}

export interface IGeistSrvWhoAmIResponse {
  success: boolean;
  version: string;
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