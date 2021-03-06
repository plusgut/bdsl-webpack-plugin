import whenDomReady from 'when-dom-ready';
import {
	Point
} from 'canvg';

// Import polyfills:
Promise;

export class TestClass {

	static env = process.env.BDSL_ENV;

	userAgent = navigator.userAgent;
	point = Point.parse('1,2');

	async asyncMethod() {
		return Math.random();
	}

	getBrowserInfo() {
		return `"${this.userAgent}" is "${TestClass.env}" env`;
	}
}

const test = new TestClass();

whenDomReady(() => {

	const script = document.getElementsByTagName('script')[1].outerHTML;

	document.body.innerHTML = `${test.getBrowserInfo()}<br><br>`;
	document.body.innerText += script;
});
