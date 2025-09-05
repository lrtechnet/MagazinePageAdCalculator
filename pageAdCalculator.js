// --- Vertical Third Page Ad Layout Logic ---
function renderVerticalThirdPageAds() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    const gutter = 0.125;
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    const usableWidthWithGutter = innerSpaceWidth - (2 * gutter);
    const adWidth = usableWidthWithGutter / 3;
    const adHeight = innerSpaceHeight;
    const xEdge = safeZone + ribbon;
    const yEdge = safeZone + ribbon;
    // positions
    const adLeftX = xEdge;
    const adCenterX = xEdge + adWidth + gutter;
    const adRightX = xEdge + 2 * (adWidth + gutter);
    function setAd(id, x, y, w, h) {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.left = (x * inch) + 'px';
        el.style.top = (y * inch) + 'px';
        el.style.width = (w * inch) + 'px';
        el.style.height = (h * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px solid orange';
        el.style.zIndex = '100';
        el.innerHTML = `<span>${id.replace('ad-', '').replace(/\b\w/g, l => l.toUpperCase())} Third</span><ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${w.toFixed(4)} in × ${h.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${x.toFixed(4)} in, ${y.toFixed(4)} in</li></ul>`;
        console.log(`Ad ${id}: left=${(x*inch)}px, top=${(y*inch)}px, width=${(w*inch)}px, height=${(h*inch)}px`);
    }
    setAd('ad-left', adLeftX, yEdge, adWidth, adHeight);
    setAd('ad-center', adCenterX, yEdge, adWidth, adHeight);
    setAd('ad-right', adRightX, yEdge, adWidth, adHeight);
}

if (window.location.pathname.endsWith('pageAdThirdVerticalVisualizer.html')) {
    window.onload = renderVerticalThirdPageAds;
}

// --- Horizontal Third Page Ad Layout Logic ---
function renderHorizontalThirdPageAds() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    const gutter = 0.125;
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    // Calculate ad heights and positions so gutter is only between ads
    const adWidth = innerSpaceWidth;
    const adHeight = (innerSpaceHeight - (2 * gutter)) / 3;
    const xEdge = safeZone + ribbon;
    const yEdge = safeZone + ribbon;
    // positions
    const adTopY = yEdge;
    const adMiddleY = yEdge + adHeight + gutter;
    const adBottomY = yEdge + 2 * (adHeight + gutter);
    function setAd(id, x, y, w, h, label) {
        const el = document.getElementById(id);
        if (!el) return;
        el.className = 'ad-third';
        el.style.left = (x * inch) + 'px';
        el.style.top = (y * inch) + 'px';
        el.style.width = (w * inch) + 'px';
        el.style.height = (h * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px dashed #ff9800';
        el.style.zIndex = '10';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.fontSize = '1.2em';
        el.style.color = '#333';
        el.innerHTML = `${label}<ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${w.toFixed(4)} in × ${h.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${x.toFixed(4)} in, ${y.toFixed(4)} in</li></ul>`;
        console.log(`Ad ${id}: left=${(x*inch)}px, top=${(y*inch)}px, width=${(w*inch)}px, height=${(h*inch)}px`);
    }
    setAd('ad-top', xEdge, adTopY, adWidth, adHeight, 'Top Third');
    setAd('ad-middle', xEdge, adMiddleY, adWidth, adHeight, 'Middle Third');
    setAd('ad-bottom', xEdge, adBottomY, adWidth, adHeight, 'Bottom Third');
}

if (window.location.pathname.endsWith('pageAdThirdHorizontalVisualizer.html')) {
    window.onload = renderHorizontalThirdPageAds;
}

