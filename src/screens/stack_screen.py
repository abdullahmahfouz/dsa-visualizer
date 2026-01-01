"""
Stack Visualizer screen.
"""

import pygame
from typing import List

from config.settings import (
    WINDOW_WIDTH, WINDOW_HEIGHT,
    WHITE, BLACK, GRAY, DARK_GRAY,
    GREEN, RED, BLUE,
    STACK_MAX_SIZE
)
from ui import Button, InputBox
from algorithms.stacks.stack import Stack
from visualizers.stack_renderer import StackRenderer


class StackVisualizer:
    """
    Interactive Stack visualization and teaching tool.
    
    Allows users to push/pop values and see animated visualizations
    with educational explanations.
    """
    
    def __init__(self, screen: pygame.Surface):
        """
        Initialize the stack visualizer.
        
        Args:
            screen: Pygame surface to draw on.
        """
        self.screen = screen
        
        # Data structure
        self.stack = Stack()
        
        # Renderer
        self.renderer = StackRenderer(
            x=WINDOW_WIDTH // 2 + 100,
            y=WINDOW_HEIGHT - 100
        )
        
        # UI components
        self.input_box = InputBox(50, 180, 150, 45, "Enter #")
        self.buttons = self._create_buttons()
        
        # Fonts
        self.title_font = pygame.font.Font(None, 48)
        self.info_font = pygame.font.Font(None, 28)
        self.small_font = pygame.font.Font(None, 24)
        self.code_font = pygame.font.Font(None, 26)
        
        # State
        self.message = "Welcome! Enter a number and click PUSH to start."
        self.message_timer = 300
        self.last_operation = ""
        self.explanation = self._get_welcome_explanation()
        self.peek_highlight = False
        self.peek_timer = 0
    
    def _create_buttons(self) -> dict:
        """Create UI buttons."""
        return {
            'push': Button(50, 240, 150, 50, "PUSH", GREEN),
            'pop': Button(50, 300, 150, 50, "POP", RED),
            'peek': Button(50, 360, 150, 50, "PEEK", BLUE),
            'reset': Button(50, 420, 150, 50, "RESET", GRAY),
            'back': Button(30, 20, 100, 40, "← BACK", DARK_GRAY, font_size=24),
        }
    
    def _get_welcome_explanation(self) -> List[str]:
        """Get the welcome explanation text."""
        return [
            "A Stack is a LIFO data structure:",
            "Last In, First Out",
            "",
            "Like a stack of plates - you can",
            "only add/remove from the top!"
        ]
    
    def show_message(self, text: str, duration: int = 180):
        """Display a temporary message."""
        self.message = text
        self.message_timer = duration
    
    def set_explanation(self, lines: List[str]):
        """Set the explanation text."""
        self.explanation = lines
    
    # =========================================================================
    # Stack Operations
    # =========================================================================
    
    def handle_push(self, value: int = None):
        """Handle push operation."""
        if self.renderer.is_animating():
            return
        
        # Get value from input
        if value is None:
            if not self.input_box.text:
                self.show_message("Please enter a number first!")
                return
            try:
                value = int(self.input_box.text)
            except ValueError:
                self.show_message("Invalid number!")
                return
            self.input_box.clear()
        
        # Check overflow
        if self.stack.size() >= STACK_MAX_SIZE:
            self.show_message("Stack Overflow! Cannot push - stack is full.")
            self.set_explanation([
                "STACK OVERFLOW!",
                "",
                "The stack has reached its",
                f"maximum capacity ({STACK_MAX_SIZE} items).",
                "",
                "You must POP items before",
                "you can PUSH more."
            ])
            return
        
        # Perform push
        self.renderer.start_push_animation(value, self.stack.size())
        self.stack.push(value)
        self.last_operation = f"push({value})"
        self.show_message(f"Pushed {value} onto the stack!")
        self.set_explanation([
            "PUSH Operation:",
            "",
            f"stack.push({value})",
            "",
            f"Added {value} to the TOP.",
            f"New size: {self.stack.size()}",
            "",
            "Time Complexity: O(1)"
        ])
    
    def handle_pop(self):
        """Handle pop operation."""
        if self.renderer.is_animating():
            return
        
        if self.stack.is_empty():
            self.show_message("Stack Underflow! Cannot pop - stack is empty.")
            self.set_explanation([
                "STACK UNDERFLOW!",
                "",
                "Cannot POP from an",
                "empty stack.",
                "",
                "PUSH some items first!"
            ])
            return
        
        value = self.stack.peek()
        self.renderer.start_pop_animation(value, self.stack.size())
        self.stack.pop()
        self.last_operation = f"pop() → {value}"
        self.show_message(f"Popped {value} from the stack!")
        self.set_explanation([
            "POP Operation:",
            "",
            f"value = stack.pop()",
            f"# Returns: {value}",
            "",
            f"Removed {value} from TOP.",
            f"New size: {self.stack.size()}",
            "",
            "Time Complexity: O(1)"
        ])
    
    def handle_peek(self):
        """Handle peek operation."""
        if self.renderer.is_animating():
            return
        
        if self.stack.is_empty():
            self.show_message("Cannot peek - stack is empty!")
            self.set_explanation([
                "PEEK Failed!",
                "",
                "Cannot peek at an",
                "empty stack.",
                "",
                "PUSH some items first!"
            ])
            return
        
        value = self.stack.peek()
        self.last_operation = f"peek() → {value}"
        self.show_message(f"Top element is: {value}")
        self.peek_highlight = True
        self.peek_timer = 120
        self.set_explanation([
            "PEEK Operation:",
            "",
            f"value = stack.peek()",
            f"# Returns: {value}",
            "",
            "Views TOP without removing.",
            "Stack unchanged!",
            "",
            "Time Complexity: O(1)"
        ])
    
    def handle_reset(self):
        """Handle reset operation."""
        if self.renderer.is_animating():
            return
        
        self.stack = Stack()
        self.last_operation = "reset()"
        self.show_message("Stack has been cleared!")
        self.set_explanation([
            "RESET:",
            "",
            "Stack cleared!",
            "",
            "All items removed.",
            "Ready to start fresh.",
            "",
            "Enter a number and PUSH!"
        ])
    
    # =========================================================================
    # Event Handling
    # =========================================================================
    
    def handle_events(self, events: List[pygame.event.Event]) -> bool:
        """
        Handle events.
        
        Args:
            events: List of pygame events.
        
        Returns:
            False if should return to menu, True otherwise.
        """
        mouse_pos = pygame.mouse.get_pos()
        mouse_clicked = False
        
        for event in events:
            if event.type == pygame.MOUSEBUTTONDOWN:
                mouse_clicked = True
            
            # Handle input box
            result = self.input_box.handle_event(event)
            if result is not None:
                self.handle_push()
        
        # Handle button clicks
        if mouse_clicked:
            if self.buttons['back'].is_clicked(mouse_pos, True):
                return False
            elif self.buttons['push'].is_clicked(mouse_pos, True):
                self.handle_push()
            elif self.buttons['pop'].is_clicked(mouse_pos, True):
                self.handle_pop()
            elif self.buttons['peek'].is_clicked(mouse_pos, True):
                self.handle_peek()
            elif self.buttons['reset'].is_clicked(mouse_pos, True):
                self.handle_reset()
        
        return True
    
    def update(self):
        """Update screen state."""
        self.renderer.update_animation()
        
        if self.message_timer > 0:
            self.message_timer -= 1
        
        if self.peek_timer > 0:
            self.peek_timer -= 1
        else:
            self.peek_highlight = False
        
        # Update button states
        self.buttons['pop'].enabled = not self.stack.is_empty()
        self.buttons['peek'].enabled = not self.stack.is_empty()
    
    # =========================================================================
    # Drawing
    # =========================================================================
    
    def draw(self):
        """Draw the stack visualizer screen."""
        self.screen.fill(WHITE)
        mouse_pos = pygame.mouse.get_pos()
        
        self._draw_header()
        self._draw_controls_panel(mouse_pos)
        self._draw_explanation_panel()
        self._draw_stack_visualization()
        self._draw_message()
        self._draw_footer()
    
    def _draw_header(self):
        """Draw title and back button."""
        mouse_pos = pygame.mouse.get_pos()
        self.buttons['back'].draw(self.screen, mouse_pos)
        
        title = self.title_font.render("Stack Visualizer", True, BLACK)
        self.screen.blit(title, (WINDOW_WIDTH // 2 - title.get_width() // 2, 15))
        
        subtitle = self.small_font.render("Interactive Teaching Tool", True, GRAY)
        self.screen.blit(subtitle, (WINDOW_WIDTH // 2 - subtitle.get_width() // 2, 55))
    
    def _draw_controls_panel(self, mouse_pos: tuple):
        """Draw the left control panel."""
        # Panel background
        pygame.draw.rect(self.screen, (240, 240, 240), (30, 100, 190, 400), border_radius=10)
        pygame.draw.rect(self.screen, GRAY, (30, 100, 190, 400), width=2, border_radius=10)
        
        # Label
        label = self.info_font.render("Controls", True, BLACK)
        self.screen.blit(label, (90, 115))
        
        # Input label
        input_label = self.small_font.render("Value to push:", True, BLACK)
        self.screen.blit(input_label, (55, 155))
        
        # Input box
        self.input_box.draw(self.screen)
        
        # Buttons
        for name, button in self.buttons.items():
            if name != 'back':
                button.draw(self.screen, mouse_pos)
        
        # Size info
        size_text = self.info_font.render(
            f"Size: {self.stack.size()}/{STACK_MAX_SIZE}", True, BLACK
        )
        self.screen.blit(size_text, (75, 480))
    
    def _draw_explanation_panel(self):
        """Draw the right explanation panel."""
        # Panel background
        pygame.draw.rect(
            self.screen, (240, 248, 255), 
            (620, 100, 250, 280), border_radius=10
        )
        pygame.draw.rect(
            self.screen, BLUE, 
            (620, 100, 250, 280), width=2, border_radius=10
        )
        
        # Label
        label = self.info_font.render("How It Works", True, BLACK)
        self.screen.blit(label, (695, 115))
        
        # Explanation text
        y_offset = 150
        for line in self.explanation:
            if line.startswith("stack.") or line.startswith("value =") or line.startswith("#"):
                text = self.code_font.render(line, True, (0, 100, 0))
            else:
                text = self.small_font.render(line, True, BLACK)
            self.screen.blit(text, (635, y_offset))
            y_offset += 25
        
        # Last operation
        if self.last_operation:
            pygame.draw.rect(
                self.screen, (255, 250, 230), 
                (620, 400, 250, 50), border_radius=8
            )
            pygame.draw.rect(
                self.screen, (200, 150, 50), 
                (620, 400, 250, 50), width=2, border_radius=8
            )
            
            op_label = self.small_font.render("Last Operation:", True, BLACK)
            self.screen.blit(op_label, (635, 408))
            
            op_text = self.code_font.render(self.last_operation, True, (150, 50, 0))
            self.screen.blit(op_text, (635, 428))
    
    def _draw_stack_visualization(self):
        """Draw the stack visualization."""
        items = self.stack.get_items()
        self.renderer.draw_stack(self.screen, items, highlight_top=self.peek_highlight)
        self.renderer.draw_animation(self.screen)
    
    def _draw_message(self):
        """Draw the message banner."""
        if self.message_timer > 0:
            msg_surface = self.info_font.render(self.message, True, BLACK)
            msg_rect = msg_surface.get_rect(center=(WINDOW_WIDTH // 2, 85))
            bg_rect = msg_rect.inflate(30, 12)
            pygame.draw.rect(self.screen, (255, 255, 200), bg_rect, border_radius=8)
            pygame.draw.rect(self.screen, (200, 180, 100), bg_rect, width=2, border_radius=8)
            self.screen.blit(msg_surface, msg_rect)
    
    def _draw_footer(self):
        """Draw the footer instructions."""
        instructions = self.small_font.render(
            "Type a number → Press ENTER or click PUSH  |  ESC to quit", True, GRAY
        )
        self.screen.blit(
            instructions, 
            (WINDOW_WIDTH // 2 - instructions.get_width() // 2, 620)
        )
