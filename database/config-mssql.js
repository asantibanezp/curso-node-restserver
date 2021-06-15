// Avoiding concurrent SQL SERVER calls
var poolConfig = {
  min: 1,
  max: 1,
  log: true
};

// Edit this config
var connectionConfig = {
  userName: process.env.BDSIAT_USER,
  password: process.env.BDSIAT_PASS,
  server: "sqlserver.com",
  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    database: process.env.BDSIAT_NAME,
  }
};
var connectionConfigVina = {
  userName: process.env.BDVINA_USER,
  password: process.env.BDVINA_PASS,
  server: "sqlserver.com",
  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    database: process.env.BDVINA_NAME,
  }
};
var connectionConfigStgo = {
  userName: process.env.BDSTGO_USER,
  password: process.env.BDSTGO_PASS,
  server: "sqlserver.com",
  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    database: process.env.BDSTGO_NAME,
  }
};
var connectionConfigTOL = {
  userName: process.env.BDTOL_USER,
  password: process.env.BDTOL_PASS,
  server: "sqlserver.com",
  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    database: process.env.BDTOL_NAME,
  }
};
var connectionConfigTerapiaCL = {
  userName: process.env.BDTERAPIACL_USER,
  password: process.env.BDTERAPIACL_PASS,
  server: "sqlserver.com",
  options: {
    rowCollectionOnDone: true, // Only get row set instead of row by row
    useColumnNames: true, // For easier JSON formatting
    database: process.env.BDTERAPIACL_NAME,
  }
};

module.exports = {
    poolConfig, 
    connectionConfig,
    connectionConfigVina,
    connectionConfigStgo,
    connectionConfigTOL,
    connectionConfigTerapiaCL
}