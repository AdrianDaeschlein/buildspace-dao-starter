import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "kuusikulmioDAO",
            voting_token_address: "0x3D425f63A3dF6718b9129ABd1fbd6516852f48F5",
            voting_delay_in_blocks: 0,
            voting_period_in_blocks: 6570,
            //voting quorum = how much % needs to vote
            voting_quorum_fraction: 0,
            proposal_token_threshold: 0,
        });

        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
        );
    } catch (err) {
        console.log("Failed to deploy the voting contract", err);
    }
})();