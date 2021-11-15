const {currentDay,currentTime} = require('./util')

module.exports = {
    htmlTemplate: () => {
        return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
              * {
                padding: 0 0;
                margin: 0 0;
              }
              </style>
              <title>${currentDay}</title>
            </head>
            <body>
        </body>
        <script src="${currentDay}.js"></script>
        </html>`
    },
    JsTemplate: () => {
        return `/*
*  sbw
*  ${currentTime}
* */`
    }
}
