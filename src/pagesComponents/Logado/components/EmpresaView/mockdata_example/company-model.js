const mongoose = require("../config");
const Schema = mongoose.Schema;

const codigosSchema = new Schema({
  codigo: String,
  derivativos: { type: Boolean, default: false },
  dataInicial: { type: String, default: '' }, // Considere usar Date para datas
  preco: { type: Number, default: null },
  valorMercado: { type: Number, default: null }
}, { _id: false });

const empresaSchema = new Schema({
  nome: String,
  setor: String,
  subsetor: String,
  descricao: String,
  site: String,
  derivativos: { type: Boolean, default: false },
  codigos: [codigosSchema]
});

const Empresa = mongoose.model('empresas', empresaSchema);

module.exports = Empresa;