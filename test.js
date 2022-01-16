const oracledb = require("oracledb");
const COMMON_XE_TABLE = "general";
const arr_columns__common_sensor_types = [
  "vibration_1_val",
  "vibration_2_val",
  "vibration_3_val",
  "noise_1_val",
  "noise_2_val",
  "noise_3_val",
];
const arr_columns__sensor_type__tunnel = [
  ...arr_columns__common_sensor_types,
  "dust_1_val",
  "dust_2_val",
  "dust_3_val",
];
const arr_column_params = arr_columns__sensor_type__tunnel.map((el, i) => {
  return `VAL${i}`;
});
const obj_option__bind_defs = arr_column_params.reduce(
  (obj, t) => ((obj[t] = { type: oracledb.DB_TYPE_NUMBER }), obj),
  {}
);

const TUNNEL_COLUMNS = arr_columns__sensor_type__tunnel.join();
const DML_INSERT__SQL_QUERY = `INSERT INTO ${COMMON_XE_TABLE} (${TUNNEL_COLUMNS}) VALUES (${arr_column_params})`;
const DML_ISNERT__OPTIONS = {
  autoCommit: true,
  bindDefs: obj_option__bind_defs,
};

console.log(TUNNEL_COLUMNS, "\n\n");
console.log(DML_INSERT__SQL_QUERY, "\n\n");
console.log(obj_option__bind_defs);
