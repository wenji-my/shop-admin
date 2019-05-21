import axios from 'axios';

const baseURL = 'http://localhost:7001';

const xhr = axios.create({
  baseURL,
  timeout: 10000,
});

// post请求,needHeader参数用于判断是否需要认证
const postData = (url, data, needHeader) => {
  let headers = {};
  return new Promise((resolve, reject) => {
    xhr({ url, data, headers, method: 'post' })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}

// get请求,needHeader参数用于判断是否需要认证
const getData = (url, params, needHeader) => {
  let headers = {};
  return new Promise((resolve, reject) => {
    xhr({ url, params, headers })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

const getConfig = (reqData) => {
  const url = '/config';
  const data = reqData;
  return getData(url, data);
}

const getProducts = (reqData) => {
  const url = '/product/list';
  const data = reqData;
  return getData(url, data);
}
const getSuppliers = (reqData) => {
  const url = '/admin/supplier/info/list';
  const data = reqData;
  return getData(url, data);
}
const publishProduct = (reqData) => {
  const url = '/product/publish';
  const data = reqData;
  return postData(url, data);
}
const addSupplier = (reqData) => {
  const url = '/admin/supplier/info/create';
  const data = reqData;
  return postData(url, data);
}
const getProductCategory = (reqData) => {
  const url = '/product/category/list';
  const data = reqData;
  return getData(url, data);
}
const createProductCategory = (reqData) => {
  const url = '/product/category/add';
  const data = reqData;
  return postData(url, data);
}
const getSupplierCategory = (reqData) => {
  const url = '/admin/supplier/category/list';
  const data = reqData;
  return getData(url, data);
}
const createSupplierCategory = (reqData) => {
  const url = '/admin/supplier/category/create';
  const data = reqData;
  return postData(url, data);
}

export {
  getConfig,
  getProducts,
  getSuppliers,
  addSupplier,
  publishProduct,
  getProductCategory,
  createProductCategory,
  getSupplierCategory,
  createSupplierCategory
}