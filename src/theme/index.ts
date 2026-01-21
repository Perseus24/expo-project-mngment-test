export const colors = {
  // Primary colors
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  primaryLight: '#818CF8',
  
  secondary: '#8B5CF6',
  secondaryDark: '#7C3AED',
  secondaryLight: '#A78BFA',
  
  accent: '#EC4899',
  accentDark: '#DB2777',
  accentLight: '#F472B6',
  
  // Health colors
  healthy: '#10B981',
  healthyDark: '#059669',
  healthyLight: '#34D399',
  
  warning: '#F59E0B',
  warningDark: '#D97706',
  warningLight: '#FBBF24',
  
  critical: '#EF4444',
  criticalDark: '#DC2626',
  criticalLight: '#F87171',
  
  // Background colors
  background: '#0F172A',
  surface: '#1E293B',
  card: '#334155',
  cardHover: '#475569',
  
  // Text colors
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textDisabled: '#475569',
  
  // Utility colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  
  // Status colors
  success: '#10B981',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border colors
  border: '#475569',
  borderLight: '#334155',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  captionBold: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  smallBold: {
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 16,
  },
  tiny: {
    fontSize: 10,
    fontWeight: '500' as const,
    lineHeight: 14,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },
  easing: {
    standard: 'ease-in-out',
    accelerate: 'ease-in',
    decelerate: 'ease-out',
  },
};

// Helper function to get health color based on value
export const getHealthColor = (health: number): string => {
  if (health >= 70) return colors.healthy;
  if (health >= 40) return colors.warning;
  return colors.critical;
};

// Helper function to get health gradient
export const getHealthGradient = (health: number): [string, string] => {
  if (health >= 70) return [colors.healthyLight, colors.healthyDark];
  if (health >= 40) return [colors.warningLight, colors.warningDark];
  return [colors.criticalLight, colors.criticalDark];
};

// Helper for priority colors
export const getPriorityColor = (priority: 'low' | 'medium' | 'high'): string => {
  switch (priority) {
    case 'low':
      return colors.textMuted;
    case 'medium':
      return colors.warning;
    case 'high':
      return colors.critical;
  }
};

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  animations,
  getHealthColor,
  getHealthGradient,
  getPriorityColor,
};

export type Theme = typeof theme;