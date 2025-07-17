const Product = require('../../models/product.model')
const filterStatusHelper = require('../../helpers/filterStatus')
const searchHelper = require('../../helpers/search')
const paginationHelper = require('../../helpers/pagination')

module.exports.index = async (req, res) => {

  const filterStatus = filterStatusHelper(req.query)

  const find = {
    deleted: false
  }
  if (req.query.status) {
    find.status = req.query.status
  }

  const objectSearch = searchHelper(req.query)
  if (objectSearch.keyword) {
    find.title = objectSearch.regex
  }
  
  //Pagination
  const countProduct = await Product.countDocuments(find)
  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItem: 4,
    },
    req.query,
    countProduct
  )
  //End Pagination

  const products = await Product.find(find).limit(objectPagination.limitItem).skip(objectPagination.skip)

  res.render('admin/pages/products/index', {
    titlePage: 'Products Page',
    message: 'Welcome to the Products Page!',
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    objectPagination: objectPagination
  });
}