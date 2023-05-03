// Replace YOUR_API_KEY with your actual API key
const API_KEY = 'AIzaSyDFSVVl6v9bMuVsdp5kEO4jlWVApmrsClw';

// Replace FONT_FAMILY with the name of the font family you want to use
const FONT_FAMILIES = ['Josefin Sans', 'Karla', 'Merriweather Sans', 'Montserrat', 'Playfair Display', 'Roboto Mono'];

// Load the font dynamically into the document's head
FONT_FAMILIES.forEach((fontFamily) => {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = `https://fonts.googleapis.com/css?family=${fontFamily}${VERSION ? `:${VERSION}` : ''}&key=${API_KEY}`;
	document.head.appendChild(link);
});
