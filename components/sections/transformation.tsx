"use client";

import Image from "next/image";
import { CompareSlider } from "@/components/ui/compare-slider";
import { Reveal } from "@/components/ui/reveal";

export function TransformationSection() {
  return (
    <section id="transformation" className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 pt-12 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              04
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              The Transformation
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Before & After
            </h2>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              Before any ads were live (Week 1, organic only) versus after ads launched.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <CompareSlider
              className="aspect-[9/8] w-full rounded-xl"
              defaultPosition={50}
              before={
                <div className="relative h-full w-full bg-muted">
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-destructive/90 px-3 py-1 text-xs font-semibold text-white">
                    Before
                  </div>
                  <div className="flex h-full w-full flex-col overflow-hidden">
                    <div className="relative h-1/2 w-full">
                      <Image
                        src="/screenshots/submissions1.jpg"
                        alt="Before — submissions screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-1/2 w-full">
                      <Image
                        src="/screenshots/after1.jpg"
                        alt="Before — pipeline screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              }
              after={
                <div className="relative h-full w-full bg-primary/5">
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                    After
                  </div>
                  <div className="flex h-full w-full flex-col overflow-hidden">
                    <div className="relative h-1/2 w-full">
                      <Image
                        src="/screenshots/submissions.jpg"
                        alt="After — submissions screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-1/2 w-full">
                      <Image
                        src="/screenshots/after.jpg"
                        alt="After — pipeline screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </Reveal>

        <Reveal cascade className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6">
            <div className="flex items-center gap-3 text-base font-semibold text-foreground sm:text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">1</span>
              Week 1 — Before Ads
            </div>
            <div className="space-y-3 text-base text-foreground">
              <div>
                <p className="text-lg font-semibold">Form Submissions — 3 submissions, organic only</p>
                <p className="text-sm text-muted-foreground">Before - 3 form submissions</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Pipeline — 4 opportunities, $103K total</p>
                <p className="text-sm text-muted-foreground">Before - 4 opportunities</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center gap-3 text-base font-semibold text-primary sm:text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">2</span>
              Week 4+ — After Ads
            </div>
            <div className="space-y-3 text-base text-foreground">
              <div>
                <p className="text-lg font-semibold">Form Submissions — 30+ qualified leads</p>
                <p className="text-sm text-muted-foreground">After - 30+ form submissions</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Pipeline — 30 opportunities, $103K+ in follow-up</p>
                <p className="text-sm text-muted-foreground">After - 30 opportunities</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
