import { default as React } from '../../../node_modules/react';
/**
 * Theme configuration type for the application.
 */
export type Theme = {
    /** Color palette configuration */
    color?: {
        /** Primary brand color */
        primary?: string;
        /** Hover state for primary color */
        primaryHover?: string;
        /** Secondary brand color */
        secondary?: string;
        /** Hover state for secondary color */
        secondaryHover?: string;
        /** Background color for main surfaces */
        background?: string;
        /** Surface/card background color */
        surface?: string;
        /** Elevation/shadow color */
        elevation?: string;
        /** Text color configuration */
        text?: {
            /** Primary text color */
            primary?: string;
            /** Secondary/supporting text color */
            secondary?: string;
            /** Muted/disabled text color */
            muted?: string;
        };
        /** Border color for UI elements */
        border?: string;
        /** Shadow color for elevation effects */
        shadow?: string;
        /** Warning/alert color */
        warning?: string;
        /** Hover state for warning color */
        warningHover?: string;
        /** Error/danger color */
        error?: string;
        /** Hover state for error color */
        errorHover?: string;
        /** Info/notice color */
        info?: string;
        /** Hover state for info color */
        infoHover?: string;
        /** Success/confirmation color */
        success?: string;
        /** Hover state for success color */
        successHover?: string;
        /** Dark neutral color */
        dark?: string;
        /** Hover state for dark neutral color */
        darkHover?: string;
        /** Light neutral color */
        light?: string;
        /** Hover state for light neutral color */
        lightHover?: string;
    };
    /** Typography configuration */
    font?: {
        /** Sans-serif font family */
        sans?: string;
        /** Monospace font family */
        mono?: string;
        /** Serif font family */
        serif?: string;
        /** Display font family */
        display?: string;
        /** Font size scale */
        size?: {
            /** Extra small text (12px recommended) */
            xs?: string;
            /** Small text (14px recommended) */
            sm?: string;
            /** Base/body text (16px recommended) */
            md?: string;
            /** Large text (18px recommended) */
            lg?: string;
            /** Extra large text (20px recommended) */
            xl?: string;
            /** Heading level 2 (24px recommended) */
            h2?: string;
            /** Heading level 1 (30px recommended) */
            h1?: string;
            /** Sub display text (36px recommended) */
            h0?: string;
            /** Display text (48px recommended) */
            display?: string;
            /** Icon font size scale */
            icon?: {
                /** Small icon size (20px recommended) */
                sm?: string;
                /** Medium icon size (24px recommended) */
                md?: string;
                /** Large icon size (30px recommended) */
                lg?: string;
                /** Extra large icon size (36px recommended) */
                xl?: string;
            };
        };
        /** Line height scale */
        lineHeight?: {
            /** Tight line height (1.2) */
            tight?: string;
            /** Normal line height (1.5) */
            normal?: string;
            /** Relaxed line height (1.75) */
            relaxed?: string;
        };
        /** Font weight scale */
        weight?: {
            /** Regular font weight (400) */
            regular?: string;
            /** Medium font weight (500) */
            medium?: string;
            /** Semi-bold font weight (600) */
            semibold?: string;
            /** Bold font weight (700) */
            bold?: string;
        };
    };
    /** Border radius scale */
    radius?: {
        /** Small border radius (2-4px) */
        sm?: string;
        /** Medium border radius (4-8px) */
        md?: string;
        /** Large border radius (8-16px) */
        lg?: string;
    };
    /** Spacing scale */
    spacing?: {
        /** Extra small spacing unit */
        xs?: string;
        /** Small spacing unit */
        sm?: string;
        /** Medium spacing unit */
        md?: string;
        /** Large spacing unit */
        lg?: string;
        /** Extra large spacing unit */
        xl?: string;
    };
    /** Z-index scale for layering components */
    zIndex?: {
        /** Z-index for dropdowns, tooltips, etc. */
        dropdown?: number;
        /** Z-index for sticky elements (headers, footers) */
        sticky?: number;
        /** Z-index for fixed elements (navigation bars) */
        fixed?: number;
        /** Z-index for backdrops (modal overlays) */
        backdrop?: number;
        /** Z-index for modals and dialogs */
        modal?: number;
        /** Z-index for popovers */
        popover?: number;
        /** Z-index for tooltips */
        tooltip?: number;
    };
};
/**
 * Props for the ThemeProvider component
 */
export type ThemeProviderProps = {
    /** Child elements to be rendered within the themed context */
    children: React.ReactNode;
    /** Optional theme object for runtime theme customization. Overrides the class-based theme if provided */
    theme?: Theme;
};
/**
 * ThemeProvider component that manages theme context for the application.
 * Provides theme variables through CSS custom properties.
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * @example
 * <ThemeProvider theme={{
 *   color: { primary: '#FF0000' },
 *   spacing: { md: '16px' }
 * }}>
 *   <App />
 * </ThemeProvider>
 */
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
