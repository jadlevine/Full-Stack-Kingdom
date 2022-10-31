const { Router } = require('express')
const router = Router()

const controller = require('../controllers')

//root
router.get('/', (req, res) => res.send('I am Root'))

router.get('/attractions', controller.getAllAttractions)

router.get('/attractions/:attractionid', controller.getAttraction)

router.get('/schedule', controller.getSchedule)

router.post('/schedule', controller.createSchedule)

router.delete('/schedule/:scheduleid', controller.deleteSchedule)

router.update('/schedule/:scheduleid', controller.updateSchedule)
