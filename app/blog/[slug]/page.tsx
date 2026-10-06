import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import BlogClose from '@/components/blog/BlogClose';
import { posts } from '@/lib/blog';
import { routes } from '@/lib/routes';
import styles from './page.module.css';
import ArrowIcon from '@/components/site/ArrowIcon';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Use Plastic Responsibly`, description: post.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />

        <article>
          <header id="top" className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.crumbs}>
                <Link href={routes.home}>Home</Link>
                <span aria-hidden="true">/</span>
                <Link href={routes.blog}>Journal</Link>
                <span aria-hidden="true">/</span>
                <span className={styles.crumbHere}>{post.category}</span>
              </div>
              <p className={styles.meta}>
                {post.category} · {post.date} · {post.read}
              </p>
              <h1 className={styles.h1}>{post.title}</h1>
              <p className={styles.lede}>{post.excerpt}</p>
            </div>
          </header>

          <div className={styles.body}>
            <div className={styles.column}>
              {post.image && (
                <figure className={styles.figure} data-reveal="">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={post.image.width}
                    height={post.image.height}
                    sizes="(max-width: 860px) 100vw, 820px"
                    preload
                    className={styles.figureImg}
                  />
                </figure>
              )}

              {post.body.map((block, i) => {
                if ('h' in block) {
                  return (
                    <h2 key={i} className={styles.h2} data-reveal="">
                      {block.h}
                    </h2>
                  );
                }
                if ('ul' in block) {
                  return (
                    <ul key={i} className={styles.list} data-reveal="">
                      {block.ul.map((item) => (
                        <li key={item} className={styles.listItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className={styles.p} data-reveal="">
                    {block.p}
                  </p>
                );
              })}

              <Link href={routes.blog} className={styles.back}>
                <ArrowIcon direction="left" /> Back to the journal
              </Link>
            </div>
          </div>
        </article>

        <BlogClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
