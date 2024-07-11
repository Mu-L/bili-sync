import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Bsyxd66g.js";const g=JSON.parse('{"title":"命令行参数","description":"","frontmatter":{},"headers":[],"relativePath":"args.md","filePath":"args.md","lastUpdated":1720697222000}'),l={name:"args.md"},e=n(`<h1 id="命令行参数" tabindex="-1">命令行参数 <a class="header-anchor" href="#命令行参数" aria-label="Permalink to &quot;命令行参数&quot;">​</a></h1><p>程序支持有限的命令行参数，可以通过执行 <code>bili-sync-rs --help</code> 查看说明。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bili-sync/target/debug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ⇡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">❯</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./bili-sync-rs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">由</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Rust</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Tokio</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 驱动的哔哩哔哩同步工具</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bili-sync-rs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [OPTIONS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -s,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --scan-only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SCAN_ONLY=]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -l,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --log-level</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOG_LEVE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RUST_LOG=]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">None,bili_sync=info]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><p>可以看到除版本和帮助信息外，程序仅支持两个参数，参数除可以通过命令行设置外，还可通过环境变量设置。</p><h2 id="scan-only" tabindex="-1"><code>--scan-only</code> <a class="header-anchor" href="#scan-only" aria-label="Permalink to &quot;\`--scan-only\`&quot;">​</a></h2><p><code>--scan-only</code> 参数用于仅扫描列表，而不实际执行下载操作。该参数的主要目的是<a href="https://github.com/amtoaer/bili-sync/issues/66#issuecomment-2066642481" target="_blank" rel="noreferrer">方便用户从 v1 迁移</a>，新用户不需要关注。</p><h2 id="log-level" tabindex="-1"><code>--log-level</code> <a class="header-anchor" href="#log-level" aria-label="Permalink to &quot;\`--log-level\`&quot;">​</a></h2><p><code>--log-level</code> 参数用于设置日志级别，一般可以维持默认。该参数与 Rust 程序中 <code>RUST_LOG</code> 的语义相同，可以查看<a href="https://docs.rs/env_logger/latest/env_logger/#enabling-logging" target="_blank" rel="noreferrer">相关文档</a>获取详细信息。</p>`,8),t=[e];function h(p,k,r,d,o,F){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
