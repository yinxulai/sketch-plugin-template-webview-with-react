import BrowserWindow from 'sketch-module-web-view'
const view = require('./view/index.html')

const webviewTitle = '{{ slug }}'
const webviewIdentifier = '{{ slug }}.webview'

export default function () {

  const browserWindow = new BrowserWindow({
    identifier: webviewIdentifier, width: 240, height: 100, show: false, title: webviewTitle,
    minimizable: false, closable: true, resizable: false, alwaysOnTop: true,
  })

  browserWindow.loadURL(view)

  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })
}
