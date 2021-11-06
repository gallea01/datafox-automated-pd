describe('Test', () => {
    it('should open base URL and assert correct URL', async () => {
        console.log('Hello DataFox!');
        await browser.url('/');
        await expect(browser).toHaveUrl('https://app.datafox.com/login');
    });
});