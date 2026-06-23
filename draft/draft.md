# UF - REF - dev balawa — project webdonaki

*Est Work Day: 2 day(s). Deliverable: github repository*

## Description

- Create a landing page.
    
    *(image: `donaki-landing.png` — see assets)*
    
- Add a login dialog that will open when you click the Login button.
    
    *(image: `donaki-landing-login-dialog.png` — see assets)*
    

Assets: `webdonaki-assets.zip` (re-attach to this page if needed).

## Requirements

- The font family is Nunito.
    - https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff2
- Top Bar position is fixed at the top — notice even when you scroll down the topbar is still visible.

## Clues

Example of how to import font into CSS:

```css
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff2) format('woff2');
}
```

Use a script like this to open and close the dialog, and add attributes `onclick="openLoginDialog()"` and `onclick="closeLoginDialog()"` to the button:

```jsx
// main.js
function openLoginDialog() {
  document.querySelector('#login-dialog').showModal();
}

function closeLoginDialog() {
  document.querySelector('#login-dialog').close();
}
```