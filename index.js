const params = `hash=681c32ea7733fcd01135e5ad48a0a8db&providerId=providerLogin_1&userId=1&roundId=123451&smResult=1%3A10%3B2%3B9%3B3%3B2%233%3B1%3B2%3B1%3B4%2312%3B12%3B12%3B4%3B1%23R%23S%23VS%23222%23MV%232%2C00%23MT%232%23&betMultiplier=50`;

const x = new URLSearchParams(params);
console.log(x);

console.log(x.keys());
