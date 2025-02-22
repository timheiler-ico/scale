describe('RadioButton', () => {
  test.each([
    ['standard'],
    ['standard-disabled'],
    ['selected'],
    ['selected-disabled'],
    ['error'],
  ])('%p', async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-radio-button--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');
    const previewHtml = await page.$('body');
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
