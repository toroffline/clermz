import { Link } from "preact-router";

const Landing = (_props: any) => {
    return <>
        <section className="introduce">
            <div className="lead-introduce">
                <h1>สวัสดีคับ, I'm Nui</h1>
                <span className="full-name">(Narkkarux Tripiyaratana)</span>
            </div>
            <h2 className="job-title">Software Engineer</h2>
            <p>A bad boy who in love with Calisthenics, Vegie food, some cooking and some coding.</p>
            <p>There's not much yet. Let's go see what's interesting in the <Link href="/blog">blog.</Link></p>
        </section>
    </>;
};

export default Landing;