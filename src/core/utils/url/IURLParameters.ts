interface URLParameter {
    key: string; value: string;
}

export default interface URLParameters extends Array<URLParameter>{}