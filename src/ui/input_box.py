"""
Input Box UI component.
"""

import pygame
from typing import Optional
from config.settings import INPUT_BG, INPUT_ACTIVE, BLACK, GRAY


class InputBox:
    """
    Text input field for entering values.
    
    Supports numeric input with placeholder text and cursor display.
    
    Attributes:
        rect: Input box rectangle.
        text: Current input text.
        placeholder: Placeholder text when empty.
        active: Whether the input is focused.
    """
    
    def __init__(
        self, 
        x: int, 
        y: int, 
        width: int, 
        height: int, 
        placeholder: str = ""
    ):
        """
        Initialize an input box.
        
        Args:
            x: X position.
            y: Y position.
            width: Box width.
            height: Box height.
            placeholder: Placeholder text.
        """
        self.rect = pygame.Rect(x, y, width, height)
        self.text = ""
        self.placeholder = placeholder
        self.active = False
        self.font = None
    
    def handle_event(self, event: pygame.event.Event) -> Optional[str]:
        """
        Handle keyboard input events.
        
        Args:
            event: Pygame event to handle.
        
        Returns:
            The entered text if Enter was pressed, None otherwise.
        """
        if event.type == pygame.MOUSEBUTTONDOWN:
            # Toggle active state based on click location
            self.active = self.rect.collidepoint(event.pos)
        
        if event.type == pygame.KEYDOWN and self.active:
            if event.key == pygame.K_RETURN:
                result = self.text
                self.text = ""
                return result
            elif event.key == pygame.K_BACKSPACE:
                self.text = self.text[:-1]
            else:
                # Only allow digits, limit length
                if event.unicode.isdigit() and len(self.text) < 5:
                    self.text += event.unicode
        
        return None
    
    def draw(self, screen: pygame.Surface):
        """
        Draw the input box.
        
        Args:
            screen: Pygame surface to draw on.
        """
        if self.font is None:
            self.font = pygame.font.Font(None, 36)
        
        # Background color based on active state
        bg_color = INPUT_ACTIVE if self.active else INPUT_BG
        pygame.draw.rect(screen, bg_color, self.rect, border_radius=8)
        pygame.draw.rect(screen, BLACK, self.rect, width=2, border_radius=8)
        
        # Draw text or placeholder
        if self.text:
            text_surface = self.font.render(self.text, True, BLACK)
        else:
            text_surface = self.font.render(self.placeholder, True, GRAY)
        
        # Center text in box
        text_rect = text_surface.get_rect(center=self.rect.center)
        screen.blit(text_surface, text_rect)
        
        # Draw cursor if active
        if self.active:
            cursor_x = text_rect.right + 2 if self.text else self.rect.centerx
            pygame.draw.line(
                screen, BLACK,
                (cursor_x, self.rect.y + 10),
                (cursor_x, self.rect.y + self.rect.height - 10),
                2
            )
    
    def clear(self):
        """Clear the input text."""
        self.text = ""
