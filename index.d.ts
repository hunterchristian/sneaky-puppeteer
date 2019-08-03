import { Page } from 'puppeteer';

declare const goTo: (url: string) => Promise<Page>;
declare const closeBrowser: () => Promise<void>;
