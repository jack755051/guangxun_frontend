export enum ProductType {
  Camera = 'camera', // 攝影機
  Recorder = 'recorder', // 主機（NVR/DVR/XVR）
  Display = 'display', // 顯示器（Monitor）
  Accessory = 'accessory', // 配件
}

export enum ProductsMainType {
  Protection = 'protection', // 防水功能
  Lens = 'lens', // 鏡頭模組
  Cable = 'cable', // 線材類型
  Lighting = 'lighting', // 投射燈
  Resolution = 'resolution', // 畫素
  ImageType = 'image-type', // 畫面類型
  Transmission = 'transmission', // 影像傳輸方法
  Compression = 'compression', // 壓縮格式
  Connection = 'connection', // 網路連線方式
  Feature = 'feature', // 功能類別
}

// ---- 鏡頭 start ----

// 攝影機外觀
export enum CameraTypeCategory {
  Dome = 'dome', // 半球
  Bullet = 'bullet', // 槍型
  PTZ = 'ptz', // 雲台
  Fixed = 'fixed', // 固定
  MultiSensorCamera = 'multi-sensor-camera', // 多感測器攝影機
  Fisheye = 'fisheye', // 魚眼
  LPRANPRCamera = 'lpr-anpr-camera', // LPR/ANPR 車牌辨識攝影機
}

// 攝影機解析度
export enum CameraResolutionCategory {
  VGA = 'vga', // VGA
  HD = 'hd', // HD
  FullHD = 'full-hd', // Full HD
  UltraHD = 'ultra-hd', // Ultra HD
  Other = 'other', // 其他
}

// 攝影機傳輸介面
export enum CameraTransmissionInterfaceCategory {
  IPCamera = 'ip-camera', // IP 攝影機
  AnalogCamera = 'analog-camera', // 類比攝影機
  HDAnalog = 'hd-analog', // HD 類比（如 HDCVI、HD-TVI）
  WiFiCamera = 'wifi-camera', // 無線攝影機
}

// 攝影機特性
export enum CameraFeatureCategory {
  NightVision = 'night-vision', // 夜視
  IRCutFilter = 'ir-cut-filter', // IR Cut Filter
  PoECamera = 'poe-camera', // PoE 攝影機
}

// 攝影機進階功能
export enum CameraAdvancedFeatureCategory {
  SmartTracking = 'smart-tracking', // 智慧追蹤
  MotionDetection = 'motion-detection', // 動作偵測
  FaceRecognition = 'face-recognition', // 人臉辨識
  HeatMap = 'heat-map', // 熱點圖分析（人流分析）
  PrivacyMasking = 'privacy-masking', // 隱私遮罩
  TwoWayAudio = 'two-way-audio', // 雙向語音
}

// 攝影機使用場景
export enum CameraUsageCategory {
  Indoor = 'indoor', // 室內用
  Outdoor = 'outdoor', // 室外用
  Vehicle = 'vehicle', // 車用攝影機（例如巴士 / 公車）
  BodyWorn = 'body-worn', // 穿戴式攝影機（警察執法用）
}

// ---- 鏡頭 end ----

// ---- 監控螢幕 start ----

// 監控螢幕
export enum MonitorMainCategory {
  LCD = 'lcd', // LCD
  LED = 'led', // LED
  OLED = 'oled', // OLED
  QLED = 'qled', // QLED
}

// ---- 監控螢幕 end ----

// ---- 監控主機 start ----

// 監控主機
export enum HostMainCategory {
  NVR = 'nvr', // NVR
  DVR = 'dvr', // DVR
  XVR = 'xvr', // XVR
}

// 網路連線方式
export enum NetworkConnectionCategory {
  StaticIP = 'static-ip', // 靜態 IP
  DHCP = 'dhcp', // 動態 IP
  PPPoE = 'pppoe', // 撥號上網
  Cellular = 'cellular', // SIM 卡（4G / 5G 行動網路）
}

// 監控主機功能
export enum HostFeatureCategory {
  MultiChannel = 'multi-channel', // 多通道
  HighDefinition = 'high-definition', // 高清
  AI = 'ai', // AI
}

// ---- 監控主機 end ----
