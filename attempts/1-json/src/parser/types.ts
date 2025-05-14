export interface Theme {
  segments: Segment[];
  style: Style;
}

export interface Segment {
  type: string;
  style?: Style;
  properties?: Record<string, any>;
}

export interface Style {
  foreground?: string;
  background?: string;
} 