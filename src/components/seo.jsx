import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>
            {pageTitle && `${pageTitle} || LTE - Learn, Train & Earn Academy`}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Learn, Train & Earn Academy" />
        <meta name="robots" content="noindex, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default SEO;