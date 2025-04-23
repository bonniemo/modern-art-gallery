const fs = require("fs");

// Read .env.local file
const envFile = fs.readFileSync(".env.local", "utf8");
console.log("ENV file content:");
console.log(envFile);

// Extract private key
const privateKeyMatch = envFile.match(
    /FIREBASE_ADMIN_CONFIG_PRIVATE_KEY="(.+?)"/s
);
console.log("Match result:", privateKeyMatch);

const privateKey = privateKeyMatch ? privateKeyMatch[1] : null;
console.log("Extracted private key:", privateKey ? "Found" : "Not found");

// Format the key with actual newlines
const formattedKey = privateKey?.replace(/\\n/g, "\n");

console.log("\nFormatted Private Key:");
console.log(formattedKey);
