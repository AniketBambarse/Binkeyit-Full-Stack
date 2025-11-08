import React, { useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'

const ProductListPage = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(1)

    const fetchProductdata = async () => {
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getProductByCategoryAndSubCategory,
                data: {
                    categoryId,
                    subCategoryId,
                    page: page,
                    limit: 20,
                }
            })
        } catch (error) {

        }
    }

    return (
        <section className='sticky top-24 lg:top-20'>
            <div className='container sticky top-24 mx-auto grid grid-cols-[90px,1fr] md:grid-cols-[200px,1fr] lg:grid-cols-[280px,1fr]'>
                {/**sub category **/}
                <div className='bg-red-500 min-h-[79vh]'>
                    sub category
                </div>


                {/**Product **/}
                <div className='bg-green-600'>
                    product
                </div>
            </div>
        </section>
    )
}

export default ProductListPage