// --- Full Page Ad Layout Logic ---
function renderFullPageAd() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    // No gutter for full page ad
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    const adWidth = innerSpaceWidth;
    const adHeight = innerSpaceHeight;
    const xEdge = safeZone + ribbon;
    const yEdge = safeZone + ribbon;
    const el = document.getElementById('ad-full');
    if (el) {
        el.style.left = (xEdge * inch) + 'px';
        el.style.top = (yEdge * inch) + 'px';
        el.style.width = (adWidth * inch) + 'px';
        el.style.height = (adHeight * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px solid green';
        el.style.zIndex = '100';
        el.innerHTML = `<span>Full Page Ad</span><ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${adWidth.toFixed(4)} in × ${adHeight.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${xEdge.toFixed(4)} in, ${yEdge.toFixed(4)} in</li></ul>`;
        console.log(`Full Page Ad: left=${(xEdge*inch)}px, top=${(yEdge*inch)}px, width=${(adWidth*inch)}px, height=${(adHeight*inch)}px`);
    }
}

if (window.location.pathname.endsWith('pageAdFullVisualizer.html')) {
    window.onload = renderFullPageAd;
}
// --- Horizontal Half Page Ad Layout Logic ---
function renderHorizontalHalfPageAds() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    const gutter = 0.125;
    // inner space calculations
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    const usableHeightWithGutter = innerSpaceHeight - gutter;
    // horizontal half ad size
    const adHorizontalHalfWidth = innerSpaceWidth;
    const adHorizontalHalfHeight = usableHeightWithGutter / 2;
    // positions
    const pageUsableXEdge = safeZone + ribbon;
    const pageUsableYEdge = safeZone + ribbon;
    const adHorizontalHalfTopX = pageUsableXEdge;
    const adHorizontalHalfTopY = pageUsableYEdge;
    const adHorizontalHalfBottomX = pageUsableXEdge;
    const adHorizontalHalfBottomY = pageUsableYEdge + adHorizontalHalfHeight + gutter;

    function setAd(id, x, y, w, h, label) {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.left = (x * inch) + 'px';
        el.style.top = (y * inch) + 'px';
        el.style.width = (w * inch) + 'px';
        el.style.height = (h * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px solid red';
        el.style.zIndex = '100';
        el.innerHTML = `<span>${label}</span><ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${w.toFixed(4)} in × ${h.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${x.toFixed(4)} in, ${y.toFixed(4)} in</li></ul>`;
        console.log(`Ad ${id}: left=${(x*inch)}px, top=${(y*inch)}px, width=${(w*inch)}px, height=${(h*inch)}px`);
    }
    setAd('ad-top', adHorizontalHalfTopX, adHorizontalHalfTopY, adHorizontalHalfWidth, adHorizontalHalfHeight, 'Top Half');
    setAd('ad-bottom', adHorizontalHalfBottomX, adHorizontalHalfBottomY, adHorizontalHalfWidth, adHorizontalHalfHeight, 'Bottom Half');
}

if (window.location.pathname.endsWith('pageAdHorizontalHalfVisualizer.html')) {
    window.onload = renderHorizontalHalfPageAds;
}
// --- Vertical Half Page Ad Layout Logic ---
function renderVerticalHalfPageAds() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    const gutter = 0.125;
    // inner space calculations
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    const usableWidthWithGutter = innerSpaceWidth - gutter;
    // vertical half ad size
    const adVerticalHalfWidth = usableWidthWithGutter / 2;
    const adVerticalHalfHeight = innerSpaceHeight;
    // positions
    const pageUsableXEdge = safeZone + ribbon;
    const pageUsableYEdge = safeZone + ribbon;
    const adVerticalHalfLeftX = pageUsableXEdge;
    const adVerticalHalfLeftY = pageUsableYEdge;
    const adVerticalHalfRightX = pageUsableXEdge + adVerticalHalfWidth + gutter;
    const adVerticalHalfRightY = pageUsableYEdge;

    function setAd(id, x, y, w, h, label) {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.left = (x * inch) + 'px';
        el.style.top = (y * inch) + 'px';
        el.style.width = (w * inch) + 'px';
        el.style.height = (h * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px solid #ff9800';
        el.style.zIndex = '10';
        el.style.display = 'flex';
        el.style.alignItems = 'flex-start';
        el.style.justifyContent = 'flex-start';
        el.style.fontSize = '1.2em';
        el.style.color = '#333';
        el.innerHTML = `${label}<ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${w.toFixed(4)} in × ${h.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${x.toFixed(4)} in, ${y.toFixed(4)} in</li></ul>`;
        console.log(`Ad ${id}: left=${(x*inch)}px, top=${(y*inch)}px, width=${(w*inch)}px, height=${(h*inch)}px`);
    }
    setAd('ad-left', adVerticalHalfLeftX, adVerticalHalfLeftY, adVerticalHalfWidth, adVerticalHalfHeight, 'Left Half');
    setAd('ad-right', adVerticalHalfRightX, adVerticalHalfRightY, adVerticalHalfWidth, adVerticalHalfHeight, 'Right Half');
}

