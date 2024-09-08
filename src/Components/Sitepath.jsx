import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

// Mock functions to fetch data. Replace with actual implementations
const getCategoryName = (id) => 'CategoryName'; // Replace with actual function
const getBrandName = (id) => 'BrandName'; // Replace with actual function
const getProductDetails = (id) => ({
  tyreWidth: '195',
  profile: '65',
  rimSize: '15',
}); // Replace with actual function

const Sitepath = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment);

  // Default breadcrumb items
  const breadcrumbItems = [
    {
      href: '/',
      title: <HomeOutlined />,
    },
    {
      href: '/products',
      title: 'Products',
    },
  ];

  // Determine the breadcrumb trail based on path segments
  if (pathSegments.length === 1 && pathSegments[0] === 'products') {
    // Products Page
    return (
      <div className="mt-[30px] flex justify-center">
        <div className="w-[75vw] border-solid border-b-2 border-gray-400">
          <h1 className="font-bold text-[1.5em] text-gray-900">Products</h1>
          <Breadcrumb>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    );
  }

  if (pathSegments.length === 2) {
    // Category Page
    const [category] = pathSegments;
    breadcrumbItems.push({
      href: `/products/${category}`,
      title: category,
    });
    return (
      <div className="mt-[30px] flex justify-center">
        <div className="w-[75vw] border-solid border-b-2 border-gray-400">
          <h1 className="font-bold text-[1.5em] text-gray-900">{category}</h1>
          <Breadcrumb>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    );
  }

  if (pathSegments.length === 3) {
    // Product Brand Page
    const [category, brand] = pathSegments;
    breadcrumbItems.push({
      href: `/products/${category}`,
      title: category,
    });
    breadcrumbItems.push({
      href: `/products/${category}/${brand}`,
      title: brand,
    });
    return (
      <div className="mt-[30px] flex justify-center">
        <div className="w-[75vw] border-solid border-b-2 border-gray-400">
          <h1 className="font-bold text-[1.5em] text-gray-900">{brand}</h1>
          <Breadcrumb>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    );
  }

  if (pathSegments.length === 4) {
    // Single Product Page
    const [category, brand, product] = pathSegments;
    const productDetails = getProductDetails(product); // Fetch product details

    breadcrumbItems.push({
      href: `/products/${category}`,
      title: category,
    });
    breadcrumbItems.push({
      href: `/products/${category}/${brand}`,
      title: brand,
    });
    breadcrumbItems.push({
      title: `${productDetails.tyreWidth} / ${productDetails.profile} / ${productDetails.rimSize}`,
    });

    return (
      <div className="mt-[30px] flex justify-center">
        <div className="w-[75vw] border-solid border-b-2 border-gray-400">
          <h1 className="font-bold text-[1.5em] text-gray-900">
            {productDetails.tyreWidth} / {productDetails.profile} / {productDetails.rimSize}
          </h1>
          <Breadcrumb>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    );
  }

  return null; // Fallback for unknown routes
};

export default Sitepath;












// import React from 'react';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb } from 'antd';

// const Sitepath = () => (
//   <div className='mt-[30px] flex justify-center'>
//     <div className='w-[75vw] border-solid border-b-2 border-gray-400'>
//       <h1 className='font-bold text-[1.5em] text-gray-900'>PRODUCTS</h1>
//       <Breadcrumb
//         items={[
//           {
//             href: '/',
//             title: <HomeOutlined />,
//           },
//           {
//             title: 'Products',
//           },
//         ]}
//       />
//     </div>
//   </div>
// );

// export default Sitepath;