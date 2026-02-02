import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AdSlot from '../components/AdSlot';
import bloglarData from '../data/bloglar.json';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog & İpuçları | Kilis Usta</title>
                <meta name="description" content="Ev bakımı, tamir ipuçları ve usta seçimi hakkında faydalı bilgiler. Kilis Merkez için pratik öneriler." />
                <link rel="canonical" href="https://kilisusta.com.tr/blog" />
            </Helmet>

            <div className="page-header">
                <div className="container">
                    <h1>Blog & İpuçları</h1>
                    <p>Ev bakımı ve usta seçimi hakkında faydalı bilgiler</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="grid grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {bloglarData.bloglar.map((blog, index) => (
                            <>
                                <motion.div key={blog.id} variants={itemVariants}>
                                    <Link to={`/blog/${blog.slug}`} className="card blog-card">
                                        <div className="blog-image" style={{ position: 'relative' }}>
                                            <img
                                                src={blog.gorsel}
                                                alt={blog.baslik}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                fontSize: '1.5rem',
                                                background: 'rgba(0,0,0,0.6)',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '50%',
                                                backdropFilter: 'blur(4px)'
                                            }}>
                                                {blog.ikon}
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <span className="blog-category">{blog.kategori}</span>
                                            <h3 className="blog-title">{blog.baslik}</h3>
                                            <p className="blog-excerpt">{blog.ozet}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                                {(index + 1) % 6 === 0 && (
                                    <motion.div
                                        key={`ad-${index}`}
                                        style={{ gridColumn: '1 / -1' }}
                                        variants={itemVariants}
                                    >
                                        <AdSlot slot={`blog-liste-${index}`} height="90px" />
                                    </motion.div>
                                )}
                            </>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