if (window.location.pathname.endsWith('pageAdVerticalHalfVisualizer.html')) {
    window.onload = renderVerticalHalfPageAds;
}
// --- Quarter Page Ad Layout Logic ---
function renderQuarterPageAds() {
    const inch = 96;
    const pageWidth = 8.5;
    const pageHeight = 11;
    const safeZone = 0.125;
    const ribbon = 0.25;
    const gutter = 0.125;
    // inner space calculations
    const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
    const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
    const usableWidthWithGutter = innerSpaceWidth - gutter;
    const usableHeightWithGutter = innerSpaceHeight - gutter;
    // quarter ad size
    const adQuarterWidth = usableWidthWithGutter / 2;
    const adQuarterHeight = usableHeightWithGutter / 2;
    // positions
    const pageUsableXEdge = safeZone + ribbon;
    const pageUsableYEdge = safeZone + ribbon;
    const adQuarterTopLeftX = pageUsableXEdge;
    const adQuarterTopLeftY = pageUsableYEdge;
    const adQuarterTopRightX = pageUsableXEdge + adQuarterWidth + gutter;
    const adQuarterTopRightY = pageUsableYEdge;
    const adQuarterBottomLeftX = pageUsableXEdge;
    const adQuarterBottomLeftY = pageUsableYEdge + gutter + adQuarterHeight;
    const adQuarterBottomRightX = pageUsableXEdge + adQuarterWidth + gutter;
    const adQuarterBottomRightY = pageUsableYEdge + gutter + adQuarterHeight;

    function setAd(id, x, y, w, h) {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.left = (x * inch) + 'px';
        el.style.top = (y * inch) + 'px';
        el.style.width = (w * inch) + 'px';
        el.style.height = (h * inch) + 'px';
        el.style.background = 'rgba(255, 193, 7, 0.7)';
        el.style.border = '2px solid red';
        el.style.zIndex = '100';
        el.innerHTML += `<ul style='position:absolute; bottom:10px; left:10px; background:rgba(255,255,255,0.85); padding:8px 14px; border-radius:6px; font-size:1em; color:#333; box-shadow:0 1px 4px rgba(0,0,0,0.07);'><li><strong>Dimensions:</strong> ${w.toFixed(4)} in × ${h.toFixed(4)} in</li><li><strong>Position (x, y):</strong> ${x.toFixed(4)} in, ${y.toFixed(4)} in</li></ul>`;
        console.log(`Ad ${id}: left=${(x*inch)}px, top=${(y*inch)}px, width=${(w*inch)}px, height=${(h*inch)}px`);
    }
    setAd('ad-tl', adQuarterTopLeftX, adQuarterTopLeftY, adQuarterWidth, adQuarterHeight);
    setAd('ad-tr', adQuarterTopRightX, adQuarterTopRightY, adQuarterWidth, adQuarterHeight);
    setAd('ad-bl', adQuarterBottomLeftX, adQuarterBottomLeftY, adQuarterWidth, adQuarterHeight);
    setAd('ad-br', adQuarterBottomRightX, adQuarterBottomRightY, adQuarterWidth, adQuarterHeight);
}

