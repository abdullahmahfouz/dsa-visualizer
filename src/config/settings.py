"""
Configuration and constants for DSA Visualizer.

This module contains all application-wide settings, colors, and constants.
"""

# =============================================================================
# Window Settings
# =============================================================================

WINDOW_WIDTH = 900
WINDOW_HEIGHT = 650
FPS = 60
APP_TITLE = "DSA Visualizer"


# =============================================================================
# Colors (RGB Tuples)
# =============================================================================

# Base Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (150, 150, 150)
LIGHT_GRAY = (200, 200, 200)
DARK_GRAY = (80, 80, 80)

# Theme Colors
BLUE = (70, 130, 180)
LIGHT_BLUE = (100, 160, 210)
GREEN = (80, 180, 80)
RED = (220, 80, 80)
ORANGE = (230, 150, 50)
PURPLE = (140, 100, 180)
YELLOW = (255, 220, 100)

# UI Element Colors
BUTTON_COLOR = BLUE
BUTTON_HOVER = LIGHT_BLUE
BUTTON_TEXT = WHITE
INPUT_BG = (245, 245, 245)
INPUT_ACTIVE = (255, 255, 220)
MENU_BG = (240, 245, 250)
PANEL_BG = (240, 240, 240)
EXPLANATION_BG = (240, 248, 255)


# =============================================================================
# Font Sizes
# =============================================================================

FONT_TITLE = 64
FONT_SUBTITLE = 48
FONT_HEADING = 36
FONT_BODY = 32
FONT_SMALL = 28
FONT_TINY = 24
FONT_CODE = 26


# =============================================================================
# Stack Visualizer Settings
# =============================================================================

STACK_MAX_SIZE = 7
STACK_BLOCK_WIDTH = 140
STACK_BLOCK_HEIGHT = 50
STACK_ANIMATION_SPEED = 15
