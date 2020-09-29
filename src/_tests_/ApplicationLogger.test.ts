import ApplicationLogger from '../index';
const l = new ApplicationLogger();

describe('check logger instance', () => {
  test('Instantion', () => {
    expect(l).toBeInstanceOf(ApplicationLogger);
  });
});

describe('functionUnderTest', () => {
  it('should throw a specific type of error.', () => {
    const initObject = {
      ENV: 'develop',
      APPLICATION: 'partner-dashboard',
      PARTNER_NAME: 'AYOPOP',
      CONSOLE: 'false',
      PUBLISH_URL: 'https://dev0pg.openapi.ayopop.id/v1/partnermanager/api/product/updateproductdetails',
    };

    try {
      l.init(initObject);
    } catch (error) {
      expect(error).toHaveProperty('message', 'Mandatory parameter PUBLISH_URL');
    }
  });
});
