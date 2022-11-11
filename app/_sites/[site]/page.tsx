import styles from '../../home/page.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
  return [
    {site: 'demo1'},
    {site: 'demo2'},
  ]
}

const SitesPage = ({params}: {params: {site: string}}) => {
  const {site} = params;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">{site}</a>
        </h1>
      </main>
    </div>
  )
}

export default SitesPage;