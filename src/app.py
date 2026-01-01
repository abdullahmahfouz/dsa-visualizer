"""
DSA Visualizer - Interactive Teaching Tool

An educational visualization tool for learning Data Structures and Algorithms.
Select a topic from the menu, then interact with the visualization.

Usage:
    python main.py
"""

import pygame
import sys

from config.settings import WINDOW_WIDTH, WINDOW_HEIGHT, FPS, APP_TITLE
from screens import MainMenu, StackVisualizer


class DSAVisualizer:
    """
    Main application controller.
    
    Manages the application lifecycle, screen transitions,
    and the main game loop.
    """
    
    def __init__(self):
        """Initialize the application."""
        pygame.init()
        pygame.display.set_caption(APP_TITLE)
        
        self.screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
        self.clock = pygame.time.Clock()
        self.running = True
        
        # Screen management
        self.current_screen = "menu"
        self.menu = MainMenu(self.screen)
        self.visualizer = None
    
    def run(self):
        """Main application loop."""
        while self.running:
            events = pygame.event.get()
            
            # Global event handling
            self._handle_global_events(events)
            
            # Screen-specific handling
            if self.current_screen == "menu":
                self._run_menu(events)
            elif self.visualizer:
                self._run_visualizer(events)
            
            pygame.display.flip()
            self.clock.tick(FPS)
        
        pygame.quit()
    
    def _handle_global_events(self, events):
        """Handle events that apply globally."""
        for event in events:
            if event.type == pygame.QUIT:
                self.running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    if self.current_screen == "menu":
                        self.running = False
                    else:
                        self._return_to_menu()
    
    def _run_menu(self, events):
        """Run the menu screen."""
        selected = self.menu.handle_events(events)
        if selected:
            self._start_visualization(selected)
        self.menu.draw()
    
    def _run_visualizer(self, events):
        """Run the current visualizer screen."""
        if not self.visualizer.handle_events(events):
            self._return_to_menu()
        else:
            self.visualizer.update()
            self.visualizer.draw()
    
    def _start_visualization(self, name: str):
        """
        Start a specific visualization.
        
        Args:
            name: Name of the visualization to start.
        """
        visualizers = {
            "stack": StackVisualizer,
            # Add more visualizers here as they're implemented:
            # "queue": QueueVisualizer,
            # "linked_list": LinkedListVisualizer,
        }
        
        if name in visualizers:
            self.current_screen = name
            self.visualizer = visualizers[name](self.screen)
    
    def _return_to_menu(self):
        """Return to the main menu."""
        self.current_screen = "menu"
        self.visualizer = None


def main():
    """Application entry point."""
    app = DSAVisualizer()
    app.run()


if __name__ == "__main__":
    main()
