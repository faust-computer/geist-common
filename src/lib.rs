use roslibrust_codegen_macro::find_and_generate_ros_messages;

find_and_generate_ros_messages!("./common", "/opt/ros/humble/share/std_msgs");

use crate::common::{
    ContractCall, ContractCallRequest, ContractCallResponse, CreateProof, CreateProofRequest,
    CreateProofResponse, ETHTransfer, ETHTransferRequest, ETHTransferResponse,
};

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