if (window.location.pathname.endsWith('pageAdQuarterVisualizer.html')) {
    window.onload = renderQuarterPageAds;
}
// JavaScript code for Magazine Page Ad Calculator
// This file is linked to pageAdCalculator.html
// It will hold variable for calculating the size and placement of ads on a magazine page

// page constants
const pageWidth = 8.5;
const pageHeight = 11;
const pageXEdge = 0;
const pageYEdge = 0;
// spacers
const safeZone = 0.125; // 1/8 inch
const gutter = 0.125; // 1/8 inch
const ribbon = 0.25; // 1/4 inch
const bleed = 0.125; // 1/8 inch
//limits
const pageUsableXEdge = pageXEdge + safeZone + ribbon;
const pageUsableYEdge = pageYEdge + safeZone + ribbon;
// inner space calculations
const innerSpaceHeight = pageHeight - (safeZone * 2) - (ribbon * 2);
const innerSpaceWidth = pageWidth - (safeZone * 2) - (ribbon * 2);
const usableHeightWithGutter = innerSpaceHeight - gutter;
const usableWidthWithGutter = innerSpaceWidth - gutter;


//for speed, do one in the simplest way then iterate identifying patterns as needed
//Types of ads: Single Full Page, Vertical Half Page (Left and Right), Horizontal Half Page (Top and Bottom), Quarter Page (4 positions), 1/3 Page Horinzontal (Top, Middle, Bottom), 1/3 Page Vertical (Left, Center, Right);

//Single Page Ad Sizes
const adFullPageWidth = innerSpaceWidth;
const adFullPageHeight = innerSpaceHeight;

//Vertical Half Page Ad Sizes
const adVerticalHalfWidth = usableWidthWithGutter; //In this context, gutters are only between ads, not between ad and safe zone
const adVerticalHalfHeight = innerSpaceHeight;
const adVerticalHalfLeftX = pageUsableXEdge;
const adVerticalHalfLeftY = pageUsableYEdge;

// Horizontal Half Page Ad Sizes
const adHorizontalHalfWidth = innerSpaceWidth;
const adHorizontalHalfHeight = usableHeightWithGutter / 2;
const adHorizontalHalfTopX = pageUsableXEdge;
const adHorizontalHalfTopY = pageUsableYEdge;
const adHorizontalHalfBottomX = pageUsableXEdge;
const adHorizontalHalfBottomY = pageUsableYEdge + gutter + adHorizontalHalfHeight;

// Quarter Page Ad Sizes
const adQuarterWidth = usableWidthWithGutter / 2;
const adQuarterHeight = usableHeightWithGutter / 2;
const adQuarterTopLeftX = pageUsableXEdge;
const adQuarterTopLeftY = pageUsableYEdge;
const adQuarterTopRightX = pageUsableXEdge + adQuarterWidth + gutter;
const adQuarterTopRightY = pageUsableYEdge;
const adQuarterBottomLeftX = pageUsableXEdge;
const adQuarterBottomLeftY = pageUsableYEdge + gutter + adQuarterHeight;
const adQuarterBottomRightX = pageUsableXEdge + adQuarterWidth + gutter;
const adQuarterBottomRightY = pageUsableYEdge + gutter + adQuarterHeight;

// 1/3 Page Horizontal Ad Sizes
const adThirdHorizontalWidth = innerSpaceWidth;
const adThirdHorizontalHeight = usableHeightWithGutter / 3;
const adThirdHorizontalTopX = pageUsableXEdge;
const adThirdHorizontalTopY = pageUsableYEdge;
const adThirdHorizontalMiddleX = pageUsableXEdge;
const adThirdHorizontalMiddleY = pageUsableYEdge + gutter + adThirdHorizontalHeight;
const adThirdHorizontalBottomX = pageUsableXEdge;
const adThirdHorizontalBottomY = pageUsableYEdge + gutter * 2 + adThirdHorizontalHeight * 2;

// Functions
function calculateAdSize() {
    // Logic to calculate ad size
}

function calculateAdPosition() {
    // Logic to calculate ad position
}