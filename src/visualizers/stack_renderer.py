"""
Stack Renderer - Pygame visualization for Stack data structure.

Provides animated rendering of stack operations including
push and pop with smooth transitions.
"""

import pygame
from typing import List, Optional, Tuple

from config.settings import (
    STACK_BLOCK_WIDTH, STACK_BLOCK_HEIGHT, STACK_ANIMATION_SPEED,
    BLACK, DARK_GRAY, BLUE, LIGHT_BLUE, RED, GREEN
)


class StackRenderer:
    """
    Renders a Stack data structure using Pygame.
    
    Handles drawing stack elements as blocks and animating
    push/pop operations with smooth transitions.
    
    Attributes:
        x: X position of stack center on screen.
        y: Y position of stack bottom on screen.
        block_width: Width of each stack block.
        block_height: Height of each stack block.
        animation_speed: Pixels per frame for animations.
    """
    
    def __init__(
        self,
        x: int = 400,
        y: int = 500,
        block_width: int = STACK_BLOCK_WIDTH,
        block_height: int = STACK_BLOCK_HEIGHT,
        animation_speed: int = STACK_ANIMATION_SPEED
    ):
        """
        Initialize the stack renderer.
        
        Args:
            x: X position of stack center.
            y: Y position of stack bottom.
            block_width: Width of each block.
            block_height: Height of each block.
            animation_speed: Animation speed in pixels/frame.
        """
        self.x = x
        self.y = y
        self.block_width = block_width
        self.block_height = block_height
        self.animation_speed = animation_speed
        self.spacing = 5  # Gap between blocks
        
        # Animation state
        self.animating = False
        self.animation_type: Optional[str] = None
        self.animation_value: Optional[int] = None
        self.animation_y: float = 0
        self.animation_target_y: float = 0
        
        # Font (lazy initialized)
        self.font: Optional[pygame.font.Font] = None
    
    def _init_font(self):
        """Initialize font if not already done."""
        if self.font is None:
            self.font = pygame.font.Font(None, 36)
    
    def _get_block_y(self, index: int, total: int) -> int:
        """
        Calculate Y position for a block at given index.
        
        Args:
            index: Block index (0 = bottom).
            total: Total number of blocks.
        
        Returns:
            Y coordinate for the block.
        """
        return self.y - (index + 1) * (self.block_height + self.spacing)
    
    def _draw_block(
        self,
        screen: pygame.Surface,
        value: int,
        x: int,
        y: int,
        color: Tuple[int, int, int] = BLUE,
        highlight: bool = False
    ):
        """
        Draw a single stack block with value.
        
        Args:
            screen: Surface to draw on.
            value: Value to display.
            x: X position (center).
            y: Y position (top).
            color: Block color.
            highlight: Whether to highlight.
        """
        self._init_font()
        
        # Block rectangle
        rect = pygame.Rect(
            x - self.block_width // 2,
            y,
            self.block_width,
            self.block_height
        )
        
        # Shadow
        shadow_rect = rect.copy()
        shadow_rect.x += 4
        shadow_rect.y += 4
        pygame.draw.rect(screen, DARK_GRAY, shadow_rect, border_radius=8)
        
        # Block
        block_color = LIGHT_BLUE if highlight else color
        pygame.draw.rect(screen, block_color, rect, border_radius=8)
        pygame.draw.rect(screen, BLACK, rect, width=2, border_radius=8)
        
        # Value text
        text = self.font.render(str(value), True, BLACK)
        text_rect = text.get_rect(center=rect.center)
        screen.blit(text, text_rect)
    
    def draw_stack(
        self,
        screen: pygame.Surface,
        items: List[int],
        highlight_top: bool = False
    ):
        """
        Draw the entire stack on screen.
        
        Args:
            screen: Pygame surface to draw on.
            items: List of stack items (bottom to top).
            highlight_top: Whether to highlight the top element.
        """
        self._init_font()
        
        # Base platform
        platform_rect = pygame.Rect(
            self.x - self.block_width // 2 - 20,
            self.y,
            self.block_width + 40,
            10
        )
        pygame.draw.rect(screen, DARK_GRAY, platform_rect, border_radius=3)
        
        # Draw each block
        for i, value in enumerate(items):
            y = self._get_block_y(i, len(items))
            is_top = (i == len(items) - 1)
            self._draw_block(
                screen, value, self.x, y,
                highlight=highlight_top and is_top
            )
        
        # TOP indicator
        if items:
            self._draw_top_indicator(screen, len(items))
    
    def _draw_top_indicator(self, screen: pygame.Surface, stack_size: int):
        """Draw the TOP arrow indicator."""
        top_y = self._get_block_y(stack_size - 1, stack_size)
        arrow_x = self.x + self.block_width // 2 + 30
        center_y = top_y + self.block_height // 2
        
        # Arrow line
        pygame.draw.line(
            screen, RED,
            (arrow_x, center_y),
            (arrow_x - 15, center_y),
            3
        )
        
        # Arrow head
        pygame.draw.polygon(screen, RED, [
            (arrow_x - 15, center_y - 8),
            (arrow_x - 15, center_y + 8),
            (arrow_x - 25, center_y)
        ])
        
        # Label
        label = self.font.render("TOP", True, RED)
        screen.blit(label, (arrow_x + 5, center_y - 10))
    
    # =========================================================================
    # Animation Methods
    # =========================================================================
    
    def start_push_animation(self, value: int, stack_size: int):
        """
        Start a push animation.
        
        Args:
            value: Value being pushed.
            stack_size: Current stack size (before push).
        """
        self.animating = True
        self.animation_type = "push"
        self.animation_value = value
        self.animation_y = 50  # Start from top
        self.animation_target_y = self._get_block_y(stack_size, stack_size + 1)
    
    def start_pop_animation(self, value: int, stack_size: int):
        """
        Start a pop animation.
        
        Args:
            value: Value being popped.
            stack_size: Current stack size (before pop).
        """
        self.animating = True
        self.animation_type = "pop"
        self.animation_value = value
        self.animation_y = self._get_block_y(stack_size - 1, stack_size)
        self.animation_target_y = -100  # Off screen
    
    def update_animation(self) -> bool:
        """
        Update animation state.
        
        Returns:
            True if animation completed, False if still animating.
        """
        if not self.animating:
            return True
        
        if self.animation_type == "push":
            if self.animation_y < self.animation_target_y:
                self.animation_y += self.animation_speed
                if self.animation_y >= self.animation_target_y:
                    self.animation_y = self.animation_target_y
                    self.animating = False
                    return True
        
        elif self.animation_type == "pop":
            if self.animation_y > self.animation_target_y:
                self.animation_y -= self.animation_speed
                if self.animation_y <= self.animation_target_y:
                    self.animating = False
                    return True
        
        return False
    
    def draw_animation(self, screen: pygame.Surface):
        """Draw the currently animating block."""
        if self.animating and self.animation_value is not None:
            color = GREEN if self.animation_type == "push" else RED
            self._draw_block(
                screen,
                self.animation_value,
                self.x,
                int(self.animation_y),
                color=color
            )
    
    def is_animating(self) -> bool:
        """Check if an animation is in progress."""
        return self.animating
