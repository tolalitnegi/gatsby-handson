import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * Any component added user pages folder will automatically get a 
 * route , same as file name like /page-3 in this case
 */
const Thirdpage = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Hi from the 3rd page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Thirdpage
