/**
 * ============================================================
 *  Buckly Design System — PrimeNG v20 Preset
 *  Angular 20.x  |  @primeuix/themes
 * ============================================================
 *
 *  Palette
 *  ───────
 *  Ink         #111111   primary actions, headings, nav
 *  Orange      #FF6B00   brand accent, CTAs, active states
 *  White       #FFFFFF   page background
 *  Off-white   #FAFAFA   sidebar / surface background
 *  Surface     #F5F5F5   stat cards, chips, ghost buttons
 *  Border      #EBEBEB   default border
 *  Border-soft #F2F2F2   row dividers
 *
 *  Status colours  (mapped to PrimeNG severity props)
 *  ────────────────────────────────────────────────────
 *  planned      indigo   #6366F1  bg #EEF2FF  → severity="info"
 *  in_progress  orange   #FF6B00  bg #FFF7ED  → severity="warn"
 *  completed    green    #16A34A  bg #F0FDF4  → severity="success"
 *  abandoned    gray     #AAAAAA  bg #F5F5F5  → severity="secondary"
 * ============================================================
 */

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const BucklyPreset = definePreset(Aura, {

  // ─────────────────────────────────────────
  // 1. PRIMITIVE  — raw colour ramps
  // ─────────────────────────────────────────
  primitive: {
    borderRadius: {
      none: '0px',
      xs:   '4px',
      sm:   '6px',
      md:   '10px',
      lg:   '12px',
      xl:   '16px',
      full: '9999px',
    },

    // Custom orange ramp  →  reference as {orange.500}
    orange: {
      50:  '#FFF8F0',
      100: '#FFECD9',
      200: '#FFD4B0',
      300: '#FFB578',
      400: '#FF8C34',
      500: '#FF6B00',   // ← brand orange
      600: '#E05F00',
      700: '#B84E00',
      800: '#8F3C00',
      900: '#662B00',
      950: '#3D1900',
    },
  },

  // ─────────────────────────────────────────
  // 2. SEMANTIC  — contextual mappings
  // ─────────────────────────────────────────
  semantic: {

    // Primary = Ink (zinc-950)
    // Orange is expressed at component level so buttons etc. can
    // use it explicitly while "primary" stays ink-black for text / focus
    primary: {
      50:  '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },

    colorScheme: {
      light: {

        primary: {
          color:        '#111111',
          inverseColor: '#ffffff',
          hoverColor:   '#333333',
          activeColor:  '#555555',
        },

        highlight: {
          background:      '#111111',
          focusBackground: '#333333',
          color:           '#ffffff',
          focusColor:      '#ffffff',
        },

        // Surface scale — used by cards, overlays, page bg
        surface: {
          0:   '#ffffff',   // pure white       (card bg)
          50:  '#FAFAFA',   // off-white        (sidebar bg)
          100: '#F5F5F5',   // light surface    (chips, stat cards)
          200: '#EBEBEB',   // border
          300: '#D4D4D4',   // stronger border
          400: '#A3A3A3',   // placeholder / disabled
          500: '#737373',   // secondary text
          600: '#525252',   // muted text
          700: '#404040',   // body text
          800: '#262626',   // heading text
          900: '#171717',   // near-black
          950: '#111111',   // ink
        },

        // Form fields
        formField: {
          background:             '#ffffff',
          disabledBackground:     '#F5F5F5',
          filledBackground:       '#FAFAFA',
          filledHoverBackground:  '#F5F5F5',
          filledFocusBackground:  '#ffffff',
          borderColor:            '#EBEBEB',
          hoverBorderColor:       '#BBBBBB',
          focusBorderColor:       '#111111',
          invalidBorderColor:     '#E24B4A',
          color:                  '#111111',
          disabledColor:          '#AAAAAA',
          placeholderColor:       '#AAAAAA',
          floatLabelColor:        '#888888',
          floatLabelFocusColor:   '#111111',
          floatLabelActiveColor:  '#111111',
          iconColor:              '#888888',
          shadow:                 'none',
        },

        // Overlay containers (dropdowns, modals, tooltips)
        overlay: {
          select: {
            background:   '#ffffff',
            borderColor:  '#EBEBEB',
            borderRadius: '10px',
          },
          popover: {
            background:   '#ffffff',
            borderColor:  '#EBEBEB',
            borderRadius: '12px',
            shadow:       '0 4px 24px rgba(0,0,0,0.08)',
          },
          modal: {
            background:   '#ffffff',
            borderColor:  '#EBEBEB',
            borderRadius: '16px',
            shadow:       '0 8px 40px rgba(0,0,0,0.12)',
          },
        },

        // Content areas
        content: {
          background:       '#ffffff',
          hoverBackground:  '#FAFAFA',
          borderColor:      '#EBEBEB',
          color:            '#111111',
          hoverColor:       '#000000',
        },

        // Navigation items (menus, sidebars)
        navigation: {
          item: {
            focusBackground:  '#F5F5F5',
            activeBackground: '#111111',
            color:            '#777777',
            focusColor:       '#111111',
            activeColor:      '#ffffff',
            icon: {
              color:       '#888888',
              focusColor:  '#111111',
              activeColor: '#ffffff',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color:      '#BBBBBB',
          },
        },
      },

      // Dark — not used by Buckly (light-only)
      // Kept so PrimeNG doesn't throw when it reads both schemes
      dark: {
        primary: {
          color:        '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor:   '{zinc.100}',
          activeColor:  '{zinc.200}',
        },
        highlight: {
          background:      'rgba(255,255,255,0.16)',
          focusBackground: 'rgba(255,255,255,0.24)',
          color:           'rgba(255,255,255,0.87)',
          focusColor:      'rgba(255,255,255,0.87)',
        },
      },
    },
  },

  // ─────────────────────────────────────────
  // 3. COMPONENTS  — per-component overrides
  // ─────────────────────────────────────────
  components: {

    // ══ BUTTON ════════════════════════════════════════
    // default   → Orange CTA
    // contrast  → Ink black (nav / secondary action)
    // secondary → Ghost (utility)
    // success   → Green (completed action)
    // warn      → Orange tint (in-progress action)
    // danger    → Red tint (abandon / delete)
    button: {
      borderRadius: '{border.radius.full}',
      colorScheme: {
        light: {
          root: {
            primary: {
              background:        '#FF6B00',
              hoverBackground:   '#E05F00',
              activeBackground:  '#B84E00',
              borderColor:       '#FF6B00',
              hoverBorderColor:  '#E05F00',
              activeBorderColor: '#B84E00',
              color:             '#ffffff',
              hoverColor:        '#ffffff',
              activeColor:       '#ffffff',
            },
            contrast: {
              background:        '#111111',
              hoverBackground:   '#333333',
              activeBackground:  '#555555',
              borderColor:       '#111111',
              hoverBorderColor:  '#333333',
              activeBorderColor: '#555555',
              color:             '#ffffff',
              hoverColor:        '#ffffff',
              activeColor:       '#ffffff',
            },
            secondary: {
              background:        '#F5F5F5',
              hoverBackground:   '#EBEBEB',
              activeBackground:  '#D4D4D4',
              borderColor:       '#EBEBEB',
              hoverBorderColor:  '#D4D4D4',
              activeBorderColor: '#BBBBBB',
              color:             '#333333',
              hoverColor:        '#111111',
              activeColor:       '#111111',
            },
            success: {
              background:        '#F0FDF4',
              hoverBackground:   '#DCFCE7',
              activeBackground:  '#BBF7D0',
              borderColor:       '#BBF7D0',
              hoverBorderColor:  '#86EFAC',
              activeBorderColor: '#4ADE80',
              color:             '#166534',
              hoverColor:        '#14532D',
              activeColor:       '#14532D',
            },
            warn: {
              background:        '#FFF7ED',
              hoverBackground:   '#FFEDD5',
              activeBackground:  '#FED7AA',
              borderColor:       '#FED7AA',
              hoverBorderColor:  '#FDBA74',
              activeBorderColor: '#FB923C',
              color:             '#C2410C',
              hoverColor:        '#9A3412',
              activeColor:       '#7C2D12',
            },
            danger: {
              background:        '#FEF2F2',
              hoverBackground:   '#FEE2E2',
              activeBackground:  '#FECACA',
              borderColor:       '#FECACA',
              hoverBorderColor:  '#FCA5A5',
              activeBorderColor: '#F87171',
              color:             '#991B1B',
              hoverColor:        '#7F1D1D',
              activeColor:       '#7F1D1D',
            },
            outlined: {
              primary: {
                hoverBackground:  '#FFF1E8',
                color:            '#FF6B00',
                borderColor:      '#FF6B00',
              },
              contrast: {
                hoverBackground:  '#F5F5F5',
                color:            '#111111',
                borderColor:      '#111111',
              },
              secondary: {
                hoverBackground:  '#F5F5F5',
                color:            '#555555',
                borderColor:      '#EBEBEB',
              },
            },
            text: {
              primary: {
                hoverBackground: '#FFF1E8',
                color:           '#FF6B00',
              },
              contrast: {
                hoverBackground: '#F5F5F5',
                color:           '#111111',
              },
              secondary: {
                hoverBackground: '#F5F5F5',
                color:           '#777777',
              },
            },
          },
        },
      },
    },

    // ══ TAG ═══════════════════════════════════════════
    // Buckly severity → status mapping:
    //   info      → Planned     (indigo)
    //   warn      → In Progress (orange)
    //   success   → Completed   (green)
    //   secondary → Abandoned   (gray)
    //   danger    → Error / delete (red)
    tag: {
      borderRadius: '{border.radius.full}',
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '#111111',
              color:      '#ffffff',
            },
            secondary: {
              // Abandoned
              background: '#F5F5F5',
              color:      '#555555',
            },
            info: {
              // Planned
              background: '#EEF2FF',
              color:      '#3730A3',
            },
            success: {
              // Completed
              background: '#F0FDF4',
              color:      '#166534',
            },
            warn: {
              // In Progress
              background: '#FFF7ED',
              color:      '#C2410C',
            },
            danger: {
              background: '#FEF2F2',
              color:      '#991B1B',
            },
            contrast: {
              background: '#111111',
              color:      '#ffffff',
            },
          },
        },
      },
    },

    // ══ BADGE (numeric dot on icons) ══════════════════
    badge: {
      borderRadius: '{border.radius.full}',
      colorScheme: {
        light: {
          root: {
            primary:   { background: '#FF6B00', color: '#ffffff' },
            secondary: { background: '#F5F5F5', color: '#333333' },
            info:      { background: '#EEF2FF', color: '#3730A3' },
            success:   { background: '#F0FDF4', color: '#166534' },
            warn:      { background: '#FFF7ED', color: '#C2410C' },
            danger:    { background: '#FEF2F2', color: '#991B1B' },
            contrast:  { background: '#111111', color: '#ffffff' },
          },
        },
      },
    },

    // ══ CARD ══════════════════════════════════════════
    card: {
      borderRadius: '{border.radius.lg}',
      colorScheme: {
        light: {
          root: {
            background: '#ffffff',
            color:      '#111111',
            shadow:     'none',
          },
          body:    { padding: '1.25rem' },
          caption: { gap: '0.25rem' },
          subtitle:{ color: '#777777' },
        },
      },
    },

    // ══ INPUTTEXT ═════════════════════════════════════
    inputtext: {
      borderRadius: '{border.radius.md}',
      paddingX:     '0.75rem',
      paddingY:     '0.5625rem',
      sm: { fontSize: '0.8125rem', paddingX: '0.625rem',  paddingY: '0.4375rem' },
      lg: { fontSize: '1rem',      paddingX: '0.875rem',  paddingY: '0.6875rem' },
    },

    // ══ SELECT (Dropdown) ═════════════════════════════
    select: {
      borderRadius: '{border.radius.md}',
      colorScheme: {
        light: {
          root: {
            background:         '#ffffff',
            disabledBackground: '#F5F5F5',
            borderColor:        '#EBEBEB',
            hoverBorderColor:   '#BBBBBB',
            focusBorderColor:   '#111111',
            color:              '#111111',
            placeholderColor:   '#AAAAAA',
            shadow:             'none',
          },
          overlay: {
            background:   '#ffffff',
            borderColor:  '#EBEBEB',
            borderRadius: '10px',
            shadow:       '0 4px 20px rgba(0,0,0,0.08)',
          },
          option: {
            focusBackground:          '#F5F5F5',
            selectedBackground:       '#111111',
            selectedFocusBackground:  '#333333',
            color:                    '#111111',
            focusColor:               '#111111',
            selectedColor:            '#ffffff',
            selectedFocusColor:       '#ffffff',
          },
          optionGroup: {
            background: 'transparent',
            color:      '#AAAAAA',
          },
          clearIcon: { color: '#888888' },
          dropdown:  { color: '#888888' },
        },
      },
    },

    // ══ MULTISELECT ═══════════════════════════════════
    multiselect: {
      borderRadius: '{border.radius.md}',
      colorScheme: {
        light: {
          root: {
            background:        '#ffffff',
            borderColor:       '#EBEBEB',
            hoverBorderColor:  '#BBBBBB',
            focusBorderColor:  '#111111',
            color:             '#111111',
            placeholderColor:  '#AAAAAA',
          },
          overlay: {
            background:   '#ffffff',
            borderColor:  '#EBEBEB',
            borderRadius: '10px',
            shadow:       '0 4px 20px rgba(0,0,0,0.08)',
          },
          option: {
            focusBackground:    '#F5F5F5',
            selectedBackground: '#111111',
            selectedColor:      '#ffffff',
            color:              '#111111',
          },
          chip: {
            borderRadius:  '{border.radius.full}',
          },
        },
      },
    },

    // ══ TEXTAREA ══════════════════════════════════════
    textarea: {
      borderRadius: '{border.radius.md}',
    },

    // ══ DATEPICKER (Calendar) ═════════════════════════
    datepicker: {
      borderRadius: '{border.radius.md}',
      colorScheme: {
        light: {
          root: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
            color:       '#111111',
            shadow:      '0 4px 16px rgba(0,0,0,0.08)',
          },
          header: {
            background:  '#ffffff',
            color:       '#111111',
            borderColor: '#EBEBEB',
          },
          date: {
            hoverBackground:    '#F5F5F5',
            selectedBackground: '#111111',
            todayBackground:    '#FFF1E8',
            color:              '#111111',
            hoverColor:         '#111111',
            selectedColor:      '#ffffff',
            todayColor:         '#FF6B00',
            borderRadius:       '6px',
          },
        },
      },
    },

    // ══ TABS ══════════════════════════════════════════
    tabs: {
      colorScheme: {
        light: {
          root: {
            borderColor: '#EBEBEB',
          },
          nav: {
            background:  'transparent',
            borderColor: '#EBEBEB',
          },
          tab: {
            background:        'transparent',
            hoverBackground:   '#FAFAFA',
            activeBackground:  'transparent',
            borderColor:       'transparent',
            hoverBorderColor:  '#D4D4D4',
            activeBorderColor: '#111111',
            color:             '#888888',
            hoverColor:        '#333333',
            activeColor:       '#111111',
            padding:           '0.75rem 1rem',
            fontWeight:        '500',
          },
          tabpanel: {
            background: '#ffffff',
            color:      '#111111',
          },
          activeBar: {
            background:   '#111111',
            height:       '2px',
            borderRadius: '2px',
          },
        },
      },
    },

    // ══ POPOVER / OverlayPanel ════════════════════════
    popover: {
      borderRadius: '{border.radius.lg}',
      colorScheme: {
        light: {
          root: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
            color:       '#111111',
            shadow:      '0 4px 24px rgba(0,0,0,0.08)',
          },
        },
      },
    },

    // ══ DIALOG / Modal ════════════════════════════════
    dialog: {
      borderRadius: '{border.radius.xl}',
      colorScheme: {
        light: {
          root: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
            color:       '#111111',
            shadow:      '0 8px 40px rgba(0,0,0,0.12)',
          },
          header: {
            background: '#ffffff',
            color:      '#111111',
            padding:    '1.5rem 1.5rem 1rem',
          },
          content: {
            background: '#ffffff',
            color:      '#111111',
            padding:    '0 1.5rem 1rem',
          },
          footer: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
            padding:     '1rem 1.5rem',
          },
        },
      },
    },

    // ══ MENU ══════════════════════════════════════════
    menu: {
      borderRadius: '{border.radius.md}',
      colorScheme: {
        light: {
          root: {
            background:  '#FAFAFA',
            borderColor: '#EBEBEB',
            color:       '#111111',
            shadow:      'none',
          },
          item: {
            focusBackground:  '#F5F5F5',
            activeBackground: '#111111',
            color:            '#777777',
            focusColor:       '#111111',
            activeColor:      '#ffffff',
            padding:          '0.5rem 0.75rem',
            borderRadius:     '8px',
          },
          separator: {
            borderColor: '#EBEBEB',
          },
        },
      },
    },

    // ══ PANELMENU (sidebar nav) ═══════════════════════
    panelmenu: {
      colorScheme: {
        light: {
          panel: {
            background:   '#FAFAFA',
            borderColor:  'transparent',
            color:        '#111111',
            borderRadius: '10px',
          },
          item: {
            focusBackground:  '#F5F5F5',
            activeBackground: '#111111',
            color:            '#777777',
            focusColor:       '#111111',
            activeColor:      '#ffffff',
          },
        },
      },
    },

    // ══ TOGGLESWITCH ══════════════════════════════════
    toggleswitch: {
      colorScheme: {
        light: {
          root: {
            checkedBackground:       '#FF6B00',
            checkedHoverBackground:  '#E05F00',
            background:              '#D4D4D4',
            hoverBackground:         '#BBBBBB',
            borderColor:             'transparent',
            checkedBorderColor:      'transparent',
            shadow:                  'none',
          },
          handle: {
            background:              '#ffffff',
            checkedBackground:       '#ffffff',
          },
        },
      },
    },

    // ══ CHECKBOX ══════════════════════════════════════
    checkbox: {
      borderRadius: '{border.radius.xs}',
      colorScheme: {
        light: {
          root: {
            background:           '#ffffff',
            checkedBackground:    '#111111',
            checkedHoverBackground: '#333333',
            borderColor:          '#D4D4D4',
            hoverBorderColor:     '#888888',
            focusBorderColor:     '#111111',
            checkedBorderColor:   '#111111',
            invalidBorderColor:   '#E24B4A',
          },
          icon: {
            checkedColor:       '#ffffff',
            checkedHoverColor:  '#ffffff',
          },
        },
      },
    },

    // ══ RADIOBUTTON ═══════════════════════════════════
    radiobutton: {
      colorScheme: {
        light: {
          root: {
            background:          '#ffffff',
            checkedBackground:   '#111111',
            borderColor:         '#D4D4D4',
            hoverBorderColor:    '#888888',
            focusBorderColor:    '#111111',
            checkedBorderColor:  '#111111',
          },
          icon: {
            checkedColor:      '#ffffff',
            checkedHoverColor: '#ffffff',
          },
        },
      },
    },

    // ══ CHIP ══════════════════════════════════════════
    chip: {
      borderRadius: '{border.radius.full}',
      colorScheme: {
        light: {
          root: {
            background:  '#F5F5F5',
            color:       '#555555',
            borderColor: '#EBEBEB',
          },
          icon:       { color: '#888888' },
          removeIcon: { color: '#888888' },
        },
      },
    },

    // ══ AVATAR ════════════════════════════════════════
    avatar: {
      colorScheme: {
        light: {
          root: {
            background: '#F5F5F5',
            color:      '#555555',
          },
        },
      },
    },

    // ══ TOAST ═════════════════════════════════════════
    toast: {
      borderRadius: '{border.radius.lg}',
      colorScheme: {
        light: {
          root: {
            info: {
              background:  '#EEF2FF',
              borderColor: '#C7D2FE',
              color:       '#3730A3',
              detailColor: '#3730A3',
            },
            success: {
              background:  '#F0FDF4',
              borderColor: '#BBF7D0',
              color:       '#166534',
              detailColor: '#166534',
            },
            warn: {
              background:  '#FFF7ED',
              borderColor: '#FED7AA',
              color:       '#C2410C',
              detailColor: '#C2410C',
            },
            error: {
              background:  '#FEF2F2',
              borderColor: '#FECACA',
              color:       '#991B1B',
              detailColor: '#991B1B',
            },
          },
        },
      },
    },

    // ══ DATATABLE ═════════════════════════════════════
    datatable: {
      colorScheme: {
        light: {
          root: { borderColor: '#EBEBEB' },
          header: {
            background:  '#FAFAFA',
            borderColor: '#EBEBEB',
            color:       '#555555',
            padding:     '0.75rem 1rem',
          },
          headerCell: {
            background:          '#FAFAFA',
            hoverBackground:     '#F5F5F5',
            selectedBackground:  '#111111',
            borderColor:         '#EBEBEB',
            color:               '#555555',
            hoverColor:          '#111111',
            selectedColor:       '#ffffff',
            padding:             '0.75rem 1rem',
          },
          row: {
            background:          '#ffffff',
            hoverBackground:     '#FAFAFA',
            selectedBackground:  '#111111',
            color:               '#111111',
            hoverColor:          '#111111',
            selectedColor:       '#ffffff',
            stripedBackground:   '#FAFAFA',
          },
          bodyCell: {
            borderColor: '#F5F5F5',
            padding:     '0.75rem 1rem',
          },
          footer: {
            background:  '#FAFAFA',
            borderColor: '#EBEBEB',
            color:       '#555555',
          },
          footerCell: {
            background:  '#FAFAFA',
            borderColor: '#EBEBEB',
            color:       '#555555',
          },
          paginatorWrapper: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
          },
          emptyMessage: {
            background: 'transparent',
            color:      '#888888',
          },
        },
      },
    },

    // ══ PAGINATOR ═════════════════════════════════════
    paginator: {
      colorScheme: {
        light: {
          root: {
            background:  '#ffffff',
            borderColor: '#EBEBEB',
            color:       '#555555',
          },
          navButton: {
            background:         'transparent',
            hoverBackground:    '#F5F5F5',
            selectedBackground: '#111111',
            color:              '#555555',
            hoverColor:         '#111111',
            selectedColor:      '#ffffff',
            borderRadius:       '8px',
            width:              '2.25rem',
            height:             '2.25rem',
          },
          currentPageReport: { color: '#888888' },
        },
      },
    },

    // ══ SKELETON ══════════════════════════════════════
    skeleton: {
      colorScheme: {
        light: {
          root: {
            background:           '#F5F5F5',
            animationBackground:  '#EBEBEB',
          },
        },
      },
    },

    // ══ PROGRESSBAR ═══════════════════════════════════
    progressbar: {
      borderRadius: '{border.radius.full}',
      colorScheme: {
        light: {
          root: {
            background: '#F5F5F5',
            height:     '6px',
          },
          value: { background: '#FF6B00' },
          label: { color: '#ffffff' },
        },
      },
    },

    // ══ DIVIDER ═══════════════════════════════════════
    divider: {
      colorScheme: {
        light: {
          horizontal: { borderColor: '#EBEBEB', margin: '1rem 0' },
          vertical:   { borderColor: '#EBEBEB', margin: '0 1rem' },
          content:    { background: '#ffffff', color: '#888888' },
        },
      },
    },

    // ══ ACCORDION ═════════════════════════════════════
    accordion: {
      colorScheme: {
        light: {
          panel: {
            borderColor:  '#EBEBEB',
            borderRadius: '10px',
          },
          header: {
            background:       '#ffffff',
            hoverBackground:  '#FAFAFA',
            activeBackground: '#ffffff',
            color:            '#111111',
            hoverColor:       '#111111',
            activeColor:      '#111111',
            padding:          '1rem 1.25rem',
            fontWeight:       '500',
          },
          content: {
            background: '#ffffff',
            color:      '#111111',
            padding:    '0 1.25rem 1rem',
          },
        },
      },
    },

    // ══ STEPS ═════════════════════════════════════════
    steps: {
      colorScheme: {
        light: {
          separator: {
            background:       '#EBEBEB',
            activeBackground: '#111111',
          },
          item: {
            color:       '#888888',
            activeColor: '#111111',
            number: {
              background:         '#ffffff',
              borderColor:        '#EBEBEB',
              color:              '#888888',
              activeBackground:   '#111111',
              activeBorderColor:  '#111111',
              activeColor:        '#ffffff',
            },
          },
        },
      },
    },

    // ══ BREADCRUMB ════════════════════════════════════
    breadcrumb: {
      colorScheme: {
        light: {
          root: {
            background:  'transparent',
            borderColor: 'transparent',
            padding:     '0',
          },
          item: {
            color:       '#888888',
            hoverColor:  '#111111',
            activeColor: '#111111',
          },
          separator: { color: '#BBBBBB' },
        },
      },
    },

    // ══ FILEUPLOAD ════════════════════════════════════
    fileupload: {
      colorScheme: {
        light: {
          root: {
            background:   '#FAFAFA',
            borderColor:  '#EBEBEB',
            borderRadius: '12px',
          },
          content: {
            hoverBackground: '#F0FDF4',
            borderColor:     '#EBEBEB',
            padding:         '2rem 1.25rem',
          },
          badge: {
            background: '#FF6B00',
            color:      '#ffffff',
          },
        },
      },
    },
  },
});

export default BucklyPreset;