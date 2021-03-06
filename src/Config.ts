import { HttpHeaders } from "./http";

export interface IConfig {
    mergeUsingFfmpeg?: boolean;
    concurrency?: number;
    live?: boolean;
    fromEnd?: number;
    quality?: "worst" | "best" | number;
    streamUrl: string;
    segmentsDir?: string;
    mergedSegmentsFile?: string;
    outputFile: string;
    httpHeaders?: HttpHeaders;
}
