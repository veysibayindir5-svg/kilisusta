import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AdSlot from '../components/AdSlot';
import bloglarData from '../data/bloglar.json';

export default function BlogYazi() {
    const { slug } = useParams();
    const blog = bloglarData.bloglar.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="container">
                <div className="no-results">
                    <div className="no-results-icon">📝</div>
                    <h3>Yazı Bulunamadı</h3>
                    <p>Aradığınız blog yazısı mevcut değil.</p>
                    <Link to="/blog" className="btn btn-ara" style={{ marginTop: 'var(--space-4)' }}>
                        Bloga Dön
                    </Link>
                </div>
            </div>
        );
    }

    const relatedBlogs = bloglarData.bloglar
        .filter(b => b.kategori === blog.kategori && b.id !== blog.id)
        .slice(0, 3);

    return (
        <>
            <Helmet>
                <title>{blog.baslik} | Kilis Usta Blog</title>
                <meta name="description" content={blog.ozet} />
                <link rel="canonical" href={`https://kilisusta.com.tr/blog/${slug}`} />
            </Helmet>

            <article>
                <div className="page-header">
                    <div className="container">
                        <span style={{ fontSize: '3rem' }}>{blog.ikon}</span>
                        <span className="blog-category" style={{ marginTop: 'var(--space-3)' }}>{blog.kategori}</span>
                        <h1>{blog.baslik}</h1>
                    </div>
                </div>

                <section className="section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="blog-hero-image"
                            style={{
                                margin: '0 auto var(--space-8) auto',
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                maxWidth: '720px',
                                aspectRatio: '16/9',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                position: 'relative'
                            }}
                        >
                            <img
                                src={blog.gorsel}
                                alt={blog.baslik}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="prose"
                        >
                            {blog.icerik.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </motion.div>

                        <div style={{ maxWidth: '720px', margin: 'var(--space-8) auto' }}>
                            <AdSlot slot="blog-ici" height="250px" />
                        </div>

                        {relatedBlogs.length > 0 && (
                            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                                <h3 style={{ marginBottom: 'var(--space-4)' }}>İlgili Yazılar</h3>
                                <div className="grid" style={{ gap: 'var(--space-3)' }}>
                                    {relatedBlogs.map((related) => (
                                        <Link
                                            key={related.id}
                                            to={`/blog/${related.slug}`}
                                            className="card mahalle-card"
                                        >
                                            <div className="mahalle-info">
                                                <div className="mahalle-icon">{related.ikon}</div>
                                                <div>
                                                    <h4 className="mahalle-name">{related.baslik}</h4>
                                                </div>
                                            </div>
                                            <span className="mahalle-arrow">→</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div style={{ maxWidth: '720px', margin: 'var(--space-8) auto', textAlign: 'center' }}>
                            <Link to="/blog" className="btn btn-secondary">
                                ← Tüm Yazılar
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
