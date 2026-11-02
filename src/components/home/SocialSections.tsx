import Image from "next/image";
import { reels, social, videos } from "@/content/home";
import type { SocialVideo } from "@/content/types";
import { revealDelay } from "@/lib/reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InstagramIcon, PlayIcon, ReelIcon, YouTubeIcon } from "@/components/ui/icons";

function PlayBadge({ size }: { size: "sm" | "md" | "lg" }) {
  const box = { sm: "size-12", md: "size-14", lg: "size-21" }[size];
  const icon = { sm: 18, md: 22, lg: 30 }[size];
  return (
    <span aria-hidden="true" className={`glass-light bg-navy/30! absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white ${box}`}>
      <PlayIcon size={icon} />
    </span>
  );
}

/** Instagram reels: thumbnails only, linking out to Instagram. */
export function InstagramReels() {
  return (
    <section aria-labelledby="reels-title" className="py-20">
      <SectionHeader
        id="reels-title"
        layout="split"
        label="On Instagram"
        title="See where our travellers go"
        aside={
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-body text-ink-muted">{social.instagramHandle}</span>
            <ButtonLink href={social.instagramHref} external variant="subtle" arrow={false} leadingIcon={<InstagramIcon />}>
              Follow on Instagram
            </ButtonLink>
          </div>
        }
      />
      <ul className="mx-auto flex max-w-page snap-x gap-4 overflow-x-auto px-4 sm:px-10">
        {reels.map((reel, i) => (
          <li key={reel.thumbnail.src} data-reveal style={revealDelay(i)} className="shrink-0 grow basis-[220px] snap-start">
            <a
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch reel ${i + 1} on Instagram`}
              className="group relative block aspect-[9/16] overflow-hidden bg-fill-subtle text-white"
            >
              <Image src={reel.thumbnail.src} alt="" fill sizes="(min-width: 1024px) 20vw, 60vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <ReelIcon size={22} className="absolute top-4 right-4" />
              <PlayBadge size="md" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function VideoThumb({ video, featured = false }: { video: SocialVideo; featured?: boolean }) {
  return (
    <a href={video.href} target="_blank" rel="noopener noreferrer" className={`group flex flex-col ${featured ? "gap-4" : "gap-3"}`}>
      <span className="relative block aspect-video overflow-hidden bg-fill-subtle">
        <Image
          src={video.thumbnail.src}
          alt=""
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <PlayBadge size={featured ? "lg" : "sm"} />
      </span>
      <span className={featured ? "text-lead font-semibold" : "text-body font-semibold tracking-[-0.015em]"}>{video.title}</span>
    </a>
  );
}

/** YouTube: one featured thumbnail and three smaller ones, linking out to YouTube. */
export function YouTubeVideos() {
  const [featured, ...rest] = videos;
  return (
    <section aria-labelledby="youtube-title" className="border-t border-hairline py-20">
      <SectionHeader
        id="youtube-title"
        layout="split"
        label="On YouTube"
        title="Visa guides and travel stories, explained on video"
        aside={
          <ButtonLink href={social.youtubeHref} external variant="subtle" arrow={false} leadingIcon={<YouTubeIcon size={18} />}>
            Visit our channel
          </ButtonLink>
        }
      />
      <div className="mx-auto flex max-w-page flex-wrap gap-10 px-4 sm:px-10">
        <div data-reveal className="min-w-0 grow-[2] basis-[560px]">
          <VideoThumb video={featured} featured />
        </div>
        <div className="flex min-w-0 grow basis-[320px] flex-col gap-6">
          {rest.map((video, i) => (
            <div key={video.title} data-reveal style={revealDelay(i + 1)}>
              <VideoThumb video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
