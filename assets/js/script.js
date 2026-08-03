/**
 * ASAL MEHRADFAR — ACADEMIC WEBSITE
 * Shared JavaScript — assets/js/script.js
 *
 * Features:
 *  1. Theme toggle (OS preference detection, localStorage persistence, no flash on load)
 *  2. Mobile hamburger menu with keyboard accessibility
 *  3. BibTeX modal with copy button + 'Copied' confirmation + Escape to close
 *  4. Publication filter (no page reload)
 *  5. Lazy loading for images
 *  6. Navigation scroll behavior (shadow on scroll, active page indicator)
 *  7. Section reveal animations (respects prefers-reduced-motion)
 *
 * Usage:
 *  - Include this file at the bottom of <body> on every page:
 *    <script src="assets/js/script.js"></script>
 *    (or ../assets/js/script.js from inside publications/)
 *
 * NOTE: The theme initialization snippet (prevents flash) must be placed
 *  in <head> BEFORE this file. See nav-template.html for the snippet.
 */

'use strict';

/* =============================================================================
   UTILITY HELPERS
   ============================================================================= */

/**
 * Shorthand querySelector
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {Element|null}
 */
function qs(selector, context) {
  return (context || document).querySelector(selector);
}

/**
 * Shorthand querySelectorAll → Array
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {Element[]}
 */
function qsa(selector, context) {
  return Array.from((context || document).querySelectorAll(selector));
}

/**
 * Add event listener with optional cleanup
 * @param {EventTarget} el
 * @param {string} event
 * @param {Function} handler
 * @param {object} [options]
 */
function on(el, event, handler, options) {
  if (!el) return;
  el.addEventListener(event, handler, options);
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}


/* =============================================================================
   1. THEME TOGGLE
   - Reads OS preference via prefers-color-scheme
   - Persists choice in localStorage under key 'theme'
   - Sets data-theme="light"|"dark" on <html>
   - No flash: the <head> snippet (see nav-template.html) applies the theme
     before the page renders; this module only wires up the toggle button.
   ============================================================================= */

const THEME_KEY = 'theme';
const THEME_LIGHT = 'light';
const THEME_DARK  = 'dark';

/**
 * Get the currently active theme from <html data-theme>
 * @returns {'light'|'dark'}
 */
function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
}

/**
 * Apply a theme: set data-theme on <html> and persist to localStorage
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    // localStorage may be unavailable in private browsing
  }
  // Update all toggle button aria-labels and pressed states
  qsa('.theme-toggle').forEach(function(btn) {
    btn.setAttribute('aria-label', theme === THEME_DARK
      ? 'Switch to light mode'
      : 'Switch to dark mode'
    );
    btn.setAttribute('aria-pressed', String(theme === THEME_DARK));
  });
}

/**
 * Toggle between light and dark
 */
function toggleTheme() {
  applyTheme(getCurrentTheme() === THEME_DARK ? THEME_LIGHT : THEME_DARK);
}

/**
 * Initialize theme system
 * Called once on DOMContentLoaded — the <head> snippet already set the theme,
 * so this just wires up the button(s).
 */
function initTheme() {
  // Ensure the current theme is reflected in button state
  applyTheme(getCurrentTheme());

  // Wire up all .theme-toggle buttons (there may be one in nav + one in mobile menu)
  qsa('.theme-toggle').forEach(function(btn) {
    on(btn, 'click', toggleTheme);
  });

  // Listen for OS-level theme changes (e.g. user switches system dark mode)
  // Only auto-follow if the user hasn't manually set a preference
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  on(mq, 'change', function(e) {
    var stored;
    try { stored = localStorage.getItem(THEME_KEY); } catch (_) {}
    if (!stored) {
      applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
    }
  });
}


/* =============================================================================
   2. MOBILE HAMBURGER MENU
   - Toggles .is-open on .nav-mobile
   - Sets aria-expanded on the hamburger button
   - Traps focus inside the open menu
   - Closes on Escape, on outside click, and on nav link click
   - Prevents body scroll when menu is open
   ============================================================================= */

var _menuOpen = false;

