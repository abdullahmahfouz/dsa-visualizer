"""
Menu Card UI component.
"""

import pygame
from config.settings import (
    DARK_GRAY, LIGHT_GRAY, WHITE, GRAY, BLACK, ORANGE
)


class MenuCard:
    """
    A card button for the main menu selection.
    
    Displays a title, description, and optional "Coming Soon" badge.
    
    Attributes:
        rect: Card rectangle.
        title: Card title text.
        description: Card description text.
        color: Card background color.
        available: Whether the option is selectable.
    """
    
    def __init__(
        self, 
        x: int, 
        y: int, 
        width: int, 
        height: int,
        title: str, 
        description: str, 
        color: tuple, 
        available: bool = True
    ):
        """
        Initialize a menu card.
        
        Args:
            x: X position.
            y: Y position.
            width: Card width.
            height: Card height.
            title: Card title.
            description: Card description.
            color: Background color.
            available: Whether selectable.
        """
        self.rect = pygame.Rect(x, y, width, height)
        self.title = title
        self.description = description
        self.color = color
        self.available = available
        self.title_font = None
        self.desc_font = None
    
    def draw(self, screen: pygame.Surface, mouse_pos: tuple):
        """
        Draw the menu card.
        
        Args:
            screen: Pygame surface to draw on.
            mouse_pos: Current mouse position.
        """
        if self.title_font is None:
            self.title_font = pygame.font.Font(None, 36)
            self.desc_font = pygame.font.Font(None, 24)
        
        is_hover = self.rect.collidepoint(mouse_pos) and self.available
        
        # Draw shadow
        shadow_rect = self.rect.copy()
        shadow_rect.x += 5
        shadow_rect.y += 5
        pygame.draw.rect(screen, DARK_GRAY, shadow_rect, border_radius=15)
        
        # Card background
        if self.available:
            bg_color = tuple(min(c + 20, 255) for c in self.color) if is_hover else self.color
        else:
            bg_color = LIGHT_GRAY
        
        pygame.draw.rect(screen, bg_color, self.rect, border_radius=15)
        pygame.draw.rect(screen, BLACK, self.rect, width=2, border_radius=15)
        
        # Icon area (top portion)
        icon_rect = pygame.Rect(self.rect.x, self.rect.y, self.rect.width, 80)
        icon_color = tuple(max(c - 30, 0) for c in bg_color)
        pygame.draw.rect(
            screen, icon_color, icon_rect,
            border_top_left_radius=15, border_top_right_radius=15
        )
        
        # Title
        title_color = WHITE if self.available else GRAY
        title_surface = self.title_font.render(self.title, True, title_color)
        title_rect = title_surface.get_rect(center=(self.rect.centerx, self.rect.y + 40))
        screen.blit(title_surface, title_rect)
        
        # Description (wrap text)
        self._draw_description(screen)
        
        # "Coming Soon" badge if not available
        if not self.available:
            self._draw_badge(screen)
    
    def _draw_description(self, screen: pygame.Surface):
        """Draw wrapped description text."""
        desc_color = BLACK if self.available else GRAY
        words = self.description.split()
        lines = []
        current_line = []
        
        for word in words:
            current_line.append(word)
            test_text = ' '.join(current_line)
            if self.desc_font.size(test_text)[0] > self.rect.width - 20:
                current_line.pop()
                lines.append(' '.join(current_line))
                current_line = [word]
        if current_line:
            lines.append(' '.join(current_line))
        
        y_offset = self.rect.y + 100
        for line in lines[:3]:  # Max 3 lines
            desc_surface = self.desc_font.render(line, True, desc_color)
            desc_rect = desc_surface.get_rect(center=(self.rect.centerx, y_offset))
            screen.blit(desc_surface, desc_rect)
            y_offset += 25
    
    def _draw_badge(self, screen: pygame.Surface):
        """Draw 'Coming Soon' badge."""
        badge_font = pygame.font.Font(None, 20)
        badge_text = badge_font.render("COMING SOON", True, WHITE)
        badge_bg = pygame.Rect(self.rect.right - 90, self.rect.y + 10, 80, 20)
        pygame.draw.rect(screen, ORANGE, badge_bg, border_radius=5)
        screen.blit(badge_text, (badge_bg.x + 5, badge_bg.y + 3))
    
    def is_clicked(self, mouse_pos: tuple, mouse_pressed: bool) -> bool:
        """
        Check if the card was clicked.
        
        Args:
            mouse_pos: Current mouse position.
            mouse_pressed: Whether mouse button is pressed.
        
        Returns:
            True if card was clicked and is available.
        """
        return self.available and self.rect.collidepoint(mouse_pos) and mouse_pressed
