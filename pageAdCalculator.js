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