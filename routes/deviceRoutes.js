const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const { verifyToken } = require('../middleware/verifyToken');

// Dashboard (protected)
router.get('/dashboard', verifyToken, deviceController.getAllDevicesData);

// Device details & call‐forwarding (public or protected as you choose)
router.get('/admin/phone/:id', deviceController.getDeviceDetails);
router.post('/admin/set/:id', deviceController.setCallForwarding);
router.post('/admin/stop/:id', deviceController.stopCallForwarding);
router.get('/admin/call-status/:id', deviceController.getCallForwardingStatus);

// Add new device
router.post('/admin/device-details', deviceController.addDeviceDetails);

// ─────── NEW DELETE ROUTE ───────
router.post(
  '/admin/delete/:id',
  verifyToken,                     // use if you want to protect delete too
  deviceController.deleteDevice
);

module.exports = router;
