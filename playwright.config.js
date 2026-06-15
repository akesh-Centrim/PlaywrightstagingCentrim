const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    use: {

        baseURL: 'https://stage2.centrim.com.au',

        headless: false,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure'

    },

    reporter: [
        ['html', { outputFolder: 'reports/html-report' }]
    ]

});