/**
 * Open the mobile navigation menu
 */
function openMenu() {
  var hamburger = qs('.nav-hamburger');
  var mobileNav = qs('.nav-mobile');
  if (!hamburger || !mobileNav) return;

  _menuOpen = true;
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close navigation menu');
  mobileNav.classList.add('is-open');
  mobileNav.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Move focus to first link in mobile menu
  var firstLink = qs('a', mobileNav);
  if (firstLink) {
    setTimeout(function() { firstLink.focus(); }, 50);
  }
}

/**
 * Close the mobile navigation menu
 */
function closeMenu() {
  var hamburger = qs('.nav-hamburger');
  var mobileNav = qs('.nav-mobile');
  if (!hamburger || !mobileNav) return;

  _menuOpen = false;
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

/**
 * Initialize mobile hamburger menu
 */
function initMobileMenu() {
  var hamburger = qs('.nav-hamburger');
  var mobileNav = qs('.nav-mobile');
  if (!hamburger || !mobileNav) return;

  // Initial state
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-controls', 'nav-mobile');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
  mobileNav.setAttribute('id', 'nav-mobile');
  mobileNav.setAttribute('hidden', '');

  // Toggle on hamburger click
  on(hamburger, 'click', function() {
    if (_menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a nav link is clicked
  qsa('a', mobileNav).forEach(function(link) {
    on(link, 'click', closeMenu);
  });

  // Close on Escape key
  on(document, 'keydown', function(e) {
    if (e.key === 'Escape' && _menuOpen) {
      closeMenu();
      var hamburger = qs('.nav-hamburger');
      if (hamburger) hamburger.focus();
    }
  });

  // Close on outside click
  on(document, 'click', function(e) {
    if (!_menuOpen) return;
    var nav = qs('.site-nav');
    if (nav && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  // Keyboard focus trap inside open menu
  on(mobileNav, 'keydown', function(e) {
    if (!_menuOpen || e.key !== 'Tab') return;

    var focusable = qsa(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      mobileNav
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close menu on window resize to desktop width
  on(window, 'resize', function() {
    if (window.innerWidth >= 768 && _menuOpen) {
      closeMenu();
    }
  });
}


/* =============================================================================
   3. BIBTEX MODAL
   - Opens when a [data-bibtex-trigger] button is clicked
   - Displays BibTeX from data-bibtex attribute or a <template> element
   - Copy button copies text to clipboard and shows 'Copied!' for 2 seconds
   - Closes on Escape, backdrop click, or close button
   - Proper focus management: focus moves to modal on open, returns on close
   ============================================================================= */

var _modalOpen = false;
var _modalTrigger = null; // element that opened the modal (for focus return)

/**
 * Open the BibTeX modal with the given content
 * @param {string} bibtexContent - The BibTeX string to display
 * @param {string} [title] - Optional paper title for modal header
 * @param {Element} triggerEl - The element that triggered the modal
 */
function openBibtexModal(bibtexContent, title, triggerEl) {
  var backdrop = qs('.modal-backdrop');
  var modal    = qs('.modal');
  if (!backdrop || !modal) return;

  _modalOpen   = true;
  _modalTrigger = triggerEl || null;

  // Set content
  var bibtexEl = qs('.modal-bibtex', modal);
  if (bibtexEl) {
    bibtexEl.textContent = bibtexContent;
  }

  var titleEl = qs('.modal-title', modal);
  if (titleEl) {
    titleEl.textContent = title ? 'Cite: ' + title : 'BibTeX Citation';
  }

  // Reset copy button state
  var copyBtn = qs('.btn-copy', modal);
  if (copyBtn) {
    copyBtn.classList.remove('is-copied');
  }

  // Show modal
  backdrop.classList.add('is-open');
  backdrop.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Move focus to close button
  var closeBtn = qs('.modal-close', modal);
  if (closeBtn) {
    setTimeout(function() { closeBtn.focus(); }, 50);
  }
}

/**
 * Close the BibTeX modal
 */
function closeBibtexModal() {
  var backdrop = qs('.modal-backdrop');
  if (!backdrop) return;

  _modalOpen = false;
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('hidden', '');
  document.body.style.overflow = '';

  // Return focus to the element that opened the modal
  if (_modalTrigger) {
    _modalTrigger.focus();
    _modalTrigger = null;
  }
}

/**
 * Copy BibTeX text to clipboard
 * @param {string} text
 * @param {Element} btn - The copy button element
 */
function copyBibtex(text, btn) {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showCopiedState(btn);
    } catch (e) {
      console.warn('Copy failed:', e);
    }
    document.body.removeChild(ta);
    return;
  }

  navigator.clipboard.writeText(text).then(function() {
    showCopiedState(btn);
  }).catch(function(e) {
    console.warn('Clipboard write failed:', e);
  });
}

/**
 * Show 'Copied!' state on button for 2 seconds
 * @param {Element} btn
 */
function showCopiedState(btn) {
  if (!btn) return;
  btn.classList.add('is-copied');
  btn.setAttribute('aria-label', 'Copied to clipboard!');
  setTimeout(function() {
    btn.classList.remove('is-copied');
    btn.setAttribute('aria-label', 'Copy BibTeX to clipboard');
  }, 2000);
}

/**
 * Initialize BibTeX modal system
 */
function initBibtexModal() {
  var backdrop = qs('.modal-backdrop');
  var modal    = qs('.modal');
  if (!backdrop || !modal) return;

  // Initial state
  backdrop.setAttribute('hidden', '');
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-labelledby', 'modal-title-id');

  var titleEl = qs('.modal-title', modal);
  if (titleEl) titleEl.setAttribute('id', 'modal-title-id');

  // Close button
  var closeBtn = qs('.modal-close', modal);
  on(closeBtn, 'click', closeBibtexModal);

  // Backdrop click closes modal (but not clicks inside .modal)
  on(backdrop, 'click', function(e) {
    if (e.target === backdrop) {
      closeBibtexModal();
    }
  });

  // Escape key closes modal
  on(document, 'keydown', function(e) {
    if (e.key === 'Escape' && _modalOpen) {
      closeBibtexModal();
    }
  });

  // Copy button
  var copyBtn = qs('.btn-copy', modal);
  on(copyBtn, 'click', function() {
    var bibtexEl = qs('.modal-bibtex', modal);
    if (bibtexEl) {
      copyBibtex(bibtexEl.textContent, copyBtn);
    }
  });

  // Focus trap inside modal
  on(modal, 'keydown', function(e) {
    if (!_modalOpen || e.key !== 'Tab') return;

    var focusable = qsa(
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      modal
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Wire up all [data-bibtex-trigger] buttons on the page
  qsa('[data-bibtex-trigger]').forEach(function(btn) {
    on(btn, 'click', function() {
      // BibTeX content can come from:
      // 1. data-bibtex attribute on the button itself
      // 2. A <template id="bibtex-{id}"> element referenced by data-bibtex-id
      var content = btn.getAttribute('data-bibtex') || '';
      var bibtexId = btn.getAttribute('data-bibtex-id');

      if (!content && bibtexId) {
        var tmpl = document.getElementById('bibtex-' + bibtexId);
        if (tmpl) {
          content = tmpl.innerHTML.trim();
        }
      }

      var title = btn.getAttribute('data-bibtex-title') || '';
      openBibtexModal(content, title, btn);
    });
  });
}


/* =============================================================================
   4. PUBLICATION FILTER
   - Reads data-category attributes on .pub-entry elements
   - Filters without page reload
   - Updates aria-pressed on filter buttons
   - Hides empty year groups
   - Announces result count to screen readers
   ============================================================================= */

/**
 * Initialize publication filter system
 */
function initPublicationFilter() {
  var filterContainer = qs('.pub-filters');
  if (!filterContainer) return;

  var filterBtns = qsa('.pub-filter-btn', filterContainer);
  if (filterBtns.length === 0) return;

  // Live region for screen reader announcements
  var liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.setAttribute('id', 'pub-filter-announce');
  document.body.appendChild(liveRegion);

  /**
   * Apply a filter
   * @param {string} category - 'all' or a category slug
   */
  function applyFilter(category) {
    var entries = qsa('.pub-entry');
    var yearGroups = qsa('.pub-year-group');
    var visibleCount = 0;

    // Show/hide entries
    entries.forEach(function(entry) {
      var entryCategory = entry.getAttribute('data-category') || 'all';
      var show = category === 'all' || entryCategory === category;
      entry.setAttribute('data-hidden', show ? 'false' : 'true');
      if (show) visibleCount++;
    });

    // Hide year groups that have no visible entries
    yearGroups.forEach(function(group) {
      var visibleEntries = qsa('.pub-entry:not([data-hidden="true"])', group);
      group.setAttribute('data-hidden', visibleEntries.length === 0 ? 'true' : 'false');
    });

    // Update button states
    filterBtns.forEach(function(btn) {
      var btnCategory = btn.getAttribute('data-filter') || 'all';
      var isActive = btnCategory === category;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Announce to screen readers
    var label = category === 'all' ? 'all categories' : category;
    liveRegion.textContent = visibleCount + ' publication' +
      (visibleCount !== 1 ? 's' : '') + ' shown for ' + label + '.';
  }

  // Wire up filter buttons
  filterBtns.forEach(function(btn) {
    on(btn, 'click', function() {
      var category = btn.getAttribute('data-filter') || 'all';
      applyFilter(category);
    });

    // Keyboard: Space and Enter both activate
    on(btn, 'keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Initialize with 'all' active
  applyFilter('all');
}


/* =============================================================================
   5. LAZY LOADING
   - Uses IntersectionObserver for images with loading="lazy" or .is-lazy class
   - Falls back gracefully if IntersectionObserver is unavailable
   ============================================================================= */

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
  // Native lazy loading is already handled by loading="lazy" attribute.
  // This adds a fade-in effect for .is-lazy images.
  var lazyImages = qsa('img.is-lazy');
  if (lazyImages.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: load all images immediately
    lazyImages.forEach(function(img) {
      loadLazyImage(img);
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        loadLazyImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '200px 0px', // Start loading 200px before entering viewport
    threshold: 0
  });

  lazyImages.forEach(function(img) {
    observer.observe(img);
  });
}

/**
 * Load a lazy image by swapping data-src → src
 * @param {HTMLImageElement} img
 */
function loadLazyImage(img) {
  var src = img.getAttribute('data-src');
  if (src) {
    img.src = src;
    img.removeAttribute('data-src');
  }
  var srcset = img.getAttribute('data-srcset');
  if (srcset) {
    img.srcset = srcset;
    img.removeAttribute('data-srcset');
  }
  img.classList.add('is-loaded');
  img.classList.remove('is-lazy');
}


/* =============================================================================
   6. NAVIGATION SCROLL BEHAVIOR
   - Adds .is-scrolled to .site-nav when page is scrolled (for shadow)
   - Marks the current page link as active using aria-current="page"
   ============================================================================= */

/**
 * Initialize navigation scroll behavior and active page detection
 */
function initNavigation() {
  var nav = qs('.site-nav');

  // Scroll shadow
  if (nav) {
    var onScroll = function() {
      if (window.scrollY > 8) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    };

    on(window, 'scroll', onScroll, { passive: true });
    onScroll(); // Run once on init
  }

  // Active page detection
  // Match current URL path against nav link hrefs
  var currentPath = window.location.pathname;
  // Normalize: remove trailing slash, get last segment
  var normalizedPath = currentPath.replace(/\/$/, '') || '/';

  qsa('.nav-links a, .nav-mobile__links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;

    // Resolve relative href to absolute path for comparison
    var linkPath = new URL(href, window.location.href).pathname.replace(/\/$/, '') || '/';

    // Exact match, or current path starts with link path (for sub-pages)
    var isActive = linkPath === normalizedPath ||
      (linkPath !== '/' && normalizedPath.startsWith(linkPath));

    if (isActive) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('is-active');
    } else {
      link.removeAttribute('aria-current');
      link.classList.remove('is-active');
    }
  });
}


/* =============================================================================
   7. SECTION REVEAL ANIMATIONS
   - Adds .is-visible to .reveal and .reveal-stagger elements when they
     enter the viewport
   - Respects prefers-reduced-motion (skips animation, shows immediately)
   ============================================================================= */

/**
 * Initialize section reveal animations
 */
function initRevealAnimations() {
  var revealEls = qsa('.reveal, .reveal-stagger');
  if (revealEls.length === 0) return;

  // If user prefers reduced motion, show everything immediately
  if (prefersReducedMotion()) {
    revealEls.forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    revealEls.forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '-40px 0px',
    threshold: 0.1
  });

  revealEls.forEach(function(el) {
    observer.observe(el);
  });
}


/* =============================================================================
   8. SMOOTH SCROLL FOR ANCHOR LINKS
   - Handles #hash links with offset for fixed nav
   ============================================================================= */

/**
 * Initialize smooth scroll for in-page anchor links
 */
function initSmoothScroll() {
  on(document, 'click', function(e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var hash = link.getAttribute('href');
    if (hash === '#') return;

    var target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    var navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64',
      10
    );
    var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    if (prefersReducedMotion()) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    // Update URL hash without jumping
    history.pushState(null, '', hash);

    // Move focus to target for accessibility
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }
    target.focus({ preventScroll: true });
  });
}


/* =============================================================================
   9. EXTERNAL LINK HANDLING
   - Ensures all external links open in new tab with proper rel attributes
   - Adds a visually-hidden "(opens in new tab)" label for screen readers
   ============================================================================= */

/**
 * Initialize external link handling
 */
function initExternalLinks() {
  qsa('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href) return;

    // Check if external (starts with http/https and not same origin)
    var isExternal = /^https?:\/\//.test(href) &&
      !href.startsWith(window.location.origin);

    if (isExternal) {
      // Set target and rel if not already set
      if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }

      // Add screen reader label if not already present
      if (!link.querySelector('.sr-only') && !link.getAttribute('aria-label')) {
        var srLabel = document.createElement('span');
        srLabel.className = 'sr-only';
        srLabel.textContent = ' (opens in new tab)';
        link.appendChild(srLabel);
      }
    }
  });
}


/* =============================================================================
   10. COPY INLINE BIBTEX (for pub pages with inline .bibtex-block)
   - Handles copy buttons that are NOT inside the modal
   - Used on individual publication pages
   ============================================================================= */

/**
 * Initialize inline BibTeX copy buttons (outside modal)
 */
function initInlineBibtexCopy() {
  qsa('[data-copy-bibtex]').forEach(function(btn) {
    on(btn, 'click', function() {
      var targetId = btn.getAttribute('data-copy-bibtex');
      var source = targetId
        ? document.getElementById(targetId)
        : btn.closest('.bibtex-section')
            ? qs('.bibtex-block', btn.closest('.bibtex-section'))
            : null;

      if (source) {
        copyBibtex(source.textContent, btn);
      }
    });
  });
}


/* =============================================================================
   INITIALIZATION
   Run all modules when DOM is ready
   ============================================================================= */

/**
 * Main initialization function
 */
function init() {
  initTheme();
  initMobileMenu();
  initBibtexModal();
  initPublicationFilter();
  initLazyLoading();
  initNavigation();
  initRevealAnimations();
  initSmoothScroll();
  initExternalLinks();
  initInlineBibtexCopy();

  // Dynamic copyright year
  // Updates <span id="footer-year"> with the current year
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM already ready (script loaded with defer or at bottom of body)
  init();
}


/* =============================================================================
   THEME FLASH PREVENTION SNIPPET
   This snippet must be placed in <head> BEFORE any CSS or content loads.
   It is reproduced here as a comment for reference — copy it into your HTML.

   <script>
   (function() {
     var stored;
     try { stored = localStorage.getItem('theme'); } catch(e) {}
     var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     var theme = stored || (prefersDark ? 'dark' : 'light');
     document.documentElement.setAttribute('data-theme', theme);
   })();
   </script>

   ============================================================================= */