module.exports = {
  handleGQLQuery: function (Query) {
    if (typeof Query === 'object' && Query !== null && Query.query) {
      Query = Query.query
    }
    if (typeof Query === 'string') {
      const queryArr = Query.replace(/\r\n/g, '').replace(/\n/g, '').replace(/\s*/g, '').split('{')
      const route = queryArr[1].split('(')[0].split(':')[0]
      return '/' + route
    }
    return ''
  }
}