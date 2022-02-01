const path = require("path")
const root = path.resolve(__dirname, "./node_modules")
const mails = path.resolve(__dirname, "../mails/node_modules")

const adminSrc = path.resolve(__dirname, "src")
const mailsSrc = path.resolve(__dirname, "../mails/src")

module.exports = {
    configureWebpack: {
        resolve: {
            modules: [root, mails],
            alias: {
                "@mails": mailsSrc,
                "@admin": adminSrc,
            },
        },
    },
}
