"""
Button UI component.
"""

import pygame
from config.settings import (
    BUTTON_COLOR, BUTTON_TEXT, GRAY, DARK_GRAY, BLACK
)


class Button:
    """
    Clickable button with hover effects and disabled state.
    
    Attributes:
        rect: Button rectangle (position and size).
        text: Button label text.
        color: Button background color.
        enabled: Whether the button is clickable.
    """
    
    def __init__(
        self, 
        x: int, 
        y: int, 
        width: int, 
        height: int, 
        text: str,
        color: tuple = BUTTON_COLOR, 
        font_size: int = 32
    ):
        """
        Initialize a button.
        
        Args:
            x: X position of button.
            y: Y position of button.
            width: Button width.
            height: Button height.
            text: Button label.
            color: Background color (RGB tuple).
            font_size: Font size for label.
        """
        self.rect = pygame.Rect(x, y, width, height)
        self.text = text
        self.color = color
        self.hover_color = tuple(min(c + 30, 255) for c in color)
        self.font_size = font_size
        self.font = None
        self.enabled = True
    
    def draw(self, screen: pygame.Surface, mouse_pos: tuple):
        """
        Draw the button with hover effect.
        
        Args:
            screen: Pygame surface to draw on.
            mouse_pos: Current mouse position (x, y).
        """
        if self.font is None:
            self.font = pygame.font.Font(None, self.font_size)
        
        # Determine color based on state
        if not self.enabled:
            color = GRAY
        elif self.rect.collidepoint(mouse_pos):
            color = self.hover_color
        else:
            color = self.color
        
        # Draw shadow
        shadow_rect = self.rect.copy()
        shadow_rect.x += 3
        shadow_rect.y += 3
        pygame.draw.rect(screen, DARK_GRAY, shadow_rect, border_radius=10)
        
        # Draw button
        pygame.draw.rect(screen, color, self.rect, border_radius=10)
        pygame.draw.rect(screen, BLACK, self.rect, width=2, border_radius=10)
        
        # Draw text
        text_surface = self.font.render(self.text, True, BUTTON_TEXT)
        text_rect = text_surface.get_rect(center=self.rect.center)
        screen.blit(text_surface, text_rect)
    
    def is_clicked(self, mouse_pos: tuple, mouse_pressed: bool) -> bool:
        """
        Check if the button was clicked.
        
        Args:
            mouse_pos: Current mouse position.
            mouse_pressed: Whether mouse button is pressed.
        
        Returns:
            True if button was clicked, False otherwise.
        """
        return self.enabled and self.rect.collidepoint(mouse_pos) and mouse_pressed
