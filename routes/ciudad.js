const router = require('express').Router()
const ciudadController = require('../controllers/ciudad')

router.post('/crearCiudad', ciudadController.postCrearCiudad)
router.get('/getCiudad', ciudadController.getCiudad)
router.post('/updateCiudad', ciudadController.updateCiudad)
router.post('/borrarCiudad', ciudadController.deleteCiudad)
router.post('/getPais', ciudadController.getPaises)

module.exports = router