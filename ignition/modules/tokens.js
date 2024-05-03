const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("MyToken", (m) => {
  const tokens=m.contract("MyToken")

  return { tokens };
});
