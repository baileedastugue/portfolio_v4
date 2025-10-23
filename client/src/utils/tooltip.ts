/**
 * Tooltip utility for positioning and showing/hiding tooltips
 */

export interface TooltipOptions {
  text?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: string;
  backgroundColor?: string;
  duration?: number;
}

export class TooltipManager {
  private activeTooltip: HTMLElement | null = null;

  constructor() {
    this.activeTooltip = null;
  }

  /**
   * Show a tooltip relative to a target element
   * @param targetElement - The element to position the tooltip relative to
   * @param options - Tooltip options
   */
  show(targetElement: HTMLElement, options: TooltipOptions = {}): HTMLElement {
    const {
      text = 'Tooltip',
      position = 'top',
      color = '#000',
      backgroundColor = '#CB9FD2',
      duration = 0,
    } = options;

    // Hide any existing tooltip
    this.hide();

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.setAttribute('role', 'status');
    tooltip.setAttribute('aria-live', 'polite');
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.style.backgroundColor = backgroundColor;
    tooltip.style.color = color;
    tooltip.style.top = '-9999px';
    tooltip.style.left = '-9999px';

    // Add text
    const textSpan = document.createElement('span');
    textSpan.className = 'tooltip-text';
    textSpan.textContent = text;
    tooltip.appendChild(textSpan);

    // Create arrow element
    const arrow = document.createElement('div');
    arrow.className = `tooltip-arrow tooltip-arrow-${position}`;

    switch (position) {
      case 'top':
        arrow.style.borderTopColor = backgroundColor;
        break;
      case 'bottom':
        arrow.style.borderBottomColor = backgroundColor;
        break;
      case 'left':
        arrow.style.borderLeftColor = backgroundColor;
        break;
      case 'right':
        arrow.style.borderRightColor = backgroundColor;
        break;
    }

    tooltip.appendChild(arrow);
    document.body.appendChild(tooltip);

    // Position and show tooltip
    requestAnimationFrame(() => {
      this.positionTooltip(tooltip, targetElement, position);

      requestAnimationFrame(() => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.setAttribute('aria-hidden', 'false');
      });
    });

    this.activeTooltip = tooltip;

    // Auto-hide if duration is specified
    if (duration > 0) {
      setTimeout(() => {
        this.hide();
      }, duration);
    }

    return tooltip;
  }

  /**
   * Hide the currently active tooltip
   */
  hide(): void {
    if (this.activeTooltip) {
      this.activeTooltip.style.opacity = '0';
      this.activeTooltip.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        if (this.activeTooltip && this.activeTooltip.parentNode) {
          this.activeTooltip.parentNode.removeChild(this.activeTooltip);
        }
        this.activeTooltip = null;
      }, 200);
    }
  }

  /**
   * Position tooltip relative to target element
   * @private
   */
  private positionTooltip(
    tooltip: HTMLElement,
    targetElement: HTMLElement,
    position: 'top' | 'bottom' | 'left' | 'right'
  ): void {
    const targetRect = targetElement.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    let top: number, left: number;

    switch (position) {
      case 'top':
        top = targetRect.top + scrollY - tooltipRect.height - 8;
        left =
          targetRect.left +
          scrollX +
          targetRect.width / 2 -
          tooltipRect.width / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + scrollY + 8;
        left =
          targetRect.left +
          scrollX +
          targetRect.width / 2 -
          tooltipRect.width / 2;
        break;
      case 'left':
        top =
          targetRect.top +
          scrollY +
          targetRect.height / 2 -
          tooltipRect.height / 2;
        left = targetRect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top =
          targetRect.top +
          scrollY +
          targetRect.height / 2 -
          tooltipRect.height / 2;
        left = targetRect.right + scrollX + 8;
        break;
    }

    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 8) left = 8;
    if (left + tooltipRect.width > viewportWidth - 8) {
      left = viewportWidth - tooltipRect.width - 8;
    }
    if (top < 8) top = 8;
    if (top + tooltipRect.height > viewportHeight + scrollY - 8) {
      top = viewportHeight + scrollY - tooltipRect.height - 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }
}

// Create a global instance
export const tooltipManager = new TooltipManager();
