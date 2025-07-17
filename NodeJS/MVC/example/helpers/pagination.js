module.exports=(objectPagination,query,count)=>{
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page)
      }
      objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItem
    
      const totalPage = Math.ceil(count / objectPagination.limitItem)//làm tròn lên
      console.log(totalPage);
      objectPagination.totalPage = totalPage
      return objectPagination
}