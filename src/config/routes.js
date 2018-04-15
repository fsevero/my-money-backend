const express = require('express')

module.exports = function(server) {
  // Base URL
  const router = express.Router()
  server.use('/api', router)

  // BillingCyle Routes
  const BillingCyle = require('../api/billing-cycle/billing-cycle.service')
  BillingCyle.register(router, '/billing-cycles')
}