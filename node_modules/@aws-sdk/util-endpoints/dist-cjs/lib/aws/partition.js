"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgentPrefix = exports.useDefaultPartitionInfo = exports.setPartitionInfo = exports.partition = void 0;
const tslib_1 = require("tslib");
const partitions_json_1 = tslib_1.__importDefault(require("./partitions.json"));
let selectedPartitionsInfo = partitions_json_1.default;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
exports.partition = partition;
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
exports.setPartitionInfo = setPartitionInfo;
const useDefaultPartitionInfo = () => {
    (0, exports.setPartitionInfo)(partitions_json_1.default, "");
};
exports.useDefaultPartitionInfo = useDefaultPartitionInfo;
const getUserAgentPrefix = () => selectedUserAgentPrefix;
exports.getUserAgentPrefix = getUserAgentPrefix;
