const model = require('../models/gastos.model')

class GastosCotroller{

    static async obtenerGastos(req,res){
        const gastos = await model.obtenerGastos()
    }

}

module.exports = GastosCotroller