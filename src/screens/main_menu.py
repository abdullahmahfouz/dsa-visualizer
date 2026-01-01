"""
Main Menu screen.
"""

import pygame
from typing import List, Optional

from config.settings import (
    WINDOW_WIDTH, GRAY, BLACK,
    GREEN, BLUE, PURPLE, ORANGE, RED
)
from ui import MenuCard


class MainMenu:
    """
    Main menu screen for selecting visualizations.
    
    Displays a grid of cards representing available data structures
    and algorithms to explore.
    """
    
    def __init__(self, screen: pygame.Surface):
        """
        Initialize the main menu.
        
        Args:
            screen: Pygame surface to draw on.
        """
        self.screen = screen
        
        # Fonts
        self.title_font = pygame.font.Font(None, 64)
        self.subtitle_font = pygame.font.Font(None, 32)
        self.footer_font = pygame.font.Font(None, 24)
        
        # Create menu cards
        self.cards = self._create_cards()
    
    def _create_cards(self) -> List[MenuCard]:
        """Create the menu card grid."""
        card_width = 200
        card_height = 180
        start_x = 80
        start_y = 180
        gap = 30
        
        return [
            # Row 1 - Data Structures
            MenuCard(
                start_x, start_y, card_width, card_height,
                "Stack", 
                "LIFO structure - Last In First Out. Push and Pop operations.",
                GREEN, available=True
            ),
            MenuCard(
                start_x + card_width + gap, start_y, card_width, card_height,
                "Queue", 
                "FIFO structure - First In First Out. Enqueue and Dequeue.",
                BLUE, available=False
            ),
            MenuCard(
                start_x + 2 * (card_width + gap), start_y, card_width, card_height,
                "Linked List", 
                "Dynamic data structure with nodes and pointers.",
                PURPLE, available=False
            ),
            MenuCard(
                start_x + 3 * (card_width + gap), start_y, card_width, card_height,
                "Binary Tree", 
                "Hierarchical structure with parent-child relationships.",
                ORANGE, available=False
            ),
            
            # Row 2 - Algorithms
            MenuCard(
                start_x, start_y + card_height + gap, card_width, card_height,
                "Bubble Sort", 
                "Simple sorting algorithm with swapping adjacent elements.",
                RED, available=False
            ),
            MenuCard(
                start_x + card_width + gap, start_y + card_height + gap, 
                card_width, card_height,
                "Quick Sort", 
                "Efficient divide-and-conquer sorting algorithm.",
                (180, 100, 100), available=False
            ),
            MenuCard(
                start_x + 2 * (card_width + gap), start_y + card_height + gap, 
                card_width, card_height,
                "Binary Search", 
                "Efficient search in sorted arrays - O(log n).",
                (100, 150, 150), available=False
            ),
            MenuCard(
                start_x + 3 * (card_width + gap), start_y + card_height + gap, 
                card_width, card_height,
                "Graph BFS/DFS", 
                "Graph traversal algorithms exploration.",
                (150, 120, 180), available=False
            ),
        ]
    
    def handle_events(self, events: List[pygame.event.Event]) -> Optional[str]:
        """
        Handle menu events.
        
        Args:
            events: List of pygame events.
        
        Returns:
            Selected visualization name or None.
        """
        mouse_pos = pygame.mouse.get_pos()
        
        for event in events:
            if event.type == pygame.MOUSEBUTTONDOWN:
                for card in self.cards:
                    if card.is_clicked(mouse_pos, True):
                        return card.title.lower().replace(" ", "_")
        
        return None
    
    def draw(self):
        """Draw the main menu."""
        self.screen.fill((240, 245, 250))
        mouse_pos = pygame.mouse.get_pos()
        
        # Title
        title = self.title_font.render("DSA Visualizer", True, BLACK)
        self.screen.blit(title, (WINDOW_WIDTH // 2 - title.get_width() // 2, 40))
        
        # Subtitle
        subtitle = self.subtitle_font.render(
            "Select a data structure or algorithm to explore", True, GRAY
        )
        self.screen.blit(subtitle, (WINDOW_WIDTH // 2 - subtitle.get_width() // 2, 100))
        
        # Draw cards
        for card in self.cards:
            card.draw(self.screen, mouse_pos)
        
        # Footer
        footer = self.footer_font.render(
            "Press ESC to quit  |  Click a card to start", True, GRAY
        )
        self.screen.blit(footer, (WINDOW_WIDTH // 2 - footer.get_width() // 2, 610))
