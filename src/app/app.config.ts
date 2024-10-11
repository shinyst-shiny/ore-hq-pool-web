import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
    /*
    * FOR BLANK
      provideTranslation({
      availableLangs: ['it'],
      defaultLang: 'it',
      fallbackLang: 'it'
    }),
    provideLoader([
      {
        url: 'assets',
        method: 'GET'
      }
    ]),
    provideAuth({
      issuer: environment.keycloakConfig.config.url,
      clientId: environment.keycloakConfig.config.clientId,
      showDebugInformation: true,
      redirectUri: 'http://localhost:4200/',
      autoLogin: true,
      sendAccessToken: true,
      urlsToSendToken: [environment.api.basePath]
    }),
     */
  ]
}
