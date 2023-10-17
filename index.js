const crypto = require("crypto");

const response = {
        a: "hello",
        b: "world",
        z: "hell",
        v: "o",
        h: "world",
};

const secret = "sseeccrreettt";

function calcHash(params) {
        const paramString = Object.entries(params)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map((v) => v.join("="))
                .join("&");

        const plainText = paramString + secret;
        const hash = crypto.createHash("md5").update(plainText).digest("hex");
        return hash;
}

function encodeParams(response) {
        const paramString = Object.entries(response)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map((v) => v.join("="))
                .join("&");

        const plainText = paramString + secret;
        const hash = crypto.createHash("md5").update(plainText).digest("hex");
        return `hash=${hash}&${paramString}`;
}

function decodePragmaticRequest(text) {
        let hash;
        const params = {};
        text.split("&").forEach((v) => {
                const [key, value] = v.split("=");
                if (key == "hash") {
                        hash = value;
                } else {
                        params[key] = value;
                }
        });
        if (hash == calcHash(params)) {
                return true;
        }
        return false;
}

const result = encodeParams(response);
console.log(result);
console.log();
console.log(decodePragmaticRequest(result));
