export type onResult = (decodeResults: DecodedResult[], readerProperties: ReaderProperties, output: Output) => void;
export type onGenerateFTPFilename = (
    decodeResults: DecodedResult[],
    readerProperties: ReaderProperties,
    output: Output
) => void;
export type onGenerateFTPPCMReportFilename = (
    decodeResults: DecodedResult[],
    readerProperties: ReaderProperties,
    output: Output
) => void;

export interface DecodedResult {
    decoded: boolean;
    content: string;
    decodeTime: number;
    triggerTime: number;
    timeout: string;
    symbology: SymbologyProperties;
    image: ImageProperties;
    validation: ValidationResult;
    metrics: QualityMetrics;
    readSetup: number;
    source: string;
    annotation: string;
    label: string;
}

export interface Metric {
    raw: number;
    grade: string;
}

export interface QualityMetrics {
    singleScanInt: Metric;
    symbolContrast: Metric;
    cellContrast: Metric;
    axialNonUniformity: Metric;
    printGrowth: Metric;
    UEC: Metric;
    modulation: Metric;
    fixedPatternDamage: Metric;
    gridNonUniformity: Metric;
    extremeReflectance: Metric;
    reflectMin: Metric;
    edgeContrastMin: Metric;
    multiScanInt: Metric;
    signalToNoiseRatio: Metric;
    horizontalMarkGrowth: Metric;
    verticalMarkGrowth: Metric;
    dataMatrixCellWidth: Metric;
    dataMatrixCellHeight: Metric;
    horizontalMarkMisplacement: Metric;
    verticalMarkMisplacement: Metric;
    cellDefects: Metric;
    finderPatternDefects: Metric;
    overallGrade: Metric;
    edgeDetermination: Metric;
    defects: Metric;
    referenceDecode: Metric;
    decodability: Metric;
    contrastUniformity: Metric;
    relectanceMargin: Metric;
}

export interface ValidationResult {
    state: number;
    method: number;
    matchString: string;
    failurePos: number;
    failureCode: number;
    failureMsg: string;
    gs1: any;
    dod_uid: DoDValidation;
}

export interface DoDValidation {
    enterpriseID: string;
    serialNum: string;
    partNum: string;
    uniqueItemID: string;
    batchNum: string;
}

export interface ImageProperties {
    index: number;
    FoV: Rect;
    RoI: Rect;
    exposureTime: number;
    gain: number;
    autoExposure: boolean;
    illEnabled: boolean;
    illIntensity: number;
    extillEnabled: boolean;
    extillIntensity: number;
    targetBrightness: number;
    focusLength: number;
    setupIndex: number;
    inputStates: boolean[];
    filterTime: number;
    creationTime: number;
    creationTicks: number;
    ptpTimeStamp: PtpTimeStamp;
    id: number;
}

export interface PtpTimeStamp {
    s: number;
    ns: number;
}

export interface Rect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface ReaderProperties {
    name: string;
    trigger: Trigger;
    stats: any;
    inputstr: string;
}

export interface Trigger {
    type: number;
    index: number;
    burstLength: number;
    interval: number;
    delayType: number;
    startDelay: number;
    endDelay: number;
    creationTime: number;
    creationTicks: number;
    groupIndex: number;
    endTime: number;
    endTicks: number;
}

export interface Output {
    content: string;
    events: DecodeEvents;
    SetupTool: string;
    Serial: string;
    Telnet: string;
    Keyboard: string;
    FTP: string;
    PS2: string;
    NetworkClient: string;
    IndustrialProtocols: string;
}

export interface Statistics {
    reads: number;
    noReads: number;
    triggers: number;
    bufferOverflows: number;
    triggerOverruns: number;
    itemCount: number;
    passedValidation: number;
    failedValidations: number;
}

export enum EnumDecodedEventsSystem {
    NONE = 0,
    GOOD_READ = 1,
    NO_READ = 2,
    VALIDATION_FAILURE = 3
}

export interface DecodeEvents {
    system: 0 | 1 | 2 | 3;
    user1: boolean;
    user2: boolean;
}

export interface SymbologyProperties {
    name: string;
    id: string;
    quality: number;
    moduleSize: number;
    size: Point | -1;
    corners: Point[];
    center: Point;
    angle: number;
}
