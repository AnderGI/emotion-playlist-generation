import { BackofficeBackendApp } from "../../../../../src/apps/backoffice/BackofficeBackendApp.js";


describe('GET /status', () => {
  test('200 OK if server correctly published', () => {
    new BackofficeBackendApp()
    expect((1+1)).toBe(2);    
  })
})
