# SuspenseAfterInitialRender

A wrapper component using react suspense insuring it will only fall back to this after the initial render as in react suspense has nested boundries but they all load components of their own and show a loading spagati on first render this will insure for first render all components use the outer most suspense boundry and then where ever any sub suspense in used it will only show loading on that part after initial render
